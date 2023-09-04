/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable padded-blocks */
/* eslint-disable max-statements */
/* eslint-disable one-var */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable no-magic-numbers */
interface IndexedDBProps {
  readonly DBname: string;
  readonly storeName: string;
}
interface IndexedDBCreateProps extends IndexedDBProps {
  readonly keyPath?: string;
  readonly data: string;
  readonly IDBValidKey?: IDBValidKey;
}
interface IndexedDBGetProps extends IndexedDBProps {
  readonly key: string;
}
const sinpleCreate = ({ DBname,
  storeName,
  keyPath,
  IDBValidKey,
  data }: IndexedDBCreateProps): void => {
  const request = indexedDB.open(DBname);
  request.onsuccess = (): void => {
    const { result } = request;
    const transaction = result.transaction(storeName, 'readwrite', { 'durability': 'strict' });
    const doStoreNames = (storeName: string): void => {
      const objectStore = transaction.objectStore(storeName);
      objectStore.add(
        data,
        objectStore.keyPath
          ? undefined
          : IDBValidKey);
    };
    doStoreNames(storeName);
    transaction.oncomplete = (): void => {
      result.close();
    };
  };
  request.onupgradeneeded = (): void => {
    const { result } = request;
    if (result.objectStoreNames.contains(storeName)) {
      return;
    }
    result.createObjectStore(storeName, {
      'autoIncrement': true,
      ...Boolean(keyPath) && {
        keyPath
      }
    }
    );
  };
};

const sinpleGet = async ({ DBname, storeName, key }: IndexedDBGetProps): Promise<string> => new Promise((resolve, reject) => {
  const request = indexedDB.open(DBname);

  request.onsuccess = (): void => {
    const { result } = request;
    const transaction = result.transaction(storeName, 'readonly');
    const objectStore = transaction.objectStore(storeName);
    const getRequest = objectStore.get(key);

    getRequest.onsuccess = (): void => {
      resolve(getRequest.result);
    };

    getRequest.onerror = (): void => {
      reject(new Error('Failed to get data from indexedDB.'));
    };
  };

  request.onerror = (): void => {
    reject(new Error('Failed to open database.'));
  };
});

export { sinpleCreate, sinpleGet };
