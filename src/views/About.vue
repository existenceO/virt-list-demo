<template>
  <div class="dynamic-scroller-demo">
    <div class="toolbar">
      <input
        v-model="search"
        placeholder="Filter..."
      >
      <span>({{ updateParts.viewStartIdx }} - [{{ updateParts.visibleStartIdx }} - {{ updateParts.visibleEndIdx }}] - {{ updateParts.viewEndIdx }})</span>
    </div>

    <DynamicScroller
      :items="filteredItems"
      :min-item-size="54"
      :emit-update="true"
      :pageMode="true"
      class="scroller"
      @update="onUpdate"
    >
      <template #before>
        <div class="notice">
          The message heights are unknown.
        </div>
      </template>
      <template #after>
        <div class="notice">
          You have reached the end.
        </div>
      </template>
      <template v-slot="{ item, index, active }">
        <DynamicScrollerItem
          :item="item"
          :active="active"
          :size-dependencies="[
            item.message,
          ]"
          :data-index="index"
          :data-active="active"
          :title="`Click to change message ${index}`"
          class="message"
          @click.native="changeMessage(item)"
        >
          <div class="avatar">
            <img
              :key="item.avatar"
              :src="item.avatar"
              alt="avatar"
              class="image"
            >
          </div>
          <div class="text">
            {{ item.message }}
          </div>
          <div class="index">
            <span>{{ item.id }} (id)</span>
            <span>{{ index }} (index)</span>
          </div>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </div>
</template>

<script>
import { generateMessage } from '../utils/data'

const items = []
for (let i = 0; i < 10000; i++) {
  items.push({
    id: i,
    ...generateMessage(),
  })
}

export default {
  data () {
    return {
      items,
      search: '',
      updateParts: { viewStartIdx: 0, viewEndIdx: 0, visibleStartIdx: 0, visibleEndIdx: 0 },
    }
  },

  computed: {
    filteredItems () {
      const { search, items } = this
      if (!search) return items
      const lowerCaseSearch = search.toLowerCase()
      return items.filter(i => i.message.toLowerCase().includes(lowerCaseSearch))
    },
  },

  methods: {
    changeMessage (message) {
      Object.assign(message, generateMessage())
    },

    onUpdate (viewStartIndex, viewEndIndex, visibleStartIndex, visibleEndIndex) {
      this.updateParts.viewStartIdx = viewStartIndex
      this.updateParts.viewEndIdx = viewEndIndex
      this.updateParts.visibleStartIdx = visibleStartIndex
      this.updateParts.visibleEndIdx = visibleEndIndex
    },
  },
}
</script>

<style scoped>
.dynamic-scroller-demo,
.scroller {
  height: 100%;
}

.dynamic-scroller-demo {
  overflow: hidden;
}

.scroller {
  border: solid 1px #42b983;
}

.toolbar {
  flex: auto 0 0;
  text-align: center;
}

.toolbar > *:not(:last-child) {
  margin-right: 24px;
}

.notice {
  padding: 24px;
  font-size: 20px;
  color: #999;
}

.message {
  display: flex;
  min-height: 32px;
  padding: 12px;
  box-sizing: border-box;
}

.avatar {
  flex: auto 0 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
}

.avatar .image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}

.index,
.text {
  flex: 1;
}

.text {
  max-width: 400px;
}

.index {
  opacity: .5;
}

.index span {
  display: inline-block;
  width: 160px;
  text-align: right;
}
</style>