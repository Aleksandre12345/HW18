let ricxvi1 = document.querySelectorAll('.price1')
let ricxvi2 = document.querySelectorAll('.price2')
let ricxvi3 = document.querySelectorAll('.price3')
let btn = document.querySelector(".headerbtn")
let toggle = document.querySelector('.circle')
let num1 = 19.9
let num2 = 24.9
let num3 = 39.9

btn.addEventListener("click", () => {

    btn.classList.toggle("act")


    if(num1 < 40){
        num1 *=10
    }
    else{     
        num1/=10
    }
   
    num1.innerHTML = ricxvi1;
     
    ricxvi1.forEach(ricxvi1 => {
        ricxvi1.innerHTML = num1;
    });

    toggle.classList.toggle('rotate')

    if(num2 < 40){
        num2 *=10
    }
    else{
        num2/=10
    }
  
    num2.innerHTML = ricxvi2;
     
    ricxvi2.forEach(ricxvi2 => {
        ricxvi2.innerHTML = num2;

        if(num3 < 40){
            
            num3 *=10
        }
        else{
           
            num3/=10
        }
   
        num3.innerHTML = ricxvi3;
         
        ricxvi3.forEach(ricxvi3 => {
            ricxvi3.innerHTML = num3;

        });
    });

})
