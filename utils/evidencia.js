const {  screenshot } = require('taiko');
//import jsPDF from 'jspdf';

function takeScreenShot(nomeImagem) {
    var id = gauge.dataStore.scenarioStore.get('evidId');
    if(id != null){
        gauge.dataStore.scenarioStore.put('evidId',id+1);
    }else{
        gauge.dataStore.scenarioStore.put('evidId',0);
    }
    id = gauge.dataStore.scenarioStore.get('evidId');

    if(id<10){
        id = '00'+id;
    }
    else if(id<100){
        id = '0'+id;
    }

    if(nomeImagem==null){
        
        screenshot({path: gauge.dataStore.scenarioStore.get('caminhoEvidencia')+id+'_screenshot.png'});
    }else{
        screenshot({path: gauge.dataStore.scenarioStore.get('caminhoEvidencia')+id+'_'+nomeImagem+'.png'});
    }
}

module.exports = takeScreenShot;