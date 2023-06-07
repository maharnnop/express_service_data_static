const excelToJson = require('convert-excel-to-json');


const result = excelToJson({
	sourceFile: './rawdata/tambon.xlsx'
});
// console.log(result);
const arr = []
result.distict.forEach(ele => { 
    arr.push({  tambonid:ele.A,
        t_tambonname: ele.B,
        e_tambonname: ele.C,
        amphurid:ele.D,
        postcodeall:ele.E})

  
});
// arr.shift()
console.log(arr)