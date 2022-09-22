<template>
    <div class="list" :class="{'list-main': isMainPage}">
        <div class="container" v-if="items.length">
            <list-item 
                :imgSrc="item.imgSrc"
                :imgAlt="item.imgAlt"
                :title="item.title"
                v-for="(item, index) in items"
                :key="index"
            />
        </div>
        <div class="container" v-else>
            <span style="color: #fff; font-size: 30px">Нету таких Пёселей(</span>
        </div>
    </div>
</template>

<script>
    import ListItem from '@/components/ListItem.vue';
    export default {
        props: {
            isMainPage: Boolean,
            items: Array,
        },
        components: {
            ListItem,
        },
    }
</script>

<style lang="scss">
.list{
    &.list-main {
        .list__item{
            &:first-child{
                width: 100%;
                .list__title{
                    right: 50px;
                    bottom: 50px;
                    font-size: 30px;
                }
                .list__favorite{
                    top: 50px;
                    left: 50px;
                }
                .list__img {
                    padding-bottom: 44.22%;
                }
            }
            margin-right: 30px;
            &:nth-child(3n + 1){
                margin-right: 0;
            }
        }
    }
    &:not(.list-main) {
        .list__item{
            margin-right: 30px;
            &:nth-child(3n){
                margin-right: 0;
            }
        }
    }
    .container{
        display: flex;
        flex-wrap: wrap;
    }
    &__item{
        position: relative;
        width: calc(33.3333333% - 20px);
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 30px;
        z-index: 1;
    }
    &__img{
        width: 100%;
        padding-bottom: 79.01%;
        position: relative;
        z-index: -1;
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        &::before{
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            background: linear-gradient(3.21deg, #000000 -15.62%, rgba(0, 0, 0, 0) 45.69%);
        }
    }
    &__title{
        position: absolute;
        right: 25px;
        bottom: 25px;
        font-weight: 600;
        font-size: 25px;
        line-height: 28px;
        letter-spacing: 0.01em;
        color: #FFFFFF;
    }
    &__favorite{
        position: absolute;
        left: 25px;
        top: 25px;
        cursor: pointer;
        transition: 0.3s;
        display: block;
        width: 29px;
        height: 26px;
        &:hover{
            transform: scale(1.1);
        }
        svg{
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            transition: 0.3s;
            &:first-child{
                opacity: 1;
            }
            &:last-child{
                opacity: 0;
            }
        }
        &.active{
            svg:first-child{
                opacity: 0;
            }
            svg:last-child{
                opacity: 1;
            }
        }
    }
}
@media only screen and (max-width: 1000px) {
    .list{
        &.list-main {
            .list__item{
                margin-right: 0;
            }
            .container{
                justify-content: space-between;
            }
        }
        &__item{
            width: calc(50% - 15px);
        }
    }    
    .list:not(.list-main) .list__item{
        margin-right: 0;
    }
    .list:not(.list-main) .container{
        justify-content: space-between;
    }
}

@media only screen and (max-width: 700px) {
    .list{
        &__item{
            width: 100%;
        }
    } 
    .list.list-main {
        .list__item:first-child{
            .list__title{
                right: 20px;
                bottom: 20px;
                font-size: 20px;
            }
            .list__favorite{
                top: 20px;
                left: 20px;
            }
            .list__img {
                padding-bottom: 60%;
            }
        }
    }
    .list__img {
        padding-bottom: 60%;
    }
    .list__item{
        margin-bottom: 20px;
    }
    .list__favorite{
        top: 20px;
        left: 20px;
    }
    .list__title{
        right: 20px;
        bottom: 20px;
        font-size: 20px;
    }
    
}

@media only screen and (max-width: 500px) {
    .list.list-main {
        .list__item:first-child{
            .list__img {
                padding-bottom: 70%;
            }
        }
    }
    .list__img {
        padding-bottom: 70%;
    }
}
</style>