const checkValidHex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

function hexToRgb(hex) {
    if (!checkValidHex.test(hex)) return "not a valid hex code";
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
        console.log("pair:", num1, num2);
        let rgbVal = (num1 * 16) + num2;
        rgb.push(rgbVal);
    }
    return rgb;
}

