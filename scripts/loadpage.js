function loadPage(e) {
  e.preventDefault();
  fetch(e.target.href)
    .then(response => response.text())
    .then(html => {
      document.body.innerHTML = html;
      // 可选：更新页面标题和 URL（无刷新）
      history.pushState({}, "", e.target.href);
    });
}