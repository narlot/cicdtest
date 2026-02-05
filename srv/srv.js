module.exports = (say) => {
    say.on("hello", req => `Hello World`);
    say.on("waka", req => `Time for Africa`);
}