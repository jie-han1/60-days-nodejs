// 不使用 readline，直接用 process.stdin 流读取用户输入

// 设置编码，让 data 直接返回字符串而非 Buffer
process.stdin.setEncoding('utf-8');

/**
 * 向终端输出问题，等待用户输入一行后返回（不含换行符）
 * @param {string} question - 提示文本
 * @returns {Promise<string>} 用户输入的内容
 */
function ask(question) {
  return new Promise((resolve) => {
    process.stdout.write(question);

    // 缓冲区，用于拼接可能分多次到来的数据
    let buffer = '';

    function onData(chunk) {
      buffer += chunk;
      // 检查是否包含换行符（用户按下了回车）
      const newlineIndex = buffer.indexOf('\n');
      if (newlineIndex !== -1) {
        // 移除 stdin 监听，避免下次 ask 重复触发
        process.stdin.off('data', onData);

        // 提取回车前的内容，去掉尾部 \r（Windows）或 \n
        const line = buffer.slice(0, newlineIndex).replace(/\r$/, '');
        resolve(line);
      }
    }

    process.stdin.on('data', onData);
  });
}

async function main() {
  const name = await ask('请输入姓名：');
  const age = await ask('请输入年龄：');

  console.log(`你好，${name}！你今年 ${age} 岁了。`);

  // 结束输入流
  process.stdin.pause();
}

main();