// 打印欢迎信息，🚀 火箭图标点缀
console.log('🚀 Hello, Node.js!');
// 打印当前 Node.js 的运行版本号，如 v20.0.0
console.log('Node.js version:', process.version);
// 打印操作系统平台，如 darwin（macOS）、win32、linux
console.log('Platform:', process.platform);
// 打印 CPU 架构，如 x64、arm64
console.log('Architecture:', process.arch);
// 打印当前进程的 PID（进程 ID）
console.log('PID:', process.pid);
// 打印当前工作目录的绝对路径
console.log('Current directory:', process.cwd());
// 打印进程内存使用情况（单位：字节），各字段含义：
//   rss          – 常驻内存大小（Resident Set Size），进程在物理内存中占用的空间
//   heapTotal    – V8 引擎分配的堆内存总量
//   heapUsed     – V8 引擎已使用的堆内存量
//   external     – 绑定到 V8 引擎之外的 JS 对象占用内存（如 Buffer 数据）
//   arrayBuffers – 分配给 ArrayBuffer / SharedArrayBuffer 的内存（已包含在 external 中）
console.log('Memory usage:', process.memoryUsage());