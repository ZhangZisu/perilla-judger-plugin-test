module.exports = async (problem, solution, resolveFile, callback) => {
    console.log(problem);
    console.log(solution);
    console.log(await resolveFile(problem.file));
    console.log(await resolveFile(problem.file));
    await callback({ status: 1, score: 100, log: "Hello tester!!" });
};