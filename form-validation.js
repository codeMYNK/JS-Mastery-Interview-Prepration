// let nm = document.querySelector('#name');
// let em = document.querySelector('#email');
// let form = document.querySelector('#main');

// form.addEventListener('submit', function(details){
//     details.preventDefault();

//     // if(nm.value.length <= 2){
//     //     document.querySelector('#hide').style.display = 'initial';
//     // }else{
//     //     document.querySelector('#hide').style.display = 'none';
//     //     console.log("name Value", nm.value);
//     // }
//     const regex = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
//     let ans = (regex.test("mayank@tewst.com"));
//     console.log("Email Validity", ans);
// }) 


let nm = document.querySelector('#name');
let em = document.querySelector('#email');
let form = document.querySelector('#main');

form.addEventListener('submit', function (details) {
    details.preventDefault();

    // Name validation
    if (nm.value.length <= 2) {
        document.querySelector('#hide').style.display = 'initial';
    } else {
        document.querySelector('#hide').style.display = 'none';
        console.log("Name Value:", nm.value);
    }

    // Email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(em.value)) {
        document.querySelector('#email-error').style.display = 'initial';
        console.log("Email Validity: false");
    } else {
        document.querySelector('#email-error').style.display = 'none';
        console.log("Email Validity: true");
        console.log("Email Value:", em.value);
    }
});
