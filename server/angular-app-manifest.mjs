
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Agnamariyaaa.github.io/name/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/name"
  },
  {
    "renderMode": 2,
    "route": "/name/students"
  },
  {
    "renderMode": 2,
    "route": "/name/courses"
  },
  {
    "renderMode": 2,
    "route": "/name/enroll"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 933, hash: 'e3a166c0a1f9d105c69fa303bb2b1c701e6b4eae3351087ce9baac7f5074bdc1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 992, hash: '8be14093e50bd03fcb65d7abb3637d67be197d9884e92b4f08a65c70abad8612', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15280, hash: '60fee1195abaf01c54b885cbb2f906731ebed28d198cc02af8d11134d845baf7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'students/index.html': {size: 10205, hash: '610c6e1a999ef08afc201c6e223a52041ec6ddca975a1098b726b559fd6b1612', text: () => import('./assets-chunks/students_index_html.mjs').then(m => m.default)},
    'enroll/index.html': {size: 11514, hash: '9add2eca2a372166949a1b10baac1c7b54c1b44a0d81552d6ea97d9807807529', text: () => import('./assets-chunks/enroll_index_html.mjs').then(m => m.default)},
    'courses/index.html': {size: 11287, hash: 'b895a1b30e92e86e51ea03842612118b2cff3d844dd91d9dc0af5ffcb5af13eb', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)},
    'styles-U23W2BPB.css': {size: 5500, hash: 'zdQ2Qcol21I', text: () => import('./assets-chunks/styles-U23W2BPB_css.mjs').then(m => m.default)}
  },
};
