<template>
  <div class="home-header">
    <h1 class="home-header_title">
      <span class="headline">{{ title }}</span>
    </h1>
    <div class="home-header_subtitle">
      {{ subtitle }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String as () => string,
      required: true,
    },
    subtitle: {
      type: String as () => string,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.home-header {
  position: relative;
  padding-top: $space-xl;
  padding-bottom: $space-xl;
  text-align: center;
}

.home-header_title {
  margin: 0;
  font-size: $font-size-xlarge;
  text-transform: uppercase;
  letter-spacing: $space-unit * 0.025;
  line-height: 1;
}

.home-header_subtitle {
  font-size: $font-size-small;
  line-height: $line-height-base;
  opacity: 0.75;
}
</style>
