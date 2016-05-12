Cryptaes
===

Encrypt, decrypt, using AES256 algorithm:
https://wikipedia.org/wiki/Advanced_Encryption_Standard


Usage
---

```
cryptaes.encrypt('text', 'secretKey', (err, encText) => console.log(encText));

cryptaes.descrypt('encText', 'secret', (err, text) => console.log(text));
```