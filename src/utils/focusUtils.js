import Vue from 'vue'
// import store from '../store';
export function focusConfig(rails) {
  let upIndex;

  for (let i = 0; i < rails.length; i++) {
    const rail = rails[i];
      // console.log('rail: ', rail)
      const leaveFor = {
        left: '',
        right: '',
        up: '',
        down: ''
      };
      if (i === 0) {
        leaveFor.down = `@${rails[i+1].id}`
      }
      if (upIndex !== undefined) {
        leaveFor.up = '@' + rails[upIndex].id;
        rails[upIndex].focusSectionConfig.leaveFor.down = '@' + rails[i].id;
      }
      upIndex = i;

      Vue.set(rail, 'focusSectionConfig', {
        restrict: 'self-only',
        leaveFor,
        preventScroll: true
      });
      // console.log('rail: ', rail)
    }
}
export function testFocusConfig(rails) {
  let upIndex;

  for (let i = 0; i < rails.length; i++) {
    const rail = rails[i];
      // console.log('rail: ', rail)
      const leaveFor = {
        left: '',
        right: '',
        up: '',
        down: ''
      };
      if (i === 0) {
        leaveFor.down = `@${rails[i+1].title}`
      }
      if (upIndex !== undefined) {
        leaveFor.up = '@' + rails[upIndex].title;
        rails[upIndex].focusSectionConfig.leaveFor.down = '@' + rails[i].title;
      }
      upIndex = i;

      Vue.set(rail, 'focusSectionConfig', {
        restrict: 'self-only',
        leaveFor,
        preventScroll: true
      });
      // console.log('rail: ', rail)
    }
}

export function resetVirListFocus() {
  // console.log('currentFoucsSectionId: ')
  // console.log('currentFoucsSectionId: ', store.state.currentFocusSectionId)
  // setTimeout(() => {
  //   console.log(`after itemResize focus ${store.state.currentFocusSectionId}: `,window.SpatialNavigation.focus(store.state.currentFocusSectionId));
  // })
}