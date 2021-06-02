let a = 100;
console.log(a)
const b = 200; //const는 변경이 안됨
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
let c = "문자"
console.log(a+c)//숫자+문자도 문자로 인식하네?

let arr = [1,2,3,4,5,true,"문자형",{
    "key":"value",
    "list":[1,2,3,4]
}]
console.log(arr)
arr.push(6)//arr 값 추가
console.log(arr)
console.log(arr[4])

let dic = {
    "key":"value"
}
console.log(dic)
dic.key2 = "value2";//dic 값 추가
console.log(dic)
console.log(dic.key2)

let n=3
if(n > 5){
    console.log(1)
}else if(n > 3){
    console.log(2)
}else{
    console.log(3)
}
console.log("---------")
for(let i=0; i<10; i++){
    console.log(i)
}
function x(num){
    return num;
}

let y = x(200)
console.log(y)

let str = "웹개발자-사관학교"
let str_arr = str.split("-");
console.log(str_arr)
let str_str = str_arr.join("*")
console.log(str_str)
// mdr에서 자세한건 확인해봅시다^^