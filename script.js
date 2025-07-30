let selectedRating=0;
 const starsContainerRef = document.querySelector('.star-container');
const starCountRef = document.getElementById('count');

// Sabse pehle stars bharna hai 
function fillStars(uptoIdx){
    const stars = document.querySelectorAll('.star')
    stars.forEach(star => {
        const starsIdx = parseInt(star.getAttribute('data-index'));
        if (starsIdx<=uptoIdx)
        {
            star.classList.add('star-filled');
        }
        else
        {
            star.classList.remove('star-filled');
        }
    })  
}
// Hover ka event listenr

starsContainerRef.addEventListener('mouseover', (e) =>{
   if (e.target.classList.contains('star')){
    const hoverIdx = parseInt(e.target.getAttribute('data-index'));
    fillStars(hoverIdx);
   }
})
// Click ka event listenr
starsContainerRef.addEventListener('click', (e)=>{
    if (e.target.classList.contains('star'))
        selectedRating = parseInt(e.target.getAttribute('data-index'));
    starCountRef.textContent = selectedRating;
    fillStars(selectedRating);
})
// Stars reset ka event listenr mouseleave hone p 
starsContainerRef.addEventListener('mouseleave', () => {
    fillStars(selectedRating);
})