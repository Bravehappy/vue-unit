/*
 * @Author: Mr.zeng 
 * @Date: 2020-05-13 01:59:25 
 * @Last Modified by: Mr.zeng
 * @Last Modified time: 2020-05-14 02:05:35
 */

<template>
    <button class="u-button" :class="{[`icon-${iconPosition}`]: true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        // props:['icon','iconPosition']
        props:{
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator (value) {
                    return  value === 'left' || value === 'right'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .u-button { 
        font-size: 14px; height: 32px; padding: 0 1em;
        border-radius: 6pxs; border: 1px solid #ccc;
        background: #fff;
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: middle;
        &:hover { border-color: #666; }
        &:active { background-color: #eee; }
        &:focus { outline: none; }
        > .icon{order: 1;margin-right: .3em;}
        > .content{order: 2;}
        &.icon-right{
            > .icon{order: 2; margin-right: 0;margin-left: 0.3em;}
            > .content{order: 1;}
        }
    }
</style>