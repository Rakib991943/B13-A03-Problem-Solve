
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

