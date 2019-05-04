/**
 * vuetify-simple-typeahead v0.0.1-alpha-0.1
 * https://github.com/jasonwilczak/vuetify-simple-typeahead
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PortalVue = _interopDefault(require('portal-vue'));

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " /*# sourceMappingURL=SimpleTypeahead.vue.map */";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SimpleTypeahead = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('v-autocomplete', { attrs: { "items": _vm.items, "loading": _vm.isLoading, "search-input": _vm.search, "chips": "", "clearable": "", "hide-details": "", "hide-selected": "", "item-text": "name", "item-value": "value", "label": "Search...", "solo": "" }, on: { "update:searchInput": function ($event) {
          _vm.search = $event;
        } }, model: { value: _vm.model, callback: function ($$v) {
          _vm.model = $$v;
        }, expression: "model" } }, [[_c('v-list-tile', [_c('v-list-tile-title', [_vm._v(" No data available... ")])], 1)]], 2);
  }, staticRenderFns: [],
  name: 'vuetify-simple-typeahead',
  props: {
    dataSource: null,
    developer: {
      type: Object,
      default: function () {
        return { verboseLogging: false, logger: null };
      }
    }
  },
  data: function () { return ({
    isLoading: false,
    items: [],
    model: null,
    search: null
  }); },

  watch: {
    search: function search(val) {
      var this$1 = this;

      // Items have already been loaded
      if (this.items.length > 0) { return; }

      this.isLoading = true;

      // Lazily load input items
      if (this.dataSource) {
        fetch('https://api.coinmarketcap.com/v2/listings/').then(function (res) { return res.json(); }).then(function (res) {
          this$1.items = res.data;
        }).catch(function (err) {
          console.log(err);
        }).finally(function () { return this$1.isLoading = false; });
      } else {
        this.items = [{ name: 'item 1', value: '1' }];
        this.isLoading = false;
      }
    }
  },
  mounted: function mounted() {
    this.log('typeahead component mounted');
  },
  methods: {
    log: function log(message) {
      if (this.developer.verboseLogging) {
        if (this.developer.logger && typeof this.developer.logger == 'function') { this.developer.logger(message); }else { console.log(message); }
      }
    }

  }
};

var SimpleTypeaheadPlugin = {
  install: function (Vue, options) {
    Vue.use(PortalVue);
    Vue.component(SimpleTypeahead.name, SimpleTypeahead);
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(PortalVue);
  window.Vue.use(SimpleTypeaheadPlugin);
}

exports['default'] = SimpleTypeaheadPlugin;
exports.SimpleTypeahead = SimpleTypeahead;
