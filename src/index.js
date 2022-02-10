document.getElementById("btn-encrypt").addEventListener("click", cifrar);
document.getElementById("btn-decrypt").addEventListener("click", decifrar);
document.getElementById("btn-clean").addEventListener("click",limpar);

const cipherCod = cipher

function cifrar() {
    let message = document.getElementById("message").value.toUpperCase();
    let deslocamento = document.getElementById("deslocamento").value;
    let offset = Number(deslocamento);
    let textResult = document.getElementById("textResult");
    let encode = cipherCod.encode(offset, message);
    textResult.innerHTML = encode;
   
}

function decifrar() {

    let message = document.getElementById("message").value.toUpperCase();
    let deslocamento = document.getElementById("deslocamento").value;
    let offset = Number(deslocamento);
    let textResult = document.getElementById("textResult");
    let decode = cipherCod.decode(offset, message);
    textResult.innerHTML = decode;
    

}

   function limpar(){
    document.getElementById("textResult").value="";
    document.getElementById("deslocamento").value="1";
    document.getElementById("message").value="";
   } 



console.log(cipher);

