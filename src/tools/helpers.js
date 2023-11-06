export function toPaddedString(word, padding) {
    if (typeof word !== 'number' && typeof word !== 'string') {
        throw Error("word must be 'number' or 'string' type!");
    }

    const shift = padding.length - word.toString().length;
    const pad = padding.slice(0, shift);
    const isPadded = shift > 0;
    const paddedString = pad + word.toString();

    return { pad, word, paddedString, isPadded };
}

export function getTimeFromMilliseconds(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    const tSeconds = seconds % 60;
    const tMinutes = minutes % 60;
    const tHours = hours % 24;

    const timeArr = [days, tSeconds, tMinutes, tHours];

    const formatPad = (item) => {
        const { paddedString } = toPaddedString(item, '00');

        return paddedString;
    };

    const [fDays, fSeconds, fMinutes, fHours] = timeArr.map(formatPad);

    return {
        days: fDays,
        hours: fHours,
        minutes: fMinutes,
        seconds: fSeconds,
    };
}

export function getFormattedDate(date) {
    const dateObject = new Date(date)
    return `${dateObject.getDate()}.${dateObject.getMonth() + 1}.${dateObject.getFullYear()}`;
}
