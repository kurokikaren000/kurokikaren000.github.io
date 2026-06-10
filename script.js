/* =====================================================
   黒跪カレン Official Links — script.js
   軽量アニメーション / 開閉パネル / 現在地表示
   外部ライブラリ不使用
   ===================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 現在年 */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* 外部リンクの安全属性 */
  var externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach(function (link) {
    link.setAttribute("rel", "noopener noreferrer");
    if (!link.hasAttribute("target")) link.setAttribute("target", "_blank");
  });

  /* 上へ戻るボタン */
  var toTop = document.querySelector(".to-top");
  var updateToTop = function () {
    if (!toTop) return;
    toTop.classList.toggle("is-visible", window.scrollY > 480);
  };
  updateToTop();
  window.addEventListener("scroll", updateToTop, { passive: true });

  /* スクロールでふわっと表示 */
  var revealTargets = document.querySelectorAll(
    ".profile, .block, .card, .support-card, .panel, .btn-row"
  );

  revealTargets.forEach(function (item, index) {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-delay", Math.min(index % 4, 3) * 70 + "ms");
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (item) {
      item.classList.add("is-revealed");
    });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08
    });

    revealTargets.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  /* BOOKINGのA/B/Cと活動実績カテゴリを開閉式にする */
  var accordionPanels = [];

  document.querySelectorAll("#booking .panel").forEach(function (panel) {
    var heading = panel.querySelector(":scope > .panel-h");
    if (heading && /^[ABC]\./.test(heading.textContent.trim())) {
      accordionPanels.push(panel);
    }
  });

  document.querySelectorAll("#profile .panel").forEach(function (panel, index) {
    var heading = panel.querySelector(":scope > .panel-h");
    if (index > 0 && heading) accordionPanels.push(panel);
  });

  accordionPanels.forEach(function (panel, index) {
    var heading = panel.querySelector(":scope > .panel-h");
    if (!heading) return;

    var contentNodes = [];
    Array.from(panel.children).forEach(function (child) {
      if (child !== heading) contentNodes.push(child);
    });

    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "accordion-trigger";

    var headingClone = heading.cloneNode(true);
    var icon = document.createElement("span");
    icon.className = "accordion-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "+";

    trigger.appendChild(headingClone);
    trigger.appendChild(icon);

    var content = document.createElement("div");
    content.className = "accordion-content";

    var inner = document.createElement("div");
    inner.className = "accordion-inner";

    contentNodes.forEach(function (node) {
      inner.appendChild(node);
    });
    content.appendChild(inner);

    heading.remove();
    panel.appendChild(trigger);
    panel.appendChild(content);
    panel.classList.add("is-accordion");

    /* 最初のAだけ開く。実績は閉じて一覧性を優先 */
    var startsOpen = panel.closest("#booking") && index === 0;
    trigger.setAttribute("aria-expanded", startsOpen ? "true" : "false");

    trigger.addEventListener("click", function () {
      var open = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!open));
    });
  });

  /* 上部ナビの現在地表示 */
  var navLinks = Array.from(document.querySelectorAll(".topnav a[href^='#']"));
  var sections = navLinks.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  var setActiveNav = function () {
    var marker = window.scrollY + 110;
    var current = sections[0];

    sections.forEach(function (section) {
      if (section.offsetTop <= marker) current = section;
    });

    navLinks.forEach(function (link) {
      var active = current &&
        link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  setActiveNav();
  window.addEventListener("scroll", setActiveNav, { passive: true });
  window.addEventListener("resize", setActiveNav);

  /* ナビを押したとき、対象を少し上品に強調 */
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var target = document.querySelector(link.getAttribute("href"));
      if (!target || reduceMotion) return;

      target.animate([
        { filter: "brightness(1)" },
        { filter: "brightness(1.16)" },
        { filter: "brightness(1)" }
      ], {
        duration: 650,
        easing: "ease-out"
      });
    });
  });
})();
