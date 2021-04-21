 function superbowlWin(record){ 
    const newArray = record.find(function (element){
            return element["result"] === "W"});
     if (!!newArray){
        return newArray["year"];
     } else {
        return undefined;
       }
}

