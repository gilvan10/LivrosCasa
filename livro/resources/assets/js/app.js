
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/* //Vuex
import Vuex  from 'Vuex'
Vue.use(Vuex);

//"vuex": "^3.1.2" estava packege.json
const store = new Vuex.store({
    state:{
        item:{}
    },
    mutations:{
        setItem(state,obj){
            state.item = obj;
        }
    }
    store, nesse arquivo

    em index
    item nos props
    <!--v-on:click="preencheFormulario()" Quando e acionado o editar na superior

    na parte inferior de editar
    v-model="$store.state.item.ds_name"
    v-model="$store.state.item.id_usuario"

             methods:{
            preencheFormulario:function(){
                this.$store.commit('setItem',this.item);
            }
            }-->
});
*/

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('pagina', require('./components/Pagina.vue'));
Vue.component('painel', require('./components/Painel.vue'));
Vue.component('tabela-lista', require('./components/TabelaLista.vue'));
Vue.component('topo', require('./components/Topo.vue'));
Vue.component('modal', require('./components/modal/Modal.vue'));
Vue.component('modal-link', require('./components/modal/ModalLink.vue'));
Vue.component('formulario', require('./components/Formulario.vue'));


const app = new Vue({
    el: '#app',
    mounted: function(){
        console.log("ok");
        document.getElementById('app').style.diplay = "block";
    }
});
