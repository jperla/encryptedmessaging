function convertToAscii(text) {
   var output = "";
   var len = 7;
   for (var i = 0; i < text.length; i += len) {
       var c = 0;
       for (var j = 0; j < len; j++) {
           c <<= 1;
           c |= parseInt(text[i + j]);
       }
       output += String.fromCharCode(c);
   }

   output = output.split("_").join(" ");

   return output;
}

function decrypt(c, k) {
   var m = "";
   console.log("c: " + c);
   console.log("k: " + k);
   var i = 0;

   for (i; i < k.length; i++) {
       if (c[i] ^ k[i]) {
           m += "1";
       } else {
           m += "0";
       }
   }
   console.log("m: " + m);
   return convertToAscii(m);
}

function getRandomKey(len) {
   var i = 0;
   var k = "";
   for (i; i < len; i++) {
       k += Math.round(Math.random());
   }
   console.log("random key: " + k);
   return k;
}

function encrypt(plaintext, k) {
   var m = plaintext;
   var c = "";
   console.log("m: " + m + " length: " + m.length);
   console.log("key: " + k + " length: " + k.length);

   var i = 0;

   for (i; i < m.length; i++) {
       if (m[i] ^ k[i]) {
           c += "1";
       } else {
           c += "0";
       }
       //console.log(c);
   }
   console.log("c: " + c);
   return c;
}

function convertToBinary(plaintext) {
  var input = plaintext;
  var binary = "";
  var i = 0;
  for (i; i < input.length; i++) {
    binary += input[i].charCodeAt(0).toString(2);
  }
  return binary;
}
