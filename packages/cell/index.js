import ZtCell from './src/cell.vue';

ZtCell.install = function(Vue) {
    Vue.component(ZtCell.name, ZtCell);
};

export default ZtCell;