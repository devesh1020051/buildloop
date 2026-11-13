/* Buildloop analytics. Privacy friendly: no cookies, no personal data, no banner needed.
   1. Make a free GoatCounter site at https://www.goatcounter.com (pick a code, e.g. buildloop).
   2. Put that code below. Leave it empty to turn analytics off.
   Page views, countries, devices and referrers show on your GoatCounter dashboard.
   Each lab opened and each sketch run is counted as an event (labs list under "lab/..." and "run/..."). */
(function(){
  var GOATCOUNTER_CODE = '';          // e.g. 'buildloop'  ->  https://buildloop.goatcounter.com
  var CLOUDFLARE_TOKEN = '';          // optional: Cloudflare Web Analytics token (only if you host on Cloudflare)
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;   // do not count your own testing
  window.blTrack = function(path, title){
    try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({path: path, title: title, event: true}); } catch(e){}
  };
  if (GOATCOUNTER_CODE) {
    window.goatcounter = {no_onload: false};
    var g = document.createElement('script'); g.async = true;
    g.src = 'https://gc.zgo.at/count.js';
    g.setAttribute('data-goatcounter', 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count');
    document.head.appendChild(g);
  }
  if (CLOUDFLARE_TOKEN) {
    var c = document.createElement('script'); c.defer = true;
    c.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    c.setAttribute('data-cf-beacon', JSON.stringify({token: CLOUDFLARE_TOKEN}));
    document.head.appendChild(c);
  }
})();
