import GlLinkTag from './src/linkTag';

/* istanbul ignore next */
GlLinkTag.install = function (Vue) {
    Vue.component(GlLinkTag.name, GlLinkTag);
};

export default GlLinkTag;
