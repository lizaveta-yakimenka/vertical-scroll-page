const scrollContainer = document.querySelector("body");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

fitText(document.querySelector("p"), 0.38);
