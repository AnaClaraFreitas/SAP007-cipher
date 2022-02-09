const cipher = {
  
  //codificar
    encode(offset, string) {
        let resultEncode = "";
        if (offset == 0 || string == 0 || offset == null || string == null) 
      throw TypeError ("Digite a mensagem e especifique o Offset")
      
        let letras = string.length;  
        for (let i = 0; i < letras; i++) {
            let valueAsc = string[i].charCodeAt();  
            let codLetras  = 65;
            let valueEncode = ((valueAsc - codLetras + offset) % 26) + codLetras;
            resultEncode = resultEncode.concat(String.fromCharCode(valueEncode));
           
        }
        return resultEncode;

    },

    //decodificar
    decode(offset, string) {
        let resultDecode = "";
        if (offset == 0 || string == 0 || offset == null || string == null) 
      throw TypeError("Digite a mensagem e especifique o Offset")
     
      
        let letras = string.length;
        for (let i = 0; i < letras; i++) {
            let valueAsc = string[i].charCodeAt();
            let codLetras = 90;
            let valueDecode = ((valueAsc - codLetras - offset) % 26) + codLetras;
            resultDecode = resultDecode.concat(String.fromCharCode(valueDecode));
            
        }
        return resultDecode;
    }

};



export default cipher