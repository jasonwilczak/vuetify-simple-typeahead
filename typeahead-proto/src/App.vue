<template>
  <v-app id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <v-container>
      <v-layout row>
        <v-flex md-4>Typeahead</v-flex>
        <v-flex md-6>
          <simple-typeahead
            chips
            clearable
            hide-details
            hide-selected
            item-text="name"
            item-value="symbol"
            label="Search..."
          />
        </v-flex>
      </v-layout>
    </v-container>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SimpleTypeahead from './components/typeahead/simple-typeahead'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SimpleTypeahead
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
