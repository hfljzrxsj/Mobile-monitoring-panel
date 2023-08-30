import os
import json
import sqlite3
from http.server import BaseHTTPRequestHandler, HTTPServer

json_path = './data/data.json'
db_path = './db/data.db'
LEFT = "left"
RIGHT = "right"
TABLENAME = "qjgz"
port = 1392
id = 1
properties_path = './public/properties.json'
if os.path.exists(properties_path):
    with open(properties_path, 'rb') as file:
        data = json.loads(file.read())
        if id in data:
            id = data[id]
        if LEFT in data:
            LEFT = data[LEFT]
        if RIGHT in data:
            RIGHT = data[RIGHT]
        if TABLENAME in data:
            TABLENAME = data[TABLENAME]
        if json_path in data:
            json_path = data[json_path]
        if db_path in data:
            db_path = data[db_path]
        if port in data:
            port = data[port]


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # print(str(self.headers)+','+str(self.client_address)+','+str(self.command)+','+str(self.request_version)+','+str(self.server)+','+str(self.server_version)+','+str(self.sys_version)+',')
        path = self.path
        print(path)
        if path != '/api/query':
            self.send_response(403)
            return
        # self.send_header('Content-type', 'application/json')
        if os.path.exists(json_path):
            with open(json_path, 'rb') as file:
                data = file.read()
            self.send_response(200)
            self.send_header('Access-Control-Allow-Origin', '*')  # 允许所有跨域请求
            self.end_headers()
            self.wfile.write(data)
        elif os.path.exists(db_path):
            conn = sqlite3.connect(db_path)
            try:
                c = conn.cursor()
                c.execute(f"SELECT * FROM {TABLENAME} WHERE id=?", (id,))
                row = c.fetchone()
                if row is None:
                    self.send_response(403)
                    return
            # except sqlite3.OperationalError:
            except:
                self.send_response(403)
                return
            finally:
                conn.close()
            self.send_response(200)
            self.send_header('Access-Control-Allow-Origin', '*')  # 允许所有跨域请求
            self.end_headers()
            self.wfile.write(bytes(json.dumps({LEFT: row[1], RIGHT: row[2]}), 'utf-8'))
        else:
            self.send_response(403)
            self.send_header('Access-Control-Allow-Origin', '*')  # 允许所有跨域请求
            self.end_headers()
            return
        # self.wfile.write(data)

    def do_POST(self):
        path = self.path
        print(path)
        if path != '/api/modify' or not os.path.exists(db_path):
            self.send_response(403)
            return
        conn = sqlite3.connect(db_path)
        content_length = int(self.headers.get('Content-Length', 0))
        payload = self.rfile.read(content_length)
        try:
            c = conn.cursor()
            data = json.loads(payload)
            if LEFT not in data or RIGHT not in data:
                raise ValueError
            c.execute(f"UPDATE {TABLENAME} SET {LEFT}=?, {RIGHT}=? WHERE id=?", (data[LEFT], data[RIGHT], 1))
            conn.commit()
        # except (json.JSONDecodeError, ValueError):
        except:
            self.send_response(403)
            return
        finally:
            conn.close()
        with open(json_path, 'wb') as file:
            file.write(payload)
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')  # 允许所有跨域请求
        # self.send_header('Content-type', 'application/json')
        self.end_headers()
        # response = {'status': 'ok'}
        # self.wfile.write(json.dumps(response).encode('utf-8'))
        # self.wfile.write(bytes(str(response),'utf-8'))

    def do_OPTIONS(self):
        self.send_response(200)
        # self.send_header('Content-type', 'text/plain')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Access-Control-Max-Age', '86400')  # 预检请求的有效期
        self.end_headers()


server_address = ('0.0.0.0', port)
print('server start')
HTTPServer(server_address, Handler).serve_forever()