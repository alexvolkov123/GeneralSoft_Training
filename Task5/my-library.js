var myLibrary = (function(){

    const memo = function(func) {
        const cache = {};
        return (...args) => {
            if ((args[0] + '-' + args[1]) in cache){
                console.log("Брали из памяти");
                return cache[args[0] + '-' + args[1]];
            }
            if ((args[1] + '-' + args[0]) in cache){
                console.log("Брали из памяти");
                return cache[args[1] + '-' + args[0]];
            }
            console.log("Считали сами");
            return cache[args[0] + '-' + args[1]] = func(...args);
        }
    }

    return {
        isArray: function(obj) {return Array.isArray(obj)},
        isDate: function(obj) {return obj instanceof Date},
        isBoolean: function(obj) { return typeof obj === 'boolean'},
        isNumber: function(obj) { return typeof obj === 'number'},
        isString: function(obj) {return typeof obj === 'string'},
        isFunction: function(obj) {return typeof obj === 'function'},
        isUndefined: function(obj) {return typeof obj === 'undefined'},
        isNull: function(obj) {return obj === null},
        isNaN: function(obj) {return Object.is(obj, NaN)},
        deepEqual: function(firstObj, secondObj) {
            if (firstObj !== null && secondObj !== null) {
                const props1 = Object.getOwnPropertyNames(firstObj);
                const props2 = Object.getOwnPropertyNames(secondObj);

                if (props1.length == props2.length) {
                    for (let i = 0; i < props1.length; i++ ) {
                        let prop = props1[i];
                        if(firstObj[prop] instanceof Object && !Array.isArray(firstObj[prop])) {
                            if (myLibrary.deepEqual(firstObj[prop], secondObj[prop]) == true) {
                                continue;
                            } else {
                                return false;
                            }
                        }
                        if (firstObj[prop] != secondObj[prop]) {
                            return false;
                        }
                    }
                    return true;
                } else {
                    return false;
                }
            }
        },

        Singleton: function(firstName, lastName, technology){
                if (typeof myLibrary.Singleton.instance === 'object') {
                    return myLibrary.Singleton.instance;
                }

                myLibrary.Singleton.instance = this;
                this.firstName = firstName;
                this.lastName = lastName;
                this.technology = technology;
                return this;
        },

        sum: memo((a,b) => {
            return (a + b);
        })
    }
})();