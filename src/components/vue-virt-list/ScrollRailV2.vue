<template>
  <!--  -->
  <div 
    v-focus-section:[railData.title]="railData.focusSectionConfig"
    @focusin="onFocusIn(railData.title)"
    @sn:willmove="onWillMove"
    >
    <!-- @sn:willfocus="onWillFocus" -->
    <div>{{ railData.title }}</div>
    <div style="display: flex; flex-direction:row;">
      <div ref="container" class="rail-item" >
        <div class="tv-slider" v-for="(item, index) in renderArray" :key="item.background">
          <Item :assetStyle="item" :idx="index" @onItemFocus="onFocus" @onKeydownRight="onKeydownRight" @onKeydownLeft="onKeydownLeft"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Item from './ScrollItem.vue'

export default {
  name: 'ScrollRailV2',
  components: { Item/*, SliderContainer, TvSlider*/ },
  props: {
    railData: {
      type: Object
    },
    index: {
      type: Number
    }
    // railTitle: {
    //   type: String,
    //   default: ''
    // },
  },
  data() {
    return {
      copyRailArray: [],
      leftArray: [],
      rightArray: [],
      renderArray: [],
      realIndex: 0,

      slidesSizes: [],
      loopItems: [],
      railWidth: 0,
      activeIndex: 0,
      total: 0,
    }
  },
  created() {
    this.initRenderArray()
  },
  mounted() {
    
  },
  // watch: {
  //   railData(newVal) {
  //     if (newVal && newVal.length > 0) {
  //       this.initRenderArray();
  //     }
  //   }
  // },
  methods: {
    onWillMove({detail}) {
      console.log('willmove: ', detail)
      window.SpatialNavigation.reset(detail.sectionId);
      
    },
    onWillFocus(details) {
      console.log('willFocus: ', details);
    },
    onFocusIn(title) {
      this.$store.commit('setCurrentFocusSectionId', title);
      console.log('title: ', title)
    },
    onKeydownLeft(evt, idx) {
      console.log('keydown: ', evt.which, 'idx: ', idx)
      if (this.copyRailArray.length > 8) {
        
        if (this.leftArray.length === 0) {
          this.leftArray.splice(0, 0, this.rightArray.pop());
        }

        this.rightArray.splice(0, 0, this.renderArray.pop());
        this.renderArray.splice(0, 0, this.leftArray.pop());
        this.leftArray.splice(0, 0, this.rightArray.pop());

      }
    },
    onKeydownRight(evt, idx) {
      console.log('keydown: ', evt.which, 'idx: ', idx)
      if (this.copyRailArray.length > 8) {
        this.rightArray.length > 0 && this.renderArray.push(this.rightArray.shift());
        this.leftArray.lenght > 0 && this.rightArray.push(this.leftArray.shift());
        this.leftArray.push(this.renderArray.shift());
        
        if (this.rightArray.length === 0) {
          this.rightArray.push(this.leftArray.shift())
        }

      }
    },
    onFocus() {
    //   this.$refs.container.slideTo(idx) // or put it in the keydown.left/right event
    //   console.log('rail onFocus..')
    //   console.log('refs.container: ', this.$refs.container)
    //   // or if it's dynamic created ref
    //   // this.$refs[refproperty][0].slideTo(idx)
    },
    initRenderArray() {
      this.copyRailArray = this.railData.railArray.slice();
      this.copyRailArray.forEach((item, index) => {
        item._realIndex = index;
      })
      this.renderArray = this.renderArray.concat(this.copyRailArray.slice(0, 8))
      this.copyRailArray.length > 8 && (this.rightArray = this.rightArray.concat(this.copyRailArray.slice(8)))
      // this.copyRailArray = [];
    },

  },

}
</script>
<style scoped>
.rail-item {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  width: fit-content;
}
</style>