<template>
    <div class="list__item">
        <div class="list__img">
            <img :src="imgSrc" :alt="imgAlt">
        </div>
        <span class="list__title">{{ title }}</span>
        <span class="list__favorite" :class="{active: isFavorite}" @click="toggleToFavoriteList">
            <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7579 25.6993L2.62464 14.8743C-0.874882 11.4716 -0.874882 5.9453 2.62464 2.54267C5.87363 -0.61635 10.9956 -0.831789 14.5 1.89636C18.0044 -0.831789 23.1264 -0.61635 26.3754 2.54267C29.8749 5.9453 29.8749 11.4716 26.3754 14.8743L15.2421 25.6993C14.8297 26.1003 14.1703 26.1003 13.7579 25.6993ZM4.10909 4.04943C1.45989 6.62528 1.45989 10.7919 4.10909 13.3678L14.5002 23.4712L24.8914 13.3678C27.5406 10.7919 27.5406 6.62528 24.8914 4.04943C22.2294 1.46119 17.9043 1.46119 15.2423 4.04943C14.8299 4.45042 14.1706 4.45042 13.7581 4.04943C11.0962 1.46119 6.77104 1.46119 4.10909 4.04943Z" fill="white"/>
            </svg>
            <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7579 25.6993C14.1703 26.1002 14.8297 26.1002 15.2421 25.6993L26.3754 14.8743C29.8749 11.4716 29.8749 5.9453 26.3754 2.54267C23.1264 -0.61635 18.0044 -0.831789 14.5 1.89635C10.9956 -0.831789 5.87363 -0.61635 2.62465 2.54267C-0.874882 5.9453 -0.874882 11.4716 2.62465 14.8743L13.7579 25.6993Z" fill="white"/>
            </svg>
        </span>
    </div>      
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'


    export default {
        props: {
            imgSrc: String,
            imgAlt: String,
            title: String,
        },
        emits: {},
        computed: {
            ...mapGetters(['FAVORITES_LIST']),
            isFavorite(){
                return this.FAVORITES_LIST.some(item => (this.imgSrc === item.imgSrc));
            }
        },  
        methods: {
            ...mapActions(['ADD_FAVORITES_ITEM', 'REMOVE_ITEM_FROM_FAVORITE_LIST']),
            addToFavoritesList(){
                this.ADD_FAVORITES_ITEM({
                    imgSrc: this.imgSrc,
                    imgAlt: this.imgAlt,
                    title: this.title,
                });
            },
            removeFromFavoriteList(){
                this.REMOVE_ITEM_FROM_FAVORITE_LIST({
                    imgSrc: this.imgSrc,
                    imgAlt: this.imgAlt,
                    title: this.title,
                });
            },
            toggleToFavoriteList(){
                if(this.isFavorite){
                    this.removeFromFavoriteList();
                }else{
                    this.addToFavoritesList();
                }
            }
        }
    }
</script>
<style></style>
