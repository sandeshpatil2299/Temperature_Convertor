const farToCel = (val) => 
{
   return Math.round(((val - 32) * (5 / 9)));
}

const celToFar = (val) => 
{
   return Math.round(((val * (9 / 5)) + 32));
}

const temperature = () => 
{
   let tempInput = document.getElementById("temp").value;
   let tempType = document.getElementById("tempType");
   let typeValue = tempType.options[tempType.selectedIndex].value

   let result;

   if (typeValue == "cel") 
   {
      result = celToFar(tempInput);
      let showAnswer = document.getElementById("showAnswer");
      showAnswer.innerHTML = `= ${result} °Farenheit`;
   }
   else 
   {
      result = farToCel(tempInput);
      let showAnswer = document.getElementById("showAnswer");
      showAnswer.innerHTML = `= ${result} °Celsius`;
   }
}



