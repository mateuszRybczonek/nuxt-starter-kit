<template>
  <router-link
    v-if="to"
    :tag="tag"
    :to="to"
    class="button"
    :class="classNames"
    :disabled="isDisabled"
  >
    <slot />
  </router-link>
  <component
    :is="tag"
    v-else
    v-bind="$attrs"
    class="button"
    :class="classNames"
    :disabled="isDisabled"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>
<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,

  props: {
    to: {
      type: [String, Object],
      default: null
    },

    tag: {
      type: String,
      default: 'button',
      validator: value => ['a', 'button'].includes(value)
    },

    isDisabled: {
      type: Boolean,
      default: false
    },

    isPrimary: {
      type: Boolean,
      default: false
    },

    isSecondary: {
      type: Boolean,
      default: false
    },

    isGeneric: {
      type: Boolean,
      default: false
    },

    hasOnlyIcon: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classNames() {
      const { isGeneric, isSecondary, isPrimary, hasOnlyIcon } = this

      return {
        generic: isGeneric,
        secondary: isSecondary,
        primary: isPrimary,
        iconOnly: hasOnlyIcon
      }
    }
  }
}
</script>
<style lang="scss">
.button {
  display: inline-flex;
  height: 50px;
  padding: 0 25px;
  line-height: 1;
  text-decoration: none;
  border: 2px solid transparent;
  background-color: grey;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  align-items: center;

  &:disabled {
    background-color: grey;
    pointer-events: none;
    opacity: 0.5;
  }
}

.iconOnly {
  display: flex;
  width: 50px;
  height: 50px;
  padding: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}

.primary {
  background-color: red;

  &:not(.iconOnly):hover,
  &:not(.iconOnly):focus {
    border-color: orange;
    background-color: white;
  }
}

.secondary {
  background-color: red;
}

.generic {
  background-color: grey;

  &:hover,
  &:focus {
    border-color: grey;
    background-color: white;
  }
}
</style>
