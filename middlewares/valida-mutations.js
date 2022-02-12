const { response } = require("express");
const { validationResult } = require("express-validator");



const verifyLetters=(req,resp=response,next)=>{
    const array = req.body.dna;
    if (array.length==0||array.length<2) {
        return resp.status(400).json({
            ok:false,
            errors:'No es una matriz'
        })
    }
   
    let rowCount=0;
    for (var i = 0; i < array.length; i++) {
        let row = array[i]
        if (i==0) {
            rowCount=row.length;
        }else{ 
            if(rowCount!=row.length){
                return resp.status(400).json({
                    ok:false,
                    errors:'Matriz descuadrada'
                })

             }
        }
        
       
       
            for (var l = 0; l < row.length; l++) {
                if (row[l].toUpperCase() == 'A' || row[l].toUpperCase() == 'T' || row[l].toUpperCase() == 'C' || row[l].toUpperCase() == 'G') {

                } else { 
                    return resp.status(400).json({
                        ok:false,
                        errors:'El ADN no cumple con su formato'
                    })}
                }
        }
        next();
}


module.exports= verifyLetters;
 

// module.exports={
//    // validaMutations,
//    verifyLetters
// }

// function cross() {
//     var arr = [["A", "T", "C", "A"],
//                     ["A", "A", "A", "G"],
//                     ["A", "A", "A", "T"],
//                     ["A", "G", "G", "G"],
//                     ["A", "C", "T", "A"],
//                     ["A", "T", "C", "G"],
//                     ["T", "A", "A", "G"],
//                     ["A", "T", "A", "T"],
//                     ["T", "G", "T", "T"],
//                     ["T", "C", "T", "T"]
//                     ]

//     var RowLength = arr.length;
//     var ColumnLength = arr[0].length;

    
//     var diagonal = [[],[]];
//     for (var i = 0; i < Math.min(RowLength, ColumnLength); i++) {
//         diagonal[0].push({ 'row': 0 - i, 'col': i });
//         diagonal[1].push({ 'row': 0 - i, 'col': 0 - i });
//     }

    
//     var points = [[], []];
//     for (var y = 0; y < RowLength; y++) {
//         points[0].push({ 'row': y, 'col': 0 });
//     }
//     for (var x = 1; x < ColumnLength; x++) {
//         points[0].push({ 'row': RowLength - 1, 'col': x });
//     }

//     for (var x = 0; x < ColumnLength; x++) {
//         points[1].push({ 'row': RowLength - 1, 'col': x });
//     }
//     for (var y = RowLength - 2; y >= 0; y--) {
//         points[1].push({ 'row': y, 'col': ColumnLength - 1 });
//     }

//     var strings = [[], []];
//     for (var line = 0; line < diagonal.length; line++) {
//         for (var point = 0; point < points[line].length; point++) {
//             var inside = true;
//             var index = 0;
//             var string = '';
//             while (inside && index < diagonal[line].length) {
//                 var row = points[line][point]['row'] + diagonal[line][index]['row'];
//                 var col = points[line][point]['col'] + diagonal[line][index]['col'];
//                 if (row >= 0 && row < RowLength && col >= 0 && col < ColumnLength) {
//                     string += arr[row][col];
//                     index++;
//                 } else {
//                     inside = false;
//                 }
//             }
//            // strings[line].push(string);
//             let letter = '';
//            let hits = 0;
//             for (var i = 0; i < string.length; i++) {
//                 let currentLetter = string[i];
//                 if (i == 0) {
//                     letter = currentLetter;
//                     hits = 1;
//                 }
//                 else {
//                     if (letter == currentLetter) {
//                         hits++
//                         if (hits == 4 || hits == 8) {
//                             mutations++
//                             console.log(`Mutations:${mutations}`)
//                             if (mutations == 2) {
//                                 alert('existe una mutacion')
//                                 return
//                             }
//                         }
//                     }
//                     else {
//                         letter = currentLetter;
//                         hits = 1;
//                     }
//                 }


//             }
//         }
//     }

//     console.log(strings);

  
// }


// async  function verifyLetters(array) {
//     for (var i = 0; i < array.length; i++) {
//         let row = array[i]
//         for (var l = 0; l < row.length; l++) {
//             if (row[l].toUpperCase() == 'A' || row[l].toUpperCase() == 'T' || row[l].toUpperCase() == 'C' || row[l].toUpperCase() == 'G') {

//             } else { console.log('no cumple'); Promise.resolve(false); return }
//         }
//     }
//     console.log('si cumple')
//     Promise.resolve(true)

// }


// function findRight() {
//     let x = arr[0].length;
//     let y = arr.length;

//     let same = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const row = arr[i];
//         let letter = '';
//         for (let c = 0; c < x; c++) {
//             let value = row[c]
//             if (c == 0) letter = row[c];
//             else {
//                 if (value == letter) {
//                     same++
//                 } else { same = 0 }
//             }
//             if (same == 3) {
//                 console.log('righ', value);
//                 return true
//             }




//         }
//         // console.log(row);
//         // console.log(i);




//     }
//     return false;

// }

// function findDown() {
//     let x = arr[0].length;
//     let y = arr.length;

//     let start = 0;
//     let maximum = x * y;
//     let same = 0;
//     let row = 0;

//     let letter = '';
//     let hits = 0;
    
//     for (let col = 0; col < y; ) {

//         col;
//         row;
//         if (col == 0 && row == 0) { letter = arr[row][col]; hits = 1; } else {
//             if (letter == arr[row][col]) {
//                 hits++
//                 if (hits == 4 || hits == 8) {
//                     mutations++
//                     console.log(`Mutations:${mutations}`)
//                     if (mutations == 2) {
//                         alert('existe una mutacion')
//                         return
//                     }
//                 }
//             } else {
//                 letter = arr[row][col];
//                 hits = 1;
//             }

//         }
//         const currentRow = arr[row][col];
//         console.log(`value:=>${currentRow}|| col:${col}row:${row}`)

//         row++
        
//         if (row==y) {
//             row = 0;
//             col++
//         }

//         start++
//         if (start > maximum) {
//             console.log('maximo')
//             return 
//         }
//         //return
//     }

//     return false;

// }
