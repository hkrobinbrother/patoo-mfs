// add money to the account 
/**
 * 
 * s-1 : add event handler prevent page reload after submit 
 * s-2: get money to be add to teh account  balance
 * s-3: verify the pin number
 * */ 

// step - 1: add an event handler to the add money button inside the button
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault()
    
    // step-2 : get money addthe accoutn
    const addMoneyInput = document.getElementById('input-add-money').value
    console.log(addMoneyInput);

    // get the pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // s-3: verify the pin number
    // wrong way to validate pin number
    if(pinNumberInput === '1234'){
        console.log('adding money to your account');

        // step-4: get the curreent blance
        const blance = document.getElementById('account-balance').innerText
        console.log(typeof blance);

        // step-5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput)
        const blanceNumber = parseFloat(blance)
        const newBlance = addMoneyNumber + blanceNumber
        console.log(newBlance);

        // step-6 update the balance inthe UI/dom
        document.getElementById('account-balance').innerText = newBlance
    }
    else{
        alert('fail to add money please try again')
    }

})