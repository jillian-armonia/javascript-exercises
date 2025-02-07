const reverseString = function(string) {
    let strArray = string.split('');
    let result = '';

    for (let i = strArray.length - 1; i >= 0; i--){
        result += strArray[i];
    }

     return result
};

// Do not edit below this line
module.exports = reverseString;
