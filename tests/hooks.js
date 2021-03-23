const { openBrowser, closeBrowser, above, screenshot, link, write, tap, waitFor, below, near, text, clear, image, radioButton, toLeftOf, dropDown, click, goto, textBox, toRightOf, checkBox, openIncognitoWindow, closeIncognitoWindow, deleteCookies, evaluate } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

const dateAndTime = require('../utils/date.js');
const generateDoc = require('../utils/evidenciaPdf.js');
const fs = require('fs');

//Doc PDF-------------------------------------
const takeScreenShot = require('../utils/evidencia.js');
const { pbkdf2 } = require('crypto');
const deasync = require('deasync');
var pathEvidence = "";
var timeStartExecucao ="";
var tagScenario = "";
var tagSpec = "";
var startTime, endTime;

beforeScenario(async () => {
    await openBrowser({ignoreCertificateErrors:true, headless: headless, args:["--start-maximized"]});
});

afterScenario(async () => {
    await closeBrowser();
});

afterStep( async () => {
   takeScreenShot(); 
   gauge.screenshot();
   //return gauge.screenshot();
});


gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64'});
};
/*
beforeSpec(function (context) {
    timeStartExecucao = dateAndTime();
    startTime = new Date();
});

beforeScenario(function (context) {
    var scenario = context.currentScenario
    var specification = context.currentSpec
    //console.log(scenario)
    if(scenario.tags != null){
    //console.log(scenario.tags)
    tagScenario = scenario.tags[0];
    }
    else{
    //console.log(scenario.name)
    tagScenario = "NA";
    }
    
    if(specification.tags != null){
    //console.log(specification.tags)
    tagSpec = scenario.tags[1];
    }else{
    ///console.log(scenario.name)
    tagSpec = "NA";
    }

    //console.log(tagScenario);
    //console.log(tagSpec);

    pathEvidence = "./evidencias/"+ timeStartExecucao + "/"+tagSpec+"/"+tagScenario+"/";
    //console.log(pathEvidence);
//    evidencia.caminho(pathEvidence);

    fs.mkdir(pathEvidence, { recursive: true }, (err) => { if (err) throw err; });
    gauge.dataStore.scenarioStore.put('caminhoEvidencia',pathEvidence);
    gauge.dataStore.scenarioStore.put('scenario',tagScenario);
    gauge.dataStore.scenarioStore.put('spec',tagSpec);
});
*/

/*
afterScenario( function (context) {
    //console.log("afterScenario");
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
    
    // get seconds 
    var seconds = Math.round(timeDiff);
    ///console.log(seconds + " seconds");
    // generateDoc(pathEvidence,tagScenario); 
    
    /* 
    //console.log("1");
    generateDoc(pathEvidence, tagScenario,tagSpec,seconds)
        .then((res) => {
        //console.log(res);
        //console.log("2");
        })
        .catch((err) => console.log(err));

        deasync.sleep(5000);
    
});*/