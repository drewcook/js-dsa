"use strict";
function isJSON(arg) {
    try {
        const str = JSON.stringify(arg);
        const json = JSON.parse(str);
        if (json)
            return true;
    }
    catch {
        return false;
    }
}
// Valid
isJSON('hello');
isJSON({ hello: 'world', keys: [1, 2, 3, null, false] });
// Invalid
// @ts-expect-error
isJSON(() => '');
// @ts-expect-error
isJSON(undefined);
//# sourceMappingURL=json.js.map