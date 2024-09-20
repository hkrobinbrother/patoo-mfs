/**
 * 1. add event listener to the Money button ( from submit)
 * make sure to preventDefault so that page doesn't reloads
 * 
 * 
 * 2. get the money user wants to add
 * also, get the pin number provided
 * 
 * 
 * 3. verify the pin number . for , wrong pin number to the account balance
 * 
 * 4. get the current balance
 * 
 * 5.add money to be added with the current balance
 * 
 * 6. display / update the balance in the dom/ UI
 * 
 **/ 


document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()
    console.log('add the event handler');

    // get money and the pin number
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney)
    const pinNumber = document.getElementById('input-pin-number').value;

    // console.log(addMoney, pinNumber);
    if(pinNumber === '1234'){
        // add money to the account
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        // new balance
        const newBalance = balanceNumber + addMoneyNumber

        // update the DoM with update balance
        document.getElementById('account-balance').innerText = newBalance

    }
    else{
        alert('faild to add money . please try again latter')
    }
})