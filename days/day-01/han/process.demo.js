// console.log('Home',process.env.HOME);
// console.log("PATH",process.env.PATH)
// argv[0] = node 路径
// argv[1] = 脚本路径（REPL 中无此项）
// argv[2+] = 自定义参数
// 第二个之后才是自定义参数
// console.log('argv',process.argv)

// 标准I/O
process.stdout.write('请输入你的名字: ');
process.stdin.once('data', (data) => {
  console.log(`你好, ${data.toString().trim()}!`)
  process.exit(1) // 退出程序，0 表示正常退出
})

process.on('exit', (code) => {
  console.log(code);
})