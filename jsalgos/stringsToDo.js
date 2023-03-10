//Remove Blanks

const removeBlanks = (word) => {
    let newWord = '';

    for(let i =0; i<word.length; i++){
        if(word[i] !== " "){
            newWord = newWord + word[i];
        }
    }

    return newWord
}

const wword = " Pl ayTha tF u nkyM usi c";

const x = removeBlanks(wword);

console.log(x)


//Get Digits

const getDigits = (bigString) => {
    let numbers = '';

    for(let i =0; i<bigString.length; i++){
        if(isNaN(Number(bigString[i])) !== true){
            numbers = numbers + bigString[i];
        }
    }

    return numbers
}

const y = getDigits("0s1a3y5w7h9a2t4?6!8?0")

console.log(y)


//Acronyms

const acronyms = (strings) => {
    const wordList = strings.split(" ")
    let newAcronym = ''

    for(let i =0; i < wordList.length; i++) {
        let letter = wordList[i][0]
        newAcronym = newAcronym + letter.toUpperCase()
    }

    return newAcronym
}

const z = acronyms("there's no free lunch - gotta pay yer way.")

console.log(z)

//Count Non-Spaces

const countNonSpaces = (word) => {
    let newWord = '';

    for(let i =0; i<word.length; i++){
        if(word[i] !== " "){
            newWord = newWord + word[i];
        }
    }

    return newWord.length
}


const p = countNonSpaces("Honey pie, you are driving me crazy")

console.log(p)

//Remove Shorter Strings

const removeShorterStrings = (array, l) => {
    let newArray = []

    for(let i = 0; i<array.length; i++) {
        let stringToTest = array[i]
        if(stringToTest.length >= l){
            newArray.push(array[i])
        }
    }
    return newArray
}

const t = removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)

console.log(t)