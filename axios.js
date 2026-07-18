let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
   let fact = await getfacts();
   console.log(fact);
})



let url = "https://catfact.ninja/fact";

async  function getfacts(){
try{
    let res = await axios.get(url);
    return res.data.fact;
}
catch(e){
    console.log('error - ', e);
    return "no fact found";
}

}