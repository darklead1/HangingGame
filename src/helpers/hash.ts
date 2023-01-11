import { secretKey } from "./constants";
import CryptoJS from "crypto-js";

export class Hash {
	static encrypt(word: string): string {
		// Encrypt
		const cipherText = CryptoJS.AES.encrypt(word, secretKey).toString();
		return cipherText;
	}

	static decrypt(cipherText: string): string {
		// Decrypt
		const bytes  = CryptoJS.AES.decrypt(cipherText, secretKey);
		const originalText = bytes.toString(CryptoJS.enc.Utf8);
		return originalText;
	}
}