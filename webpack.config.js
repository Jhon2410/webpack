const htmlWebopackPlugin  = require("html-webpack-plugin");

module.exports = {
    module : {
        rules : [
            {
                test :  "/\.js$/i",
                exclude : /node_modules/,
                use : {
                    loader :  "babel-loader"
                }
            },
            {
                test :  "/\.html$/i",
                use : {
                    loader :  "html-loader"
                }
            }

        ]
    },
    plugins : [
        new htmlWebopackPlugin({
            template : "./src/index.html",
            filename : "./index.html"
        })
    ]
}