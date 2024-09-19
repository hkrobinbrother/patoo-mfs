// add money to the account 
/**
 * 
 * s-1 : add event handler prevent page reload after submit 
 * s-2: get money to be add to teh account  balance
 * */ 

// step - 1: add an event handler to the add money button inside the button
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault()
    
    // step-2 : get money addthe accoutn
    const addMoneyInput = document.getElementById('input-add-money').value
    console.log(addMoneyInput);

    // get the pin number
    const pinNumberInput = document.getElementById('input-pin-number').value
    console.log(pinNumberInput);
})