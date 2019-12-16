// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(input) {
    let array1 = input.split(' ');
    let newarray1 = [];    
    for(var x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
}

module.exports = capitalizeFirstLetters;
