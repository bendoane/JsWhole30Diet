const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  if (this.classList.contains('open')) {
    this.classList.toggle('open');
  } else {
    closePanels();
    this.classList.toggle('open');
  }
}

function closePanels() {
  panels.forEach(panel => panel.classList.remove('open'))
}

function toggleOpenActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));
