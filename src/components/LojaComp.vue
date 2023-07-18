<template>
    <div>
        <SpinersCompVue v-if="loading"/>

        <template v-else>
           <ItemsCompVue/> 
        </template>
        
    </div>
</template>

<script>

import ItemsCompVue from './ItemsComp.vue'
import SpinersCompVue from './SpinersComp.vue'

export default {

    components: {
        ItemsCompVue,
        SpinersCompVue
    },

    data() {
        return {
            loading: false
        }
    },

    created() {
      this.loading = true
       this.$store.dispatch('getTodos').finally(() => {
        this.loading = false
       })
  } 
}

</script>

