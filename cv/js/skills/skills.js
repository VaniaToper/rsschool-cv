const skillsjavaScript = document.querySelector('.skills__js');
const skillsHtml = document.querySelector('.skills__html');
const skillsCss = document.querySelector('.skills__css');
const skillsScss = document.querySelector('.skills__scss');
const skillsGit = document.querySelector('.skills__git');
const skillsIcon = document.querySelector('.skills__icon');

skillsjavaScript.addEventListener('mouseover', () => {
  skillsIcon.src = 'assets/skills/js.png'
});
skillsHtml.addEventListener('mouseover', () => {
  skillsIcon.src = 'assets/skills/html.png'
});
skillsCss.addEventListener('mouseover', () => {
  skillsIcon.src = 'assets/skills/css.png'
});
skillsScss.addEventListener('mouseover', () => {
  skillsIcon.src = 'assets/skills/scss.png'
});
skillsGit.addEventListener('mouseover', () => {
  skillsIcon.src = 'assets/skills/git.png'
});
