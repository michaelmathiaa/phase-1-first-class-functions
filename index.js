const receivesAFunction = (callback) => callback();

const returnsANamedFunction = () => {
    return aNamedFunction = () => "I am a named function!";
}

const returnsAnAnonymousFunction = () => {
    return () => "I am an anonymous function!";
}