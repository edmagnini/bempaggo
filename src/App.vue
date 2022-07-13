<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import PaymentForm from './components/PaymentForm.vue'
</script>

<template>
  <div id="nav">
  <PaymentForm />
  </div>
  <router-view/>
</template>

<style>
html, body{
  margin: 0;
  padding: 0;
}
#nav{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  margin: 0;
  padding: 0;
  color: #2c3e50;  
  background-color: #8A2BE2;
  height: 100vh;  
}
</style>
