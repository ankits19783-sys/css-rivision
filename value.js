function getvalue(){
    let a = Number(document.getElementById("input1").value);
    let oparetor = String(document.getElementById("oparetor").value);
    let b = Number(document.getElementById("input2").value);
    let result = 0;
    if(oparetor === "+"){
        result = a + b;
    }else if(oparetor === "-"){
        result = a - b;
    }else if(oparetor === "*"){
        result = a * b;
    }else if(oparetor === "/"){
        result = a / b;
    }
    document.getElementById("output").innerText = result;
}