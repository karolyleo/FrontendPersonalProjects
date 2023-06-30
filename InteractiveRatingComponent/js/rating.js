
let rating;
document.addEventListener('DOMContentLoaded', ()=> {
    const buttons = document.querySelectorAll('.circle');
     rating = document.getElementById("val");

// Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Access the value associated with the button and console.log it
            rating.value = button.value;

            buttons.forEach(function(btn) {
                btn.classList.remove('clicked');
            });

            button.classList.add('clicked')
        });
    });
})