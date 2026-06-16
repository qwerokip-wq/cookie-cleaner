const $ = id => document.getElementById(id);
const statusEl = $('status');

function setStatus(text, type) {
  statusEl.textContent = text;
  statusEl.className = type;
  setTimeout(() => { if (statusEl.textContent === text) { statusEl.textContent = ''; statusEl.className = ''; } }, 3000);
}

function disableButtons(disabled) {
  $('deletePageCookies').disabled = disabled;
  $('deleteAllCookies').disabled = disabled;
}

function cookieUrl(c) {
  const protocol = c.secure ? 'https://' : 'http://';
  return protocol + c.domain.replace(/^\./, '') + (c.path || '/');
}

function removeCookie(c) {
  const details = {
    url: cookieUrl(c),
    name: c.name,
    storeId: c.storeId
  };
  if (c.firstPartyDomain) {
    details.firstPartyDomain = c.firstPartyDomain;
  }
  if (c.partitionKey) {
    details.partitionKey = c.partitionKey;
  }
  return browser.cookies.remove(details);
}

$('deletePageCookies').addEventListener('click', async () => {
  disableButtons(true);
  setStatus('Удаление...', 'info');
  try {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    const tabUrl = tabs[0]?.url;
    if (!tabUrl || !tabUrl.startsWith('http')) {
      setStatus('Недоступная страница', 'error');
      disableButtons(false);
      return;
    }
    const hostname = new URL(tabUrl).hostname;
    const allCookies = await browser.cookies.getAll({});
    const siteCookies = allCookies.filter(c => {
      const domain = c.domain.replace(/^\./, '');
      return hostname === domain || hostname.endsWith('.' + domain);
    });
    if (!siteCookies.length) {
      setStatus('Нет кук на этом сайте', 'info');
      disableButtons(false);
      return;
    }
    await Promise.all(siteCookies.map(removeCookie));
    setStatus(`Удалено ${siteCookies.length} кук, перезагрузка...`, 'success');
    browser.tabs.reload(tabs[0].id);
  } catch (e) {
    setStatus('Ошибка: ' + e.message, 'error');
  }
  disableButtons(false);
});

$('deleteAllCookies').addEventListener('click', async () => {
  disableButtons(true);
  setStatus('Удаление...', 'info');
  try {
    const allCookies = await browser.cookies.getAll({});
    if (!allCookies.length) {
      setStatus('Нет кук в браузере', 'info');
      disableButtons(false);
      return;
    }
    await Promise.all(allCookies.map(removeCookie));
    setStatus(`Удалено ${allCookies.length} кук`, 'success');
  } catch (e) {
    setStatus('Ошибка: ' + e.message, 'error');
  }
  disableButtons(false);
});
