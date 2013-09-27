var _ = require('../../lib/utils');



/**
 * Perform an elasticsearch [cluster.nodeInfo](http://elasticsearch.org/guide/reference/api/admin-cluster-nodes-info/) request
 *
 * @for Client
 * @method cluster.nodeInfo
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {boolean} params.all - Return all available information
 * @param {boolean} params.clear - Reset the default settings
 * @param {boolean} params.http - Return information about HTTP
 * @param {boolean} params.jvm - Return information about the JVM
 * @param {boolean} params.network - Return information about network
 * @param {boolean} params.os - Return information about the operating system
 * @param {boolean} params.plugin - Return information about plugins
 * @param {boolean} params.process - Return information about the Elasticsearch process
 * @param {boolean} params.settings - Return information about node settings
 * @param {boolean} params.thread_pool - Return information about the thread pool
 * @param {Date|Number} params.timeout - Explicit operation timeout
 * @param {boolean} params.transport - Return information about transport
 */
function doClusterNodeInfo(params) {
  var request = {}
    , url = {}
    , query = {};

  params = params || {};

  request.method = 'GET';

  // find the url's params
  if (typeof params.node_id !== 'undefined') {
    if (typeof params.node_id === 'string') {
      url.node_id = params.node_id;
    } else if (_.isArray(params.node_id)) {
      url.node_id = params.node_id.join(',');
    } else {
      throw new TypeError('Invalid node_id: ' + params.node_id + ' should be a comma seperated list or array.');
    }
  }
  

  // build the url
  if (url.hasOwnProperty('node_id')) {
    request.url = '/_nodes/' + url.node_id + '';
  }
  else  {
    request.url = '/_nodes';
  }
  

  // build the query string
  if (typeof params.all !== 'undefined') {
    if (params.all.toLowerCase && (params.all = params.all.toLowerCase())
      && (params.all === 'no' || params.all === 'off')
    ) {
      query.all = false;
    } else {
      query.all = !!params.all;
    }
  }
  
  if (typeof params.clear !== 'undefined') {
    if (params.clear.toLowerCase && (params.clear = params.clear.toLowerCase())
      && (params.clear === 'no' || params.clear === 'off')
    ) {
      query.clear = false;
    } else {
      query.clear = !!params.clear;
    }
  }
  
  if (typeof params.http !== 'undefined') {
    if (params.http.toLowerCase && (params.http = params.http.toLowerCase())
      && (params.http === 'no' || params.http === 'off')
    ) {
      query.http = false;
    } else {
      query.http = !!params.http;
    }
  }
  
  if (typeof params.jvm !== 'undefined') {
    if (params.jvm.toLowerCase && (params.jvm = params.jvm.toLowerCase())
      && (params.jvm === 'no' || params.jvm === 'off')
    ) {
      query.jvm = false;
    } else {
      query.jvm = !!params.jvm;
    }
  }
  
  if (typeof params.network !== 'undefined') {
    if (params.network.toLowerCase && (params.network = params.network.toLowerCase())
      && (params.network === 'no' || params.network === 'off')
    ) {
      query.network = false;
    } else {
      query.network = !!params.network;
    }
  }
  
  if (typeof params.os !== 'undefined') {
    if (params.os.toLowerCase && (params.os = params.os.toLowerCase())
      && (params.os === 'no' || params.os === 'off')
    ) {
      query.os = false;
    } else {
      query.os = !!params.os;
    }
  }
  
  if (typeof params.plugin !== 'undefined') {
    if (params.plugin.toLowerCase && (params.plugin = params.plugin.toLowerCase())
      && (params.plugin === 'no' || params.plugin === 'off')
    ) {
      query.plugin = false;
    } else {
      query.plugin = !!params.plugin;
    }
  }
  
  if (typeof params.process !== 'undefined') {
    if (params.process.toLowerCase && (params.process = params.process.toLowerCase())
      && (params.process === 'no' || params.process === 'off')
    ) {
      query.process = false;
    } else {
      query.process = !!params.process;
    }
  }
  
  if (typeof params.settings !== 'undefined') {
    if (params.settings.toLowerCase && (params.settings = params.settings.toLowerCase())
      && (params.settings === 'no' || params.settings === 'off')
    ) {
      query.settings = false;
    } else {
      query.settings = !!params.settings;
    }
  }
  
  if (typeof params.thread_pool !== 'undefined') {
    if (params.thread_pool.toLowerCase && (params.thread_pool = params.thread_pool.toLowerCase())
      && (params.thread_pool === 'no' || params.thread_pool === 'off')
    ) {
      query.thread_pool = false;
    } else {
      query.thread_pool = !!params.thread_pool;
    }
  }
  
  if (typeof params.timeout !== 'undefined') {
    if (params.timeout instanceof Date) {
      query.timeout = params.timeout.getTime();
    } else if (_.isNumeric(params.timeout)) {
      query.timeout = params.timeout;
    } else {
      throw new TypeError('Invalid timeout: ' + params.timeout + ' should be be some sort of time.');
    }
  }
  
  if (typeof params.transport !== 'undefined') {
    if (params.transport.toLowerCase && (params.transport = params.transport.toLowerCase())
      && (params.transport === 'no' || params.transport === 'off')
    ) {
      query.transport = false;
    } else {
      query.transport = !!params.transport;
    }
  }
  
  request.url = request.url + _.makeQueryString(query);

  return this.client.request(request);
}

module.exports = doClusterNodeInfo;