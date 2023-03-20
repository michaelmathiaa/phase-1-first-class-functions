function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return aNamedFunction = () => "I am a named function!";
};

function returnsAnAnonymousFunction() {
    return () => "I am an anonymous function!";
}
