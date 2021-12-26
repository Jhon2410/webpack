const htmlWebopackPlugin  = require("html-webpack-plugin");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : __dirname + "/dist",
        filename : "index.js"
    },
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
            },
            {
                test :  "/\.css$/i",
                use : [
                    {
                    loader :  "style-loader"
                    },
                    {
                        loader :  "css-loader"
                    }
                ]
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