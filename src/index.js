// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let errorMsg = { error: "You are rich, my friend! We don't have so much coins for exchange" },
        coinsString = ['H', 'Q', 'P', 'N', 'P'],
        coinsValue = [50, 25, 10, 5, 1],
        coinsCount = new Array(5).fill(0),
        exchange = {};

    if (currency > 10000) {
        return errorMsg;
    }
    if (currency <= 0) {
        return {};
    }
    for (let i = 0; i < coinsValue.length; i++) {
        while (currency - coinsValue[i] >= 0) {
            currency -= coinsValue[i];
            coinsCount[i]++;
        }
    }

    for (let i = 0; i < coinsCount.length; i++) {
        if (coinsCount[i] > 0) {
            exchange[coinsString[i]] = coinsCount[i];

        }
    }


    return exchange;
}