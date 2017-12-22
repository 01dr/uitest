const path = require("path");

const getPackageName = () => {
    let name;

    try {
        name = require(path.join(process.cwd(), 'package.json')).name;
        const nameSplit = name.split('/');
        if (nameSplit.length > 1) {
            name = nameSplit[1];
        }
    } catch (e) {
        console.error('[webpack-build-scripts] Couldn\'t read package name from package.json', e);
    }

    return name;
}

module.exports = {
    getPackageName,
};
