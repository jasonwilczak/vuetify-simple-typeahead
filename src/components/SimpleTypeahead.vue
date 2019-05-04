<template>
  <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      chips
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="value"
      label="Search..."
      solo
    >
      <template v-slot:no-data>
        <v-list-tile>
          <v-list-tile-title>
            No data available...
          </v-list-tile-title>
        </v-list-tile>
      </template>
      <!-- <template v-slot:selection="data">
        <v-chip
          :selected="data.selected"
          color="blue-grey"
          class="white--text"
        >
          <v-icon left>mdi-coin</v-icon>
          <span v-text="data.item.name"></span>
        </v-chip>
      </template>
      <template v-slot:item="data">
        <v-list-tile-avatar
          color="indigo"
          class="headline font-weight-light white--text"
        >
          {{ data.item.name.charAt(0) }}
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-text="data.item.name"></v-list-tile-title>
          <v-list-tile-sub-title v-text="data.item.symbol"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>mdi-coin</v-icon>
        </v-list-tile-action>
      </template> -->
    </v-autocomplete>
</template>

<script>
export default {
    name: 'vuetify-simple-typeahead',
    props: {      
      dataSource: null,
      developer: {
        type: Object,
        default: () => {
          return {verboseLogging:false,logger:null}
        }
      }
    },
    data: () => ({
      isLoading: false,
      items: [],
      model: null,
      search: null
    }),

    watch: {
      search (val) {
        // Items have already been loaded
        if (this.items.length > 0) return

        this.isLoading = true
        
        // Lazily load input items
        if(this.dataSource) {
        fetch('https://api.coinmarketcap.com/v2/listings/')
          .then(res => res.json())
          .then(res => {
            this.items = res.data
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
        } else {
          this.items = [{name:'item 1',value:'1'}];
          this.isLoading = false;
        }
      }
    },
    mounted() {
      this.log('typeahead component mounted');
    },
    methods: {      
      log(message) {
        if(this.developer.verboseLogging) {
          if(this.developer.logger && typeof this.developer.logger == 'function') 
            this.developer.logger(message);
          else
            console.log(message);
        }
      }
 
    }
  }
</script>

<style>

</style>
