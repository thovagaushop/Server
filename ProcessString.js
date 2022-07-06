const stringProcess = function stringProcess(data) {
    if (typeof(data) === "string") {
        if (data.indexOf("ip") !== -1) {
            var indexBegin = data.indexOf("ip")
            var indexEnd = data.indexOf("ts") - 1;
            var ipString = data.slice(indexBegin, indexEnd)
            return ipString
        }
    }
}

module.exports = stringProcess