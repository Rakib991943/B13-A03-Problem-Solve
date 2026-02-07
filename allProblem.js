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

