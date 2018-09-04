const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
	entry: ["./src/index.ts"],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		// publicPath: "http://localhost:8080/",
	},
	devtool: 'source-map',
	// devServer: {
	// 	headers: {
	// 		"Access-Control-Allow-Origin": "*",
	// 		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
	// 		"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
	// 	},
	// 	historyApiFallback: true, // For react-router
	// },
	module: {
		rules: [
			// {
			// 	test: /\.jsx?$/,
			// 	use: {
			// 		loader: "babel-loader",
			// 		options: {
			// 			babelrc: false,
			// 			presets: ["@babel/preset-env", "@babel/preset-react"],
			// 			plugins: ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-proposal-class-properties"]
			// 		}
			// 	}
            // },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {}
                }
            },
			{
				test: /\.(css|sass|scss)$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: '[local]_[hash:base64:5]',
						}
					},
					"sass-loader"
				]
			},
			{
				test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets/"
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			// template: "./src/index.html"
		})
	]
}
