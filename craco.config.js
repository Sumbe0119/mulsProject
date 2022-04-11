const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                modifyLessRule: (lessRule, context) => {
                    console.log(lessRule);
                    lessRule.use = lessRule.use.filter(i => {
                        if(i.loader.includes('resolve-url-loader')){
                            console.log("ddddddddddd")
                        }
                        /*if(i.loader.includes('postcss-loader')){
                            return false
                        }*/
                        return !i.loader.includes('resolve-url-loader')
                    });
                    return lessRule;
                },
                lessLoaderOptions: {

                    lessOptions: {
                        relativeUrls: false,
                        modifyVars: {  },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};