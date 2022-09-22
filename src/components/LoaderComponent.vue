<template>
    <div class="loader">
        <div class="loader__container">
            <div class="loader__round"></div>
            <div class="loader__round"></div>
            <div class="loader__round"></div>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
.loader {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__container{
        display: flex;
        justify-content: space-between;
        width: 66px;
    }
    &__round{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #FFFFFF;
        &:nth-child(1){
            animation: loader 1.5s ease-in-out infinite;
        }
        &:nth-child(2){
            animation: loader 1.5s ease-in-out 0.5s infinite;
        }
        &:nth-child(3){
            animation: loader 1.5s ease-in-out 1s infinite;
        }
    }
}

@keyframes loader{
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
}
</style>