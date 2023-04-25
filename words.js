words=['muthu','muthu','raman','ponni','maruthu','ram','raman']
values={}
value=words.map(e=>{
    if(e in values){
        values[e]=values[e]+1
    }
    else{
        values[e]=1
    }
})
console.log(values)