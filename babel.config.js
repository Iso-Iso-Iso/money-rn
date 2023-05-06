module.exports = {
    presets: [
        "module:metro-react-native-babel-preset",
        "react-app",
        "@babel/preset-react",
    ],
    plugins: [
        [
            "module-resolver",
            {
                alias: {
                    "react-native": "react-native-web",
                },
            },
        ],
        [
            "babel-plugin-inline-import",
            {
                "extensions": [".svg"]
            }
        ]
    ],
};
