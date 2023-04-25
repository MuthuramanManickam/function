str = "saravanaaaaa"
spl=str.split('')
console.log(spl)
obj ={}

spl.map(e=>{
    if (!(e in obj)) {
        obj[e] = 1;
    } else {
        obj[e] += 1 
    }
})

console.log(obj);

