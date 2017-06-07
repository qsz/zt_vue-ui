<template>
    <component :is="boxType" :title="title" :items="items" :columnNum="columnNum" :lineNum="lineNum" :type="type" :editFuc="editFuc"></component>
</template>

<script>
    export default{
        name: 'zt-ninebox',
        computed: {
            boxType() {
                let boxList = ['edit','add','delete','normal'];
                if(boxList.indexOf(this.type) > -1){
                    return `${this.type}-box`;
                }
                return `normal-box`;
            }
        },
        components: {
            EditBox: require('./components/editBox.vue'),
            AddBox: require('./components/editBox.vue'),
            DeleteBox: require('./components/editBox.vue'),
            NormalBox: require('./components/normalBox.vue')
        },
        props: {
            type: {
                default: 'normal'
            },
            columnNum: {
                default: 4
            },
            lineNum: {
                default: 2
            },
            title:{},
            items:{
                type: Array,
                required: true
            },
            editFuc:{
                type: Function,
                default: function () {
                    console.log()
                }
            }
        }
    }
</script>
