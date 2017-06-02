<template>
    <transition name="zt-loading">
        <div class="zt-loading" v-show="visible">
            <div class="zt-loading-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
                <spinner class="zt-loading-spin" :type="convertedSpinnerType" :size="32"></spinner>
                <span class="zt-loading-text" v-show="text">{{ text }}</span>
            </div>
            <div class="zt-loading-mask"></div>
        </div>
    </transition>

</template>
<script>
    import Spinner from '../../spinner';
    export default {
        name: 'zt-loading',
        data() {
            return {
                visible: false
            };
        },
        components:{
            Spinner
        },
        computed: {
            convertedSpinnerType() {
                switch (this.spinnerType) {
                    case 'double-bounce':
                        return 1;
                    case 'triple-bounce':
                        return 2;
                    case 'fading-circle':
                        return 3;
                    default:
                        return 0;
                }
            }
        },
        props: {
            text: String,
            spinnerType: {
                type: String,
                default: 'snake'
            }
        }
    }
</script>

<style type="text/less">
    .zt-loading{
        .zt-loading-wrapper{
            position: fixed;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            box-sizing: border-box;
            text-align: center;
            border-radius: 5px;
            color: white;
            background: rgba(0, 0, 0, 0.7);
        }
        .zt-loading-spin {
            display: inline-block;
            text-align: center;
        }

        .zt-loading-text{
            display: block;
            color: #fff;
            text-align: center;
            margin-top: 10px;
            font-size: 16px;
        }

        .zt-loading-mask{
            top: 0;
            left: 0;
            position: fixed;
            width: 100%;
            height: 100%;
            opacity: 0;
            background: transparent;
        }
    }
</style>