// 사이드바 호버했을 때만 보이게 하는 JS

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const navItems = document.querySelectorAll(".nav .nav__item");
  const panel   = document.querySelector(".global-panel");
  if (!header || !panel || !navItems.length) return;

  let openByMenu = false;

  // 각 메뉴 항목에 마우스/키보드 포커스 들어오면 열기
  navItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      openByMenu = true;
      panel.style.display = "block";
    });
    item.addEventListener("focusin", () => {
      openByMenu = true;
      panel.style.display = "block";
    });
  });

  // 패널 밖으로 나가면 닫기
  panel.addEventListener("mouseleave", () => {
    panel.style.display = "none";
    openByMenu = false;
  });

  // 헤더에서 벗어났고 패널에도 안 들어갔으면 닫기
  header.addEventListener("mouseleave", (e) => {
    const to = e.relatedTarget;
    if (!panel.contains(to)) {
      panel.style.display = "none";
      openByMenu = false;
    }
  });

  // 패널 위에 들어오면 유지
  panel.addEventListener("mouseenter", () => {
    if (openByMenu) panel.style.display = "block";
  });
});