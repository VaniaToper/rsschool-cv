const projectsMuseum = document.querySelector('.projects__museum');
const projectsVideoPlayer = document.querySelector('.projects__video-player');
const projectsVerticalSlider = document.querySelector(
  '.projects__vertical-slider'
);
const projectsIndicius = document.querySelector('.projects__indicius');
const projectsImage = document.querySelector('.projects__image');
const projectsURL = document.querySelector('.projects__links')

const projects = {
  museum: 'assets/projects/museum.png',
  videoPlayer: 'assets/projects/video-player.png',
  verticalSlider: 'assets/projects/vertical-slider.png',
  indicius: 'assets/projects/indicius.png',
};

const projectsLinks = {
  museum:
    'https://rolling-scopes-school.github.io/vaniatoper-JSFEPRESCHOOL/museum/Museum',
  videoPlayer:
    'https://rolling-scopes-school.github.io/vaniatoper-JSFEPRESCHOOL/custom-video-player/index',
  verticalSlider:
    'https://rolling-scopes-school.github.io/vaniatoper-JSFEPRESCHOOL/vertical-slider/index',
  indicius: 'https://vaniatoper.github.io/Indicius/Indicius',
};

const projectsChangeOpen = (
  way = 'assets/projects/museum.png',
  link = 'https://rolling-scopes-school.github.io/vaniatoper-JSFEPRESCHOOL/museum/Museum'
) => {
  projectsImage.classList.remove('projects-anim-close');
  projectsImage.src = way;
  projectsURL.href = link;
  projectsImage.classList.add('projects-anim-open');
};

const projectsChangeClose = () => {
  projectsImage.classList.remove('projects-anim-open');
  projectsImage.classList.add('projects-anim-close');
};

projectsMuseum.addEventListener('mouseover', () => {
  if (projectsImage.src != projects.museum) {
    projectsChangeClose();
    setTimeout(() => {
      projectsChangeOpen(projects.museum, projectsLinks.museum);
    }, 300);
  }
});

projectsVideoPlayer.addEventListener('mouseover', () => {
  if (projectsImage.src != projects.videoPlayer) {
    projectsChangeClose();
    setTimeout(() => {
      projectsChangeOpen(projects.videoPlayer, projectsLinks.videoPlayer);
    }, 300);
  }
});

projectsVerticalSlider.addEventListener('mouseover', () => {
  if (projectsImage.src != projects.verticalSlider) {
    projectsChangeClose();
    setTimeout(() => {
      projectsChangeOpen(projects.verticalSlider, projectsLinks.verticalSlider);
    }, 300);
  }
});

projectsIndicius.addEventListener('mouseover', () => {
  if (projectsImage.src != projects.indicius) {
    projectsChangeClose();
    setTimeout(() => {
      projectsChangeOpen(projects.indicius, projectsLinks.indicius);
    }, 300);
  }
});
projectsChangeOpen();
