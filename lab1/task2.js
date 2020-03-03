const {me} = require('./variable');

exports.sorter = (text) => {
    let splitText = text.split('');

    splitText.sort((a, b) => {

        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;

    });
    console.log(splitText.join(''));
};