// Get the button element
const colorButton = document.getElementById('colorButton');
// console.log(colorButton)

// Function to generate a random color
const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

// Function to change the background color
const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}

// Attach a click event to the button
colorButton.addEventListener('click', changeBackgroundColor)
