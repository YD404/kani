document.addEventListener('DOMContentLoaded', function () {
  const loadingContainer = document.getElementById('loading-container');
  const siteContent = document.getElementById('site-content');

  // ロード完了後にローディングアニメーションを非表示にし、サイトのコンテンツを表示
  window.onload = function () {
    loadingContainer.style.display = 'none';
    siteContent.style.display = 'block';
  };
});
