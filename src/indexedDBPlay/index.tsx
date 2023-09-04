/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable padded-blocks */
/* eslint-disable max-statements */
/* eslint-disable one-var */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable no-magic-numbers */
import * as React from 'react';
import { Button } from '@mui/material';
import { type ReactElement } from 'react';
import { sinpleCreate, sinpleGet } from './utils';
interface IndexedDBDelProps {
  readonly DBnames?: string[] | string;
  readonly storeNames?: string[] | string;
}
interface IndexedDBProps {
  readonly DBname: string;
  readonly storeNames: string[] | string;
  readonly DBversion?: number;
  readonly keyPath?: IDBObjectStoreParameters['keyPath'];
  readonly datas?: unknown;
  readonly IDBValidKey?: IDBValidKey;
  readonly allKeyPathGiven?: boolean;
  readonly mustCreateNewDB?: boolean;
  readonly mustCreateNewTable?: boolean;
}
export default function IndexedDBtest (): ReactElement {
  const { isArray } = Array;
  const { stringify } = JSON;
  const someToSet = <T,> (value: T): string[] | T => isArray(value)
    ? Array.from(new Set(value))
    : value;
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  const create = ({ DBname,
    DBversion,
    storeNames,
    keyPath,
    IDBValidKey,
    // = new Date().getTime(),
    // = { [keyPath ?? new Date().getTime()]: IDBValidKey }
    datas,
    allKeyPathGiven = false,
    mustCreateNewDB = false,
    mustCreateNewTable = false }: IndexedDBProps): void => {
    if (mustCreateNewDB) {
      // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
      indexedDB.databases().then((databases) => {
        // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
        databases.forEach((database) => {
          if (database.name === DBname) {
            throw new Error(`The database ${DBname} already exists!`);
          }
        });
      }).catch(() => {
        throw new Error();
      });
    }
    const storeNamesSet = someToSet(storeNames);
    const isArrayStoreNames = isArray(storeNamesSet);
    const keyPathSet = someToSet(keyPath);
    const flatKeyPathSet = isArray(keyPathSet) && keyPathSet.length === 1
      ? keyPathSet.toString()
      : keyPathSet;
    const isArrayFlatKeyPath = isArray(flatKeyPathSet);
    const request = indexedDB.open(DBname, DBversion);
    request.onsuccess = (): void => {
      const { result } = request;
      const { objectStoreNames } = result;
      if (mustCreateNewTable && (isArrayStoreNames
        ? storeNamesSet.some((storeName) => objectStoreNames.contains(storeName))
        : objectStoreNames.contains(storeNamesSet))) {
        throw new Error(`The table ${String(storeNamesSet)} already exists!`);
      }
      if (!(isArrayStoreNames
        ? storeNamesSet.every((storeName) => objectStoreNames.contains(storeName))
        : objectStoreNames.contains(storeNamesSet))) {
        throw new Error(`Some table(s) of ${String(storeNamesSet)} does not exist in the database. The allowed tables are ${String(objectStoreNames)}`);
      }
      const transaction = result.transaction(storeNamesSet, 'readwrite', { 'durability': 'strict' });

      const doStoreNames = (storeName: string): void => {
        const objectStore = transaction.objectStore(storeName);
        const { 'keyPath': objectStoreKeyPath } = objectStore;
        const isArrayObjectStoreKeyPath = isArray(objectStoreKeyPath);
        const objectStoreKey = isArrayObjectStoreKeyPath && objectStoreKeyPath.map((item) => ({ [item]: IDBValidKey ?? new Date().getTime() })).reduce((acc, obj) => ({
          ...acc,
          ...obj
        }), {});
        const addData = (data: unknown): void => {
          const isDataObject = data instanceof Object && Object.prototype.toString.call(data) === '[object Object]' && data.constructor === Object && typeof data === 'object';
          const addRequest = objectStore.add(
            // eslint-disable-next-line no-nested-ternary
            isArrayObjectStoreKeyPath
              ? isDataObject
                ? {
                  ...objectStoreKey,
                  ...data
                }
                : {
                  ...objectStoreKey,
                  data
                }
              : isDataObject && Boolean(IDBValidKey)
                ? {
                  ...{ [objectStoreKeyPath]: IDBValidKey },
                  ...data
                }
                : data
            ,
            objectStoreKeyPath
              ? undefined
              : IDBValidKey);
          // eslint-disable-next-line func-name-matching
          // addRequest.onsuccess = function addRequestOnsuccess (): void {
          //   console.log('数据插入成功！');
          // };
          addRequest.onerror = (): void => {
            throw new Error(`数据插入失败${addRequest.error}`);
          };
        };
        if (flatKeyPathSet && flatKeyPathSet.length > 0) {
          const commonText = 'KeyPath cannot be specified anymore, ';
          if (!objectStoreKeyPath) {
            throw new Error(`${commonText}IDBValidKey or autoIncrement number is the true key`);
          }
          if (isArrayFlatKeyPath && isArrayObjectStoreKeyPath && !stringify(flatKeyPathSet).includes(stringify(objectStoreKeyPath))) {
            throw new Error(`${commonText}the true key is ${objectStoreKeyPath.toString()}`);
          }
        }
        if (isArray(datas)) {
          datas.forEach((data) => {
            addData(data);
          });
          return;
        }
        addData(datas);
      };
      if (isArrayStoreNames) {
        storeNamesSet.forEach((storeName) => {
          doStoreNames(storeName);
        });
        return;
      }
      doStoreNames(storeNamesSet);
      // isArray(storeNames)
      //   ? storeNames.forEach((storeName) => {
      //     doStoreNames(storeName);
      //   })
      //   : doStoreNames(storeNames);
      transaction.oncomplete = (): void => {
        result.close();
      };
    };
    request.onerror = (): void => {
      throw new Error(`数据库打开失败${request.error}`);
    };
    // 处理需要升级数据库版本的情况
    request.onupgradeneeded = (): void => {
      const { result } = request;
      const isContain = (storeName: string): boolean => result.objectStoreNames.contains(storeName);
      const createObjectStore = (storeName: string, index?: number): void => {
        if (isContain(storeName)) {
          return;
        }
        const arrayButHasOneKeyPath = !allKeyPathGiven && isArrayFlatKeyPath && isArrayStoreNames && flatKeyPathSet.length === storeNamesSet.length;
        result.createObjectStore(storeName
          , {
            'autoIncrement': !isArrayFlatKeyPath || arrayButHasOneKeyPath,
            ...Boolean(flatKeyPathSet) && {
              // keyPath
              'keyPath': arrayButHasOneKeyPath && index !== undefined
                ? flatKeyPathSet[index] ?? flatKeyPathSet
                : flatKeyPathSet
            }
          }
        );
      };
      if (isArrayStoreNames) {
        storeNamesSet.forEach((storeName, index) => {
          createObjectStore(storeName, index);
        });
        return;
      }
      if (isContain(storeNamesSet)) {
        return;
      }
      // const objectStore =
      createObjectStore(storeNamesSet);
      // 创建索引（可选）
      // objectStore.createIndex(keyPath ?? String(IDBValidKey), keyPath ?? String(IDBValidKey), {
      //   'multiEntry': true,
      //   'unique': true
      // });
    };
  };
  const get = (): void => { };
  const delAllDB = async (): Promise<void> => {
    // await Promise.all(
    (await indexedDB.databases()).forEach((database) => {
      if (database.name) {
        indexedDB.deleteDatabase(database.name);
      }
      console.log('数据库删除成功:', database.name);
    });
    // );
    console.log('所有数据库删除成功！');
  };
  const delNamedDBNamedStoreNames = (DBname: string[] | string): void => {
    if (isArray(DBname)) {
      DBname.forEach((name) => {
        indexedDB.deleteDatabase(name);
      });
      return;
    }
    indexedDB.deleteDatabase(DBname);
  };
  const del = ({ DBnames, storeNames }: IndexedDBDelProps): void => {
    const delNamedDBNamedStoreNames = ({ DBname, storeNames }: { DBname: string; storeNames: string[] | string; }) => {
      const request = indexedDB.open(DBname);
      request.onsuccess = (): void => {
        const { result } = request;
        if (isArray(storeNames)) {
          storeNames.forEach((storeName) => {
            result.deleteObjectStore(storeName);
          });
        }
      };
    };
    if (DBnames) {
      if (storeNames) {
        if (isArray(DBnames)) {
          DBnames.forEach((DBname) => {
            delNamedDBNamedStoreNames({
              DBname,
              storeNames
            });
          });
          return;
        }
        delNamedDBNamedStoreNames({
          'DBname': DBnames,
          storeNames
        });
        return;
      }
      if (isArray(DBnames)) {
        DBnames.forEach((DBname) => {
          indexedDB.deleteDatabase(DBname);
        });
        return;
      }
      indexedDB.deleteDatabase(DBnames);
      return;
    }
    if (storeNames) {
      indexedDB.databases().then((databases) => {
        databases.forEach((database) => {
          const DBname = database.name;
          if (!DBname) {
            return;
          }
          delNamedDBNamedStoreNames({
            DBname,
            storeNames
          });
        });
      }).catch(() => {
        throw new Error();
      });
    }
    indexedDB.databases().then((databases) => {
      databases.forEach((database) => {
        if (!database.name) {
          return;
        }
        indexedDB.deleteDatabase(database.name);
        console.log('数据库删除成功:', database.name);
      });
    }).catch(() => {
      throw new Error();
    });
  };
  return (
    <React.StrictMode>
      <Button
        onClick={(): void => {
          sinpleCreate({
            'DBname': 'dXNlclBlcm1pc3Npb25z',
            'storeName': 'dXNlclBlcm1pc3Npb25z',
            'IDBValidKey': 'dXNlclBlcm1pc3Npb25z',
            'data': 'dXNlclBlcm1pc3Npb25z'
          });
          // create({
          //   'DBname': 'aa',
          //   'keyPath': [
          //     'id1',
          //     'id5',
          //     'id3'
          //   ],
          //   // 'IDBValidKey': new Date().getTime() * 3,
          //   'storeNames': [
          //     'bb',
          //     'bba'
          //   ],
          //   //   [
          //   //   'cc',
          //   //   'be'
          //   //   // 'dd'
          //   // ],
          //   'datas': 'aa'
          //   // 'DBversion': 1,
          // });
        }}
        variant="contained"
      >
        Create
      </Button>

      <Button
        onClick={(): void => {
          let dXNlclBlcm1pc3Npb25z = '';

          const fetchDataFromIndexedDB = async () => {
            try {
              const data = await sinpleGet({
                'DBname': 'dXNlclBlcm1pc3Npb25z',
                'storeName': 'dXNlclBlcm1pc3Npb25z',
                'key': 'dXNlclBlcm1pc3Npb25z'
              });
              dXNlclBlcm1pc3Npb25z = data;
              console.log(data);
              console.log(dXNlclBlcm1pc3Npb25z);
            } catch (error) {
              throw new Error('Failed to get data from indexedDB.');
            }
          };

          fetchDataFromIndexedDB();
        }}
        variant="contained"
      >
        Get
      </Button>

      <Button
        onClick={(): void => {
          delAllDB();
          // .catch(() => {
          //   throw new Error();
          // }
          // );
        }}
        variant="contained"
      >
        Delete
      </Button>
    </React.StrictMode>
  );
}
