// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. 
// Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

const gameSettings = {};
const gameSettingsProxy = new Proxy(gameSettings, {
    get: (o, property) => {
        return property in o ? o[property] : 'dcode';
    },
    set: (o, property, value) => {
        if (property === 'difficulty' && !['easy', 'medium', 'hard'].includes(value.toLowerCase())) {
            throw new Error('Difficulty is invalid!');
        }
    },
    has: (o, property) => {
        if (property === 'difficulty') {
            return false; // alter default js behaviour
        }

        return property in o; // js default behaviour
    }
});

// gameSettingsProxy.difficulty = 'super easy'; // Throws err
gameSettingsProxy.difficulty = 'easy';
console.log('difficulty' in gameSettingsProxy);