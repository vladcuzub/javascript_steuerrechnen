'use strict'

const form = document.querySelector('.form_submit');
const netBtn = document.querySelector('.net_btn');
const netoText = document.querySelector('.neto_text');
const brutBtn = document.querySelector('.brut_btn');
const brutnetText = document.querySelector('.result_brut_net_text');


const changeNetBrut = () => {
  if (netBtn.checked) {
    netoText.textContent = "Nettobetrag (Preis ohne Mehrwersteuer) in Euro";
    brutnetText.textContent = "Nettobetrag";
  } else {
    netoText.textContent = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
    brutnetText.textContent = "Nettobetrag:";
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const calculationType = document.querySelector('input[name="select"]:checked').value;
  const taxRate = parseFloat(document.querySelector('input[name="mehr_st"]:checked').value);
  const netAmount = parseFloat(document.getElementById('lohn').value);
  let taxAmount;
  let grossAmount;


  if (calculationType === 'netto') {
    taxAmount = netAmount * (taxRate / 100);
    grossAmount = netAmount + taxAmount;
  } else {
    taxAmount = netAmount / (1 + taxRate / 100) * (taxRate / 100);
    grossAmount = netAmount - taxAmount;
  }

  const taxResult = document.getElementById('steuer_result');
  taxResult.innerHTML = taxAmount.toFixed(2) + ' €';

  const grossResult = document.getElementById('brutto_result');
  grossResult.innerHTML = grossAmount.toFixed(2) + ' €';
});

netBtn.addEventListener('click', changeNetBrut)
brutBtn.addEventListener('click', changeNetBrut)