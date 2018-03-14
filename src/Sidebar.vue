<template>
  <div class="sidebar" :style="styles">
    <div
      v-for="(section, i) in computedSections"
      class="section"
      :style="section.styles"
      :class="section.classes"
      :key="section.name"
      :title="section.name"
      @mouseenter="hover.splice(i, 1, true)"
      @mouseleave="hover.splice(i, 1, false)">
      <font-awesome-icon :icon="section.icon" size="lg"/>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  props: {
    sections: { type: Array, required: true },
    currentSection: { type: Number, required: true },
    side: {
      type: String,
      validator: side => (side === 'left' || side === 'right'),
      default: 'left',
    },
    width: { type: Number, default: 55 },
    color: { type: String, default: '#009688' },
  },
  data() {
    return {
      hover: Array(this.sections.length).fill(false),
    };
  },
  computed: {
    computedSections() {
      return this.sections.map((section, i) => {
        const classes = {
          grow: i === this.currentSection,
        };
        const current = this.currentSection === i;
        const switchColors = this.hover[i] && !current;
        const styles = {
          cursor: current ? 'default' : 'pointer',
          color: switchColors ? this.color : 'white',
          backgroundColor: switchColors ? 'white' : this.color,
          borderColor: 'white',
        };
        return {
          name: section.name,
          icon: section.icon,
          classes,
          styles,
        };
      });
    },
    styles() {
      const styles = {};
      styles[this.side] = '0px';
      if (this.width) styles.width = `${this.width}px`;
      return styles;
    },
  },
  methods: { log: a => console.log(a) },
  components: { FontAwesomeIcon },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  box-shadow:
    0 2px 4px -1px rgba(0,0,0,.2),
    0 4px 5px 0 rgba(0,0,0,.14),
    0 1px 10px 0 rgba(0,0,0,.12);
    // -3px 0 0 #009688 inset; // teal right border

  .section {
    flex-grow: 1;
    transition: flex-grow .3s, box-shadow .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid;
    border-top: 1px solid;

    // &:hover {
    //   box-shadow:
    //     0 2px 4px -1px rgba(0,0,0,.2),
    //     0 4px 5px 0 rgba(0,0,0,.14),
    //     0 1px 10px 0 rgba(0,0,0,.12);
    // }

    &.grow {
      flex-grow: 20;
    }
  }
}

</style>
