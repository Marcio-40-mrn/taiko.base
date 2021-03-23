# Exemplos de Teste com Gauge e Taiko

Está é uma amostra de como trabalhar com Gauge com Taiko
Tela de login com sucesso em OrangeHRM

## CT001 Login com Sucesso
Tags: CT001, Login, Sucesso
* Dado que acesso o "https://opensource-demo.orangehrmlive.com/"
* Quando preencho "Admin" e "admin123" e confirmo
* Então confirmo que realizei o Login com Sucesso

## CT002 Login com Senha Errada
Tags: CT002, Login, Erro
* Dado que acesso o "https://opensource-demo.orangehrmlive.com/"
* Quando preencho "Admin" e "ADMIN" e confirmo
* Então valido que a "Invalid credentials" foi exibida