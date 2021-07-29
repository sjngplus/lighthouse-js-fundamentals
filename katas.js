const urlEncode = function(text) {
  let firstHalf;
  let secondHalf;  
  for (let i = 0; i < text.length; i++) {    
    if (text[i] === " ") {
      firstHalf = text.slice(0, i);
      secondHalf = text.slice(i+1);
      text = firstHalf + "%20" + secondHalf;
      urlEncode(text);
    }
  }  
  return text;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
