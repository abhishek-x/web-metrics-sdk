export function initInteractions(config, queueMetric) {
    const profile = config._resolvedMetrics.interactions || {};

    // Clicks
    if (profile.clicks) {
        document.addEventListener('click', (evt) => {
            const target = evt.target && evt.target.tagName ? evt.target.tagName : 'unknown';
            queueMetric('click', { target });
        });
    }

    // Visibility
    if (profile.visibility) {
        document.addEventListener('visibilitychange', () => {
            queueMetric('visibility', { state: document.visibilityState });
        });
    }

    // Scroll Depth
    if (profile.scrollDepth) {
        window.addEventListener('scroll', () => {
            const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            const depth = Math.round((window.scrollY / (docHeight - window.innerHeight)) * 100);
            queueMetric('scrollDepth', { depth });
        });
    }
}