// Based on https://github.com/t-mart/kill-sticky
// Minifies inlined CSS before URL encoding.

import getStdin from 'get-stdin';

getStdin().then(str => {
    str = str.replace(/\bcss=`(.*?)`/gs, (_match, css) => {
        css = css
            .replace(/\s+/g, ' ')
            .replace(/\s*([{}:;,>])\s*/g, '$1')
            .replace(/;}/g, '}')
            .trim();

        return `css=\`${css}\``;
    }).trim();

    console.log(`{"bookmarklet": "javascript:${encodeURIComponent(str)}"}`);
});
