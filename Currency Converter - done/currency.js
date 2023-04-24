let rate1 = document.querySelector(".rate1");
let rate2 = document.querySelector(".rate2");
let resultBtn = document.querySelector(".result");
let selects = document.querySelectorAll(".options select"); 
let sel1 = selects[0];
let sel2 = selects[1];
let inputs = document.querySelectorAll(".input input");
let inpt1 = inputs[0];
let inpt2 = inputs[1];

// declare empty rates objects where we store all the exchanged rates
let rates = {};

// stored API URL in variable
let requestURL = "https://api.exchangerate.host/latest?base=USD";

fetchRates();

//declare async function fetch rate from API
async function fetchRates(){
    let res = await fetch(requestURL);
    //json method to response interface to parse the respone to js 
    res = await res.json();
    //set the value of rates object to respone rate object 
    rates = res.rates;
    //call the populate options
    populateOptions();
}

function populateOptions(){
    //declare an empty string variable which wille have some html code containing option elements for the drop-down
    let val = "";
    //object keys method on the rates object which will return array containing all the keys 
Object.keys(rates).forEach(code=>{
    //variable holding html string 
    let str = `<option value="${code}">${code}</option>`;
    //concatenate this string to variable 
    val += str;
    })
    //set the inner html 
    selects.forEach((s) => (s.innerHTML = val));
}

// convert function 
function convert(val, fromCurr, toCurr){
    let v = (val/rates[fromCurr]) * rates[toCurr];
    //for simplcity we round the decimal to three places using fixed method
    let v1 = v.toFixed(3);
    // if values are to small we will chceck if the rounded vale equals to zero 
    return v1 == 0.0 ? v.toFixed(5) : v1; 
}

//display function which display converted rate for a unit currency 
function displayRate(){
    //get the values from both selected elements 
    let v1 = sel1.value;  
    let v2 = sel2.value;

    //use the convert function 
    let val = convert(1, v1, v2);

    rate1.innerHTML = `1 ${v1} <strong>equals<strong>`;
    rate2.innerHTML = `${val} ${v2}`;
}

// add event listener to result botton 
resultBtn.addEventListener("click", ()=>{
    let fromCurr = sel1.value;
    let fromVal = parseFloat(inpt1.value);
    let toCurr = sel2.value;

    if(isNaN(fromVal)){
        alert("Enter a Number!");
    } else{
        let cVal = convert(fromVal, fromCurr, toCurr);
        inpt2.value = cVal;
    }
}); 

selects.forEach(s=>s.addEventListener("change", displayRate));

document.querySelector(".swap").addEventListener("click", ()=>{
    let in1 = inpt1.value;
    let in2 = inpt2.value;
    let op1 = sel1.value;
    let op2 = sel2.value; 

    inpt2.value = in1;
    inpt1.value = in2

    sel2.value = op1;
    sel1.value = op2;

    displayRate();
})