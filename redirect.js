// discovertaif.armadaresidence.com → the Discover Taif guide of the Armada Residence website (8 Nov 2026). The old
// subdomain was a one-page guide; every path lands on /discover-taif/ keeping the whole query string and hash (utm
// tags, printed links); ?lang=en opens the English page.
(function () {
  var base = 'https://armadaresidence.com';
  var en = new URLSearchParams(location.search).get('lang') === 'en';
  location.replace(base + (en ? '/en' : '') + '/discover-taif/' + location.search + location.hash);
})();
