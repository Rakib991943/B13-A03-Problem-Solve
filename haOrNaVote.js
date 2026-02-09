function gonoVote(array) {
    if (!Array.isArray(array)) {
        return "Invalid";

    }
   let countha  = 0 ;
   let countna= 0;
    for(let word of array){
       if(word === "ha"){
        countha++
       }else if(word === 'na'){
         countna ++ ; 
       }
    }
if(countha>countna ){
    return true ;
}
else if(countha === countna){
    return "equal" ;
}
return false ; 
}

         