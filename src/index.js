import Selectbox from '../packages/Selectbox/index.js';

const components = {
    Selectbox
};


const install = function(Vue, opts = {}) {
    /* istanbul ignore if */
    if (install.installed) return;
    // locale.use(opts.locale);
    // locale.i18n(opts.i18n);

    components.map(component => {
        Vue.component(component.name, component);
    });

    // Vue.use(Loading.directive);
    // Vue.prototype.$loading = Loading.service;
    // Vue.prototype.$msgbox = MessageBox;
    // Vue.prototype.$alert = MessageBox.alert;
    // Vue.prototype.$confirm = MessageBox.confirm;
    // Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.prototype.$notify = Notification;
    // Vue.prototype.$message = Message;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};



module.exports = {
    version: '1.0.0',
    // locale: locale.use,
    // i18n: locale.i18n,
    install,
    Selectbox
};