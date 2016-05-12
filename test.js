/**
 * @module suites/crypto-helper-suite
 */

var assert = require('assert');

var cryptaes = require('./index');

describe('cryptaes-suite', function(){
  it('it should encrypt and decrypt a string', function(done) {
    var str = 'Dear mr I\'m to good to call or write my fans';
    var secretKey = 'abc123';

    var cbkDecrypt = function(errDecrypt, decrText) {
      if (errDecrypt) {
        done(errDecrypt);
      } else {
        assert.equal(str, decrText);
        done();
      }
    };
    
    var cbkEncrypt = function(errEncrypt, encText){
      if (errEncrypt) {
        done(errEncrypt);
      } else {        
        console.log('encText: ' + encText);
        cryptaes.decrypt(encText, secretKey, cbkDecrypt);
      }
    };
    
    cryptaes.encrypt(str, secretKey, cbkEncrypt);
  });  
});
