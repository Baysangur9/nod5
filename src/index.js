const fs = require('fs')
const figlet = require('figlet');
let fileContent = fs.readFileSync('./text.txt', "utf8");

figlet(fileContent, function(err, data){
   if (err){
     console.log('Somthing what wrong')
     console.dir(err)
     return
   }
   console.log(data)

})