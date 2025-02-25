const sumAll = function(start, end) {
    let sum = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) return "ERROR";


    if (start < end){
        while (start <= end){
            sum += start;
            start++;
        }
    } else if (start > end){
        while (start >= end){
            sum += start;
            start--;
        }
    }


     return sum;
};

// Do not edit below this line
module.exports = sumAll;
