const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function ask(question) {
  return new Promise((res) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function main(params) {
  const name = await ask('请输入你的名字：')
  const age =await ask('请输入你的年龄：')

}