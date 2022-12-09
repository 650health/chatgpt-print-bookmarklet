// Copied from https://github.com/t-mart/kill-sticky

import getStdin from 'get-stdin';

getStdin().then(str => {
    console.log(`{"bookmarklet": "javascript:${encodeURIComponent(str)}"}`);
});
