function wordFrequency(str){
    const words = str.split(" ")
    let wordCounts = {}
    for(let word of words ){
    const lowerWord = word.toLowerCase();
   if(wordCounts.hasOwnProperty(lowerWord)){
     wordCounts[lowerWord] ++;
   }
   else{
    wordCounts[lowerWord] = 1 ;
   }
    
}
return wordCounts ;
};

const result = wordFrequency("I love js And I love Coding and js is fun");
console.log(result);