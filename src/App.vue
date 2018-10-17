<template>
  <keep-alive exclude="Detail">
      <router-view/>
  </keep-alive>
</template>

<script>
console.log('App.vue')
export default {
  name: 'App'
}
</script>

<style>

</style>
