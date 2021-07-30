{/* <span id="temp" class="fawsm"></span> */ }

const tempLoad = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = `<i class="fas fa-thermometer-empty"></i>`;
    temp.style.color =`white`
    setTimeout(() => {
        temp.innerHTML = `<i class="fas fa-thermometer-quarter"></i>`;
        temp.style.color = `rgb(248, 174, 83)`
    }, 1000);

    setTimeout(() => {
        temp.innerHTML = `<i class="fas fa-thermometer-half"></i>`;
        temp.style.color = `rgb(240, 157, 33)`
    }, 2000);

    setTimeout(() => {
        temp.innerHTML = `<i class="fas fa-thermometer-three-quarters"></i>`;
        temp.style.color = `rgb(228, 107, 8)`
    }, 3000);

    setTimeout(() => {
        temp.innerHTML = `<i class="fas fa-thermometer-full"></i>`;
        temp.style.color = `rgba(185, 8, 8, 0.979)`
    }, 4000);
}


tempLoad();

setInterval(tempLoad, 5000); // This is we used for infinite loop