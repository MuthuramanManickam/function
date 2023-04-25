a = [
    {name:'muthu',dob:2002},
    {name:'ponni',dob:2000},
    {name:'maruthu',dob:2000},
    {name:'arav',dob:2002}
]
b={}

a.map(e=>{
    dob=e.dob
    
    if (b[dob]) {
        b[dob].push(e)
    } else {
        b[dob]=[e]
    }
})
console.log(b)