<template>
    <div class="position-relative" style="position: fixed!important;">

        <div class="position-absolute top-0 start-0 p-4">
            <span class="position-absolute top-0 badge rounded-pill bg-secondary p-2 mt-4">
                4000 $
            </span>
            <span class="carrinha badge bg-light  text-dark p-5 mt-4 text-center fs-1">
                100
            </span>
        </div>

    </div>
    <div class="container conteudo ">


        <select class="form-select" aria-label="Default select example">

            <option value="" v-for="cat in noticia" >{{ cat.category }}</option>

        </select>

        <div v-for="stock in noticia">

            <h4 class="text-danger">{{ stock.title }}</h4>

            <p class="">{{ stock.description }}</p>

            <p class="">
                <span class="badge rounded-pill bg-info text-dark p-2 fw-lighter">{{ stock.price }} $</span>
                <span class="badge rounded-pill bg-warning text-dark m-2 p-2 fw-lighter"> {{ stock.category }} </span>
            </p>


            <button type="button" class="btn btn-success position-relative">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>

            </button>

            <hr>
        </div>

    </div>
</template>

<script>
export default {

    data() {
        return {
            noticia: []
        }
    },
    created() {
        fetch('http://localhost:3000/todos').then(response => response.json()).then(dados => {
            this.noticia = dados
        })
    }


}

</script>

<style scoped>
.conteudo {
    padding: 20px;
    text-align: justify;
    width: 900px;
}

.conteudo div {
    padding: 20px;
}

h4 {
    font-family: Arial, Helvetica, sans-serif;
}

p {
    font-weight: 400;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 13pt;
}

.carrinha {
    border-bottom-right-radius: 10em !important;
    border-bottom-left-radius: 10em !important;

    border-left: 4px solid rgb(107, 22, 22);
    border-right: 4px solid rgb(107, 22, 22);
    border-top: 5px double rgb(123, 130, 145);
}
</style>