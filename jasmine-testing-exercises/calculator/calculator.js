window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  };
}

function setupIntialValues() {
  // Put some default values in the inputs
  const defaultValues = {
    amount: 5000,
    year: 4,
    rate: 2.9,
  };
  // Get the inputs from the DOM.
  const loanAmount = document.getElementById('loan-amount');
  loanAmount.value = defaultValues.amount;
  const termYears = document.getElementById('loan-years');
  termYears.value = defaultValues.year;
  const yearlyRate = document.getElementById('loan-rate');
  yearlyRate.value = defaultValues.rate;
  // Call a function to calculate the current monthly payment
  update();
}

function update() {
  // Get the current values from the UI
  const currentValuesIU = getCurrentUIValues();
  // Update the monthly payment
  updateMonthly(calculateMonthlyPayment(currentValuesIU));
}

function calculateMonthlyPayment(values) {
  // Given an object of values (a value has amount, years and rate ),
  const monthlyRate = values.rate / 100 / 12;
  console.log(monthlyRate);
  const n = Math.floor(values.years * 12);
  console.log(n);
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.

  return (
    (values.amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -n))
  ).toFixed(2);
}

function updateMonthly(monthly) {
  console.log(monthly);
  // update the UI to show the value.
  const monthlyUI = document.getElementById('monthly-payment');
  // Given a string representing the monthly payment value,
  monthlyUI.innerText = `$ ${monthly}`;
}
