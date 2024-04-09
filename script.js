document.addEventListener('DOMContentLoaded', function () {
    const footerContainer = document.getElementById('footer-container');
  
    // HTMLテンプレート
    const template = `
    <footer class="footer-container">
        <div class="left-content">
          <!-- 左側の要素 -->
          <p>カニ娘（蟹ヶ谷　ムサコ）</p>
        </div>
        <div class="right-content">
          <!-- 右側の要素 -->
          <p>© 立花左伝,404_YD　All Rights Reserved.</p>
        </div>
      </footer>
    `;
  
    // テンプレートをHTMLに挿入
    footerContainer.innerHTML = template;
  });
  document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }
  
    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    }
  
    setInterval(nextSlide, 3000); // 3秒ごとに次のスライドを表示
  });
  document.addEventListener('DOMContentLoaded', function () {
  const loadingContainer = document.getElementById('loading-container');
  const siteContent = document.getElementById('site-content');

  // ロード完了後にローディングアニメーションを非表示にし、サイトのコンテンツを表示
  window.onload = function () {
    loadingContainer.style.display = 'none';
    siteContent.style.display = 'block';
  };
});
