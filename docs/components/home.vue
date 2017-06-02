<template>
    <div class="homepage">
        home
        <zt-selectbox></zt-selectbox>
        <button @click="load">click</button>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
    import { ZtLoading,Selectbox } from 'Src/index'

    export default {
        name: 'home',
        data () {
            return {
            }
        },
        components:{
        },
        methods:{
            load: function () {
                console.log(ZtLoading,Indicator)
                ZtLoading.show({
                    text: '加载中...',
                    spinnerType: 'snake',
                });
//                Indicator.open({
//                    text: '加载中...',
//                    spinnerType: 'snake',
//                });
            }
        }
    }
</script>
<style type="text/less">

</style>