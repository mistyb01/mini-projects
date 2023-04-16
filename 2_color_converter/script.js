const checkValidHex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
const form = document.getElementById("form");
const rgbText = document.querySelector(".rgb-text");
const colorPreview = document.querySelector(".color-preview");

function hexToRgb(hex) {
    if (!checkValidHex.test(hex)) return "not a valid hex code";
    if (hex.charAt(0) === "#") hex = hex.substring(1);
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

form.addEventListener("submit", handleConversion);

function handleConversion(e) {
    e.preventDefault();
    // get hex value from the form input
    const formData = e.target;
    const hexValue = formData.elements['inputHex'].value;
    // run it through function
    const rgbResult = hexToRgb(hexValue);
    // update the UI with the result
    rgbText.innerText = rgbResult;
    colorPreview.style.backgroundColor = `rgb(${rgbResult[0]},${rgbResult[1]},${rgbResult[2]})`
}