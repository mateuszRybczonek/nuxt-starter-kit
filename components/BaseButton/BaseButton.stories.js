import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import StoryRouter from 'storybook-router'
import ArrowRightIcon from '@/assets/icons/arrow-right.svg'
import BaseButton from './BaseButton.vue'

storiesOf('BaseButton', module)
  .addDecorator(withKnobs)
  .addDecorator(
    StoryRouter(
      {},
      {
        initialEntry: '/home',
        routes: [
          { path: '/home', component: { template: '<strong>/home</strong>' } },
          { path: '/about', component: { template: '<strong>/about</strong>' } }
        ]
      }
    )
  )
  .add('default', () => ({
    components: {
      BaseButton
    },

    data() {
      return {
        msg: text('msg', 'Next')
      }
    },

    template: '<BaseButton>{{ msg }}</BaseButton>'
  }))
  .add('icon only', () => ({
    components: {
      BaseButton,
      ArrowRightIcon
    },

    data() {
      return {
        msg: text('msg', 'Next'),
        iconStyle: {
          width: '20px',
          height: '20px'
        }
      }
    },

    template:
      '<BaseButton has-only-icon is-primary><ArrowRightIcon :style="iconStyle" /></BaseButton>'
  }))
  .add('primary', () => ({
    components: {
      BaseButton
    },

    data() {
      return {
        msg: text('msg', 'Primary button')
      }
    },

    template: '<BaseButton is-primary>{{ msg }}</BaseButton>'
  }))
  .add('generic', () => ({
    components: {
      BaseButton
    },

    data() {
      return {
        msg: text('msg', 'Generic button')
      }
    },

    template: '<BaseButton is-generic>{{ msg }}</BaseButton>'
  }))
  .add('external link', () => ({
    components: {
      BaseButton
    },
    template: `
      <BaseButton
        tag="a"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        google.com
      </BaseButton>
    `
  }))
  .add('internal link', () => ({
    components: {
      BaseButton
    },
    template: `
      <div>
        <BaseButton tag="a" to="/home">/home</BaseButton>
        <BaseButton tag="a" to="/about">/about</BaseButton>
        <p>Current path: <router-view /></p>
      </div>
    `
  }))
