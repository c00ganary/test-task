function isInternetExplorer() {
  return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
}
console.log(isInternetExplorer());
if (isInternetExplorer() === true) {
  alert('Вы пользуетесь не тем браузером:)');
}
