import { collectCoreWebVitals } from './metrics.js';

class WebMetricsSDK {
    constructor(config = {}) {
        this.config = {
            endpoint: config.endpoint || null,
            debug: config.debug || false,
            performance: config.performance || 'none', // new
        };
    }

    init() {
        if (this.config.performance === 'coreWebVitals') {
            collectCoreWebVitals((metric, value) => this.handleMetric(metric, value));
        } else {
            if (this.config.debug) console.log('Performance metrics disabled');
        }
    }

    handleMetric(metric, value) {
        const data = { metric, value };
        if (this.config.debug) {
            console.log('Collected:', data);
        }
        if (this.config.endpoint) {
            // Placeholder send (just logging for now)
            console.log(`Would send to ${this.config.endpoint}:`, data);
        }
    }
}

export default WebMetricsSDK;