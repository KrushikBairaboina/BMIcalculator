const form = document.querySelector('form')
form.addEventListener('submit',  (e) =>{
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi<18.6){
        results.innerHTML = `<span>${bmi} you are Under weight</span>`;
    }
     else if (bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML = `<span>${bmi} you are Normal weight</span>`;

     }
     else{
        results.innerHTML = `<span>${bmi} you are Over weight</span>`;

     }
    
  
})
