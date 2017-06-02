import Vue from 'vue';
const ZtLoading = Vue.extend(require('./src/loading.vue'));
let instance;

export default {
    show(options={}){
        if (!instance) {
            instance = new ZtLoading({
                el: document.createElement('div')
            });
        }
        if (instance.visible) return;
        instance.text = typeof options === 'string' ? options : options.text || '';
        instance.spinnerType = options.spinnerType || 'snake';

        document.body.appendChild(instance.$el);
        Vue.nextTick(() => {
            instance.visible = true;
        });
    },
    close() {
        if (instance) {
            instance.visible = false;
        }
    }
};

