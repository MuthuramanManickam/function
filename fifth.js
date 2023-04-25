a=[
    {id:1,name:'muthuraman',category:'bca'},
    {id:2,name:'maruthu',category:'it'},
    {id:4,name:'sarvana',category:'it'},
    {id:6,name:'madhavan',category:'bio'},
    {id:8,name:'thangam',category:'bca'},
    {id:3,name:'Aarthi',category:'bca'}
]
b={}

a.map(e=>{
    category=e.category
    if (b[category]) {
        b[category].push(e)
        console.log(c)
    } else {
        b[category]=[e]
    }
})
console.log(b)