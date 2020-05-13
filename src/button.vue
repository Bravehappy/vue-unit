/*
 * @Author: Mr.zeng 
 * @Date: 2020-05-13 01:59:25 
 * @Last Modified by: Mr.zeng
 * @Last Modified time: 2020-05-14 01:10:54
 */

<template>
    <button class="u-button">
        <div v-if="iconPosition === 'right'">
            <slot></slot>
            <svg v-if="icon" class="icon">
                <use :xlink:href="`#${icon}`"></use>
            </svg>
        </div>
        <div v-else>
            <svg v-if="icon" class="icon">
                <use :xlink:href="`#${icon}`"></use>
            </svg>
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props:['icon','iconPosition']
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
    }
</style>