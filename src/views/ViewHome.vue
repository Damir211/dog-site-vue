<template>
    <header-component />
    <filter-component :is-main-page="true" v-model="alphabeticalSorting"/>
    <list-component :is-main-page="true" :items="filtredDogsList"/>
    <loader-component />
    
    <up-component />
</template>

<script>
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import FilterComponent from '@/components/FiltersComponent.vue';
    import ListComponent from '@/components/ListComponent.vue';
    import LoaderComponent from '@/components/LoaderComponent.vue';
    import UpComponent from '@/components/UpComponent.vue';
    import { mapGetters, mapActions } from 'vuex';

    export default{
        data(){
            return {
                loading: false,
                alphabeticalSorting: false,
            }
        },  
        computed: {
            ...mapGetters(['DOGS_LIST']),
            filtredDogsList(){
                if(this.alphabeticalSorting){
                    return this.DOGS_LIST.slice().sort((a, b) => a.title.localeCompare(b.title));
                }
                return this.DOGS_LIST;
            }
        },  
        methods: {
            ...mapActions(['GET_RANDOM_DOGS_LIST']),
            inifinityScroll(){
                let windowScrollTop = window.scrollY + window.innerHeight;
                let loaderScrollTop = document.querySelector('.loader').offsetTop;

                if(windowScrollTop > loaderScrollTop && !this.loading){
                    this.loading = true;
                    this.GET_RANDOM_DOGS_LIST().then(()=>{this.loading = false});
                }
            },
        },
        mounted(){
            this.GET_RANDOM_DOGS_LIST();
            window.addEventListener('scroll', this.inifinityScroll);
        },  
        unmounted(){
            window.removeEventListener('scroll', this.inifinityScroll);
        },  
        components:{
            HeaderComponent,
            FilterComponent,
            ListComponent,
            LoaderComponent,
            UpComponent,
        }
    }
</script>

<style lang="scss" scoped>

</style>