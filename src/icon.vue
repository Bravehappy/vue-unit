/*
 * @Author: Mr.zeng 
 * @Date: 2020-05-14 02:16:49 
 * @Last Modified by: Mr.zeng
 * @Last Modified time: 2020-05-17 00:08:56
 */

<template>
  <svg class="u-icon">
    <use :xlink:href="`#${icon}`"></use>
  </svg>
</template>

<script>
export default {
    props:['icon']
}
</script>

<style lang="scss">
    .u-icon{width: 1em;height: 1em;}
</style>