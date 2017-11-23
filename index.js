var toPdf = require("office-to-pdf")
var fs = require("fs")
var wordBuffer = fs.readFileSync("./sample.doc")

toPdf(wordBuffer).then(pdfBuffer => {
  fs.writeFileSync("./test.pdf", pdfBuffer)
})

