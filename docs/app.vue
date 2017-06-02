<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    //import 'mint-ui/lib/style.css';

    let html = document.documentElement;
    window.rem = html.getBoundingClientRect().width / 375 ;
    html.style.fontSize = (window.rem)*20 + 'px';
    window.onresize = () => {
        html = document.documentElement;
        window.rem = html.getBoundingClientRect().width / 375 ;
        html.style.fontSize = (window.rem)*20 + 'px';
    };

    export default {
        name: 'app',
        data () {
            return {
            }
        },
        components:{

        }
    }
</script>
<style>

</style>