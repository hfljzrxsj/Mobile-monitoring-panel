import os
from time import sleep

# 定义一个函数，用于打印输出目录下所有txt文件的内容
import chardet
line_all = 0

def print_txt_content(path,):
    global line_all
    # 获取指定路径下的所有文件和文件夹
    files = os.listdir(path)
    for file in files:
        # 完整路径
        file_path = os.path.join(path, file)
        # 判断是否是文件夹
        if os.path.isdir(file_path):
            # 递归调用自己，处理子目录
            print_txt_content(file_path)
        # 判断是否是txt文件
        elif os.path.isfile(file_path) and( file_path.endswith('.ts') or file_path.endswith('.tsx') or file_path.endswith('.scss')):
            # 打开文件，读取并打印内容
            sleep(0.1)
            fs = open(file_path, 'rb')  # 先用二进制打开
            data = fs.read()  # 读取文件内容
            file_encoding = chardet.detect(data).get('encoding')  # 得到文件的编码格式
            fs.close()  # 关闭文件
            with open(file_path, 'r', encoding=file_encoding) as f:
                # content = f.read()
                # print(content)
                lines = f.readlines()
                # 使用strip()方法去掉每行开头和结尾处的空白字符，再使用filter()方法过滤掉空行
                non_empty_lines = filter(lambda x: x.strip(), lines)
                # 使用len()方法获取非空行数
                line_count = len(list(non_empty_lines))
                line_all+=line_count
                print(file_path[file_path.rindex("\\")+1:]+" 行数："+str(line_count))
# 调用函数并传入要处理的目录路径
path = './src'
print_txt_content(path)
print("总行数："+str(line_all))
