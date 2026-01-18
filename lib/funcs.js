/* JSON変換 */
const json_parse = data => {
    try {
        return JSON.parse(data);
    } catch {
        return null
    };
};

module.exports = {
    json_parse
};
