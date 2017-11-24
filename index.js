var fs = require("fs")
var tmp = require('temporary')

var toPdf = require("office-to-pdf")
var im = require('imagemagick');

var fileName = './sample.doc'
var wordBuffer = fs.readFileSync(fileName)

toPdf(wordBuffer).then(pdfBuffer => {
  var pdfFile = new tmp.File()

  fs.writeFileSync(pdfFile.path, pdfBuffer)
  console.log(pdfFile.path);

  im.identify(pdfFile.path, function(err, features){
    if (err) throw err;
    console.log(features);
    // { format: 'JPEG', width: 3904, height: 2622, depth: 8 }
  });

  im.convert([pdfFile.path, 'pdf-small.jpg'],(err,stdout)=>{
    console.log('stdout:' + stdout)
  })
})

