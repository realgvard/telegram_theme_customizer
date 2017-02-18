import _ from 'lodash';


const rgbaHexToNumber = (hex) => {
    let [ firstSymbol, secondSymbol ] = hex.split('');

    if(secondSymbol.includes('f')) {

        secondSymbol = 'A';

        hex = firstSymbol + secondSymbol;
    }

    for (var i = 1; i >= 0; i -= 0.01) {
        i = Math.round(i * 100) / 100;
        var alpha = Math.round(i * 255);
        var found = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();

        if(found === hex){
            return i;
        }
    }
};

export const getRgbaColorFromObject = (rgba) => {
    return `rgba(${_.values(rgba).join()})`;
};

export const rgbaToHex = (hex, percentage) => {
    const value = Math.round(percentage * 100) / 100;
    const alpha = Math.round(value * 255);

    return hex + (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
};

export const hexToRgba = (hex, alpha = 1) => {
    var c;

    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');

        if(c.length === 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }

        c= '0x'+c.join('');

        return `rgba(${[(c>>16)&255, (c>>8)&255, c&255].join(',')},${alpha})`;
    }

    throw new Error('Bad Hex');
};

export const getParsedColor = (color) => {
    const isPlainHex = color.length === 7;
    const isRgbaHex = color.length === 9;

    if(isPlainHex) { // #ffb1ff

        return hexToRgba(color);
    } else if(isRgbaHex) { // ##37a78e40 => rgba(55,167,142, 0.25)
        const hexColor = color.slice(0, -2);
        const hexRgbaColor = color.slice(-2);

        // console.log(hexColor, hexRgbaColor, 'COMPILED', hexToRgba(hexColor, rgbaHexToNumber(hexRgbaColor)))

        return hexToRgba(hexColor, rgbaHexToNumber(hexRgbaColor));
    } else if(_.isObject(color)) { // is RGBA "{ r: 0, g: 0, b: 0, a: 0 }" object

        return getRgbaColorFromObject(color)
    } else if(_.isString(color)) { // might be "rgba(255,255,255,1)"

        return color;
    } else {

        throw new Error('Bad color in "getParsedColor" in function');
    }
};