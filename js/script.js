document.addEventListener('DOMContentLoaded', () => {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    // 1. ヘッダー要素を取得
    const header = document.querySelector('header');
    // ヘッダーの高さを取得。取得できない場合は0とする
    const headerHeight = header ? header.offsetHeight : 0; 

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 2. スクロール先の要素の絶対位置を計算
                // getBoundingClientRect().top: ビューポート上端からの距離
                // window.scrollY: 現在のスクロール位置
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                
                // 3. ヘッダーの高さ分を引いてオフセット位置を決定
                const offsetPosition = elementPosition - headerHeight;

                // 4. window.scrollTo() を使ってオフセット位置へスクロール
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

            }
        });
    });

});