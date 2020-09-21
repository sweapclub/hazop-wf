<template>
  <div class="container-box mb-2" :style="{width: width}">
    <h4 class="text-center">
      <slot name="header"></slot>
    </h4>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%',
    },
  },
};
</script>

<style>
.container-box {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border-width: thin;
  display: block;
  max-width: 100%;
  outline: none;
  text-decoration: none;
  transition-property: box-shadow, opacity;
  overflow-wrap: break-word;
  position: relative;
  padding: 16px;
  white-space: normal;
  background-color: #E5E5E5;
  color: rgba(0, 0, 0, 0.87);
}

.container-box:focus-within{
  border-color:#ffcc45;
    box-shadow: 0px 3px 1px -2px #ffcc45,
    0px 2px 2px 0px #ffcc45, 0px 1px 5px 0px #ffcc45;
}
</style>
