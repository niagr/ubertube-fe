const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
	entry: ["./src/index.tsx"],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
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
			template: "./src/index.html"
		})
	]
}
