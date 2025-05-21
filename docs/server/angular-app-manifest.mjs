
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-KAJGVII2.js",
      "chunk-W4URYDZO.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NSA74O3K.js",
      "chunk-FU572Q7P.js",
      "chunk-W4URYDZO.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y4ZTIBSL.js",
      "chunk-FU572Q7P.js",
      "chunk-W4URYDZO.js"
    ],
    "route": "/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5314, hash: '529c1a9b14fa3f92d9c9f123a01e27c68346914bc074fb4483e1c220b4496db9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1115, hash: 'c559f5178d5380358f4ff48ceb6eac14811850dcee1b642e7e18287b1a1e9e92', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 6075, hash: 'bb805917a46338231dbdf1681383fd0474c952e8bbe903ec2fb62c1c20c2e535', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 6075, hash: '644e2d3e037e09f3370595cbae41da2588755cc0043682c9fe3f64a8c5a13d0a', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 20775, hash: '50f1714416958b951ee8416591b499c9ad6dcc0861743dfc01b677da31020ca1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-45CDF5QM.css': {size: 236466, hash: 'fiQn1STZs48', text: () => import('./assets-chunks/styles-45CDF5QM_css.mjs').then(m => m.default)}
  },
};
