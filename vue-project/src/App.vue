<script>
import { ref } from 'vue';
import { RouterView, useRoute } from 'vue-router'

export default {
  components: {
        RouterView,
    },
    setup() {

        const route = useRoute()
        return {
            route
        }
    },
}
</script>

<template>
    <div class="font-poppins">
      <RouterView :key="route.fullPath"/>
    </div>
</template>

<style lang="scss" scoped>

</style>