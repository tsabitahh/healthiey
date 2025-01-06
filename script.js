window.onload = () => {
  let button = document.querySelector("#btn");
  button.addEventListener("click", submit);
};

function submit() {
  let height = parseInt(document.querySelector("#height").value);

  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");

  if (height == "" || isNaN(height))
    result.innerHTML = "Invalid height input";
  else if (weight == "" || isNaN(weight))
    result.innerHTML = "Invalid weight input";
    
  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) result.innerHTML = `Underweight: <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `Normal: <span>${bmi}</span>`;
    else result.innerHTML = `Overweight: <span>${bmi}</span>`
  }
}
