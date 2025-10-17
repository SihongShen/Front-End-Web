

function computeAndDisplay(){
    let a = value1.value;
    let b = value2.value;

    if( isNaN(a) | isNaN(b) ){
        alert("Please input two numbers!")
    }else{
        resultSection.innerText = parseFloat(a) + parseFloat(b);  
    }
}

computeButton.onclick = computeAndDisplay;