function receivesAFunction(callback) {
    callback();
}

const returnsANamedFunction = () => {
    function aNamedFunction() {

    }
    return aNamedFunction;
}

const returnsAnAnonymousFunction = () => {
    return function() {
        
    }
}
