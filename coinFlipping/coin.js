function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;

        while (headsCount < 5 && attempts < 10000) {
            attempts++;
            let flip = Math.random() < 0.5 ? "heads" : "tails";
            if (flip === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }

        if (headsCount === 5) {
            resolve(`It took ${attempts} flips to get five heads in a row!`);
        } else {
            reject("Too many attempts, giving up!");
        }
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));

console.log("When does this run now?");
