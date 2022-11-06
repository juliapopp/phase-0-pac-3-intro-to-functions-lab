function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(`hello`.toUpperCase());
}
function logWhisper(string) {
    console.log(`Hello`.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const checkForLowerCase = string === string.toLowerCase();
    const checkForUpperCase = string === string.toUpperCase();
    const checkForDinner = string === "Let's have dinner together!";

    console.log(checkForUpperCase);
    console.log(checkForLowerCase);
    if (checkForLowerCase) {
        return `I can't hear you!`;
    }
    if (checkForUpperCase) {
        return `YES INDEED!`;
    }
    if (checkForDinner) {
        return `I would love to!`;
    }
}