/* =====================================================
   黒跪カレン Official Links — script.js
   必要最小限の機能のみ。JSが無効でも主要情報は閲覧できます。
   ===================================================== */
(function () {
  "use strict";

  // JSが有効なことを示す（CSSの初期表示制御に使用）
  document.documentElement.classList.remove("no-js");

  // 現在の年を自動表示（フッターの著作権表記）
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // 「上へ戻る」ボタンを、少しスクロールしたら表示する
  var toTop = document.querySelector(".to-top");
  if (toTop) {
    var onScroll = function () {
      if (window.pageYOffset > 480) toTop.classList.add("is-visible");
      else toTop.classList.remove("is-visible");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // 安全策：外部リンク（http/https）に rel を補完
  // ※HTML側で既に target/rel を指定済み。万一の付け忘れ対策。
  var links = document.querySelectorAll('a[href^="http"]');
  for (var i = 0; i < links.length; i++) {
    if (!links[i].getAttribute("rel")) {
      links[i].setAttribute("rel", "noopener noreferrer");
    }
  }
})();
