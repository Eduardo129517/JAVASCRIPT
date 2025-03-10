function enviar(){
    var endEmail = document.querySelector('#email').Value;
    var senha = document.querySelector('#senha').Value;

    console.log(endEmail);
    console.log(senha);

    var lemb = document.querySelector('#checkBox').Value;
    if (lemb.checked){
        console.log("CheckBox selecionada");
    }
    else{
        console.log("CheckBox não selecionada");
    }
}