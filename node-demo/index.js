import fs from "node:fs/promises";
import path from "node:path";

let dayName = "day-03";

// 当前目录
let currentDirectoryPath = import.meta.dirname;
// demo 目录
let demoPath = path.join(currentDirectoryPath, "demo", "index.js");
// 项目根目录
let rootPath = path.resolve(currentDirectoryPath, "..");
// 目标目录
let targetPath = path.resolve(rootPath, "days", dayName);
// 创建demo文件夹
await fs.mkdir(path.join(targetPath, "han"), {
  recursive: true,
});
// 写入文件
let content = await fs.readFile(demoPath, "utf-8");
await fs.writeFile(path.join(targetPath, "han", "index.js"), content);
