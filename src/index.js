import { collectFCP } from './metrics.js';

class WebMetricsSDK {
    constructor(config = {}) {
        this.config = {
            endpoint: config.endpoint || null,
            debug: config.debug || false,
        };
    }

    init() {
        // Collect FCP and log or send it
        collectFCP((fcpValue) => {
            const data = { metric: 'FCP', value: fcpValue };

            if (this.config.debug) {
                console.log('Collected:', data);
            }

            if (this.config.endpoint) {
                // For now, just log that we would send
                console.log(`Would send data to ${this.config.endpoint}:`, data);
            }
        });
    }
}

export default WebMetricsSDK;