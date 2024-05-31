<template>
  <div class="rail-container">
    <!-- <div v-for="(rail, index) in datas" :key="index">
      <ScrollRail :railTitle="rail.title" :railData="rail.railArray" v-focus-section:[rail.title]="rail.focusSectionConfig"/>
    </div> -->
    <h1>Virtual list</h1>
    <VirtList
      ref="virtListRef"
      itemKey="id"
      :list="datas"
      :minSize="210"
      :bufferBottom="5"
      :fixSelection="true"
      @itemResize="itemResize"
      >
      <template #default="{ itemData, index }">
        <ScrollRail :index="index" :railData="itemData" />
      </template>
    </VirtList>
  </div>
</template>
<script>
import ScrollRail from './ScrollRailV2.vue'
import { generateRail } from '../../utils/virtualScrollData'
import { testFocusConfig/*, resetVirListFocus */} from '../../utils/focusUtils'
import { VirtList } from 'vue-virt-list';
import { mapState } from 'vuex';

export default {
  name: 'VirtualList',
  components: { ScrollRail, VirtList },
  data() {
    return {
      datas: null,
      firstTime : true,
    }
  },
  created() {
    this.datas = generateRail();
    // console.log('datas: ', this.datas)
  },
  mounted() {
    this.$nextTick(() => {
      testFocusConfig(this.datas)
      window.SpatialNavigation.focus('rail-0')
    })
    setTimeout(() => {
      this.$refs.virtListRef.forceUpdate();
    }, 100)
  },
  computed: {
    ...mapState['currentFocusSectionId']
  },
  methods: {
    itemResize() {
      // if (this.firstTime) {
      //   this.$nextTick(() => {
      //     window.SpatialNavigation.focus('rail-0');
      //   })
      //   this.firstTime = false;
      // }
      // setTimeout(() => {
        // testFocusConfig(this.datas);
        // window.SpatialNavigation.reset();
        // resetVirListFocus();
        // console.log('currentFoucsSectionId: ', this.currentFocusSectionId)
        // this.$nextTick(() => {
        //   console.log(`after itemResize focus ${this.currentFocusSectionId}: `,window.SpatialNavigation.focus(this.currentFocusSectionId));
        // })
      // });
    }
  }
}
</script>
<style scoped>
.rail-container {
  margin-left: 80px;
  height: 1029px;
}
</style>