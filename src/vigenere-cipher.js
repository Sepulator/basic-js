const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isNotReverse = true) {
    this.isNotReverse = isNotReverse;
  }
  /**
   * @param {string} message
   * @param {string} key
   */
  encrypt(message, key) {
    this.throwError(message, key);
    let result = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();
      const charCode = char.charCodeAt();
      const keyCode = key[j % key.length].toUpperCase().charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        const upperChar = ((charCode - 65) + (keyCode - 65)) % 26;
        result += String.fromCharCode(upperChar + 65);
        j++;
      } else result += char;

    }
    return this.isNotReverse ?
      result : result.split('').reverse().join('');
  }
  /**
   * @param {string} message
   * @param {string} key
   */
  decrypt(message, key) {
    this.throwError(message, key);
    let result = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();
      const charCode = char.charCodeAt();
      const keyCode = key[j % key.length].toUpperCase().charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        const upperChar = (25 - (charCode - keyCode)) % 26;
        result += String.fromCharCode(90 - upperChar);
        j++;
      } else result += char;

    }
    return this.isNotReverse ?
      result : result.split('').reverse().join('');
  }
  /**
 * @param {string} message
 * @param {string} key
 */
  throwError(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
  }
}

module.exports = {
  VigenereCipheringMachine
};
