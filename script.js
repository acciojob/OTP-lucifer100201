let inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (e.target.value.length === 1) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === 'Backspace' && input.value.length === 0) {
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});

// Add this line to focus on the first input initially
inputs[0].focus();
