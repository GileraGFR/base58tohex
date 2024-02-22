const bs58 = require('bs58');

const toHexString = (bytes) => {
  return Array.from(bytes, (byte) => {
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('');
};

// enter your base58 string between ' and '
b = bs58.decode('base58 string goes here');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);

console.log(toHexString(j));
