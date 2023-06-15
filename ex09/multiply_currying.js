function multiply(a) {
    return (b) => {
        return (c) =>{
            console.log("Product : ", a*b*c);
        };
    };

};

multiply(2)(3)(2);
multiply(467)(123)(12);