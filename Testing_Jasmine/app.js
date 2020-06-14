function calculateTaxes(income) {
  if (!Number.isFinite(income)) {
    throw new Error('Invalid Income');
  }
  if (income > 30000) {
    return income * 0.25;
  } else {
    return income * 0.15;
  }
}

// removeDupes with numbers
// function removeDupes(values) {
//   return [...new Set(values)];
// }

//removeDupes with strings
function removeDupes(values) {
  const arr = [...new Set(values)];
  if (typeof values === 'string') return arr.join('');
  return arr;
}

function remove(arr, val) {
  return arr.filter((el) => {
    return el !== val;
  });
}

// Input function
let usernames = [];
let input = document.getElementById('username');

function submitForm() {
  usernames.push(input.value);
}

function append(arr, val) {
  arr.push(val);
}

function appendPure(arr, val) {
  return [...arr, val];
}
