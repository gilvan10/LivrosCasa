<template>
    <span>
        <span v-if="item">
            <button  v-if="tipo == 'button'" type="button" v-bind:class="css || 'btn btn-primary'" data-toggle="modal" v-bind:data-target="'#' + nome">{{titulo}}</button>
            <a  v-if="tipo == 'link'" href="#" v-bind:class="css || ''" data-toggle="modal" v-bind:data-target="'#' + nome">{{titulo}}</a>
        </span>
        <span v-if="!item">
            <button v-if="tipo == 'button'" type="button" v-bind:class="css || 'btn btn-primary'" data-toggle="modal" v-bind:data-target="'#' + nome">{{titulo}}</button>
            <a v-if="tipo == 'link'" href="#" v-bind:class="css || ''" data-toggle="modal" v-bind:data-target="'#' + nome">{{titulo}}</a>
        </span>
        
    </span>
</template>

<script>
    export default {
        props:['tipo','nome','titulo','css','item'],
        
    }
</script>