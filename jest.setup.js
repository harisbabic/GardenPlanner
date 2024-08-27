// jest.setup.js

// Polyfill for TextEncoder and TextDecoder in Jest environment
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
