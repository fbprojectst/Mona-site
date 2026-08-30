// Hero slider
(function () {
  const track = document.getElementById('sliderTrack');
  const dotsContainer = document.getElementById('sliderDots');
  if (!track || !dotsContainer) return;

  const slides = track.children;
  const count = slides.length;
  let index = 0;

  for (let i = 0; i < count; i++) {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  function goTo(i) {
    index = i;
    track.style.transform = `translateX(${index * 100}%)`;
    Array.from(dotsContainer.children).forEach((d, di) =>
      d.classList.toggle('active', di === index)
    );
  }

  function next() {
    goTo((index + 1) % count);
  }

  setInterval(next, 4000);
})();

// Mobile nav toggle
(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
})();
