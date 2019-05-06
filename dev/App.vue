<template>
  <v-app>
    <vuetify-simple-typeahead
      ref="typeahead"
      clearable
      label="Search..."
      :data="{dataSet:serverDataSet,itemDisplayProperty:'text',itemValueProperty:'code'}"
      :developer="{'verboseLogging':'true','logger':myLogger}"      
      >      
    </vuetify-simple-typeahead>
  </v-app>
</template>

<script>

export default {
  name: 'simpletypeahead-demo',
  data(){
    return {
      serverDataSet: [
        {'text':'hi1','code':'1'},
      {'text':'hi2','code':'2'},
      {'text':'hi3','code':'3'},]
    }      
  },
  mounted() {
    this.serverDataSet = [
      {'text':'hi1','code':'1'},
      {'text':'hi2','code':'2'},
      {'text':'hi3','code':'3'},
    ]
  },
  methods: {
    myLogger(message) {
      console.log('from myLogger: '+message);
    }
  }
};
</script>


