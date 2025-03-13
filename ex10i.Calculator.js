let calculation = localStorage.getItem('calculation') || '';
            document.querySelector('.result').innerHTML = calculation;

            function updateCalculation (value) {
                calculation += value;
                console.log(calculation);
                localStorage.setItem('calculation', calculation);
                document.querySelector('.result').innerHTML = calculation;
            }
            