<template>
    <div>
        <CarrinhaCompVue/>
        <ItemCompVue v-for="stock in $store.state.todos" :key="stock.id" :stock="stock" />
    </div>
</template>

<script>
import ItemCompVue from './ItemComp.vue';
import CarrinhaCompVue from './CarrinhaComp.vue'

export default {

    components: {
        ItemCompVue,
        CarrinhaCompVue
    },

    data() {
        return {
            ch: ''
        }
    }
} 
</script>

<style scoped>
</style>