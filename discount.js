
function newPrice(currentPrice , discount ) {
       if(typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount>100 ){
        return "Invalid"
       }else{
        const disCount = currentPrice * discount / 100 ;
        const discountPrice = currentPrice - disCount ;
       const result = parseFloat(discountPrice.toFixed(3));
        return result ; 
    }
}


const rsult = newPrice(1500,20);
console.log(rsult);

