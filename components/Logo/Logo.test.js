import { mount } from '@vue/test-utils'
import test from 'ava'
import Vue from 'vue'
import Logo from './Logo.vue'

test('is a Vue instance', t => {
  const wrapper = mount(Logo)
  t.is(wrapper.isVueInstance(), true)
})