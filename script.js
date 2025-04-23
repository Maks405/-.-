function calculateSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Будь ласка, введіть обидва числа!";
  } else {
    result.textContent = `Сума: ${num1 + num2}`;
  }
}
