


const hasMutation=(arr)=>{
    let mutation=false;
    let mutations=0;
    let same = 0;
    //#region cross 

        

        var RowLength = arr.length;
        var ColumnLength = arr[0].length;

        
        var diagonal = [[],[]];
        for (var i = 0; i < Math.min(RowLength, ColumnLength); i++) {
            diagonal[0].push({ 'row': 0 - i, 'col': i });
            diagonal[1].push({ 'row': 0 - i, 'col': 0 - i });
        }

        
        var points = [[], []];
        for (var y = 0; y < RowLength; y++) {
            points[0].push({ 'row': y, 'col': 0 });
        }
        for (var x = 1; x < ColumnLength; x++) {
            points[0].push({ 'row': RowLength - 1, 'col': x });
        }

        for (var x = 0; x < ColumnLength; x++) {
            points[1].push({ 'row': RowLength - 1, 'col': x });
        }
        for (var y = RowLength - 2; y >= 0; y--) {
            points[1].push({ 'row': y, 'col': ColumnLength - 1 });
        }

        var strings = [[], []];
        for (var line = 0; line < diagonal.length; line++) {
            for (var point = 0; point < points[line].length; point++) {
                var inside = true;
                var index = 0;
                var string = '';
                while (inside && index < diagonal[line].length) {
                    var row = points[line][point]['row'] + diagonal[line][index]['row'];
                    var col = points[line][point]['col'] + diagonal[line][index]['col'];
                    if (row >= 0 && row < RowLength && col >= 0 && col < ColumnLength) {
                        string += arr[row][col];
                        index++;
                    } else {
                        inside = false;
                    }
                }
               // strings[line].push(string);
                let letter = '';
               let hits = 0;
                for (var i = 0; i < string.length; i++) {
                    let currentLetter = string[i];
                    if (i == 0) {
                        letter = currentLetter;
                        hits = 1;
                    }
                    else {
                        if (letter == currentLetter) {
                            hits++
                            if (hits == 4 ) {
                                mutations++
                                console.log(`Mutations:${mutations}`)
                                if (mutations == 1) {
                                    console.log('mutacion en cross');
                                    mutation=true;
                                    return mutation;
                                }
                            }
                        }
                        else {
                            letter = currentLetter;
                            hits = 1;
                        }
                    }


                }
            }
        }

        
//#endregion cross
   
    //#region findRight

    // var RowLength = arr.length;
    // var ColumnLength = arr[0].length;

   // let x = arr[0].length;
       // let y = arr.length;

        
        for (let i = 0; i < arr.length; i++) {
            const row = arr[i];
            let letter = '';
            for (let c = 0; c < ColumnLength; c++) {
                let value = row[c]
                if (c == 0) letter = row[c];
                else {
                    if (value == letter) {
                        same++
                    } else { same = 0 }
                }
                if (same == 3) {
                    console.log('righ', value);
                    mutation=true;
                    return mutation;
                }




            }
            // console.log(row);
            // console.log(i);




        }
        

    //#endregion
   
    //#region findDown
   
    x = arr[0].length;
    y = arr.length;
    let start = 0;
    let maximum = x * y;
     same = 0;
     row = 0;

    let letter = '';
    let hits = 0;
    
    for (let col = 0; col < y; ) {

        
        if (col == 0 && row == 0) { letter = arr[row][col]; hits = 1; } else {
            if (letter == arr[row][col]) {
                hits++
                if (hits == 4 || hits == 8) {
                    mutations++
                    console.log(`Mutations:${mutations}`)
                    if (mutations == 1) {
                        mutation=true
                        return mutation
                    }
                }
            } else {
                letter = arr[row][col];
                hits = 1;
            }

        }
        const currentRow = arr[row][col];
      

        row++
        
        if (row==y) {
            row = 0;
            col++
        }

        start++
        if (start > maximum) {
      
            return mutation
        }
       
    }
    
    //#endregion
   
    return mutation;
}

module.exports = {
    hasMutation

}