import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'nuxt-starter-kit',
  url: '/',
  hierarchyRootSeparator: /\|/,
  sidebarAnimations: false,
})

const req = require.context('../components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
