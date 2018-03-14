<template>
  <div class="header">
    <div class="image"/>
    <div class="name" :style="nameStyle">Abhinav Pappu</div>
  </div>
</template>

<script>
export default {
  props: {
    color: { type: String, default: '#009688' },
  },
  computed: {
    nameStyle() {
      return {
        borderColor: this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 300px;
    height: 300px;
    border-radius: 150px;
    background: lightgray;
  }

  .name {
    color: black;
    font-size: 5em;
    letter-spacing: 5px;
    text-align: center;
    border-bottom: #009688 solid 3px;
  }
}

</style>
