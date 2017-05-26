<template>
    <div id="selectBox">
       selectBox
    </div>
</template>

<script>
    export default {
        name: 'ZtSelectbox',
        data () {
            return {

            }
        },
        components:{

        },

        // 生命周期：实例创建 => 编译挂载 => 组件更新 => 销毁
        beforeCreate(){
            console.log('beforeCreate ==> 实例创建')
        },
        created(){
            // 可以操作data, 但未生成DOM（未挂载）发起异步请求，初始化组件状态数据 data
            console.log('created ==> 实例创建完成，属性已绑定')
        },
        beforeMount(){
            console.log('beforeMount ==> 模板编译/挂载之前')
        },
        mounted(){
            // 已生成DOM到document中，可访问this.$el属性
            this.$data.itemList3 = {"sa":"sad"}
            console.log('mounted ==> 模板编译/挂载之后',this.$data)
        },
        beforeUpdate(){
            console.log('beforeUpdate ==> 组件更新之前')
        },
        updated(){
            // 操作DOM $('#box1')
            console.log('updated ==> 组件更新之后')
        },
        activated(){
            // 操作DOM $('#box1')
            console.log('activated ==> 组件被激活时（for keep-alive组件）')
        },
        deactivated(){
            console.log('deactivated ==> 组件被移除时（for keep-alive组件）')
        },
        beforeDestroy(){
            // 解除事件绑定，销毁非Vue组件实例等 如：this.$off('event1') select2.destory()
            console.log('beforeDestroy ==> 组件销毁之前')
        },
        destroyed(){
            console.log('destroyed ==> 组件销毁之后')
        }
    }
</script>
<style>

</style>