webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/NotFound.js":
/*!********************************!*\
  !*** ./components/NotFound.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_AnimatedBG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/AnimatedBG */ "./components/styles/AnimatedBG.js");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http-status */ "./node_modules/http-status/lib/index.js");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_5__);




var _this = undefined,
    _jsxFileName = "/Users/macservicethailand/Desktop/React/reh_scan_test/components/NotFound.js",
    _templateObject;





var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NotFound__Content",
  componentId: "sc-6kide9-0"
})(["max-width:400px;z-index:2;min-width:300px;h1{font-size:10rem;}"]);

var NotFound = function NotFound(_ref) {
  var code = _ref.code;
  var title = code === 404 ? 'This page could not be found' : http_status__WEBPACK_IMPORTED_MODULE_5___default.a[code] || 'An unexpected error has occurred';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "flex",
    align: "middle",
    justify: "center",
    className: "bg-white text-center",
    style: {
      minHeight: '100vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_AnimatedBG__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      key: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StyledH, {
    className: "".concat(code === 404 ? 'text-warning' : 'text-error', " mb-0"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h6", {
    className: "mb-1 mt-1 text-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, title, " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

var _StyledH = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])("h1")(_templateObject || (_templateObject = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            font-weight: 900;\n          "])));

/***/ }),

/***/ "./components/styles/AnimatedBG.js":
/*!*****************************************!*\
  !*** ./components/styles/AnimatedBG.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var AnimatedBG = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AnimatedBG",
  componentId: "jlxnt8-0"
})(["position:absolute;width:100vw;height:100vh;top:0;left:0;z-index:1;overflow:hidden;span{position:absolute;display:block;width:20px;height:20px;background:rgba(0,0,0,0.04);animation:spin 50s linear infinite;bottom:-120px;}span:nth-child(1){left:10%;width:60px;height:60px;animation-delay:50s;}span:nth-child(2){left:20%;width:30px;height:30px;animation-delay:2s;animation-duration:40s;}span:nth-child(3){left:30%;width:40px;height:40px;animation-delay:30s;}span:nth-child(4){left:40%;width:60px;height:60px;animation-delay:0s;animation-duration:20s;}span:nth-child(5){left:50%;width:30px;height:30px;animation-delay:10s;}span:nth-child(6){left:60%;width:100px;height:100px;animation-delay:0s;}span:nth-child(7){left:70%;width:120px;height:120px;animation-delay:10s;}span:nth-child(8){left:80%;width:30px;height:30px;animation-delay:20s;animation-duration:40s;}span:nth-child(9){left:90%;width:20px;height:20px;animation-delay:30s;animation-duration:30s;}@keyframes spin{0%{transform:translateY(0) rotate(0deg);opacity:1;}100%{transform:translateY(-1000px) rotate(720deg);opacity:0;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (AnimatedBG);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/fn/set.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_classof.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_for-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-species.js":
false,

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.set.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
false,

/***/ "./node_modules/http-status/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/http-status/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 2.5.1
// # node-http-status

// **Reference:**  

// - https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
// - https://tools.ietf.org/html/rfc2324#section-2.3.2

// ## Classes

// The first digit of the status-code defines the class of response. The last two digits do not have any categorization role. There are five values for the first digit:
var classes;

classes = {
  // 1xx - The 1xx (Informational) class of status code indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.
  '1xx': 'Informational',
  '1xx_NAME': 'INFORMATIONAL',
  '1xx_MESSAGE': 'Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.',
  INFORMATIONAL: '1xx',
  // 2xx - The 2xx (Successful) class of status code indicates that the client's request was successfully received, understood, and accepted.
  '2xx': 'Successful',
  '2xx_NAME': 'SUCCESSFUL',
  '2xx_MESSAGE': 'Indicates that the client\'s request was successfully received, understood, and accepted.',
  SUCCESSFUL: '2xx',
  // 3xx - The 3xx (Redirection) class of status code indicates that further action needs to be taken by the user agent in order to fulfill the request.
  '3xx': 'Redirection',
  '3xx_NAME': 'REDIRECTION',
  '3xx_MESSAGE': 'Indicates that further action needs to be taken by the user agent in order to fulfill the request.',
  REDIRECTION: '3xx',
  // 4xx - The 4xx (Client Error) class of status code indicates that the client seems to have erred.
  '4xx': 'Client Error',
  '4xx_NAME': 'CLIENT_ERROR',
  '4xx_MESSAGE': 'Indicates that the client seems to have erred.',
  CLIENT_ERROR: '4xx',
  // 5xx - The 5xx (Server Error) class of status code indicates that the server is aware that it has erred or is incapable of performing the requested method.
  '5xx': 'Server Error',
  '5xx_NAME': 'SERVER_ERROR',
  '5xx_MESSAGE': 'Indicates that the server is aware that it has erred or is incapable of performing the requested method.',
  SERVER_ERROR: '5xx'
};

module.exports = {
  classes: classes,
  // ## Informational 1xx

  // Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.

  // 100 - The server has received the request headers and the client should proceed to send the request body.
  100: 'Continue',
  '100_NAME': 'CONTINUE',
  '100_MESSAGE': 'The server has received the request headers and the client should proceed to send the request body.',
  '100_CLASS': classes.INFORMATIONAL,
  CONTINUE: 100,
  // 101 - The requester has asked the server to switch protocols and the server has agreed to do so.
  101: 'Switching Protocols',
  '101_NAME': 'SWITCHING_PROTOCOLS',
  '101_MESSAGE': 'The requester has asked the server to switch protocols and the server has agreed to do so.',
  '101_CLASS': classes.INFORMATIONAL,
  SWITCHING_PROTOCOLS: 101,
  // 102 Processing (WebDAV; RFC 2518) - A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.
  102: 'Processing',
  '102_NAME': 'PROCESSING',
  '102_MESSAGE': 'A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.',
  '102_CLASS': classes.INFORMATIONAL,
  PROCESSING: 102,
  // 103 Early Hints (RFC 8297) - Used to return some response headers before final HTTP message.
  103: 'Early Hints',
  '103_NAME': 'EARLY_HINTS',
  '103_MESSAGE': 'Used to return some response headers before final HTTP message.',
  '103_CLASS': classes.INFORMATIONAL,
  EARLY_HINTS: 103,
  // ## Successful 2xx

  // Indicates that the client's request was successfully received, understood, and accepted.

  // 200 - Standard response for successful HTTP requests.
  200: 'OK',
  '200_NAME': 'OK',
  '200_MESSAGE': 'Standard response for successful HTTP requests.',
  '200_CLASS': classes.SUCCESSFUL,
  OK: 200,
  // 201 - The request has been fulfilled, resulting in the creation of a new resource.
  201: 'Created',
  '201_NAME': 'CREATED',
  '201_MESSAGE': 'The request has been fulfilled, resulting in the creation of a new resource.',
  '201_CLASS': classes.SUCCESSFUL,
  CREATED: 201,
  // 202 - The request has been accepted for processing, but the processing has not been completed.
  202: 'Accepted',
  '202_NAME': 'ACCEPTED',
  '202_MESSAGE': 'The request has been accepted for processing, but the processing has not been completed.',
  '202_CLASS': classes.SUCCESSFUL,
  ACCEPTED: 202,
  // 203 (since HTTP/1.1) - The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.
  203: 'Non-Authoritative Information',
  '203_NAME': 'NON_AUTHORITATIVE_INFORMATION',
  '203_MESSAGE': 'The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin\'s response.',
  '203_CLASS': classes.SUCCESSFUL,
  NON_AUTHORITATIVE_INFORMATION: 203,
  // 204 - The server successfully processed the request and is not returning any content.
  204: 'No Content',
  '204_NAME': 'NO_CONTENT',
  '204_MESSAGE': 'The server successfully processed the request and is not returning any content.',
  '204_CLASS': classes.SUCCESSFUL,
  NO_CONTENT: 204,
  // 205 - The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.
  205: 'Reset Content',
  '205_NAME': 'RESET_CONTENT',
  '205_MESSAGE': 'The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.',
  '205_CLASS': classes.SUCCESSFUL,
  RESET_CONTENT: 205,
  // 206 (RFC 7233) - The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
  206: 'Partial Content',
  '206_NAME': 'PARTIAL_CONTENT',
  '206_MESSAGE': 'The server is delivering only part of the resource (byte serving) due to a range header sent by the client.',
  '206_CLASS': classes.SUCCESSFUL,
  PARTIAL_CONTENT: 206,
  // 207 (WebDAV; RFC 4918) - The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
  207: 'Multi Status',
  '207_NAME': 'MULTI_STATUS',
  '207_MESSAGE': 'The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.',
  '207_CLASS': classes.SUCCESSFUL,
  MULTI_STATUS: 207,
  // 208 (WebDAV; RFC 5842) - The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.
  208: 'Already Reported',
  '208_NAME': 'ALREADY_REPORTED',
  '208_MESSAGE': 'The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.',
  '208_CLASS': classes.SUCCESSFUL,
  ALREADY_REPORTED: 208,
  // 226 (RFC 3229) - The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
  226: 'IM Used',
  '226_NAME': 'IM_USED',
  '226_MESSAGE': 'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
  '226_CLASS': classes.SUCCESSFUL,
  IM_USED: 226,
  // ## Redirection 3xx

  // Indicates that further action needs to be taken by the user agent in order to fulfill the request.

  // 300 - Indicates multiple options for the resource from which the client may choose.
  300: 'Multiple Choices',
  '300_NAME': 'MULTIPLE_CHOICES',
  '300_MESSAGE': 'Indicates multiple options for the resource from which the client may choose.',
  '300_CLASS': classes.REDIRECTION,
  MULTIPLE_CHOICES: 300,
  // 301 - This and all future requests should be directed to the given URI.
  301: 'Moved Permanently',
  '301_NAME': 'MOVED_PERMANENTLY',
  '301_MESSAGE': 'This and all future requests should be directed to the given URI.',
  '301_CLASS': classes.REDIRECTION,
  MOVED_PERMANENTLY: 301,
  // 302 - This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.
  302: 'Found',
  '302_NAME': 'FOUND',
  '302_MESSAGE': 'This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.',
  '302_CLASS': classes.REDIRECTION,
  FOUND: 302,
  // 303 (since HTTP/1.1) - The response to the request can be found under another URI using the GET method.
  303: 'See Other',
  '303_NAME': 'SEE_OTHER',
  '303_MESSAGE': 'The response to the request can be found under another URI using the GET method.',
  '303_CLASS': classes.REDIRECTION,
  SEE_OTHER: 303,
  // 304 (RFC 7232) - Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
  304: 'Not Modified',
  '304_NAME': 'NOT_MODIFIED',
  '304_MESSAGE': 'Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.',
  '304_CLASS': classes.REDIRECTION,
  NOT_MODIFIED: 304,
  // 305 (since HTTP/1.1) - The requested resource is available only through a proxy, the address for which is provided in the response.
  305: 'Use Proxy',
  '305_NAME': 'USE_PROXY',
  '305_MESSAGE': 'The requested resource is available only through a proxy, the address for which is provided in the response.',
  '305_CLASS': classes.REDIRECTION,
  USE_PROXY: 305,
  // 306 - No longer used. Originally meant "Subsequent requests should use the specified proxy.
  306: 'Switch Proxy',
  '306_NAME': 'SWITCH_PROXY',
  '306_MESSAGE': 'No longer used. Originally meant "Subsequent requests should use the specified proxy.',
  '306_CLASS': classes.REDIRECTION,
  SWITCH_PROXY: 306,
  // 307 (since HTTP/1.1) - In this case, the request should be repeated with another URI; however, future requests should still use the original URI.
  307: 'Temporary Redirect',
  '307_NAME': 'TEMPORARY_REDIRECT',
  '307_MESSAGE': 'In this case, the request should be repeated with another URI; however, future requests should still use the original URI.',
  '307_CLASS': classes.REDIRECTION,
  TEMPORARY_REDIRECT: 307,
  // 308 (RFC 7538) - The request and all future requests should be repeated using another URI.
  308: 'Permanent Redirect',
  '308_NAME': 'PERMANENT_REDIRECT',
  '308_MESSAGE': 'The request and all future requests should be repeated using another URI.',
  '308_CLASS': classes.REDIRECTION,
  PERMANENT_REDIRECT: 308,
  // ## Client Error 4xx

  // Indicates that the client seems to have erred.

  // 400 - The server cannot or will not process the request due to an apparent client error.
  400: 'Bad Request',
  '400_NAME': 'BAD_REQUEST',
  '400_MESSAGE': 'The server cannot or will not process the request due to an apparent client error.',
  '400_CLASS': classes.CLIENT_ERROR,
  BAD_REQUEST: 400,
  // 401 (RFC 7235) - Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.
  401: 'Unauthorized',
  '401_NAME': 'UNAUTHORIZED',
  '401_MESSAGE': 'Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.',
  '401_CLASS': classes.CLIENT_ERROR,
  UNAUTHORIZED: 401,
  // 402 - Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.
  402: 'Payment Required',
  '402_NAME': 'PAYMENT_REQUIRED',
  '402_MESSAGE': 'Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.',
  '402_CLASS': classes.CLIENT_ERROR,
  PAYMENT_REQUIRED: 402,
  // 403 - The request was valid, but the server is refusing action.
  403: 'Forbidden',
  '403_NAME': 'FORBIDDEN',
  '403_MESSAGE': 'The request was valid, but the server is refusing action.',
  '403_CLASS': classes.CLIENT_ERROR,
  FORBIDDEN: 403,
  // 404 - The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
  404: 'Not Found',
  '404_NAME': 'NOT_FOUND',
  '404_MESSAGE': 'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.',
  '404_CLASS': classes.CLIENT_ERROR,
  NOT_FOUND: 404,
  // 405 - A request method is not supported for the requested resource.
  405: 'Method Not Allowed',
  '405_NAME': 'METHOD_NOT_ALLOWED',
  '405_MESSAGE': 'A request method is not supported for the requested resource.',
  '405_CLASS': classes.CLIENT_ERROR,
  METHOD_NOT_ALLOWED: 405,
  // 406 - The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
  406: 'Not Acceptable',
  '406_NAME': 'NOT_ACCEPTABLE',
  '406_MESSAGE': 'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.',
  '406_CLASS': classes.CLIENT_ERROR,
  NOT_ACCEPTABLE: 406,
  // 407 (RFC 7235) - The client must first authenticate itself with the proxy.
  407: 'Proxy Authentication Required',
  '407_NAME': 'PROXY_AUTHENTICATION_REQUIRED',
  '407_MESSAGE': 'The client must first authenticate itself with the proxy.',
  '407_CLASS': classes.CLIENT_ERROR,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  // 408 - The server timed out waiting for the request.
  408: 'Request Time-out',
  '408_NAME': 'REQUEST_TIMEOUT',
  '408_MESSAGE': 'The server timed out waiting for the request.',
  '408_CLASS': classes.CLIENT_ERROR,
  REQUEST_TIMEOUT: 408,
  // 409 - Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.
  409: 'Conflict',
  '409_NAME': 'CONFLICT',
  '409_MESSAGE': 'Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.',
  '409_CLASS': classes.CLIENT_ERROR,
  CONFLICT: 409,
  // 410 - Indicates that the resource requested is no longer available and will not be available again.
  410: 'Gone',
  '410_NAME': 'GONE',
  '410_MESSAGE': 'Indicates that the resource requested is no longer available and will not be available again.',
  '410_CLASS': classes.CLIENT_ERROR,
  GONE: 410,
  // 411 - The request did not specify the length of its content, which is required by the requested resource.
  411: 'Length Required',
  '411_NAME': 'LENGTH_REQUIRED',
  '411_MESSAGE': 'The request did not specify the length of its content, which is required by the requested resource.',
  '411_CLASS': classes.CLIENT_ERROR,
  LENGTH_REQUIRED: 411,
  // 412 (RFC 7232) - The server does not meet one of the preconditions that the requester put on the request.
  412: 'Precondition Failed',
  '412_NAME': 'PRECONDITION_FAILED',
  '412_MESSAGE': 'The server does not meet one of the preconditions that the requester put on the request.',
  '412_CLASS': classes.CLIENT_ERROR,
  PRECONDITION_FAILED: 412,
  // 413 (RFC 7231) - The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".
  413: 'Request Entity Too Large',
  '413_NAME': 'REQUEST_ENTITY_TOO_LARGE',
  '413_MESSAGE': 'The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".',
  '413_CLASS': classes.CLIENT_ERROR,
  REQUEST_ENTITY_TOO_LARGE: 413,
  // 414 (RFC 7231) - The URI provided was too long for the server to process.
  414: 'Request-URI Too Large',
  '414_NAME': 'REQUEST_URI_TOO_LONG',
  '414_MESSAGE': 'The URI provided was too long for the server to process.',
  '414_CLASS': classes.CLIENT_ERROR,
  REQUEST_URI_TOO_LONG: 414,
  // 415 - The request entity has a media type which the server or resource does not support.
  415: 'Unsupported Media Type',
  '415_NAME': 'UNSUPPORTED_MEDIA_TYPE',
  '415_MESSAGE': 'The request entity has a media type which the server or resource does not support.',
  '415_CLASS': classes.CLIENT_ERROR,
  UNSUPPORTED_MEDIA_TYPE: 415,
  // 416 (RFC 7233) - The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
  416: 'Requested Range not Satisfiable',
  '416_NAME': 'REQUESTED_RANGE_NOT_SATISFIABLE',
  '416_MESSAGE': 'The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.',
  '416_CLASS': classes.CLIENT_ERROR,
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,
  // 417 - The server cannot meet the requirements of the Expect request-header field.
  417: 'Expectation Failed',
  '417_NAME': 'EXPECTATION_FAILED',
  '417_MESSAGE': 'The server cannot meet the requirements of the Expect request-header field.',
  '417_CLASS': classes.CLIENT_ERROR,
  EXPECTATION_FAILED: 417,
  // 418 (RFC 2324, RFC 7168) - Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout. This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.
  418: 'I\'m a teapot',
  '418_NAME': 'IM_A_TEAPOT',
  '418_MESSAGE': 'Any attempt to brew coffee with a teapot should result in the error code "418 I\'m a teapot". The resulting entity body MAY be short and stout.',
  '418_CLASS': classes.CLIENT_ERROR,
  IM_A_TEAPOT: 418,
  // 421 (RFC 7540) - The request was directed at a server that is not able to produce a response.
  421: 'Misdirected Request',
  '421_NAME': 'MISDIRECTED_REQUEST',
  '421_MESSAGE': 'The request was directed at a server that is not able to produce a response.',
  '421_CLASS': classes.CLIENT_ERROR,
  MISDIRECTED_REQUEST: 421,
  // 422 (WebDAV; RFC 4918) - The request was well-formed but was unable to be followed due to semantic errors.
  422: 'Unprocessable Entity',
  '422_NAME': 'UNPROCESSABLE_ENTITY',
  '422_MESSAGE': 'The request was well-formed but was unable to be followed due to semantic errors.',
  '422_CLASS': classes.CLIENT_ERROR,
  UNPROCESSABLE_ENTITY: 422,
  // 423 (WebDAV; RFC 4918) - The resource that is being accessed is locked.
  423: 'Locked',
  '423_NAME': 'LOCKED',
  '423_MESSAGE': 'The resource that is being accessed is locked.',
  '423_CLASS': classes.CLIENT_ERROR,
  LOCKED: 423,
  // 424 (WebDAV; RFC 4918) - The request failed because it depended on another request and that request failed.
  424: 'Failed Dependency',
  '424_NAME': 'FAILED_DEPENDENCY',
  '424_MESSAGE': 'The request failed because it depended on another request and that request failed.',
  '424_CLASS': classes.CLIENT_ERROR,
  FAILED_DEPENDENCY: 424,
  // 426 - The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.
  426: 'Upgrade Required',
  '426_NAME': 'UPGRADE_REQUIRED',
  '426_MESSAGE': 'The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.',
  '426_CLASS': classes.CLIENT_ERROR,
  UPGRADE_REQUIRED: 426,
  // 428 (RFC 6585) - The origin server requires the request to be conditional.
  428: 'Precondition Required', // RFC 6585
  '428_NAME': 'PRECONDITION_REQUIRED',
  '428_MESSAGE': 'The origin server requires the request to be conditional.',
  '428_CLASS': classes.CLIENT_ERROR,
  PRECONDITION_REQUIRED: 428,
  // 429 (RFC 6585) - The user has sent too many requests in a given amount of time.
  429: 'Too Many Requests',
  '429_NAME': 'TOO_MANY_REQUESTS',
  '429_MESSAGE': 'The user has sent too many requests in a given amount of time.',
  '429_CLASS': classes.CLIENT_ERROR,
  TOO_MANY_REQUESTS: 429,
  // 431 (RFC 6585) - The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.
  431: 'Request Header Fields Too Large', // RFC 6585
  '431_NAME': 'REQUEST_HEADER_FIELDS_TOO_LARGE',
  '431_MESSAGE': 'The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.',
  '431_CLASS': classes.CLIENT_ERROR,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  // 451 (RFC 7725) - A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.
  451: 'Unavailable For Legal Reasons',
  '451_NAME': 'UNAVAILABLE_FOR_LEGAL_REASONS',
  '451_MESSAGE': 'A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.',
  '451_CLASS': classes.CLIENT_ERROR,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  // ## Server Error 5xx

  // Indicates that the server is aware that it has erred or is incapable of performing the requested method.

  // 500 - A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
  500: 'Internal Server Error',
  '500_NAME': 'INTERNAL_SERVER_ERROR',
  '500_MESSAGE': 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.',
  '500_CLASS': classes.SERVER_ERROR,
  INTERNAL_SERVER_ERROR: 500,
  // 501 - The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.
  501: 'Not Implemented',
  '501_NAME': 'NOT_IMPLEMENTED',
  '501_MESSAGE': 'The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.',
  '501_CLASS': classes.SERVER_ERROR,
  NOT_IMPLEMENTED: 501,
  // 502 - The server was acting as a gateway or proxy and received an invalid response from the upstream server.
  502: 'Bad Gateway',
  '502_NAME': 'BAD_GATEWAY',
  '502_MESSAGE': 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
  '502_CLASS': classes.SERVER_ERROR,
  BAD_GATEWAY: 502,
  // 503 - The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
  503: 'Service Unavailable',
  '503_NAME': 'SERVICE_UNAVAILABLE',
  '503_MESSAGE': 'The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.',
  '503_CLASS': classes.SERVER_ERROR,
  SERVICE_UNAVAILABLE: 503,
  // 504 - The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
  504: 'Gateway Time-out',
  '504_NAME': 'GATEWAY_TIMEOUT',
  '504_MESSAGE': 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.',
  '504_CLASS': classes.SERVER_ERROR,
  GATEWAY_TIMEOUT: 504,
  // 505 - The server does not support the HTTP protocol version used in the request.
  505: 'HTTP Version not Supported',
  '505_NAME': 'HTTP_VERSION_NOT_SUPPORTED',
  '505_MESSAGE': 'The server does not support the HTTP protocol version used in the request.',
  '505_CLASS': classes.SERVER_ERROR,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  // 506 (RFC 2295) - Transparent content negotiation for the request results in a circular reference.
  506: 'Variant Also Negotiates',
  '506_NAME': 'VARIANT_ALSO_NEGOTIATES',
  '506_MESSAGE': 'Transparent content negotiation for the request results in a circular reference.',
  '506_CLASS': classes.SERVER_ERROR,
  VARIANT_ALSO_NEGOTIATES: 506,
  // 507 (WebDAV; RFC 4918) - The server is unable to store the representation needed to complete the request.
  507: 'Insufficient Storage',
  '507_NAME': 'INSUFFICIENT_STORAGE',
  '507_MESSAGE': 'The server is unable to store the representation needed to complete the request.',
  '507_CLASS': classes.SERVER_ERROR,
  INSUFFICIENT_STORAGE: 507,
  // 508 (WebDAV; RFC 5842) - The server detected an infinite loop while processing the request.
  508: 'Loop Detected',
  '508_NAME': 'LOOP_DETECTED',
  '508_MESSAGE': 'The server detected an infinite loop while processing the request.',
  '508_CLASS': classes.SERVER_ERROR,
  LOOP_DETECTED: 508,
  // 510 (RFC 2774) - Further extensions to the request are required for the server to fulfil it.
  510: 'Not Extended',
  '510_NAME': 'NOT_EXTENDED',
  '510_MESSAGE': 'Further extensions to the request are required for the server to fulfil it.',
  '510_CLASS': classes.SERVER_ERROR,
  NOT_EXTENDED: 510,
  // 511 (RFC 6585) - The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.
  511: 'Network Authentication Required',
  '511_NAME': 'NETWORK_AUTHENTICATION_REQUIRED',
  '511_MESSAGE': 'The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.',
  '511_CLASS': classes.SERVER_ERROR,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
  // ## Extra code

  // Extra HTTP code implemented by vendors and other specifications.
  extra: {
    // ### Unofficial codes

    // The following codes are not specified by any standard.
    unofficial: {
      // 103 - Used in the resumable requests proposal to resume aborted PUT or POST requests.
      103: 'Checkpoint',
      '103_NAME': 'CHECKPOINT',
      '103_MESSAGE': 'Used in the resumable requests proposal to resume aborted PUT or POST requests.',
      '103_CLASS': classes.INFORMATIONAL,
      CHECKPOINT: 103,
      // 419 Page Expired (Laravel Framework) - Used by the Laravel Framework when a CSRF Token is missing or expired.
      419: 'Page Expired',
      '419_NAME': 'PAGE_EXPIRED',
      '419_MESSAGE': 'Used by the Laravel Framework when a CSRF Token is missing or expired.',
      '419_CLASS': classes.CLIENT_ERROR,
      PAGE_EXPIRED: 419,
      // 218 This is fine (Apache Web Server) - Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.
      218: 'This is fine',
      '218_NAME': 'THIS_IS_FINE',
      '218_MESSAGE': 'Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.',
      '218_CLASS': classes.SUCCESSFUL,
      THIS_IS_FINE: 218,
      // 420 Enhance Your Calm (Twitter) - Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.
      420: 'Enhance Your Calm',
      '420_NAME': 'ENHANCE_YOUR_CALM',
      '420_MESSAGE': 'Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.',
      '420_CLASS': classes.CLIENT_ERROR,
      ENHANCE_YOUR_CALM: 420,
      // 450 Blocked by Windows Parental (Microsoft) - The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.
      450: 'Blocked by Windows Parental Controls',
      '450_NAME': 'BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS',
      '450_MESSAGE': 'The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.',
      '450_CLASS': classes.CLIENT_ERROR,
      BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450,
      // 498 Invalid Token (Esri) - Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.
      498: 'Invalid Token',
      '498_NAME': 'INVALID_TOKEN',
      '498_MESSAGE': 'Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.',
      '498_CLASS': classes.CLIENT_ERROR,
      INVALID_TOKEN: 498,
      // 499 Token Required (Esri) - Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.
      499: 'Token Required',
      '499_NAME': 'TOKEN_REQUIRED',
      '499_MESSAGE': 'Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.',
      '499_CLASS': classes.CLIENT_ERROR,
      TOKEN_REQUIRED: 499,
      // 509 Bandwidth Limit Exceeded (Apache Web Server/cPanel) - The server has exceeded the bandwidth specified by the server administrator.
      509: 'Bandwidth Limit Exceeded',
      '509_NAME': 'BANDWIDTH_LIMIT_EXCEEDED',
      '509_MESSAGE': 'The server has exceeded the bandwidth specified by the server administrator.',
      '509_CLASS': classes.SERVER_ERROR,
      BANDWIDTH_LIMIT_EXCEEDED: 509,
      // 530 Site is frozen - Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.
      530: 'Site is frozen',
      '530_NAME': 'SITE_IS_FROZEN',
      '530_MESSAGE': 'Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.',
      '530_CLASS': classes.SERVER_ERROR,
      SITE_IS_FROZEN: 530,
      // 598 (Informal convention) Network read timeout error - Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.
      598: 'Network read timeout error',
      '598_NAME': 'NETWORK_READ_TIMEOUT_ERROR',
      '598_MESSAGE': 'Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.',
      '598_CLASS': classes.SERVER_ERROR,
      NETWORK_READ_TIMEOUT_ERROR: 598
    },
    // ### Internet Information Services (IIS)

    // Microsoft's Internet Information Services (IIS) web server expands the 4xx error space to signal errors with the client's request.
    iis: {
      // 440 - The client's session has expired and must log in again.
      440: 'Login Time-out',
      '440_NAME': 'LOGIN_TIME_OUT',
      '440_MESSAGE': 'The client\'s session has expired and must log in again.',
      '440_CLASS': classes.CLIENT_ERROR,
      LOGIN_TIME_OUT: 440,
      // 449 - The server cannot honour the request because the user has not provided the required information.
      449: 'Retry With',
      '449_NAME': 'RETRY_WITH',
      '449_MESSAGE': 'The server cannot honour the request because the user has not provided the required information.',
      '449_CLASS': classes.CLIENT_ERROR,
      RETRY_WITH: 449,
      // 451 - Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users' mailbox.
      451: 'Redirect',
      '451_NAME': 'REDIRECT',
      '451_MESSAGE': 'Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users\' mailbox.',
      '451_CLASS': classes.CLIENT_ERROR,
      REDIRECT: 451
    },
    // ### NGINX

    // The NGINX web server software expands the 4xx error space to signal issues with the client's request.
    nginx: {
      // 444 - Used internally to instruct the server to return no information to the client and close the connection immediately.
      444: 'No Response',
      '444_NAME': 'NO_RESPONSE',
      '444_MESSAGE': 'Used internally to instruct the server to return no information to the client and close the connection immediately.',
      '444_CLASS': classes.CLIENT_ERROR,
      NO_RESPONSE: 444,
      // 494 - Client sent too large request or too long header line.
      494: 'Request header too large',
      '494_NAME': 'REQUEST_HEADER_TOO_LARGE',
      '494_MESSAGE': 'Client sent too large request or too long header line.',
      '494_CLASS': classes.CLIENT_ERROR,
      REQUEST_HEADER_TOO_LARGE: 494,
      // 495 - An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.
      495: 'SSL Certificate Error',
      '495_NAME': 'SSL_CERTIFICATE_ERROR',
      '495_MESSAGE': 'An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.',
      '495_CLASS': classes.CLIENT_ERROR,
      SSL_CERTIFICATE_ERROR: 495,
      // 496 - An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.
      496: 'SSL Certificate Required',
      '496_NAME': 'SSL_CERTIFICATE_REQUIRED',
      '496_MESSAGE': 'An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.',
      '496_CLASS': classes.CLIENT_ERROR,
      SSL_CERTIFICATE_REQUIRED: 496,
      // 497 - An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.
      497: 'HTTP Request Sent to HTTPS Port',
      '497_NAME': 'HTTP_REQUEST_SENT_TO_HTTPS_PORT',
      '497_MESSAGE': 'An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.',
      '497_CLASS': classes.CLIENT_ERROR,
      HTTP_REQUEST_SENT_TO_HTTPS_PORT: 497,
      // 499 - Used when the client has closed the request before the server could send a response.
      499: 'Client Closed Request',
      '499_NAME': 'CLIENT_CLOSED_REQUEST',
      '499_MESSAGE': 'Used when the client has closed the request before the server could send a response.',
      '499_CLASS': classes.CLIENT_ERROR,
      CLIENT_CLOSED_REQUEST: 499
    },
    // ### Cloudflare

    // Cloudflare's reverse proxy service expands the 5xx series of errors space to signal issues with the origin server.
    cloudflare: {
      // 520 - The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.
      520: 'Unknown Error',
      '520_NAME': 'UNKNOWN_ERROR',
      '520_MESSAGE': 'The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.',
      '520_CLASS': classes.SERVER_ERROR,
      UNKNOWN_ERROR: 520,
      // 521 - The origin server has refused the connection from Cloudflare.
      521: 'Web Server Is Down',
      '521_NAME': 'WEB_SERVER_IS_DOWN',
      '521_MESSAGE': 'The origin server has refused the connection from Cloudflare.',
      '521_CLASS': classes.SERVER_ERROR,
      WEB_SERVER_IS_DOWN: 521,
      // 522 - Cloudflare could not negotiate a TCP handshake with the origin server.
      522: 'Connection Timed Out',
      '522_NAME': 'CONNECTION_TIMED_OUT',
      '522_MESSAGE': 'Cloudflare could not negotiate a TCP handshake with the origin server.',
      '522_CLASS': classes.SERVER_ERROR,
      CONNECTION_TIMED_OUT: 522,
      // 523 - Cloudflare could not reach the origin server.
      523: 'Origin Is Unreachable',
      '523_NAME': 'ORIGIN_IS_UNREACHABLE',
      '523_MESSAGE': 'Cloudflare could not reach the origin server.',
      '523_CLASS': classes.SERVER_ERROR,
      ORIGIN_IS_UNREACHABLE: 523,
      // 524 - Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.
      524: 'A Timeout Occurred',
      '524_NAME': 'A_TIMEOUT_OCCURRED',
      '524_MESSAGE': 'Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.',
      '524_CLASS': classes.SERVER_ERROR,
      A_TIMEOUT_OCCURRED: 524,
      // 525 - Cloudflare could not negotiate a SSL/TLS handshake with the origin server.
      525: 'SSL Handshake Failed',
      '525_NAME': 'SSL_HANDSHAKE_FAILED',
      '525_MESSAGE': 'Cloudflare could not negotiate a SSL/TLS handshake with the origin server.',
      '525_CLASS': classes.SERVER_ERROR,
      SSL_HANDSHAKE_FAILED: 525,
      // 526 - Cloudflare could not validate the SSL/TLS certificate that the origin server presented.
      526: 'Invalid SSL Certificate',
      '526_NAME': 'INVALID_SSL_CERTIFICATE',
      '526_MESSAGE': 'Cloudflare could not validate the SSL/TLS certificate that the origin server presented.',
      '526_CLASS': classes.SERVER_ERROR,
      INVALID_SSL_CERTIFICATE: 526,
      // 527 - Error 527 indicates that the request timed out or failed after the WAN connection had been established.
      527: 'Railgun Error',
      '527_NAME': 'RAILGUN_ERROR',
      '527_MESSAGE': 'Error 527 indicates that the request timed out or failed after the WAN connection had been established.',
      '527_CLASS': classes.SERVER_ERROR,
      RAILGUN_ERROR: 527
    }
  }
};


/***/ }),

/***/ "./node_modules/next-server/dist/lib/amphtml-context.js":
false,

/***/ "./node_modules/next-server/dist/lib/head-manager-context.js":
false,

/***/ "./node_modules/next-server/dist/lib/head.js":
false,

/***/ "./node_modules/next-server/dist/lib/side-effect.js":
false,

/***/ "./node_modules/next-server/head.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fmacservicethailand%2FDesktop%2FReact%2Freh_scan_test%2Fpages%2F_error.js!./":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fmacservicethailand%2FDesktop%2FReact%2Freh_scan_test%2Fpages%2F_error.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var page = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NotFound */ "./components/NotFound.js");






var _jsxFileName = "/Users/macservicethailand/Desktop/React/reh_scan_test/pages/_error.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Error = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Error, _Component);

  var _super = _createSuper(Error);

  function Error() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Error);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Error, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, this.props.statusCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_NotFound__WEBPACK_IMPORTED_MODULE_7__["default"], {
        code: this.props.statusCode,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 35
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 2:
/*!**********************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fmacservicethailand%2FDesktop%2FReact%2Freh_scan_test%2Fpages%2F_error.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fmacservicethailand%2FDesktop%2FReact%2Freh_scan_test%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fmacservicethailand%2FDesktop%2FReact%2Freh_scan_test%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.42010474619be56890e7.hot-update.js.map