/*
 * @Author: Mr.zeng 
 * @Date: 2020-05-13 01:59:25 
 * @Last Modified by: Mr.zeng
 * @Last Modified time: 2020-05-13 02:29:53
 */

<template>
    <button class="u-button">按钮</button>
</template>

<script>
    export default {
        
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