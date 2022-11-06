<template>
  <div class="main">
    <AddMenu/>
    <FooterVue/>
  </div>
</template>

<script>
import AddMenu from '../src/views/AddMenu'
import FooterVue from '../src/components/FooterVue'
export default {
  components: {
    AddMenu : AddMenu,
    FooterVue : FooterVue,
  }
}
</script>

<style>

</style>
