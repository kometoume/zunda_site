document.addEventListener("DOMContentLoaded", () => {
  const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");
  const header = document.querySelector("header");

  // ======================================================
  // ✅ ハンバーガーメニュー関連の要素取得と処理をスコープ内に移動
  // ======================================================
  const menuButton = document.getElementById("menu-button");
  const menuContainer = document.getElementById("menu-container");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  // ------------------------------------------------------
  // 1. スムーススクロール処理
  // ------------------------------------------------------
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = header ? header.offsetHeight : 0;
        const rectTop = targetElement.getBoundingClientRect().top;
        const elementPosition = rectTop + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        if (
          window.innerWidth < 768 &&
          !menuContainer.classList.contains("hidden")
        ) {
          menuContainer.classList.add("hidden");
          menuIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");

          menuContainer.classList.remove(
            "fixed",
            "inset-0",
            "bg-zunda-dark",
            "z-10",
            "flex",
            "items-center",
            "justify-center"
          );
          menuContainer
            .querySelector("ul")
            .classList.remove("text-center", "space-y-8", "text-2xl");
        }
      }
    });
  });

  // ------------------------------------------------------
  // 2. ハンバーガーメニューの開閉処理
  // ------------------------------------------------------
  // js/script.js の該当部分 (修正後)

  if (menuButton && menuContainer && menuIcon && closeIcon) {
    menuButton.addEventListener("click", () => {
      // メニューコンテナの表示/非表示を切り替え
      menuContainer.classList.toggle("hidden");

      // アイコンの表示/非表示を切り替え
      menuIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");

      // ✅ 修正点: headerDiv の取得とクラスの追加/削除をすべて削除する
      // const headerDiv = header.querySelector('.container'); // 不要

      if (!menuContainer.classList.contains("hidden")) {
        // メニューが開いたとき

        // 💡 削除: headerDiv.classList.add('fixed', 'top-0', 'right-0', 'left-0', 'mx-auto', 'max-w-6xl');

        // メニューの全画面スタイルを設定
        // Z-INDEXはメニューのコンテンツより上にボタンがあることを確認するため、ボタン側に高い値を持たせる
        menuContainer.classList.add(
          "fixed",
          "inset-0",
          "bg-zunda-dark",
          "z-10",
          "flex",
          "items-center",
          "justify-center"
        );
        menuContainer
          .querySelector("ul")
          .classList.add("text-center", "space-y-8", "text-2xl");
      } else {
        // メニューが閉じたとき

        // 💡 削除: headerDiv.classList.remove('fixed', 'top-0', 'right-0', 'left-0', 'mx-auto', 'max-w-6xl');

        // メニューの全画面スタイルをリセット
        menuContainer.classList.remove(
          "fixed",
          "inset-0",
          "bg-zunda-dark",
          "z-10",
          "flex",
          "items-center",
          "justify-center"
        );
        menuContainer
          .querySelector("ul")
          .classList.remove("text-center", "space-y-8", "text-2xl");
      }
    });
  }
});
