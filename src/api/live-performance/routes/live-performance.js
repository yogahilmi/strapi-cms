'use strict';

/**
 * live-performance router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::live-performance.live-performance');
