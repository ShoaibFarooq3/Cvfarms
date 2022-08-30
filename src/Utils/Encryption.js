import CryptoJS from 'crypto-js';


const Key_val=CryptoJS.enc.Utf8.parse('8080808080808080');
const IV_val=CryptoJS.enc.Utf8.parse('8080808080808080')
export const EncryptVal=(value_to_be_ecrypt)=>{

  var encrypted_Val = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value_to_be_ecrypt), Key_val,  
  {
     iv: IV_val,  
     mode: CryptoJS.mode.CBC,  
     padding: CryptoJS.pad.Pkcs7 
  });  

    return encrypted_Val.toString();
}


export const DecryptVal=(value_to_be_decrypt)=>{
   
   console.log(Key_val)
   console.log(IV_val)
   try{   var decrypted_Val = CryptoJS.AES.decrypt(value_to_be_decrypt, Key_val
    ,{
    iv: IV_val,    
}
)
//.toString(CryptoJS.enc.Utf8);
console.log(decrypted_Val)
var originalText = decrypted_Val.toString(CryptoJS.enc.Utf8);
console.log(originalText)
return originalText}
catch{
  return "dumb@gmail.com"
}
 


}


