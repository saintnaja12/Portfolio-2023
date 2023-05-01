<script>
import { defineComponent, ref } from 'vue';
import NavBar from '@/components/Layout/NavBar/NavBar.vue';

export default defineComponent({
  components: { NavBar },
    setup() {
        return {
            
        }
    },
})
</script>

<template>
    <div class="">
        <NavBar></NavBar>
        <div class="container mx-auto page">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>