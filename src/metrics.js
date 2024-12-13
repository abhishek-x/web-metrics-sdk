import { getFCP, getLCP, getCLS, getFID, getINP } from 'web-vitals';

export function collectCoreWebVitals(callback) {
    getFCP(metric => callback('FCP', metric.value));
    getLCP(metric => callback('LCP', metric.value));
    getCLS(metric => callback('CLS', metric.value));
    // For now, we won't do FID or INP yet, to keep it simpler at this stage.
    // They can be added later.
}