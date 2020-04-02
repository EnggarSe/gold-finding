function gold(array) {
    var kondisi1 = "Found the gold at position"
    var kondisi2 = "All of these are junks"
    var posisi = "";
    count = 0;
    var status = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "gold") {
            status.push(i);
            status.push(",");
        }
    }
    status.pop();
    
    if(status.length==0){
        kondisi1 = "All of these are junks"
    }
    else{
        for (var j = 0; j < status.length; j++) {
            if (status.length < 2) {
                posisi += status[j];
            }
            else {
                var index = status.length - 2;
                status.splice(index, 1, ' and ')
                posisi += status[j]
            }
        }
    }
    
    kondisi1 += " " + posisi;
    return kondisi1;
}
console.log(gold(["junk", "hay", "corrosive metal", "cows pop","gold","gold"]));
