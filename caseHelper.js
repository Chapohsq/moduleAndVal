





function splitCamelCase(string) {
 let newString = ""
    for (const char of string) {
        if (char === char.toUpperCase()) {
            output += ( " "+ char)
        } else{
            output += char;
        }
    }
    return output;
}

module.exports = {startingUpperCase,splitCamelCase}