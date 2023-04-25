a = [
    {name:'muthuraman',age:20},
    {name:'ponni',age:37},
    {name:'maruthu',age:37},
    {name:'thangam',age:20},
    {name:'venkadesh',age:21},
    {name:'madhavan',age:21}
]
b = {}
a.map(e=>{
    age=e.age
    if (e[age] in b) {
        b[age].push(e)
    } else {
        b[age]=[e]
    }
})
console.log(b)