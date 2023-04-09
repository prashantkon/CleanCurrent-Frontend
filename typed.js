var typingEffect = new Typed(".multiText", {
    strings: ["Cleaning".bold(), "Sorting".bold(), "Improving".bold(), "Saving".bold(), "Innovating".bold(), "Sustaining".bold()],
    loop: true,
    typeSpeed: 90,
    backSpeed: 80,
    startDelay: 2000,
    backDelay: 2000,
    onLastStringBackspaced: (self) => {}
});