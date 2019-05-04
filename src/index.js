import PortalVue from 'portal-vue';
import SimpleTypeahead from './components/SimpleTypeahead.vue';

var SimpleTypeaheadPlugin = {
  install: function(Vue, options) {
    Vue.use(PortalVue)
    Vue.component(SimpleTypeahead.name, SimpleTypeahead);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(PortalVue);
  window.Vue.use(SimpleTypeaheadPlugin);
}

export default SimpleTypeaheadPlugin;
export { SimpleTypeahead };
