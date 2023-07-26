'use strict';

/**
 * road-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::road-data.road-data');
