<template>
    <header-component />
    <filter-component :is-main-page="false"/>
    <list-component :is-main-page="false" :items="DOGS_LIST"/>
    
    <up-component />
</template>

<script>
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import FilterComponent from '@/components/FiltersComponent.vue';
    import ListComponent from '@/components/ListComponent.vue';
    import UpComponent from '@/components/UpComponent.vue';
    import { mapGetters, mapActions } from 'vuex';

    export default{
        mounted(){
            this.GET_DOGS_FROM_BREED(this.$route.params.id.split('-').join('/'));
            this.$watch(
                () => this.$route.params, 
                (toParams) => {
                    if(toParams.id){
                        this.GET_DOGS_FROM_BREED(toParams.id.split('-').join('/'));
                    }
                }    
            )
        },
        unmounted(){
            this.CLEAR_DOGS_LIST();
        },
        computed: {
            ...mapGetters(['DOGS_LIST'])
        }, 
        methods: {
            ...mapActions(['GET_DOGS_FROM_BREED', 'CLEAR_DOGS_LIST']),
        },
        components:{
            HeaderComponent,
            FilterComponent,
            ListComponent,
            UpComponent,
        }
    }
</script>

<style lang="scss" scoped>

</style>