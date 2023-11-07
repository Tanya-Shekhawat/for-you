const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    const confirmation = confirm("Click for a 🎉🎊 Surprise! 🎊🎉 :) ");
    
    if (confirmation) {
        // User clicked OK, so navigate to 'flower.html'
        window.location.href = "flower.html";
    } else {
        // User clicked Cancel or closed the dialog
        // You can add handling for this case if needed
    }
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

window.onload = function() {
    document.getElementById("audio").play();
}