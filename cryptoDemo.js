 /**
  * *************************
  * _________________________
  * @description:  
  * __________________________
  * *************************
  * Demonstrates Node.js 'crypto' module functionalities such as hashing, generating random bytes, and symmetric encryption/decryption using AES.
  */
 import crypto from 'crypto';

//  // CreateHash() - This method creates a Hash object that can be used to generate hash digests.
//  const hash = crypto.createHash('sha256'); // Create a hash object using the SHA-256 algorithm, which is a popular algorithm
//  hash.update('Hello, World!'); // Update the hash object with the data to be hashed
//  console.log('Hash:', hash.digest('hex')); // Generate the hash digest in hexadecimal format, could also be 'base64' or 'binary'

// //randomBytes() - This method generates cryptographically strong pseudo-random data. Basically, it generates random stuff
// crypto.randomBytes(16, (err, buff) => {
//     if (err) throw err; // Handle any errors that occur during random byte generation
//     console.log('Random Bytes:', buff.toString('hex'));
// })

// //createCipheriv() & createDecipheriv()
const algorithm = 'aes-256-cbc'; // Define the encryption algorithm
const key = crypto.randomBytes(32); // Generate a random key for encryption
const iv = crypto.randomBytes(16); // Generate a random initialization vector (IV) for the algorithm
// //The IV is a random value used to ensure that the same plaintext encrypted multiple times will produce different cipher-texts.


const cipher = crypto.createCipheriv(algorithm, key, iv); // Create a cipher object using the specified algorithm, key, and IV
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex') // Encrypt the data( in this case the 'Hello...' text) using the cipher object, specifying the input and output encodings
encrypted += cipher.final('hex') // Finalize the encryption process and append any remaining encrypted data to the result
console.log('Key:', encrypted )

const decipher = crypto.createDecipheriv(algorithm, key, iv); // Create a decipher object using the same algorithm, key, and IV
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted); // Output the decrypted message

