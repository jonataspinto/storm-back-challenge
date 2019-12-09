const CompareBracket = async (brackets)=>{
    possibles = ['{}','()','[]']
    decres=[]
    cres =[]
    no = 0   

    for(let i = brackets.length-1; i>(brackets.length / 2 )-1 ; i--){
        decres.push(brackets[i])        
    }   

    for(let i = 0; i<=(brackets.length / 2 )-1 ; i++){
        cres.push(brackets[i] + decres[i])        
    }  

    possibles.forEach((element) => {
        cres.filter((bracket, index)=>{
            if(element === bracket){
                no = no - 1
            }else{
                no = no + 1
            }
        })        
    });    
    await ((((no -1)=== brackets.length || brackets.length % 2 === 1) && console.log('NAO')) || 
    (no < brackets.length && console.log('SIM')))
    
}
module.exports = CompareBracket