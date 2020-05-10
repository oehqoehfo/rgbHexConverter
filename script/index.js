let rgbFormRef = document.querySelector('#toHex form');
rgbFormRef.addEventListener('submit',rgbToHex);
// complicated* algorithm

/*function rgbToHex(event){
    event.preventDefault();
    let hashTag = "#";
    let rgbInputs = document.querySelectorAll('#RGB input[type="number"]');
    let hexValue="";
    for(let i=0;i<rgbInputs.length;i++){
        let quotient = Math.floor(rgbInputs[i].value/16);
        let remainder = rgbInputs[i].value%16;
        console.log("remainder :"+remainder);
        hexValue+=convertDecimalToHex(quotient,remainder);
    }
    hexValue= hashTag+hexValue;
    document.querySelector('#hexValue p').innerHTML=hexValue;
}

function convertDecimalToHex(quotient,reminder){
    let hexValue="";
    for(let i=0;i<arguments.length;i++){
        switch(arguments[i]){
            case 10:
                arguments[i]='A'
                break;
            case 11:
                arguments[i]='B'
                break;
            case 12:
                arguments[i]='C'
                break;
            case 13:
                arguments[i]='D'
                break;
            case '14':
                arguments[i]='E'
                break;
            case 15:
                arguments[i]='F'
                break;
        } 
        hexValue +=arguments[i];
    }
    return hexValue;
}*/

/*simple algorithm*/
function rgbToHex(event){
    event.preventDefault();
    let rgbInputs = document.querySelectorAll('#RGB input[type="number"]');
    let hashTag="#"
    let hexValue="";
    for(let i=0;i<rgbInputs.length;i++){
        if(rgbInputs[i].value>=16){
            hexValue = hexValue + parseInt(rgbInputs[i].value).toString(16);
        }else{
            hexValue = hexValue + "0"+parseInt(rgbInputs[i].value).toString(16);
        }
    }
    hexValue = hashTag + hexValue;
    document.querySelector('#hexValue div').style.backgroundColor=hexValue;
    document.querySelector('#hexValue p').innerHTML=hexValue;
}

let hexFormRef = document.querySelector('#toRGB form');
hexFormRef.addEventListener('submit',toRGB);
//complicated algorithm
/*function toRGB(event){
    event.preventDefault();
    let hexInputValue = document.querySelector('#toRGB input[type="text"]').value;
    let decimalValue="rgb(";
    for(let i=0;i<hexInputValue.length;i++){
        if((i+1)%2==0){
            decimalValue +=convertHexToDecimal(hexInputValue[i-1],hexInputValue[i]);
        }
    }
    let rgbValue = decimalValue.slice(0,decimalValue.length-1);
    document.querySelector('#rgbValue p').innerHTML = rgbValue+")";
}
function convertHexToDecimal(hexValue1,hexValue2){
    let hexArray=[hexValue1,hexValue2];
    let rgbArray=['',''];
    for(let i=0;i<hexArray.length;i++){
        switch(hexArray[i].toUpperCase()){
            case 'A':
                rgbArray[i]='10';
                break;
            case 'B':
                rgbArray[i]='11';
                break;
            case 'C':
                rgbArray[i]='12';
                break;
            case 'D':
                rgbArray[i]='13';
                break;
            case 'E':
                rgbArray[i]='14';
                break;
            case 'F':
                rgbArray[i]='15';
                break;
            default:
                rgbArray[i]=hexArray[i];
        }
    }

    return convertToRGB(rgbArray);
}
function convertToRGB(rgbArray){
    let firstNumber = rgbArray[0]*16;
    let secondNumber = rgbArray[1]*1;
    let rgb = firstNumber+secondNumber + ",";
    return rgb;
}*/

//Simple algorithm
function toRGB(event){
    event.preventDefault();
    let hexInputValue = document.querySelector('#toRGB input').value;
    let decimalValue, rgbPartValue="",rgbValue="";
    for(let i=0;i<hexInputValue.length;i++){
        rgbPartValue +=hexInputValue[i];
        if((i+1)%2==0){
            decimalValue=parseInt(rgbPartValue,16);
            decimalValue.toString(10);
            if(i==1)
                rgbValue="rgb("+decimalValue;
            else if(i==3)
                rgbValue+=","+decimalValue;
            else
                rgbValue+=","+decimalValue+")";
            rgbPartValue="";
        }
    }
    document.querySelector('#rgbValue div').style.backgroundColor=rgbValue;
    document.querySelector('#rgbValue p').innerHTML = rgbValue;
}
