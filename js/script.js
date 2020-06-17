var calcolaBtn = document.getElementById('calcolaBiglietto');
var cancellaBtn = document.getElementById("cancellaBiglietto");

calcolaBtn.addEventListener("click", function () {
  var kmCosto = 0.21;
  var name = document.getElementById("name").value;
  var km = document.getElementById("km").value;
  var category = document.getElementById("category").value;
  var bigliettoInt =(km * kmCosto).toFixed(2);
  var minCarrozza = 1;
  var maxCarrozza = 10;
  var minTrainNumber = 90000;
  var maxTrainNumber = 100000;

  if (category == "Minorenne") {
    bigliettoInt = bigliettoInt - (bigliettoInt * 0.2).toFixed(2);
  } else if (category == "Over65") {
    bigliettoInt = bigliettoInt - (bigliettoInt * 0.4).toFixed(2);
  }

  var trainNumber = Math.floor(Math.random() * (maxTrainNumber - minTrainNumber + 1)) + minTrainNumber;
  var carrozza = Math.floor(Math.random() * (maxCarrozza - minCarrozza + 1)) + minCarrozza;

  document.getElementById("passenger").innerHTML = name;
  document.getElementById("trainNumber").innerHTML = trainNumber;
  document.getElementById("carrozza").innerHTML = carrozza;
  document.getElementById("ticketPrice").innerHTML = bigliettoInt + " €";
  document.getElementById("passengerCategory").innerHTML = category;

  document.getElementById("ticket").className = "show";

});

cancellaBtn.addEventListener("click", function () {
  document.getElementById("ticket").className = "hidden";
  document.getElementById("name").value = "";
  document.getElementById("km").value = "";
  document.getElementById("category").value = "Maggiorenne";
});
