/*
 * @Author: Mr.zeng 
 * @Date: 2020-05-13 02:00:27 
 * @Last Modified by: Mr.zeng
 * @Last Modified time: 2020-05-13 02:30:26
 */
import Vue from 'vue';
//引入组件
import Button from './button.vue';
// 注册组件
Vue.component('u-button', Button)

new Vue({
    el: "#app"
})