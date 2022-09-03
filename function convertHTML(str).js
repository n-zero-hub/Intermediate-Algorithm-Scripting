function convertHTML(str) {
    let arr = str.split('');
    
    let char = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '\"': '&quot;',
      "\'": '&apos;' 
    };
    let x = arr.map(itm =>{
      for (let i in char){
        if (itm === i){
          return char[i];
        }
        }    
      return itm;
    });
    return x.join('');
  }
  
  let w = convertHTML('Stuff in "quotation marks"');
    console.log(w);
  