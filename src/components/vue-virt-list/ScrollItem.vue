<template>
  <div class="asset" :style="asset" v-focus @focus="onFocus" @keydown.enter="onclick" @keydown.right="onKeydownRight" @keydown.left="onKeydownLeft">
    index: {{asset._realIndex}}-{{ asset.background }}
  </div>
</template>
<script>
export default {
  name: 'ScrollItem',
  props: {
    assetStyle: {
      type: Object
    },
    idx: {
      type: Number
    }
  },
  computed: {
    asset() {
      // console.log('assetStyle: ', this.assetStyle)
      return {...this.assetStyle}
    }
  },
  methods: {
    onclick() {
      this.$router.push('/')
    },
    onFocus(evt) {
      // console.log('onFocus: ', evt.target)
      evt.target.scrollIntoView({
        inline: 'nearest',
        block: 'center',
        behavior: 'smooth'
      })
      this.$emit('onItemFocus', evt);
    },
    onKeydownRight(evt) {
      console.log('item keydown right..');
      this.$emit('onKeydownRight', evt, this.idx);
    },
    onKeydownLeft(evt) {
      console.log('item keydown left..');
      this.$emit('onKeydownLeft', evt, this.idx);
    }
  }
}
</script>
<style scoped>
.asset {
  height: 180px;
  width: 300px;
  /* box-sizing: border-box; */
  margin-right: 10px;
  color: white;
  font-size: 32px;
}
* {
  outline: none;
}
.asset:focus {
  border: 4px solid salmon ;
}
</style>