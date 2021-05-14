webpackHotUpdate("static/development/pages/scans/inout.js",{

/***/ "./demos/scan/inout/location.js":
/*!**************************************!*\
  !*** ./demos/scan/inout/location.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-geolocated */ "./node_modules/react-geolocated/dist-modules/index.js");
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_geolocated__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _arePoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arePoints */ "./demos/scan/inout/arePoints.js");





var _this = undefined,
    _jsxFileName = "/Users/macservicethailand/Desktop/React/reh_scan_test/demos/scan/inout/location.js";


// import QrScan from "react-qr-reader";
// Blob is not defined” in NextJs? dynamic

var QrScan = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-qr-reader */ "./node_modules/react-qr-reader/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-qr-reader */ "./node_modules/react-qr-reader/lib/index.js")];
    },
    modules: ["react-qr-reader"]
  }
});

var ButtonGroup = antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a.Group;


var location = function location(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(undefined),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      qrscan = _useState6[0],
      setQrscan = _useState6[1];

  var handleScan = function handleScan(data) {
    if (data) {
      setQrscan(data);
    }
  };

  var handleError = function handleError(err) {
    console.error(err);
  };

  var handleOk = function handleOk(e) {
    console.log(e);
    setVisible(false);
  };

  var handleCancel = function handleCancel(e) {
    console.log(e);
    setVisible(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, props.isGeolocationAvailable, !props.isGeolocationAvailable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Your browser does not support Geolocation") : !props.isGeolocationEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Geolocation is not enabled ") : props.coords ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "dashed",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Latitude : ", props.coords.latitude.toFixed(4))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "dashed",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "Longitude : ", props.coords.longitude.toFixed(4)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    span: 24,
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "dashed",
    block: true,
    style: {
      height: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(QrScan, {
    delay: 300,
    onError: handleError,
    onScan: handleScan,
    style: {
      margin: "15px 0px 15px 0px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    gutter: 24,
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, Object(_arePoints__WEBPACK_IMPORTED_MODULE_7__["default"])({
    lat: props.coords.latitude.toFixed(4),
    lng: props.coords.longitude.toFixed(4)
  }, {
    //lat: qrscan !== undefined ? qrscan.latitude : 0,
    //lng: qrscan !== undefined ? qrscan.longitude : 0
    lat: 16.058,
    lng: 103.6479
  }, 0.5) ? // <ButtonGroup size="large">
  //   <Button type="primary">
  //     <Icon type="left" />
  //     เข้างาน
  //   </Button>
  //   <Button type="primary">
  //     ออกงาน
  //     <Icon type="right" />
  //   </Button>
  // </ButtonGroup>
  "" : "--- กรุณาตรวจสอบจุดสแกน --- ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    span: 24,
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }), "Latitude Mobile :", " ", qrscan !== undefined ? qrscan.latitude : "is not scan", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }), "Longitude Mobile :", " ", qrscan !== undefined ? qrscan.longitude : "is not scan", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }), "Location Mobile :", " ", qrscan !== undefined ? qrscan.location : "is not scan"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 \u2026 "));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_geolocated__WEBPACK_IMPORTED_MODULE_6__["geolocated"])({
  // positionOptions: {
  //   enableHighAccuracy: false
  // },
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: Infinity
  },
  watchPosition: false,
  userDecisionTimeout: 5000,
  suppressLocationOnMount: false,
  // geolocationProvider: navigator.geolocation,
  isOptimisticGeolocationEnabled: true
})(location)); // export default location;

/***/ })

})
//# sourceMappingURL=inout.js.eaad7f81580660ce5a80.hot-update.js.map