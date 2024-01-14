document.getElementById("convertButton").onclick = function () {    //definicja tego co ma się stać po kliknięciu w przycis Convert, jego id to "convertBuutn"

  let temp;

if (document.getElementById("cButton").checked) {  //co ma się stać jeśli c jest zaznaczone

  temp = document.getElementById("temp").value; //pobranie temperatury i przetymanie jej zmeinnej temp
  temp = Number(temp); //zmiana stringu na liczbę
  temp = toCelsius(temp) // wywołanie fukcji liczącej f na c

  document.getElementById("output").innerHTML = temp + "°C"  //display
  
} else if (document.getElementById("fButton").checked) { //co ma sie stac jesli f jest zaznaczone

  temp = document.getElementById("temp").value; //pobranie temperatury i przetymanie jej zmeinnej temp
  temp = Number(temp); //zmiana stringu na liczbę
  temp = toFahrenheit(temp) // wywołanie fukcji liczącej f na c

  document.getElementById("output").innerHTML = temp + "°F"  //display
  

}
else { // co ma sie stać jesli nic nie jest zaznaczone

  document.getElementById("output").innerHTML = "Please select a unit."

}

};


function toCelsius (temp) {

  return (temp - 32) * (5/9);

}

function toFahrenheit (temp) {

  return temp * 9/5 + 32

}