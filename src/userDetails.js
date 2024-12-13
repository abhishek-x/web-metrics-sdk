export function collectUserDetails(config) {
    const profile = config._resolvedMetrics.userDetails || {};
    if (Object.keys(profile).length === 0) return null;

    const details = {};
    if (profile.userAgent) details.userAgent = navigator.userAgent;
    if (profile.referrer) details.referrer = document.referrer;
    if (profile.deviceType) details.deviceType = detectDeviceType();
    if (profile.connectionType && navigator.connection) {
        details.connectionType = navigator.connection.effectiveType || 'unknown';
    }
    if (profile.screenResolution) {
        details.screenResolution = `${window.screen.width}x${window.screen.height}`;
    }

    return details;
}

function detectDeviceType() {
    const ua = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|phone/i.test(ua)) return 'mobile';
    return 'desktop';
}