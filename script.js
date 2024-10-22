const firstCurrencyEl = document.getElementById("currency-one");
const secondCurrencyEl = document.getElementById("currency-two");
const inputFieldEl = document.getElementById("amount-one");
const exchangeResultsEl = document.getElementById("amount-two");
const exchangeRateEl = document.getElementById("exchange-rate");

const apiKey = "Your_APIKEY";

const getCurrencies = async () => {
  try {
    let response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${firstCurrencyEl.value}`
    );
    let data = await response.json();

    const rate = data.conversion_rates[secondCurrencyEl.value];

    exchangeRateEl.innerText = `1 ${firstCurrencyEl.value} = ${rate} ${secondCurrencyEl.value}`;
    exchangeResultsEl.value = (inputFieldEl.value * rate).toFixed(2);
  } catch (error) {
    exchangeRateEl.innerHTML = 'An error occured. Please try again later.';
  }
};

getCurrencies();

firstCurrencyEl.addEventListener("change", getCurrencies);
secondCurrencyEl.addEventListener("change", getCurrencies);
inputFieldEl.addEventListener("input", getCurrencies);
