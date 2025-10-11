// js/script.js (修正案)

document.addEventListener('DOMContentLoaded', () => {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    // 1. ヘッダー要素を取得
    const header = document.querySelector('header');
    // ⚠️ DOMContentLoadedで取得していた headerHeight の宣言は削除し、clickイベント内で取得します
    // const headerHeight = header ? header.offsetHeight : 0; 

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 1'. クリック時に最新のヘッダーの高さを再取得することでレスポンシブに対応
                const headerHeight = header ? header.offsetHeight : 0; 
                
                // 2. スクロール先の要素の絶対位置を計算
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                
                // 3. ヘッダーの高さ分を引いてオフセット位置を決定
                const offsetPosition = elementPosition - headerHeight; // 🚨 ここで最新の高さを利用

                // 4. window.scrollTo() を使ってオフセット位置へスクロール
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});