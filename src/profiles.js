export const performanceProfiles = {
    none: {},
    coreWebVitals: { fcp: true, lcp: true, cls: true } // simplified for now
};

export const interactionProfiles = {
    none: {},
    basic: { clicks: true, visibility: true },
    extended: { clicks: true, visibility: true, scrollDepth: true }
};

export const userDetailsProfiles = {
    none: {},
    basic: { userAgent: true, referrer: true },
    extended: { userAgent: true, referrer: true, deviceType: true, connectionType: true, screenResolution: true }
};