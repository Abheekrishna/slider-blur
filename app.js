const image = document.getElementById('image');
const slider = document.getElementById('slider');



slider.addEventListener('input', () => {
    console.log(slider.value);
    image.style.filter = `blur(${slider.value}%)`;
})