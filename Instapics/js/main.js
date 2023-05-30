var user = pedrolucaz.pl;
var password = 2006;
var email = document.getElementById("user_login");
var senha = document.getElementById("senha_login");

function verify(){
if(email == user && senha == password){
    alert("Redirecionando para a página")

}else{
    alert("Usuário ou senha incorretos, tente novamente!!")
}
}