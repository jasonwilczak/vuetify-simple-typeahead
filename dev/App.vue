<template>
  <v-app>
    <vuetify-simple-typeahead
      ref="typeahead"
      :developer="{'verboseLogging':'true','logger':myLogger}"
      >      
    </vuetify-simple-typeahead>
  </v-app>
</template>

<script>

export default {
  name: 'simpletypeahead-demo',
  data(){
    return {}      
  },
  methods: {
    myLogger(message) {
      console.log('from myLogger: '+message);
    }
  }
};
</script>


