const colorPreview = document.querySelector(".color-preview");
const inputHex = document.getElementById("inputHex");
inputHex.addEventListener("input", getRgb);

const rgbInputR = document.getElementById("inputRed");
const rgbInputG = document.getElementById("inputGreen");
const rgbInputB = document.getElementById("inputBlue");

const checkValidHex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

function hexToRgb(hex) {
    if (!checkValidHex.test(hex)) return "not a valid hex code";
    if (hex.charAt(0) === "#") hex = hex.substring(1);
    if (hex.length === 3) hex = hex.concat(hex);
    
    hex = hex.toLowerCase();
    let rgb = [];

    function convertLetter(val) {
        switch(val) {
            case "a": return 10; 
            case "b": return 11; 
            case "c": return 12; 
            case "d": return 13; 
            case "e": return 14; 
            case "f": return 15; 
        }
    }

    for (let i = 0; i < 6; i+=2) {
        let num1 = hex.charAt(i);
        if (/[a-f]/g.test(num1)) {
            num1 = convertLetter(num1);
        }
        let num2 = hex.charAt(i+1);
        if (/[a-f]/g.test(num2)) {
            num2 = convertLetter(num2);
        }
        let rgbVal = (parseInt(num1) * 16) + parseInt(num2);
        rgb.push(rgbVal);
    }
    return rgb;
}

function getRgb(e) {
    let hexInput = e.target.value;
    let rgbResult;
    if (checkValidHex.test(hexInput)) {
        rgbResult = hexToRgb(hexInput);
        rgbInputR.value = rgbResult[0];
        rgbInputG.value = rgbResult[1];
        rgbInputB.value = rgbResult[2];
        colorPreview.style.backgroundColor = `rgb(${rgbResult[0]},${rgbResult[1]},${rgbResult[2]})`
    }
}

function rgbToHex(rgb) {
    let hex = "";
    for (let i = 0; i < 3; i++) {
        let rgbVal = rgb[i];
        let secondDigit = rgbVal % 16;
        let firstDigit = (rgbVal - secondDigit) / 16;
        if (secondDigit > 9) secondDigit = convertNumber(secondDigit);
        if (firstDigit > 9) {
            firstDigit = convertNumber(firstDigit)
        }
        hex += firstDigit.toString() + secondDigit.toString();
    }
    function convertNumber(val) {
        switch(val) {
            case 10: return "a"; 
            case 11: return "b"; 
            case 12: return "c"; 
            case 13: return "d"; 
            case 14: return "e"; 
            case 15: return "f"; 
        }
    }
    return hex;
}