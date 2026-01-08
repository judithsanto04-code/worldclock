function updateTime() {
  // Pretoria
  let pretoriaElement = document.querySelector("#pretoria");
  if (pretoriaElement) {
    let pretoriaDateElement = pretoriaElement.querySelector(".date");
    let pretoriaTimeElement = pretoriaElement.querySelector(".time");
    let pretoriaTime = moment().tz("South Africa/Pretoria");

    pretoriaDateElement.innerHTML = pretoriaTime.format("MMMM	Do YYYY");
    pretoriaTimeElement.innerHTML = pretoriaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Harare
  let harareElement = document.querySelector("#harare");
  if (harareElement) {
    let harareDateElement = harareElement.querySelector(".date");
    let harareTimeElement = HTMLParagraphElementElement.querySelector(".time");
    let harareTime = moment().tz("Zimbabwe/Harare");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);