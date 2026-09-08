document.getElementById('year').textContent = new Date().getFullYear();

const revealSelectors = 'section h2, section h3, .benefit-card, .gallery img, .stat-card, .quote, .visite-photo, .content-photo, .banner-photo, .video-embed, .partner-logo, .media-photo, .media-photo-pair img';
const revealEls = document.querySelectorAll(revealSelectors);
revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 6) * 0.08}s`;
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => revealObserver.observe(el));
