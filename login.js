// console.log('button');

// form submit reloading the page

// step-1 set event handler
document.getElementById('button-login').addEventListener('click',function(event){
    // step-2 prevent default behavior (prevant reloding browser)
    // vejal to beginner
    event.preventDefault();  
    console.log('login button click');

    // step-3 get the phone Number
    const phonNumber = document.getElementById('phone-number').value;
    console.log(phonNumber);
})