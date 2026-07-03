// @ts-check
import mdx from '@astrojs/mdx';

export default {
  site: 'https://yourname.dev',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  }
};
