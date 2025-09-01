// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({  
    site: "https://Kangr1s.github.io",
    base: "/Vitaliza",
    output: 'static',
    adapter: node({
        mode: 'standalone', // o 'server', según lo necesites
    }),
});
