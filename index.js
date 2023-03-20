function receivesAFunction(callback) {
    callback();
    return 1;
}

function returnsANamedFunction() {
    return aNamedFunction = () => "I am a named function!";
};

function returnsAnAnonymousFunction() {
    return () => "I am an anonymous function!";
}
