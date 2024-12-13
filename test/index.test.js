import WebMetricsSDK from '../src/index.js';

test('SDK initializes without errors', () => {
    const sdk = new WebMetricsSDK({ debug: true, performance: 'none' });
    expect(() => sdk.init()).not.toThrow();
});