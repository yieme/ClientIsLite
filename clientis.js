(function(WINDOW, NAVIGATOR, CLIENTIS, ver, os, i, list){
  WINDOW[CLIENTIS] = function(useragent, phantomDetect) {
    if (!useragent) {
      useragent = NAVIGATOR.userAgent
      phantomDetect = phantomDetect || (phantomDetect === undefined)
    }
    // returns: Windows, OSX, iOS, Android, X11, Linux, Bot, or Unknown
    os   = "Unknown" // unknown
    list = ['Win', 'Mac', 'X11', 'Linux', 'iPhone', 'iPad', 'iPod', 'Android']
    for (i=0; i < list.length; i++) {
      if (useragent.indexOf(list[i]) >= 0) os = list[i]
    }
    // bot detect list from list.js
    list = [
      // generic
      'analyza',
      'analyzer',
      'aggregator',
      'archive',
      'archiving',
      'auto',
      'bot',
      'capture',
      'check',
      'classify',
      'clown',
      'collect',
      'control',
      'crawl',
      'detector',
      'extract',
      'eyes',
      'fantom',
      'feed',
      'fetch',
      'finder',
      'gather',
      'getter',
      'gopher',
      'hack',
      'harvest',
      'hound',
      'html2',
      'http_client',
      'images',
      'index',
      'java/',
      'leech',
      'library',
      'library',
      'linkman',
      'loader',
      'locate',
      'locator',
      'mack',
      'monitor',
      'parse',
      'perl',
      'phantom',
      'php',
      'pix',
      'program',
      'python',
      'rating',
      'reader',
      'reaper',
      'retrieve',
      'scan',
      'scrape',
      'search',
      'seer',
      'siphon',
      'sniff',
      'somewhere',
      'spider',
      'spy',
      'spyder',
      'sweep',
      'thumb',
      'tracker',
      'url',
      'utility',
      'validator',
      'verifier',
      'verify',
      'warez',
      'web[-\\s]?search',
      'webinator',
      'worth',
      'yahoo',
      'search',
      'download',
      'appie',
      'curl',
      'pinterest/',
      'slurp',
    ];
    var regex = new RegExp('(' + list.join('|') + ')', 'ig')
    // phantom detect http://engineering.shapesecurity.com/2015/01/detecting-phantomjs-based-visitors.html
    os = ((phantomDetect && (WINDOW.callPhantom || WINDOW._phantom)) || regex.test(userAgent)) ? 'Bot' : os
    return os.replace('Mac', 'OSX').replace('Win', 'Windows')
  }
})(window, navigator, 'ClientIs')
