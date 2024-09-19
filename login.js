// console.log('button');

// form submit reloading the page

// // step-1 set event handler
// document.getElementById('button-login').addEventListener('click',function(event){
//     // step-2 prevent default behavior (prevant reloding browser)
//     // vejal to beginner
//     event.preventDefault();  
//     // console.log('login button click');

//     // step-3 get the phone Number and the pin number
//     const phonNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phonNumber,pinNumber);

//     // step-4 validate phone and pin
//     // this is temporary , you should do like this
//     if(phonNumber === '5' && pinNumber === '1234'){
//         console.log('you are login');
//         // step-5 allow user to use the website
//     }
//     else{
//         alert('worng phone number or pin')
//     }
// })


document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();

    // get phone number and pin
    const phonNumber=document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value
    // console.log(phonNumber,pinNumber)

    // bad way to validate\\
    if(phonNumber === '5' && pinNumber ==='1234'){
        console.log('you can logged in');
        window.location.href = 'home.html'
    }
    else{
        console.log('wrong pin number');
    }
})