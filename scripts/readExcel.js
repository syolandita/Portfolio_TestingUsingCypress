const XLSX = require("xlsx");

function readExcel(filePath, sheetName) {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];

    if(!sheet){
        throw new Error(
            `Sheet tidak ditemukan`
        );
    }
    return XLSX.utils.sheet_to_json(sheet)
}
module.exports=readExcel;