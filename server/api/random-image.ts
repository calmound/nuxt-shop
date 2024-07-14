import { defineEventHandler } from 'h3';
import { readdir } from 'fs/promises';
import { resolve, join } from 'path';

export default defineEventHandler(async (event) => {
  try {
    console.log(
      '%c [  ]-8',
      'font-size:13px; background:pink; color:#bf2c9f;',
      111
    );
    const imagesDir = resolve('public', 'home'); // 确保路径正确
    console.log(
      '%c [ imagesDir ]-8',
      'font-size:13px; background:pink; color:#bf2c9f;',
      imagesDir
    );
    const files = await readdir(imagesDir);
    const imageFiles = files.filter(
      (file) => file.endsWith('.jpg') || file.endsWith('.png')
    );
    console.log(
      '%c [ imageFiles ]-10',
      'font-size:13px; background:pink; color:#bf2c9f;',
      imageFiles
    );
    if (imageFiles.length === 0) {
      return { error: 'No images found' };
    }
    const randomFile =
      imageFiles[Math.floor(Math.random() * imageFiles.length)];
    const imagePath = `/home/${randomFile}`; // 假设 images 目录位于 static 目录中
    console.log(
      '%c [ imagePath ]-23',
      'font-size:13px; background:pink; color:#bf2c9f;',
      imagePath
    );
    return imagePath;
  } catch (err) {
    return { error: 'Unable to scan directory: ' + err.message };
  }
});
