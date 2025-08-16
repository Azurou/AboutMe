function getFingerprint() {
    let fp = [
        navigator.userAgent,
        screen.width+"x"+screen.height,
        screen.colorDepth,
        navigator.language,
        Intl.DateTimeFormat().resolvedOptions().timeZone
    ].join('|');
    return btoa(fp); // encode as base64
}

const deviceID = getFingerprint();
console.log("Device ID:", deviceID);
