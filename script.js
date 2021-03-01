// let genRandomNumber = document.getElementById('random-number');
// let genBtn = document.querySelector(".generate-btn");
// let clickInput = document.getElementById('clickInput');

// // getAll Number
// let num0 = document.getElementById('num-0');
// let num1 = document.getElementById('num-1');
// let num2 = document.getElementById('num-2');
// let num3 = document.getElementById('num-3');
// let num4 = document.getElementById('num-4');
// let num5 = document.getElementById('num-5');
// let num6 = document.getElementById('num-6');
// let num7 = document.getElementById('num-7');
// let num8 = document.getElementById('num-8');
// let num9 = document.getElementById('num-9');

// let test = Math.ceil(Math.random() * 10000);
// // console.log(test)
// genBtn.addEventListener('click',function(){
//     genRandomNumber.value = test;
// });

// let zero = num0.innerText;
// let one = num1.innerText;
// let two = num2.innerText;
// let three = num3.innerText;
// let four = num4.innerText;
// let five = num5.innerText;
// let six = num6.innerText;
// let seven = num7.innerText;
// let eight = num8.innerText;
// let nine = num9.innerText;

// let aText = clickInput.value;
// // function addMultipleKeyNumber(){
// //     console.log('Hello')
// // }
// let addMultipleKeyNumber =() => {
//     // console.log(numberKey)
//     clickInput.value = aText + num0.innerText;
//     console.log('this text',aText)
// }
// num0.addEventListener('click',addMultipleKeyNumber);
// num1.addEventListener('click', addMultipleKeyNumber);
// num2.addEventListener('click', addMultipleKeyNumber(two));
// num3.addEventListener('click', addMultipleKeyNumber(three));
// num4.addEventListener('click', addMultipleKeyNumber(four));
// num5.addEventListener('click', addMultipleKeyNumber(five));
// num6.addEventListener('click', addMultipleKeyNumber(six));
// num7.addEventListener('click', addMultipleKeyNumber(seven));
// num8.addEventListener('click', addMultipleKeyNumber(eight));
// num9.addEventListener('click', addMultipleKeyNumber(nine));

// Making Code Clear with Function
let notifyResult = document.getElementsByClassName("notify");
notifyResult[0].style.display = "none";
notifyResult[1].style.display = "none";

function getRandomNum(){
    let randomPin = Math.random() * 10000;
    let getPin = (randomPin + '').split('.')[0];
    if(getPin.length === 4 ){
        return getPin;
    }
    else{
        return getRandomNum()
    }
}

function generatePin(){
    let inputRandomNumber = document.getElementById('random-number');
    inputRandomNumber.value = getRandomNum();
}

//Handle Button 

let digitsContainer = document.getElementById('digits-container');
digitsContainer.addEventListener('click',function(event){
    let digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === 'C'){
            let clickInputBox = document.getElementById('clickInput');
            clickInputBox.value = '';
            let matched = document.getElementById('pinMatched');
            matched.style.display='none'
            let unMatched = document.getElementById('pinUnmatched');
            unMatched.style.display = 'none';
    }
    else{
        let clickInputBox1 = document.getElementById('clickInput').value;
        let clickInputBox2 = document.getElementById('clickInput');

        // Need To know How to handle Backspace 
        
        console.log(clickInputBox.length - 1)
        clickInputBox1.value = clickInputBox.substr(0, clickInputBox.length - 1);
    }
}
    else{
        let clickInputBox = document.getElementById('clickInput');
        clickInputBox.value = clickInputBox.value + digit;
    }
})

function verifyPin(){
    let genPin = document.getElementById('random-number').value;
    let typedPin = document.getElementById('clickInput').value;

    if(genPin === typedPin){
        let matched = document.getElementById('pinMatched');
        matched.style.display='block'
    }
    else{
        let unMatched = document.getElementById('pinUnmatched');
        unMatched.style.display = 'block';
        let timesTry = document.getElementById('try-left');
        timesTry.innerText = timesTry.innerText - 1;
        if(timesTry.innerText < 0 ){
            alert('Re generate PIn')
            timesTry.innerText = 3;
        }
    }
}