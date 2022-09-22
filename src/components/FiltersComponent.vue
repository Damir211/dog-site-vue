<template>
    <div class="filter">
        <div class="container">
            <div class="filter__head">
                <div class="filter__control">
                    <div class="filter__button" @click="isFilterContaierOpen = !isFilterContaierOpen" :class="{'active': isFilterContaierOpen}">
                        Породы
                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.002 0.168977C0.772777 -0.0563256 0.401136 -0.0563256 0.171916 0.168977C-0.0573044 0.394279 -0.0573044 0.759567 0.171916 0.984869L4.08496 4.83102C4.31418 5.05633 4.68582 5.05633 4.91504 4.83102L8.82808 0.984869C9.05731 0.759567 9.05731 0.394279 8.82808 0.168977C8.59886 -0.0563256 8.22722 -0.0563256 7.998 0.168977L4.5 3.60718L1.002 0.168977Z" fill="white"/>
                        </svg>
                    </div>
                    <div class="filter__selected">
                        <router-link to="/" class="filter__checkbox checkbox" v-if="$route.params.id">
                            <input type="checkbox">
                            <span>
                                {{$route.params.id}}
                                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.20218 2.27892L5.3626 0.118492C5.52059 -0.0394974 
                                    5.77674 -0.0394974 5.93473 0.118492C6.09272 0.276482 6.09272 0.532634 5.93473 0.690624L3.77431 2.85105L5.93479 
                                    5.01153C6.09278 5.16952 6.09278 5.42567 5.93479 5.58366C5.7768 5.74165 5.52065 5.74165 5.36266 5.58366L3.20218 
                                    3.42318L1.0417 5.58366C0.883708 5.74165 0.627556 5.74165 0.469567 5.58366C0.311577 5.42567 0.311577 5.16951 0.469567 
                                    5.01152L2.63004 2.85105L0.469628 0.69063C0.311638 0.53264 0.311638 0.276488 0.469628 0.118498C0.627617 -0.0394917 
                                    0.883769 -0.0394917 1.04176 0.118498L3.20218 2.27892Z" fill="#3C59F0"/>
                                </svg>
                            </span>
                        </router-link>
                    </div>
                </div>
                <label class="filter__sort" v-if="isMainPage">
                    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)">
                    <span>Сортировка по алфавиту</span>
                </label>
            </div>
            <div class="filter__container" v-if="isFilterContaierOpen">
                <div class="filter__buttons">
                    <router-link to="/" class="filter__reset checkbox" v-if="$route.params.id">
                        <input type="checkbox" checked>
                        <span>Все пёсели</span>
                    </router-link>
                </div>
                <div class="filter__checkboxs">
                    <template v-for="(item, index) in formatedBreedsList" :key="index">
                        <div class="filter__char">
                            {{index}}
                        </div>
                        <template v-for="breed in item" :key="breed">
                            <router-link :to="'/'+breed" class="filter__checkbox checkbox" v-if="$route.params.id !== breed">
                                <input type="checkbox">
                                <span>{{breed}}</span>
                            </router-link>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data(){
            return{
                isFilterContaierOpen: false,
            }
        },
        props: {
            isMainPage: Boolean,
            modelValue: Boolean,
        },
        emits: ['update:modelValue'],
        computed: {
            formatedBreedsList: function(){
                return this.BREEDS_LIST.reduce((acc, current)=>{
                    acc[current[0]] ? acc[current[0]].push(current) : acc[current[0]] = [current];
                    return acc;
                },{});
            },
            ...mapGetters(['BREEDS_LIST']),
        },
        methods: {
            ...mapActions(['GET_BREEDS_LIST']),
        },
        mounted(){
            this.GET_BREEDS_LIST();
            this.$watch(
                () => this.$route.params, 
                (toParams) => {
                    if(toParams.id){
                        this.isFilterContaierOpen = false;
                    }
                }    
            )
        },
    }
</script>

<style lang="scss" scoped>
.filter {
    margin-bottom: 35px;
    &__control{
        display: flex;
        flex-wrap: wrap;
    }
    &__selected{
        margin-top: 5px;
        margin-bottom: 5px;
        .checkbox span{
            color: #3C59F0;
            border-color: #3C59F0;
        }
    }
    &__head{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    &__container {
        display: flex;
        flex-direction: column;
    }
    &__button{
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        padding-bottom: 2px;
        border-bottom: 0.5px dashed #FFFFFF;
        transition: 0.3s;
        cursor: pointer;
        margin-right: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
        text-decoration: none;
        &:hover{
            border-color: transparent;
        }
        &.active{
            svg{
                transform: rotate(180deg);
            }
        }
        svg{
            margin-left: 10px;
            transition: 0.3s;
        }
    }
    &__buttons{
        margin-top: 30px;
        display: flex;
    }
    &__checkbox{
        text-decoration: none;
    }
    &__reset{
        text-decoration: none;
    }
    &__checkboxs {
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
        .checkbox{
            margin-bottom: 15px;
            margin-right: 15px;
        }
    }
    &__char {
        margin-right: 15px;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.01em;
        color: #626262;
    }
    &__sort{
        font-size: 16px;
        line-height: 28px;
        text-align: right;
        letter-spacing: 0.01em;
        color: #626262;
        padding-right: 45px;
        flex-shrink: 0;
        cursor: pointer;
        &:hover {
            color: #FFFFFF;
            span::after{
                background-color: #FFFFFF;
            }
            span::before {
                border-color: #FFFFFF;
            }
        }
        input{
            display: none;
            &:checked + span{
                color: #3C59F0;
            }
            &:checked + span::after{
                right: -41px;
                background-color: #3C59F0;
            }
            &:checked + span::before {
                border-color: #3C59F0;
            }
        }
        span{
            position: relative;
            transition: 0.3s;
            &::before{
                content: '';
                position: absolute;
                right: -45px;
                top: 3px;
                width: 29px;
                height: 14px;
                border: 1px solid #626262;
                border-radius: 9px;
                transition: 0.3s;
            }
            &::after{
                content: '';
                position: absolute;
                right: -28px;
                top: 6px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #626262;
                transition: 0.3s;
            }
        }
    }
}
</style>