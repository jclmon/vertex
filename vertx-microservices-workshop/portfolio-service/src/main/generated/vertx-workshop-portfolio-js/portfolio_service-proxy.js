/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-workshop-portfolio-js/portfolio_service */
!function (factory) {
  if (typeof require === 'function' && typeof module !== 'undefined') {
    factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD loader
    define('vertx-workshop-portfolio-js/portfolio_service-proxy', [], factory);
  } else {
    // plain old include
    PortfolioService = factory();
  }
}(function () {

  /**

 	 Interface with async handlers
 
    VertxGen annotation generate the clients
    
    ProxyGen annotation generate service proxies (trigger the generation of the service helper classes)
    
    The service proxy: a compile time generated proxy that uses the EventBus to interact with the service via messages

    The service handler: a compile time generated EventBus handler that reacts to events sent by the proxy


 @class
  */
  var PortfolioService = function(eb, address) {

    var j_eb = eb;
    var j_address = address;
    var closed = false;
    var that = this;
    var convCharCollection = function(coll) {
      var ret = [];
      for (var i = 0;i < coll.length;i++) {
        ret.push(String.fromCharCode(coll[i]));
      }
      return ret;
    };

    /**
    
     Buy `amount` shares of the given shares (quote).

     @public
     @param amount {number} 
     @param quote {Object} 
     @param resultHandler {function} 
     */
    this.buy = function(amount, quote, resultHandler) {
      var __args = arguments;
      if (__args.length === 3 && typeof __args[0] ==='number' && (typeof __args[1] === 'object' && __args[1] != null) && typeof __args[2] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {"amount":__args[0], "quote":__args[1]}, {"action":"buy"}, function(err, result) { __args[2](err, result &&result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

    /**
    
     Sell `amount` shares of the given shares (quote).

     @public
     @param amount {number} 
     @param quote {Object} 
     @param resultHandler {function} 
     */
    this.sell = function(amount, quote, resultHandler) {
      var __args = arguments;
      if (__args.length === 3 && typeof __args[0] ==='number' && (typeof __args[1] === 'object' && __args[1] != null) && typeof __args[2] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {"amount":__args[0], "quote":__args[1]}, {"action":"sell"}, function(err, result) { __args[2](err, result &&result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

    /**
    
     Gets the portfolio.

     @public
     @param resultHandler {function} 
     */
    this.getPortfolio = function(resultHandler) {
      var __args = arguments;
      if (__args.length === 1 && typeof __args[0] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {}, {"action":"getPortfolio"}, function(err, result) { __args[0](err, result &&result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

    /**
    
     Evaluates the current value of the portfolio.

     @public
     @param resultHandler {function} 
     */
    this.evaluate = function(resultHandler) {
      var __args = arguments;
      if (__args.length === 1 && typeof __args[0] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {}, {"action":"evaluate"}, function(err, result) { __args[0](err, result &&result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = PortfolioService;
    } else {
      exports.PortfolioService = PortfolioService;
    }
  } else {
    return PortfolioService;
  }
});