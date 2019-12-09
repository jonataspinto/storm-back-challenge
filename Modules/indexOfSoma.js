const indexOfSoma = (nums, alvo)=>{
    let i = []
    nums.forEach((element, indexA) => {
        nums.forEach((b, indexB)=>{
            if(b + element === alvo){
                i.push(indexA)
            }
        })    
    });
    console.log(i.length === 2 && i);
}
module.exports = indexOfSoma
