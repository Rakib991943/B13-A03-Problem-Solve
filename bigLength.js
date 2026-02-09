function  analyzeText(str) {
    if (typeof str !== "string" || str.trim() === "") {
        return "Invalid";
    }

      const words = str.split(" ");
     let longestWords =words[0]; 
      for(let word of words){
        if(  word.length > longestWords.length ){
            longestWords=word ; 
        }
      }   
      const token = str.split(" ").join("").length;
      return {
        longwords: longestWords,
        token: token
    };
};



