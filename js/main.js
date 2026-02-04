const skillBars = document.querySelectorAll(".bar div");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.dataset.level;
        entry.target.style.width = level + "%";
      }
    });
  },
  { threshold: 0.4 }
);

skillBars.forEach(bar => observer.observe(bar));
