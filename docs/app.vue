<template>
    <div id="docs">
        <router-view></router-view>
    </div>
</template>

<script>
    import 'mint-ui/lib/style.css';
    import axios from 'axios';

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

        },
        mounted: function () {
            axios.get(`${baseurl}/mainindex/GetUserBasicInfo`)
                .then(function (response){
                    try{
                        localStorage.setItem("org",JSON.stringify(response.data.org));
                        localStorage.setItem("users",JSON.stringify(response.data.users));
                        localStorage.setItem("userlist", JSON.stringify(response.data.userlist));
                        console.log("ressssssssssss",response.data,response.data.userlist,localStorage);
                    }catch(err) {
                        console.log(err);
                    }
                })
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                //this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
            }
        },
    }
</script>
<style>
    @import "Css/reset.less";

</style>