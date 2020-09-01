function XOR(x, y) {
  var z = new Uint8Array(x.length);
  for (var i = 0; i < y.length; i++) {
    z[i] =  (x[i] ^ y[i]);
  }
  return z;
}
