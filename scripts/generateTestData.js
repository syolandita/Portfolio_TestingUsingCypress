const fs = require("fs");
const path = require("path");
const readExcel = require("./readExcel");
const XLSX = require("xlsx");

const fixturesPath = path.join(process.cwd(), "cypress", "fixtures");

const generatedPath = path.join(fixturesPath, "generated");

if (!fs.existsSync(generatedPath)) {
  fs.mkdirSync(generatedPath);
}

const files = fs.readdirSync(fixturesPath);

const excelFiles = files.filter((file) => file.endsWith(".xlsx"));

excelFiles.forEach((file) => {
  const excelPath = path.join(fixturesPath, file);

  const workbook = XLSX.readFile(excelPath);

  workbook.SheetNames.forEach((sheetName) => {
    const data = readExcel(excelPath, sheetName);

    const excelName = path.basename(file, ".xlsx");
    const outputName = `${excelName}_${sheetName}.js`;
    const outputPath = path.join(generatedPath, outputName);

    const content = `module.exports = ${JSON.stringify(data, null, 4)};`;

    fs.writeFileSync(outputPath, content);

    console.log(`Generated: ${outputName}`);
  });
});
