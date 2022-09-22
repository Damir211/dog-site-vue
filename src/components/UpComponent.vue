<template>
    <div class="up" :class="{hide: hideButton}" @click="scrollTo(0)">
        <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9667 6.80882C11.5891 7.1865 10.9767 7.1865 10.599 6.80882L7.0921 3.30188L7.0921 19.0197C7.0921 19.5538 6.65912 19.9868 6.125 19.9868C5.59088 19.9868 5.15789 19.5538 5.15789 19.0197L5.15789 3.30188L1.65095 6.80882C1.27327 7.1865 0.660937 7.1865 0.283259 6.80882C-0.0944195 6.43114 -0.0944195 5.81881 0.283259 5.44113L5.44115 0.283234C5.81883 -0.0944443 6.43117 -0.0944443 6.80885 0.283234L11.9667 5.44113C12.3444 5.81881 12.3444 6.43114 11.9667 6.80882Z" fill="white"/>
        </svg>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                hideButton: false,
            }
        },
        methods: {
            scrollTo(posX){
                window.scrollTo({top: posX, behavior: 'smooth'});
            },
            checkScrollPosition(){
                this.hideButton = window.pageYOffset < window.innerHeight;
            }
        },
        mounted(){
            window.addEventListener('scroll', this.checkScrollPosition);
        },
        beforeUnmount(){
            window.removeEventListener('scroll', this.checkScrollPosition);
        }
        
    }
</script>
<style lang="scss" scoped>
.up{
    position: fixed;
    right: 55px;
    bottom: 55px;
    z-index: 5;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 1px solid #fff;
    background: #111013;
    transition: 0.3s;

    &:hover{
        transform: scale(1.1);
    }
    &.hide{
        pointer-events: none;
        transform: scale(0.5);
        opacity: 0;
    }
}
@media only screen and (max-width: 700px) {
    .up{
        right: 30px;
        bottom: 30px;
    }
}
@media only screen and (max-width: 500px) {
    .up{
        right: 15px;
        bottom: 15px;
    }
}
</style>