# Web Metrics SDK

## Features
- Collects basic performance metrics.
- `performance` config option:
  - `'none'`: No performance metrics
  - `'coreWebVitals'`: Collects FCP, LCP, CLS

## Usage
```html
<script type="module">
  import WebMetricsSDK from './src/index.js';

  const sdk = new WebMetricsSDK({
    debug: true,
    performance: 'coreWebVitals'
  });
  sdk.init();
</script>