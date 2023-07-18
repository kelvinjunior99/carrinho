<template>
    <div class="position-relative carrinha" style="">

        <div class="position-relative top-0 start-0 p-2">
            <span class="position-relative top-0 badge rounded-pill bg-secondary p-2 mt-0">
                {{ $store.getters.total }} $
            </span>


            <div class="alert alert-secondary text-center" role="alert" style="width: 200px;">
                 <span class="fs-1">{{ $store.state.carrinha.length }}</span>
            </div>
            

            <template v-if="$store.state.carrinha.length">
                <ol class="list-group mt-2" v-for="cr in $store.state.carrinha">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">{{ cr.id }} {{ cr.nome }}</div>
                            {{ cr.preco }} $
                        </div>

                        <button @click="Deletar(cr.id)" class="btn text-danger rounded-pill"><i class="fa fa-trash-o"
                                aria-hidden="true"></i></button>
                    </li>

                </ol>
            </template>

            <MensagemComp v-else />
        </div>


    </div>
</template>

<script>
import MensagemComp from './MensagemComp.vue'

export default {
    props: {
        carrinha: {
            type: Object,
            default: () => ({})
        }
    },

    data() {
        return {
           
        }
    },

    components: {
        MensagemComp
    },

    methods: {
        Deletar(id) {
            //this.id = this.$store.state.carrinha.id
            this.$store.dispatch('deleteCarrinha', id)
        }
    },
   

    created() {
        this.$store.dispatch('getCarrinha') 
    }
}

</script>

<style scoped>
.carrinha>div {
    height: 100%;
    position: fixed !important;
    width: 370px;
    overflow: auto;
}

::-webkit-scrollbar {
	width: 6px;
}
::-webkit-scrollbar-track {
	background-color: #f4f4f5;
	border-radius: 50px;
}
::-webkit-scrollbar-thumb {
	background-color: #09442970;
	border-radius: 0px;
}

.list-group-item {
    border: 3px solid #fff;
    font-size: 11pt;
    border: 2px solid #ccc;
}
</style>