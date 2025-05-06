function clickFunction() {
    let bg = document.getElementById("background");
    console.log(bg);
    let colors = ["red", "green", "blue", "yellow", "pink", "purple"];

    const colorIndex =
        (Math.random() * colors.length);
    bg.style.backgroundColor =
        colors[colorIndex];}

// This function will change the background color of the div with id "background" to a random color from the colors array.