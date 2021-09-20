const skillsJavaScript = document.querySelector('.skills__js');
const skillsHtml = document.querySelector('.skills__html');
const skillsCss = document.querySelector('.skills__css');
const skillsScss = document.querySelector('.skills__scss');
const skillsGit = document.querySelector('.skills__git');
const skillsIcon = document.querySelector('.skills__icon');
const exampleCode = document.querySelector('.example__code');

const skills = {
  js: `<span style="color: #F85C50">const</span> progressUpdate = () =&gt; {
    <span style="color: #F85C50">const</span> { currentTime, duration } = video;
    <span style="color: #F85C50">const</span> x = (currentTime / duration) * 100;
    videoProgress.<span style="color: #64C7FF">style</span>.<span style="color: #64C7FF">background</span> = getColor(x);
    <span style="color: #A7E541">if</span> (!videoMousedown) {
      videoProgress.value = x;
    }
  };`,
  html: `&lt;ul <span style="color: #F85C50">class</span>="<span style="color: #B5FBDD">skills__list</span>"&gt;
  &lt;li&gt;&lt;h3 <span style="color: #F85C50">class</span>="<span style="color: #B5FBDD">skills__js</span>"&gt;JavaScript&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 <span style="color: #F85C50">class</span>="<span style="color: #B5FBDD">skills__html</span>"&gt;HTML&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 <span style="color: #F85C50">class</span>="<span style="color: #B5FBDD">skills__css</span>"&gt;CSS&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 <span style="color: #F85C50">class</span>="<span style="color: #B5FBDD">skills__scss</span>"&gt;SCSS&lt;/h3&gt;&lt;/li&gt;
  &lt;li&gt;&lt;h3 <span style="color: #F85C50">class</span>="<span style="color: #B5FBDD">skills__git</span>"&gt;Git&lt;/h3&gt;&lt;/li&gt;
&lt;/ul&gt;`,
  css: `<span style="color: #F85C50">.booking .tickets-type__list</span> {
    <span style="color: #B5FBDD">max-height</span>: 0;
    <span style="color: #B5FBDD">width</span>: 100%;
    <span style="color: #B5FBDD">overflow</span>: hidden;
    <span style="color: #B5FBDD">-webkit-transition</span>: max-height 0.2s ease-out;
    <span style="color: #B5FBDD">transition</span>: max-height 0.2s ease-out;
  }`,
  scss: `<span style="color: #64C7FF">@import</span> "../js/projects/projects.scss";
  <span style="color: #64C7FF">@import</span> "footer/footer.scss";
  <span style="color: #F85C50">body</span> {
    <span style="color: #B5FBDD">overflow-x</span>: hidden;
    <span style="color: #B5FBDD">background</span>: $darkWhite;
    <span style="color: #B5FBDD">font-family</span>: Poppins;
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
