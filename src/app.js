/*
 * @Author: Mr.zeng 
 * @Date: 2020-05-13 02:00:27 
 * @Last Modified by: Mr.zeng
 * @Last Modified time: 2020-05-14 02:20:42
 */
import Vue from 'vue';
//引入组件
import Button from './button.vue';
import Icon from './icon.vue';
// 注册组件
Vue.component('u-button', Button)
Vue.component('u-icon', Icon)

new Vue({
    el: "#app"
})