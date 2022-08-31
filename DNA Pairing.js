function pairElement(str) {
    let x = str.split('');
   //console.log(x);
   let arr = {
     A:'T',
     T:'A',
     C:'G',
     G:'C'
   }
   //console.log(arr);
   return x.map(itm => [itm, arr[itm]])
   };
   
   let w=pairElement("ATCGA");
   console.log(w); 