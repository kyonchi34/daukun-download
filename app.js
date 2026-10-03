(() => {
  'use strict';
  const tabs = [...document.querySelectorAll('[data-platform]')];
  const panels = [...document.querySelectorAll('.platform-panel')];
  const guides = [...document.querySelectorAll('[data-guide]')];
  const names = { windows: 'Windows', android: 'Android', ios: 'iOS' };
  function selectPlatform(platform, focus = false) {
    if (!Object.hasOwn(names, platform)) return;
    tabs.forEach(tab => {
      const active = tab.dataset.platform === platform;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focus) tab.focus();
    });
    panels.forEach(panel => { panel.hidden = panel.id !== `panel-${platform}`; });
    guides.forEach(guide => { guide.hidden = guide.dataset.guide !== platform; });
    document.querySelector('#guide-label').textContent = names[platform];
    document.querySelector('.panel-number').textContent = `0${tabs.findIndex(tab => tab.dataset.platform === platform) + 1} / 03`;
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectPlatform(tab.dataset.platform));
    tab.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') target = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target === undefined) return;
      event.preventDefault();
      selectPlatform(tabs[target].dataset.platform, true);
    });
  });
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) selectPlatform('android');
  else if (/iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) selectPlatform('ios');
})();
