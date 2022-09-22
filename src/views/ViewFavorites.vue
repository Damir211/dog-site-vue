<template>
    <header-component />
    <list-component :is-main-page="false" :items="FAVORITES_LIST"/>
    <up-component />
</template>

<script>
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import ListComponent from '@/components/ListComponent.vue';
    import UpComponent from '@/components/UpComponent.vue';
    import { mapActions, mapGetters } from 'vuex'

    export default{
        computed: {
            ...mapGetters(['FAVORITES_LIST']),
        },
        methods: {
            ...mapActions(['GET_FAVORITES_LIST']),
        },
        mounted(){
            this.GET_FAVORITES_LIST();
        },
        components:{
            HeaderComponent,
            ListComponent,
            UpComponent,
        }
    }
</script>

<style lang="scss" scoped>

</style>