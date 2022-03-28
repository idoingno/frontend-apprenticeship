/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a000ecd3271bf64a02b003b613116a61"
  },
  {
    "url": "about/index.html",
    "revision": "829e78894c8d33b37046c3df5d763635"
  },
  {
    "url": "assets/css/0.styles.906432ab.css",
    "revision": "ce1c10574e6c7db1255f7a74fd3ad25d"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.cf20bbf6.js",
    "revision": "a64de15c5a5907b5e49c46cb6cbee205"
  },
  {
    "url": "assets/js/10.4dd75d37.js",
    "revision": "09fad9790fe25582b0ccad9e56a64586"
  },
  {
    "url": "assets/js/11.06618d64.js",
    "revision": "c24f7bdc99179fbc57762fffbfb40816"
  },
  {
    "url": "assets/js/12.b6cbe84c.js",
    "revision": "41e9ccdd66f632bdb5ee478e4a030ef4"
  },
  {
    "url": "assets/js/13.06b45457.js",
    "revision": "a0810833860cb1f2603ce8d5ab740d97"
  },
  {
    "url": "assets/js/14.b3f0c20d.js",
    "revision": "986405d090e7b2f8dcdc5fc9e75681c3"
  },
  {
    "url": "assets/js/15.db386134.js",
    "revision": "eaebc87ad5f8635ac785e492ddd765a5"
  },
  {
    "url": "assets/js/16.9e6e197a.js",
    "revision": "a778a192d8879f360bc636893d6a48e9"
  },
  {
    "url": "assets/js/17.dbc32c70.js",
    "revision": "df1e1e80c5ab3a9fecb65dab9dbbc40b"
  },
  {
    "url": "assets/js/18.b857c09c.js",
    "revision": "5aa577198b623ee685f3e1a14b9450e9"
  },
  {
    "url": "assets/js/19.bf97b99f.js",
    "revision": "ece505c07a73ff8978afa8fb00af4681"
  },
  {
    "url": "assets/js/20.1d5ae8e8.js",
    "revision": "6babaa1c0ddd0ee80a298a41342846f7"
  },
  {
    "url": "assets/js/21.67630699.js",
    "revision": "a107015db082a07b8232119447ad4382"
  },
  {
    "url": "assets/js/22.69eab881.js",
    "revision": "c5aa985e83f27980496a005440452c5e"
  },
  {
    "url": "assets/js/23.177216fa.js",
    "revision": "449852a011738dfe68836c4dcf16511d"
  },
  {
    "url": "assets/js/24.dca2261e.js",
    "revision": "e5eafe8d41d1ec167c20afe821388a17"
  },
  {
    "url": "assets/js/25.901d39ab.js",
    "revision": "52af7173654f4628019e44e1e68af46f"
  },
  {
    "url": "assets/js/26.243f3339.js",
    "revision": "cb0273d4456f1f61e2880d41530d9346"
  },
  {
    "url": "assets/js/27.5ee539b2.js",
    "revision": "5d72ced8f1bfeb79511ad78062253c7c"
  },
  {
    "url": "assets/js/28.38f8bbca.js",
    "revision": "4f7ebb06976f705170cbbd59a6d8dbba"
  },
  {
    "url": "assets/js/29.5981c50e.js",
    "revision": "5842b7e195c109d5836d91137783fd98"
  },
  {
    "url": "assets/js/3.3feacf81.js",
    "revision": "2035fb9262b8dc9b17dd91c8c37871e8"
  },
  {
    "url": "assets/js/30.7009e1be.js",
    "revision": "97d8f489e227dcb10e4ca4307cfc0f84"
  },
  {
    "url": "assets/js/31.7e45e5ad.js",
    "revision": "88d97864c92b456f7966cc6c56f9560e"
  },
  {
    "url": "assets/js/32.b59c1553.js",
    "revision": "385167a9064b7dd12ff388901d7d63ff"
  },
  {
    "url": "assets/js/33.10cbf529.js",
    "revision": "d0e792cb96784a340e5d10572fdbc1a1"
  },
  {
    "url": "assets/js/4.0f96a272.js",
    "revision": "c32bd85568055c252af9046c6421a3f8"
  },
  {
    "url": "assets/js/5.010d487f.js",
    "revision": "cce0ce944e34b00fda54ba04138696e9"
  },
  {
    "url": "assets/js/6.3853f689.js",
    "revision": "879a4d8820db22635d5b73ad50659b62"
  },
  {
    "url": "assets/js/7.a78baeef.js",
    "revision": "405a04b432c656af4cd0901bc545950b"
  },
  {
    "url": "assets/js/8.307ed2da.js",
    "revision": "d0e220e81141c654c5c01adbf6ac36a2"
  },
  {
    "url": "assets/js/9.e1db3c7a.js",
    "revision": "65ddcac1ab41d2ec483361fe2926a477"
  },
  {
    "url": "assets/js/app.57948dfa.js",
    "revision": "b2764f1aca1af22ab382dcf678ba85db"
  },
  {
    "url": "categories/index.html",
    "revision": "3ba9b37166aaf9312ea84ae257d884e9"
  },
  {
    "url": "fontend/css/css-layout-1/index.html",
    "revision": "fa1de07795e167efb4f7e4f54336c32a"
  },
  {
    "url": "fontend/css/css-layout-2/index.html",
    "revision": "23515849fc4a064ef7862066cf71d5a0"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "e9b4455fa819d1de235c2413778f8012"
  },
  {
    "url": "fontend/css/interesting-style-1/index.html",
    "revision": "cee91e3fdf45bd957ab155101444a4b3"
  },
  {
    "url": "fontend/css/interesting-style-2/index.html",
    "revision": "19921faa7cdfff9d2b1066cee199ef8d"
  },
  {
    "url": "fontend/css/responsive/index.html",
    "revision": "15478daa0d27ca05f424fcf2861db8d2"
  },
  {
    "url": "fontend/html/html-semantic-elements/index.html",
    "revision": "24549e100d518d1bde1b10d84d323420"
  },
  {
    "url": "fontend/html/html-seo/index.html",
    "revision": "751601427d07708819aedbe52e5a917f"
  },
  {
    "url": "fontend/html/index.html",
    "revision": "b9bfe8ce690c1ea4e7ba41e4a21eb123"
  },
  {
    "url": "fontend/Js/ConditionalTypes-a/index.html",
    "revision": "5f30e1d5b2e5e4872cfcdef13be64425"
  },
  {
    "url": "fontend/Js/Generics-b/index.html",
    "revision": "f1781aebbcc958e4dc5a0f6722f60e9d"
  },
  {
    "url": "fontend/Js/index.html",
    "revision": "a42a3d84b6d3cb25df698bb211f99a51"
  },
  {
    "url": "fontend/Js/js-basic-algorithm/index.html",
    "revision": "6be0c084e4908e0d4fa1c62eae9dc902"
  },
  {
    "url": "fontend/Js/js-core-1/index.html",
    "revision": "cae61153f93454ac135664e3c1769eb1"
  },
  {
    "url": "fontend/Js/js-core-2/index.html",
    "revision": "d0848a4c47893c68b5c911337877df08"
  },
  {
    "url": "fontend/Js/js-core-3/index.html",
    "revision": "dfc610313ccfb178408fce2c3d20c2e5"
  },
  {
    "url": "fontend/Js/js-core-4/index.html",
    "revision": "42f114127e314513ebcd7c5fe8425611"
  },
  {
    "url": "fontend/Js/js-core-5/index.html",
    "revision": "130859efcfabd0ab58edde4c8e15a559"
  },
  {
    "url": "fontend/websitecol/index.html",
    "revision": "5e5af4b4edc3fbb7f51379f32dc5b4f3"
  },
  {
    "url": "imgs/0210302175705.jpg",
    "revision": "b9324a2c0abcdc2b3c8e11de8c31d118"
  },
  {
    "url": "imgs/css/grid-1.png",
    "revision": "babdb6b01688f561109fb696f2b186b8"
  },
  {
    "url": "imgs/css/heart.png",
    "revision": "4f53945806d2e9c4b7953187c2724b6a"
  },
  {
    "url": "imgs/css/penguin.png",
    "revision": "9f5a6afa46c2d291b6d100517a0da444"
  },
  {
    "url": "imgs/js/event-loop.png",
    "revision": "b3eee6c22df110783731992fbdb3fae9"
  },
  {
    "url": "imgs/js/object-1.png",
    "revision": "6d298f83d3ab39a859c70d39028dc912"
  },
  {
    "url": "imgs/js/object-2.png",
    "revision": "e5a2175441450b21f463972428ade25f"
  },
  {
    "url": "imgs/js/scope-1.png",
    "revision": "c0010460fd7505239c3e010305b95800"
  },
  {
    "url": "imgs/tecDoc/ant-design.svg",
    "revision": "bd8dd5a2f71f266119f6ac759b8f1dd7"
  },
  {
    "url": "imgs/tecDoc/css-mdn.svg",
    "revision": "870c138799add28b634d00af76607a83"
  },
  {
    "url": "imgs/tecDoc/elements.svg",
    "revision": "128736e192298cd8acfbe45c2db187ec"
  },
  {
    "url": "imgs/tecDoc/event.svg",
    "revision": "38effeca48c65e29bab961c32ef5c6a2"
  },
  {
    "url": "imgs/tecDoc/react.svg",
    "revision": "c72b01e788d5e84d2e626a1d5b8e92d4"
  },
  {
    "url": "imgs/tecDoc/Vue.svg",
    "revision": "c0af479c4f5053e998ef5b1ce1783914"
  },
  {
    "url": "imgs/tecDoc/vuepress-doc.svg",
    "revision": "d3b6418cc7968ce1603e587304b47136"
  },
  {
    "url": "imgs/tecDoc/web-api.svg",
    "revision": "776c80fb58e1187dda6b382ce7e07343"
  },
  {
    "url": "imgs/tecDoc/wechat.svg",
    "revision": "c0c7a6be69710e6cb305f35d80037bcc"
  },
  {
    "url": "index.html",
    "revision": "afe8fd4d9b070f2768bae04100997960"
  },
  {
    "url": "logo.svg",
    "revision": "67234250cdc136dbb9650feef405f6dc"
  },
  {
    "url": "tag/index.html",
    "revision": "ec063974d51956312221d29a36920cf9"
  },
  {
    "url": "timeline/index.html",
    "revision": "0011321579729ac9df3395b8307da25a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
