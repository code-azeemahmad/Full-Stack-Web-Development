const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".message");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
};

const updateFlag = (element) => {
    let currCode = element.value;
    let countCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click",async (event) => {
    event.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    if (amtValue === "" || amtValue < "1") {
        amtValue = 1;
        amount.value = "1";
    }
    // // console.log(fromCurr.value, toCurr.value)
    // const URL = `${BASE_URL}/currencies/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    // let response = await fetch(URL);
    // console.log(response);

        // fetch conversion rates for base currency
    const URL = `${BASE_URL}/currencies/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = Math.floor(amtValue * rate);
    msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});