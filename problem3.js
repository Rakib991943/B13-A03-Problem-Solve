
function finalScore(omr) {
    if (
        typeof omr !== "object" ||
        omr === null ||
        typeof omr.right !== "number" ||
        typeof omr.wrong !== "number" ||
        typeof omr.skip !== "number"
    ) {
        return "Invalid";
    }
    if (omr.right + omr.wrong + omr.skip !== 100) {
        return "Invalid"
    }

    const score = (omr.right * 1) - (omr.wrong * 0.5);
    const roundedScore = Math.round(score);



    return roundedScore;
}

const bcsNumber = ["Raj"];

const result = finalScore(bcsNumber)
console.log(result);