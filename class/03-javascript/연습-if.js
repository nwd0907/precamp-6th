if(1 + 1 === 2){
    console.log("정답입니다!!")
}
// VM425:2 정답입니다!!
// undefined
if(1 + 1 === 2){
    console.log("정답입니다!!")
} else {
    console.log("틀렸습니다!!")
}
// VM554:2 정답입니다!!
// undefined
if(1 + 1 === 3){
    console.log("정답입니다!!")
} else {
    console.log("틀렸습니다!!")
}
// VM591:4 틀렸습니다!!
// undefined
let age = 13
// undefined
age
// 13
if(age >= 20){
    console.log("성인입니다.")
} else if(age >= 8){
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}
// VM1205:4 학생입니다.
// undefined
age = 6
// 6
if(age >= 20){
    console.log("성인입니다.")
} else if(age >= 8){
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}
// VM1331:6 어린이입니다.
// undefined
const profile = {
    name: "철수",
    age: 17,
    school: "다람쥐고등학교"
}
// undefined
profile.name
// "철수"
profile.age
// 17