"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timeAgo(fixedTimestamp, callback) {
    const inSeconds = diffDate(fixedTimestamp); // in seconds
    const inMinutes = inSeconds / 60;
    const inHours = inMinutes / 60;
    const inDays = inHours / 24;
    const inMonths = inDays / 30;
    const inYears = inMonths / 12;
    if (inSeconds < 60) {
        const conditionalResult = `${Math.floor(inSeconds)} s`;
        callback(conditionalResult);
    }
    if (inMinutes >= 1 && inMinutes < 60) {
        const conditionalResult = `${Math.floor(inMinutes)} min.`;
        callback(conditionalResult);
    }
    if (inHours >= 1 && inHours < 24) {
        const conditionalResult = `${Math.floor(inHours)} h.`;
        callback(conditionalResult);
    }
    if (inDays >= 1 && inDays < 31) {
        const conditionalResult = `${Math.floor(inDays)} d.`;
        callback(conditionalResult);
    }
    if (inMonths >= 1 && inMonths < 24) {
        const conditionalResult = `${Math.floor(inMonths)} M.`;
        callback(conditionalResult);
    }
    if (inYears >= 2) {
        const conditionalResult = `${Math.floor(inYears)} Y.`;
        callback(conditionalResult);
    }
}
function diffDate(fixedTimestamp) {
    const nowDate = Date.now();
    const diffDate = (nowDate - fixedTimestamp) / 1000;
    return diffDate;
}
exports.default = timeAgo;
