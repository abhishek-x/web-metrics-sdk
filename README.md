# Web Metrics SDK (MVP)

## Introduction
This SDK collects basic web performance metrics (starting with just FCP) and logs or sends them to a configured endpoint.

## Installation
Currently not published, just clone this repo.

## Usage
```html
<script type="module">
  import WebMetricsSDK from './src/index.js';
  const sdk = new WebMetricsSDK({ debug: true });
  sdk.init();
</script>