'use strict';

const assign = require('lodash/assign');

const baseChild = require('../mixins/base-child');

/**
 * Creates a ProductMetafields instance.
 *
 * @param {Shopify} shopify Reference to the Shopify instance
 * @constructor
 * @public
 */
function ProductMetafields(shopify) {
  this.shopify = shopify;

  this.parentName = 'products';
  this.name = 'metafields';
  this.key = 'metafields';
}

assign(ProductMetafields.prototype, baseChild);

module.exports = ProductMetafields;
