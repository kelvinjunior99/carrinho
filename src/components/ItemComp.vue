<template>

    <div class="container conteudo ">


        <div>

            <form @submit.stop.prevent="addCarrinha">


                <h4 class="text-danger">{{ stock.title }}</h4>
                <input type="hidden" v-model="stock.title">

                <p class="border border-1 rounded-3 border-success p-4">{{ stock.description }}</p>

                <p>

                    <button type="submit" class="btn btn-success position-relative m-2 rounded-5">
                        <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                    </button>

                    <span class="badge rounded-pill bg-info text-dark p-2 fw-lighter fw-bolder">{{ stock.price }} $</span>
                    <input type="hidden" v-model="stock.price">
                    <span class="badge rounded-pill bg-warning text-dark m-2 p-2 fw-lighter fw-bolder"> {{ stock.category }}
                    </span>
                </p>

            </form>

            <hr>
        </div>

    </div>

</template>

<script>

export default {

    data() {
        return {
            nome: '',
            preco: ''
        }
    },
    props: {
        stock: {
            type: Object,
            default: () => ({})
        }

    },

    methods: {
        addCarrinha() {
            this.$store.dispatch('addCarrinha', {
                nome: this.stock.title,
                preco: this.stock.price
            })
        }
    }
}
</script>

<style scoped>
.conteudo {
    padding: 20px;
    text-align: justify;
    width: 900px;
    margin-right: -0px;
}

.conteudo div {
    width: 600px;
}

h4 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

p {
    font-weight: bold;
    font-family:sans-serif;
    font-size: 11pt;
}

.carrinha {
    border-bottom-right-radius: 10em !important;
    border-bottom-left-radius: 10em !important;

    border-left: 4px solid rgb(107, 22, 22);
    border-right: 4px solid rgb(107, 22, 22);
    border-top: 5px double rgb(123, 130, 145);
}

span {
    font-weight: bold;
}
</style>