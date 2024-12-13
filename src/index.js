import { collectCoreWebVitals } from './metrics.js';
import { initInteractions } from './interactions.js';
import { collectUserDetails } from './userDetails.js';
import { performanceProfiles, interactionProfiles, userDetailsProfiles } from './profiles.js';

class WebMetricsSDK {
    constructor(config = {}) {
        this.config = {
            endpoint: config.endpoint || null,
            debug: config.debug || false,
            performance: config.performance || 'none',
            interactions: config.interactions || 'none',
            userDetails: config.userDetails || 'none',
        };

        // Resolve profiles
        this.config._resolvedMetrics = {
            performance: performanceProfiles[this.config.performance] || {},
            interactions: interactionProfiles[this.config.interactions] || {},
            userDetails: userDetailsProfiles[this.config.userDetails] || {},
        };
    }

    init() {
        // Performance
        if (Object.keys(this.config._resolvedMetrics.performance).length > 0) {
            collectCoreWebVitals((metric, value) => this.handleMetric(metric, value));
        } else {
            if (this.config.debug) console.log('No performance metrics collected');
        }

        // User Details (just collect once at init and store)
        const details = collectUserDetails(this.config);
        if (details && this.config.debug) {
            console.log('Collected user details:', details);
        }
        this.userDetails = details; // store if we need later

        // Interactions
        initInteractions(this.config, (event, data) => this.handleEvent(event, data));
    }

    handleMetric(metric, value) {
        const payload = { metric, value };
        this.logOrSend(payload);
    }

    handleEvent(eventName, data) {
        const payload = { event: eventName, data };
        this.logOrSend(payload);
    }

    logOrSend(payload) {
        if (this.config.debug) {
            console.log('Collected:', payload);
        }
        if (this.config.endpoint) {
            // Just log that we would send
            console.log(`Would send to ${this.config.endpoint}:`, payload);
        }
    }
}

export default WebMetricsSDK;