import CryptoJS from "crypto-js";

function encryptText (text, keyword) {
  const encrypted = CryptoJS.AES.encrypt(text, keyword).toString();
  return encrypted;
}


function decryptText (ciphertext, keyword) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, keyword);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedText;
}

export {
  encryptText,
  decryptText
}
