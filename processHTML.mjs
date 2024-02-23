//@ts-check
import { readFile, writeFile } from 'fs';
const name = 'dist/index.html';
// 读取data.txt文件内容  
readFile(name, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // 使用正则表达式将所有数字替换为空格  
  const result = data.replaceAll(/<script (async )?/g, '<script defer ').replaceAll(' async', ' defer');
  // 将替换后的内容写回到data.txt文件中  
  writeFile(name, result, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File has been updated with all numbers replaced by spaces.');
  });
});