<template>
    <div class="homepage">
        home
        <zt-selectbox></zt-selectbox>
        <button @click="load">click</button>
    </div>
</template>

<script>
    import ZtSelectbox from "../../packages/selectbox/src/selectbox";
    import { Indicator } from 'mint-ui';

    export default {
        name: 'home',
        data () {
            return {
            }
        },
        components:{
            ZtSelectbox

        },
        methods:{
            load: function () {
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'triple-bounce'
                });
            }
        }
    }
</script>
<style type="text/less">

</style>