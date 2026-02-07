// Problem 1 


function newPrice(currentPrice , discount ) {
       if(typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount>100 ){
        return "Invalid"
       }else{
        const disCount = currentPrice * discount / 100 ;
        const discountPrice = currentPrice - disCount ;
        const result =  discountPrice.toFixed(3);
        return result ; 
    }
}


// Problem 2 


function validOtp(otp) {
    if(typeof otp !== 'string'){
        return "Invalid"
    }  
   const length = otp.length ;
  if(length===8 && otp.startsWith("ph-") ){
    return true ;
  }else{
    return false 
  }
}

// Problem 3 


function finalScore(omr) {
    if (
        typeof omr !== "object" ||
        omr === null ||
        typeof omr.right !== "number" ||
        typeof omr.wrong !== "number" ||
        typeof omr.skip !== "number"
    ) {
        return "Invalid";
    }
    if (omr.right + omr.wrong + omr.skip !== 100) {
        return "Invalid"
    }

    const score = (omr.right * 1) - (omr.wrong * 0.5);
    const roundedScore = Math.round(score);



    return roundedScore;
}

const bcsNumber = ["Raj"];

const result = finalScore(bcsNumber)
console.log(result);


// Problem 4 


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


//  Problem 5 



