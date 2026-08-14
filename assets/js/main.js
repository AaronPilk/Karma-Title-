/* Karma Title — interactions */
(function () {
  "use strict";
  var doc = document, body = doc.body;

  /* Sticky glass header */
  var header = doc.querySelector(".header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile menu */
  var toggle = doc.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      body.classList.toggle("menu-open");
    });
    doc.querySelectorAll(".mobile-menu a").forEach(function (a) {
      a.addEventListener("click", function () { body.classList.remove("menu-open"); });
    });
  }

  /* Scroll reveal */
  var reveals = doc.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Pointer parallax on hero float cards */
  var visual = doc.querySelector(".hero-visual");
  if (visual && window.matchMedia("(pointer:fine)").matches) {
    var cards = visual.querySelectorAll(".float-card, .hero-photo");
    visual.addEventListener("mousemove", function (ev) {
      var r = visual.getBoundingClientRect();
      var x = (ev.clientX - r.left) / r.width - 0.5;
      var y = (ev.clientY - r.top) / r.height - 0.5;
      cards.forEach(function (c, i) {
        var depth = c.classList.contains("hero-photo") ? 6 : 16 + i * 6;
        c.style.transform = "translate(" + (-x * depth) + "px," + (-y * depth) + "px)";
      });
    });
    visual.addEventListener("mouseleave", function () {
      cards.forEach(function (c) { c.style.transform = ""; });
    });
  }

  /* Subtle 3D tilt on cards */
  if (window.matchMedia("(pointer:fine)").matches) {
    doc.querySelectorAll("[data-tilt]").forEach(function (card) {
      card.addEventListener("mousemove", function (ev) {
        var r = card.getBoundingClientRect();
        var x = (ev.clientX - r.left) / r.width - 0.5;
        var y = (ev.clientY - r.top) / r.height - 0.5;
        card.style.transform = "translateY(-8px) rotateX(" + (-y * 5) + "deg) rotateY(" + (x * 5) + "deg)";
      });
      card.addEventListener("mouseleave", function () { card.style.transform = ""; });
    });
  }

  /* Accordion */
  doc.querySelectorAll(".acc-head").forEach(function (head) {
    head.addEventListener("click", function () {
      var item = head.closest(".acc-item");
      var body = item.querySelector(".acc-body");
      var isOpen = item.classList.contains("open");
      // close siblings within same accordion
      var group = item.closest(".accordion");
      if (group) {
        group.querySelectorAll(".acc-item.open").forEach(function (o) {
          if (o !== item) { o.classList.remove("open"); o.querySelector(".acc-body").style.maxHeight = null; }
        });
      }
      if (isOpen) { item.classList.remove("open"); body.style.maxHeight = null; }
      else { item.classList.add("open"); body.style.maxHeight = body.scrollHeight + "px"; }
    });
  });

  /* Contact form (demo, mailto fallback) */
  var form = doc.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = form.querySelector(".form-ok");
      if (ok) ok.classList.add("show");
      var data = new FormData(form);
      var body = "Name: " + (data.get("name")||"") + "%0D%0APhone: " + (data.get("phone")||"") +
                 "%0D%0AEmail: " + (data.get("email")||"") + "%0D%0A%0D%0A" + (data.get("message")||"");
      window.location.href = "mailto:orders@karmatitle.com?subject=Website%20Inquiry%20-%20Karma%20Title&body=" + body;
      form.reset();
    });
  }

  /* Footer year */
  var yr = doc.querySelector("#year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
