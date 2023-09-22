function getRandomValueByChance(arr, probabilities) {
    const sum = probabilities.reduce((sum, probability) => sum + probability, 0);
    const len = arr.length;
    let rnd = Math.random() * sum;

    for (let i = 0; i < len; i++) {
        if (rnd < probabilities[i]) return arr[i];
        rnd -= probabilities[i];
    }
}


(function() {
    const events = [
        "You have sold 3 ounces of silver!",
        "You have bought an ounce of gold.",
        "You have given your friend an amethyst.",
        "You have found a diamond!"
    ];
    const probabilities = [0.4, 0.3, 0.2, 0.1];
    const event = getRandomValueByChance(events, probabilities);
    console.log("Your random event:", event);
    console.log("_".repeat(20), "\n");
})();


//Funny example
(function() {
    const rewards = [10, -25, 40, -35, -55, 105];
    const probabilities = [0.3, 0.2, 0.2, 0.1, 0.15, 0.05];
    let totalEarning = 0;
    setInterval(() => {
        const currentCasinoEarning = getRandomValueByChance(rewards, probabilities);
        totalEarning += currentCasinoEarning;
        const text = (currentCasinoEarning < 0) ? "lose" : "won";
        const style = (currentCasinoEarning < 0) ? "color:red;" : "color:green;";
        console.log(`You %c${text}%c ${currentCasinoEarning}$, total = ${totalEarning}$`, style, "");
    }, 1500);
})();