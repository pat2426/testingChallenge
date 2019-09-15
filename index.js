//Constructor function
function findLongestWord(str){
  this.str = str;
    var words = str.split(" ");
    var getWord = "";
    var maxLength = 0;
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        getWord = words[i];
        var result = getWord + " " +  maxLength;
      }
    }
  
    return result;
  }

  //change this output to test for different strings
  module.exports = findLongestWord("The mountain is only two hours away");