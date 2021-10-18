function counter() {
    let txtArea = document.getElementById('txtid').value;
    let countWords = txtArea.match(/.*?[a-z]+.*?(\s|$)/gi).length;
    let countChars = txtArea.replace(/ /g,"").length;
    let longestWordArray = txtArea.split(' ');
    let longestWord = '';
    for (var i = 0; i < longestWordArray.length; i++) {
        if (longestWordArray[i].length > longestWord.length) {
            longestWord = longestWordArray[i];
        }
       
    }
   document.getElementById('count').innerHTML = countWords;
   document.getElementById('char').innerHTML = countChars;
   document.getElementById('longestWord').innerHTML = longestWord;
   
}