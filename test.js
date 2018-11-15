const judge = require(".");

judge(
    { file: 1 },
    { file: 2 },
    (id) => ({
        path: ".",
        info: {}
    }),
    (solution) => console.log(solution)
);