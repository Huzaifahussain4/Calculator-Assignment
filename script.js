let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;


            // string=eval(string);
            // let string = buttons.value;
            // string = string.slice(0, -1);
            // buttons.value = value;
            // document.querySelector('input').value=string;
            // // let string = function(){
            // //     let delBtn =document.getElementById('inputBox').value;
            // //     document.getElementById('inputBox').value=delBtn.substring(0,delBtn.length -1);
            // // }
        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
})

// let toggleBtn = document.querySelector('#checkBox')
// console.log(toggleBtn)
// toggleBtn.addEventListener('change', ()=>{
//     if (toggleBtn.checked) {
//         console.log("toggleBtn checked")
//         document.body.classList.add('darkMode')
//     }else{
//         console.log("toggleBtn Unchecked")
//         document.body.classList.remove('darkMode')
//     }
// })
