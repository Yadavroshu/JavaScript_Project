 const form = document.querySelector('form');
 form.addEventListener('submit', function (e) {
    e.preventDefault();

     const Height = parseInt(document.querySelector("#Height").value);
     const Weight = parseInt(document.querySelector("#Weight").value);
     const result = document.querySelector("#result");
     if(Height === '' || Height < 0 || isNaN(Height)) { 
        result.innerHTML = `please give me a valid Height ${Height}`;
     } else if (Weight === '' || Weight < 0 || isNaN(Weight)) {
            result.innerHTML =`please give me a valid Weight ${Weight}`;
     }else{
        const bmi = ( Weight / ((Height*Height)/10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>${bmi}</span>`;
     }
     
     
    
         

     
 }) ;