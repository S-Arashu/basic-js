const { NotImplementedError } = require("../lib");

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, keyword) {
    if (!message || !keyword) {
      throw new Error("Incorrect arguments!");
    }

    return this.cipher(message, keyword, true);
  }

  decrypt(message, keyword) {
    if (!message || !keyword) {
      throw new Error("Incorrect arguments!");
    }

    return this.cipher(message, keyword, false);
  }

  cipher(message, keyword, isEncrypt) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    let keywordIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (alphabet.includes(char.toUpperCase())) {
        const charIndex = alphabet.indexOf(char.toUpperCase());
        const keyCharIndex = alphabet.indexOf(
          keyword[keywordIndex % keyword.length].toUpperCase()
        );
        let newIndex;

        if (isEncrypt) {
          newIndex = (charIndex + keyCharIndex) % alphabet.length;
        } else {
          newIndex =
            (charIndex - keyCharIndex + alphabet.length) % alphabet.length;
        }

        result +=
          char.toLowerCase() === char
            ? alphabet[newIndex].toLowerCase()
            : alphabet[newIndex];
        keywordIndex++;
      } else {
        result += char;
      }
    }

    if (!this.isDirect) {
      result = result.split("").reverse().join("");
    }

    return result.toUpperCase();
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
