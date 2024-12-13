export function collectFCP(callback) {
    if (typeof PerformanceObserver === 'function') {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntriesByName('first-contentful-paint');
            if (entries.length > 0) {
                callback(entries[0].startTime);
            }
        });
        try {
            observer.observe({ type: 'paint', buffered: true });
        } catch (e) {
            console.warn('FCP not supported');
        }
    } else {
        console.warn('PerformanceObserver not supported, cannot collect FCP.');
    }
}