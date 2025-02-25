const removeFromArray = function(array, ...values) {
    let result = array.filter(el => {
        if (!values.includes(el)) return el;
    })

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
