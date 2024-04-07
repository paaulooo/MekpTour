alert('ATENÇÃO ESTE SITE FOI FEITO COMO UM TCC, PLANOS, CADASTRO, PREÇOS, SÃO MERAMENTE ILUSTRATIVOS');



// formulario

let senha = document.getElementById("senha");
let senhaConfirma = document.getElementById("confsenha");

function confirmaSenha(){
    if(senha.value != senhaConfirma.value){
        senhaConfirma.setCustomValidity('Senhas Diferentes!!');
    }else{
        senhaConfirma.setCustomValidity('');
    }
}
senhaConfirma.addEventListener('input', confirmaSenha);
