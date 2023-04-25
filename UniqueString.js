a=['m','u','t','h','u','r','a','m','a','n']

b=[]

a.map(e=>{
    if (!(b.includes(e))) {
        b.push(e)
    }
})
console.log(b)