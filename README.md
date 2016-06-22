# ClientIsLite

A light version of [ClientIs](http://github.com/yieme.ClientIs)

## Include

```js

<script src="https://rawgit.com/yieme/clientislite/master/clientis.js"></script>

```

## ClientIs() usage

```js
ClientIs() // Bot, Windows, OSX, X11, Linux, iOS, Android or Unknown. Bot be returned if PhantomJS detected in this use case

ClientIs("Googlebot/2.1 (+http://www.google.com/bot.html)") // Bot

ClientIs("Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36") // Windows
```

## Global namespace collision

Fork this repo and change the last line of `clientis.js` to what you'd like:

```js
  ...
})(window, navigator, 'ClientIs')
```

## License

MIT
