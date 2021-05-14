webpackHotUpdate("static/development/pages/scans/qrcord.js",{

/***/ "./demos/scan/qrcode/createmodal.js":
/*!******************************************!*\
  !*** ./demos/scan/qrcode/createmodal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather_dist_icons_plus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather/dist/icons/plus */ "./node_modules/react-feather/dist/icons/plus.js");
/* harmony import */ var react_feather_dist_icons_plus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_plus__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);









var _this = undefined,
    _jsxFileName = "/Users/macservicethailand/Desktop/React/reh_scan_test/demos/scan/qrcode/createmodal.js";


var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item;

var createmodal = function createmodal(_ref) {
  var form = _ref.form;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var showModal = function showModal(e) {
    setVisible(true);
    form.resetFields();
  };

  var thandleOk = function thandleOk(e) {
    e.preventDefault();
    form.validateFields(function (err, values) {
      if (!err) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.success("บันทึกข้อมูลเรียบร้อย").then(function () {
          return setVisible(false);
        });
      }
    });
  };

  var handleCancel = function handleCancel(e) {
    setVisible(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: showModal,
    type: "primary",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_feather_dist_icons_plus__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 20,
    strokeWidth: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), " \u0E40\u0E1E\u0E34\u0E48\u0E21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E08\u0E38\u0E14\u0E2A\u0E41\u0E01\u0E19",
    visible: visible,
    onOk: thandleOk,
    okText: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
    cancelText: "\u0E1B\u0E34\u0E14",
    onCancel: handleCancel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a, {
    layout: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FormItem, {
    label: "\u0E25\u0E30\u0E15\u0E34\u0E08\u0E39\u0E14",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, form.getFieldDecorator("latitude", {
    initialValue: "",
    rules: [{
      required: true,
      message: "ละติจูด ต้องไม่ว่าง!"
    }]
  })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "text",
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "environment",
      style: {
        color: "rgba(0,0,0,.25)"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 19
      }
    }),
    placeholder: "\u0E01\u0E23\u0E2D\u0E01 \u0E25\u0E30\u0E15\u0E34\u0E08\u0E39\u0E14",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FormItem, {
    label: "\u0E25\u0E2D\u0E07\u0E08\u0E34\u0E08\u0E39\u0E14",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, form.getFieldDecorator("longitude", {
    initialValue: "",
    rules: [{
      required: true,
      message: "ลองจิจูด ต้องไม่ว่าง!"
    }]
  })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "text",
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "environment",
      style: {
        color: "rgba(0,0,0,.25)"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 19
      }
    }),
    placeholder: "\u0E01\u0E23\u0E2D\u0E01 \u0E25\u0E2D\u0E07\u0E08\u0E34\u0E08\u0E39\u0E14",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FormItem, {
    label: "\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, form.getFieldDecorator("location", {
    initialValue: "",
    rules: [{
      required: true,
      message: "สถานที่ ต้องไม่ว่าง!"
    }]
  })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "text",
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "environment",
      style: {
        color: "rgba(0,0,0,.25)"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }
    }),
    placeholder: "\u0E01\u0E23\u0E2D\u0E01 \u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.create()(createmodal));

/***/ })

})
//# sourceMappingURL=qrcord.js.56793f07398dff542698.hot-update.js.map