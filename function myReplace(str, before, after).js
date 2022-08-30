function myReplace(str, before, after) {
    let index = str.indexOf(before);
    
    let y = str[index].toUpperCase();
    let x = str[index].toLowerCase();
    
    let z1 = after.charAt(0).toUpperCase()+after.slice([1]);
    let z2 = after.charAt(0).toLowerCase()+after.slice([1]);
    
    if (str[index] === y){
      return str.replace(str.match(before), z1);
    } else if(str[index] === x){
      return str.replace(str.match(before), z2);
    } else 
    {
      return str.replace(str.match(before), after);
    }
    };
    
    let w = myReplace("I think we should look up there", "up", "Down");
    console.log(w);