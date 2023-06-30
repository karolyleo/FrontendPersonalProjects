const urlParams = new URLSearchParams(window.location.search),
    rating = urlParams.get('rating'),
    rate = document.getElementById("rate");
rate.innerHTML = rating;
// alert(rating);

