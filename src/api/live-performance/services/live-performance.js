'use strict';

/**
 * live-performance service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-performance.live-performance');
