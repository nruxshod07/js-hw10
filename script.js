let me = {
    name: "Rukhshod",
    age: 16,
    height: 1.72,
    isMarried: false

}

let friend = {
    name: "Alex",
    age: 15,
    height: 1.69,
    isMarried: false
}
let all = (me, friend)
let frKeys = Object.keys(friend)
let frValues = Object.values(friend)
let meKeys = Object.keys(me)
let meValues = Object.values(me)
let meArr = meKeys.concat(meValues) 
let frArr = frKeys.concat(frValues)
let arr = meArr.concat(frArr)
console.log(arr);
let types = {
    num: arr.filter((numItem) => typeof (numItem) === "number"),
    bool: arr.filter((strItem) => typeof (strItem) === "string"),
    str: arr.filter((boolItem) => typeof (boolItem) === "boolean")
}
console.log(types);