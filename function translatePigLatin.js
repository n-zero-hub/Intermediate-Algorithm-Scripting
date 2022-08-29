function translatePigLatin(str) {
  
    const x = /^[^aeiou]+/;
    if (str.match(x) !== null){
      return str.replace(x, '').concat(str.match(x)+'ay');
    } else {
      return str.concat('way');
    }
      
    
    }
    
    
    translatePigLatin("glove");
    console.log(translatePigLatin("glove"));