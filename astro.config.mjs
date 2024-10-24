import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://mariphy.github.io',
    markdown: {
        remarkPlugins: [],
        rehypePlugins: [],
        syntaxHighlight: 'prism', 
        html: true
    }
});
