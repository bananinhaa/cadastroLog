localStorage.login;
localStorage.senha;

localStorage.loginArray;
localStorage.senhaArray;

var auxLoginArray = new Array();
var auxSenhaArray = new Array();

function cadastrarDados(){
  var l = document.getElementById('login').value;
  var s = document.getElementById('senha').value;

  localStorage.setItem("login", l);
  localStorage.setItem("senha", s);

  auxLoginArray.push(l);
  auxSenhaArray.push(s);

  localStorage.setItem("loginArray", auxLoginArray);
  localStorage.setItem("senhaArray", auxSenhaArray);

  console.log(localStorage.loginArray, localStorage.senhaArray);
  alert("Usuário cadastrado com sucesso\nLogin: "+localStorage.login 
  + "\nSenha: " + localStorage.senha);
}

function logar(){
	var l_inf = document.getElementById('loginAutenticacao').value;
	var s_inf = document.getElementById('senhaAutenticacao').value;

	var l = localStorage.getItem("loginArray").split(",");
	var s = localStorage.getItem("senhaArray").split(",");
	
	var logado = false;
	for(var i=0; i<l.length; i++){
	if(l_inf == l[i] && s_inf == s[i]){
	  alert("Match - Usuário e senha existem no sistema");
	  logado = true;
	  window.open('home.html','janela');
	}
	}
	if(logado == false){
	alert("Usuário ou Senha não existem no sistema!");
    }
}