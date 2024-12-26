
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://cathe-b45.github.io/TESTS/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 535, hash: 'b0951baf5d6d504051f40b0486552b070bfe9eb44db209b8066d2e2f9c6049fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1048, hash: 'cb0b82a5aa5528e1cceba7dedd9fe88e161a790cf7486ae796fc5ff3e1dca8e3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
