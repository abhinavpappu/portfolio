<template>
  <div id="app">
    <sidebar
      :sections="sections"
      :current-section="currentSection"
      side="left"
      :color="color"/>
    <!-- <sidebar :sections="sections" :current-section="currentSection" side="right"/> -->
    <my-header :color="color"/>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import MyHeader from './Header.vue';

export default {
  data() {
    return {
      color: '#009688',
      sections: [{
        name: 'Home',
        icon: 'user',
      }, {
        name: 'Education',
        icon: 'graduation-cap',
      }, {
        name: 'Projects',
        icon: 'laptop',
      }, {
        name: 'Contact Me',
        icon: 'envelope',
      }],
      currentSection: 0,
    };
  },
  components: { Sidebar, MyHeader },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  background-color: white;
  font-family: 'Roboto', sans-serif;
}

</style>
