;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="836bf4cc-48f8-41de-8865-d6edff783d4e",e._sentryDebugIdIdentifier="sentry-dbid-836bf4cc-48f8-41de-8865-d6edff783d4e")}catch(e){}}();import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D-zzAu4W.mjs';
import { manifest } from './manifest_BjeNKXgy.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/blog.astro.mjs');
const _page1 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page2 = () => import('./pages/cgv.astro.mjs');
const _page3 = () => import('./pages/cookies.astro.mjs');
const _page4 = () => import('./pages/credits.astro.mjs');
const _page5 = () => import('./pages/mentions-legales.astro.mjs');
const _page6 = () => import('./pages/plan-du-site.astro.mjs');
const _page7 = () => import('./pages/politique-confidentialite.astro.mjs');
const _page8 = () => import('./pages/rss.xml.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/blog/index.astro", _page0],
    ["src/pages/blog/[...slug].astro", _page1],
    ["src/pages/cgv.astro", _page2],
    ["src/pages/cookies.astro", _page3],
    ["src/pages/credits.astro", _page4],
    ["src/pages/mentions-legales.astro", _page5],
    ["src/pages/plan-du-site.astro", _page6],
    ["src/pages/politique-confidentialite.astro", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "658e9ac1-693a-45fc-b6db-8d3730b42f57"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
