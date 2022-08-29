function spinalCase(str) {
    let x = str.split(/\s|_|-|(?=[A-Z])/g);
    let converted = x.join('-').toLowerCase();
    return converted
    }
    
    spinalCase("AllThe-small Things");
    console.log(spinalCase("thisIs-SpinalTap"))