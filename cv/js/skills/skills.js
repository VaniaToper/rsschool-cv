const skillsJavaScript = document.querySelector('.skills__js');
const skillsHtml = document.querySelector('.skills__html');
const skillsCss = document.querySelector('.skills__css');
const skillsScss = document.querySelector('.skills__scss');
const skillsGit = document.querySelector('.skills__git');
const skillsIcon = document.querySelector('.skills__icon');
const exampleCode = document.querySelector('.example__code');

const skillsChange = (way, code) => {
  exampleCode.classList.remove('skills-anim-up');
  skillsIcon.src = way;
  exampleCode.classList.add('skills-anim-down');
  exampleCode.innerHTML = code;
};
const skillsChangeUp = () => {
  exampleCode.classList.remove('skills-anim-down');
  exampleCode.classList.add('skills-anim-up');
};

skillsJavaScript.addEventListener('mouseover', () => {
  skillsChange(
    'assets/skills/js.png',
    `const progressUpdate = () => {
    const { currentTime, duration } = video;
    const x = (currentTime / duration) * 100;
    videoProgress.style.background = getColor(x);
    if (!videoMousedown) {
      videoProgress.value = x;
    }
  };`
  );
});

skillsJavaScript.addEventListener('mouseout', () => {
  console.log('bro');
  exampleCode.classList.remove('skills-anim-down');
  exampleCode.classList.add('skills-anim-up');
});

skillsHtml.addEventListener('mouseover', () => {
  skillsChange(
    'assets/skills/html.png',
    `&lt;ul class="skills__list"&gt;
  &lt;li&gt;&lt;h3 class="skills__js"&gt;JavaScript&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 class="skills__html"&gt;HTML&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 class="skills__css"&gt;CSS&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 class="skills__scss"&gt;SCSS&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 class="skills__git"&gt;Git&lt;/h3&gt;&lt;/li&gt;
&lt;/ul&gt;`
  );
});

skillsHtml.addEventListener('mouseout', () => {
  console.log('bro');
  exampleCode.classList.remove('skills-anim-down');
  exampleCode.classList.add('skills-anim-up');
});

skillsCss.addEventListener('mouseover', () => {
  skillsChange(
    'assets/skills/css.png',
    `.booking .tickets-type__list {
  max-height: 0;
  width: 100%;
  overflow: hidden;
  -webkit-transition: max-height 0.2s ease-out;
  transition: max-height 0.2s ease-out;
}`
  );
});

skillsCss.addEventListener('mouseout', () => {
  console.log('bro');
  exampleCode.classList.remove('skills-anim-down');
  exampleCode.classList.add('skills-anim-up');
});

skillsScss.addEventListener('mouseover', () => {
  skillsChange(
    'assets/skills/scss.png',
    `@import "../js/projects/projects.scss";
@import "footer/footer.scss";
body {
  overflow-x: hidden;
  background: $darkWhite;
  font-family: Poppins;
}`
  );
});

skillsScss.addEventListener('mouseout', () => {
  console.log('bro');
  exampleCode.classList.remove('skills-anim-down');
  exampleCode.classList.add('skills-anim-up');
});

skillsGit.addEventListener('mouseover', () => {
  skillsIcon.src = 'assets/skills/git.png';
});
