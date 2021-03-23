"use strict";
const path = require('path');
const { 
    openBrowser,
    goto,
    focus,
    $,
    click,
    write,
    above,
    closeBrowser 
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';
       
step("Dado que acesso o <site>", async (site) =>{
    //await openBrowser();
    await goto(site);
});

step("Quando preencho <usuario> e <senha> e confirmo", async (usuario, senha) =>{
    await click($(`//input[@id='txtUsername']`));
    await write(usuario);
    await click($(`//input[@id='txtPassword']`));
    await write(senha);
    await click("LOGIN", above("Forgot your password?"));
});
        
step("Então confirmo que realizei o Login com Sucesso", async() =>{
    await assert.ok(($(`//img[@alt='OrangeHRM']`)).exists());
    //await closeBrowser();
});	
	
step("Então valido que a <Mensagem> foi exibida", async(mensagem) =>{
    await assert.ok($(`//span[@id='spanMessage']`).text(), (mensagem));
    //await closeBrowser();
});    
    

