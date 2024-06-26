const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"


const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")



const getRamdomData = (dataset) =>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRamdomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRamdomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRamdomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRamdomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value);
}


generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}