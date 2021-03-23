const pdf = require('html-pdf');
const deasync = require('deasync');
const fs = require('fs');
const path = require('path');
const ejs = require("ejs");

function generateDoc(pathEvidence, tagScenario,tagSpec,seconds) {
    debugger;
    console.log("GERANDO DOC PDF");
    //console.log(pathEvidence + "" + tagScenario + "_evidencia.pdf");
    var caminhoPdf = pathEvidence + "" + tagScenario + "_evidencia.pdf";
    var listaImagens = fileFromDir(pathEvidence,".png");
    var fullpath = "file:///"+__dirname.replace("utils","");
    var temp = "";
    let listNameImgs = [];
    
    for (let index = 0; index < listaImagens.length; index++) {
      temp = fullpath+listaImagens[index];
      //console.log("temp:"+temp);
      listaImagens[index] = temp.replace(/\\/g,'/');
      listNameImgs.push(listaImagens[index].split(tagScenario)[1].replace("\/","").replace(".png",""));
      //console.log(listaImagens[index]);
    }
    
    //console.log("lista de imagem: "+listNameImgs);
  
    return new Promise(async (resolve, reject) => {
      //console.log("path: ", listaImagens);
      //console.log("path: ", fullpath);

      ejs.renderFile('./utils/index.ejs',{
        name: 'teste name', 
        listaImagens: listaImagens, 
        listaNomeImagens: listNameImgs,
        scenario: tagScenario,
        funcionalidade: tagSpec,
        caminho: __dirname.replace(/\\/g,'/'),
        segundos: seconds,
      },
        (err, html)=> { 
        if(err){
          console.log("ERRO!");
          console.log(err);
        }else{
          pdf.create(html, {}).toFile(caminhoPdf, (err, res) => {
            console.log("CONVERTENDO PARA ARQUIVO PDF");
            if (err) {
              reject("Erro ao criar pdf");
            } else {
              resolve(res);
              console.log("CAIU NO ELSEEEEEEE");
            }
          });
        }
      });
    });
    console.log("waiting");
  }  
  
  /*function generateDoc() {
    return new Promise(async (resolve, reject) => {
      pdf.create("<h1> Sofredores do testte</h1>").toFile("geracaoPDF", (err, res) => {
        if (err) {
          reject("Erro ao criar pdf");
        } else {
          resolve(res);
        }
      });
    });
  };*/
  

  /**
 * Method to find by extension using recursion
 *
 * @param {*} startPath
 * @param {*} filter
 */
function fileFromDir(startPath, filter) {
    let listFile = [];
    fromDir(startPath, filter);
    //console.log('SEARCHING IN  ' + startPath);
    function fromDir(startPathFind, filterFind) {
        if (!fs.existsSync(startPathFind)) {
            //console.log("no dir ", startPathFind);
            return;
        }
        let files = fs.readdirSync(startPathFind);
        for (let i = 0; i < files.length; i++) {
            let filename = path.join(startPathFind, files[i]);
            let stat = fs.lstatSync(filename);
            if (stat.isDirectory()) {
                fromDir(filename, filterFind); //recurse
            } else if (filename.indexOf(filterFind) >= 0) {
                //console.log('-- found: ', filename);
                listFile.push(filename);
            }
        }
    }
    return listFile;
}
module.exports = generateDoc;