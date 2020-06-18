module.exports = {
    vueTemplate: name => {
        return `
<template>
    <div class="${name.toLowerCase()}">
      这是${name}模块
    </div>
</template>

<script>
export default {
  name:"${name}"
}
</script>

<style lang="scss">
.${name.toLowerCase()}{
    color:red
}
</style>`
    },
    entryTemplate: name => {
        return `
const route = [{
    path: '/${name.toLowerCase()}',
    meta:'${name.toLowerCase()}',
    component:()=>import('./${name}.vue')
}]
export default route;`
    },
    storeTemplate: name => {
        return `
import Vue from "vue";
import Vuex from "vuex";
    
Vue.use(Vuex);
    
export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
});
    

    `
    }
}