document.getElementById('calculateBtn').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const morphology = document.querySelector('input[name="morphology"]:checked').value;

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const subtract = data.values.subtract;
            const divide = data.values.divide;
            const multiply = data.values.multiply;

            let idealWeight;
            let factor = 1;
            if (morphology === 'mince') {
                factor = 0.9;
            } else if (morphology === 'large') {
                factor = 1.1;
            }

            idealWeight = ((height - subtract) + (age / divide)) * multiply * factor;
            document.getElementById('idealWeight').textContent =` ${idealWeight.toFixed(1)} kg`;
        });
});
