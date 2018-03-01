// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let errorMsg = { error: "You are rich, my friend! We don't have so much coins for exchange" };
    if (currency > 10000) {
        return errorMsg;
    }

}