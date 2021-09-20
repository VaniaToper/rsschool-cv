const skillsJavaScript = document.querySelector('.skills__js');
const skillsHtml = document.querySelector('.skills__html');
const skillsCss = document.querySelector('.skills__css');
const skillsScss = document.querySelector('.skills__scss');
const skillsGit = document.querySelector('.skills__git');
const skillsIcon = document.querySelector('.skills__icon');
const exampleCode = document.querySelector('.example__code');

const skills = {
  js: `const progressUpdate = () =&gt; {
    const { currentTime, duration } = video;
    const x = (currentTime / duration) * 100;
    videoProgress.style.background = getColor(x);
    if (!videoMousedown) {
      videoProgress.value = x;
    }
  };`,
  html: `&lt;ul class="skills__list"&gt;
  &lt;li&gt;&lt;h3 class="skills__js"&gt;JavaScript&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 class="skills__html"&gt;HTML&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 class="skills__css"&gt;CSS&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 class="skills__scss"&gt;SCSS&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 class="skills__git"&gt;Git&lt;/h3&gt;&lt;/li&gt;
&lt;/ul&gt;`,
  css: `.booking .tickets-type__list {
    max-height: 0;
    width: 100%;
    overflow: hidden;
    -webkit-transition: max-height 0.2s ease-out;
    transition: max-height 0.2s ease-out;
  }`,
  scss: `@import "../js/projects/projects.scss";
@import "footer/footer.scss";
body {
  overflow-x: hidden;
  background: $darkWhite;
  font-family: Poppins;
}`,
}


const skillsChangeOpen = (way, code) => {
  exampleCode.classList.remove('skills-anim-close');
  skillsIcon.src = way;
  exampleCode.classList.add('skills-anim-open');
  exampleCode.innerHTML = code;
};
const skillsChangeClose = () => {
  exampleCode.classList.remove('skills-anim-open');
  exampleCode.classList.add('skills-anim-close');
};

skillsJavaScript.addEventListener('mouseover', () => {
  console.log(exampleCode.innerHTML);
  if (exampleCode.innerHTML != skills.js) {
    skillsChangeClose();
    setTimeout(() => {
      skillsChangeOpen('assets/skills/js.png', skills.js);
    }, 300);
  }
});

skillsHtml.addEventListener('mouseover', () => {
  if (exampleCode.innerHTML != skills.html) {
    skillsChangeClose();
    setTimeout(() => {
      skillsChangeOpen('assets/skills/html.png', skills.html);
    }, 300);
  }
});

skillsCss.addEventListener('mouseover', () => {
  if (exampleCode.innerHTML != skills.css) {
    skillsChangeClose();
    setTimeout(() => {
      skillsChangeOpen('assets/skills/css.png', skills.css);
    }, 300);
  }

});

skillsScss.addEventListener('mouseover', () => {
  if (exampleCode.innerHTML != skills.scss) {
    skillsChangeClose();
    setTimeout(() => {
      skillsChangeOpen('assets/skills/scss.png', skills.scss);
    }, 300);
  }
});

skillsGit.addEventListener('mouseover', () => {
  skillsIcon.src = 'assets/skills/git.png';
});
