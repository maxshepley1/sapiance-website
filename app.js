/* Sapiance Capital — tiny progressive-enhancement script.
   Self-contained, no external dependencies, no tracking.
   - Adds a soft shadow to the header once the page is scrolled.
   - Reveals main content as it scrolls into view (skipped when the
     visitor prefers reduced motion, and degrades gracefully with no JS). */
(function () {
  "use strict";

  // Header shadow on scroll
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var targets = document.querySelectorAll("main > *");
  if (!targets.length) return;

  // If motion is reduced or IntersectionObserver is unavailable, just show it.
  if (reduce || !("IntersectionObserver" in window)) {
    for (var i = 0; i < targets.length; i++) targets[i].classList.add("in-view");
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  targets.forEach(function (el) { io.observe(el); });

  // Safety net: if anything goes wrong, reveal everything after load.
  window.addEventListener("load", function () {
    setTimeout(function () {
      for (var i = 0; i < targets.length; i++) targets[i].classList.add("in-view");
    }, 1200);
  });
})();
