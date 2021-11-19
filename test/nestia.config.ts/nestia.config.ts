export = {
    input: ["src/controllers"],
    output: ["src/api"],
    compilerOptions: {
        baseUrl: "./",
        paths: {
            "@api/*": ["src/api/*"]
        },
    }
};