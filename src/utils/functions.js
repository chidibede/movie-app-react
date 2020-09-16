
export const truncateString = (str, num) => {
    if (str?.length > num) {
        const shortenedStr = str.substr(0, num - 1);
        const truncated = shortenedStr + "...";
        return truncated
    }
    else {
        return str;
    }

}