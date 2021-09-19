const projectsMuseum = document.querySelector('.projects__museum');
const projectsVideoPlayer = document.querySelector('.projects__video-player');
const projectsVerticalSlider = document.querySelector('.projects__vertical-slider');
const projectsIndicius = document.querySelector('.projects__indicius');
const projectImage = document.querySelector('.projects__image')

projectsMuseum.addEventListener('mouseover', () => {
    projectImage.style.background = 'url(assets/projects/vertical-slider.png)center center no-repeat;'
});
projectsVideoPlayer.addEventListener('mouseover', () => {
    projectImage.style.background = 'url(assets/projects/video-player.png)center center no-repeat;'
});
projectsVerticalSlider.addEventListener('mouseover', () => {
    projectsVerticalSlider.src = 'assets/skills/css.png'
});
projectsIndicius.addEventListener('mouseover', () => {
    projectsIndicius.src = 'assets/skills/scss.png'
});
