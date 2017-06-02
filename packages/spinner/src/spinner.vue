<template>
    <span><component :is="spinner"></component></span>
</template>

<script>
    const SPINNERS = [
        'snake',
        'double-bounce',
        'triple-bounce',
    ];
    const judgeSpinner = function (index) {
        if({}.toString.call(index) === '[object Number]'){
            if(SPINNERS.length <= index){
                console.warn(`'${index}' spinner not found, use default spinner`);
                _index = 0;
            }
            return SPINNERS[index];
        }

        if (SPINNERS.indexOf(index) === -1) {
            console.warn(`'${index}' spinner not found, use the default spinner.`);
            index = SPINNERS[0];
        }
        return index;
    };

    export default{
        name: 'zt-spinner',
        computed: {
            spinner() {
                return `spinner-${judgeSpinner(this.type)}`;
            }
        },
        components: {
            SpinnerSnake: require('./components/snake.vue'),
            SpinnerDoubleBounce: require('./components/double-bounce.vue'),
            SpinnerTripleBounce: require('./components/triple-bounce.vue'),
        },
        props: {
            type: {
                default: 0
            },
            size: {
                type: Number,
                default: 28
            },
            color: {
                type: String,
                default: '#ccc'
            }
        }
    }

</script>

<style type="text/less">
    .zt-spinner-snake{

    }

</style>

