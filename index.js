/** @module cryptaes */

var crypto = require('crypto');

// https://wikipedia.org/wiki/Advanced_Encryption_Standard
var algo = 'aes256';

/**
 * Creates a cipher, updates with data (utf8 -> hex)
 * {@link https://nodejs.org/api/crypto.html#crypto_class_cipher}
 * @returns {string} Encrypted data
 */
exports.encrypt = function(text, secretKey, next) {
  var cipher = crypto.createCipher(algo, secretKey);
  var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
  next(null, encrypted);
  return;
};

/**
 * Creates a deciper, updates with data (hex -> utf8)
 * {@link https://nodejs.org/api/crypto.html#crypto_class_decipher}
 * @returns {string} Unencrypted data
 */
exports.decrypt = function(encText, secretKey, next) {
  var decipher = crypto.createDecipher(algo, secretKey);
  try {
    var decrypted = decipher.update(encText, 'hex', 'utf8') + decipher.final('utf8');
    next(null, decrypted);
    return;
  } catch (err) {
    next(err);
    return;
  }
};

module.exports = exports;
