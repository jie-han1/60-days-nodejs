// 先注册 exit 事件监听器，再调用 process.exit
process.on('exit', (code) => {
  console.log('code',code)
})
let arr = process.argv.slice(2)
let type = arr[0]
let num1 =parseFloat(arr[1])
let num2 =parseFloat(arr[2])
console.log("🚀 ~ num2:===>", num2);
console.log("🚀 ~ num1:===>", num1);
console.log("🚀 ~ type:===>", type);
let validOperator = ['add','subtract','multiply','divide']
if((!type&&!validOperator.includes(type))||(!num1&&num1 !==0)||!num2){
  process.exit(1)
}
if(type==='add'){
  console.log(num1+num2)
}
if(type==='subtract'){
  console.log(num1 - num2)

}
if(type==='multiply'){
  console.log(num1*num2)
}
if(type ==='divide'){
  console.log(num1/num2)
}


process.exit(0)