var Foo = /*#__PURE__*/function (_Bar) {
  "use strict";

  function Foo() {
    var _thisSuper, _this;
    babelHelpers.classCallCheck(this, Foo);
    _this = babelHelpers.callSuper(this, Foo);
    var X = /*#__PURE__*/function (_ref) {
      function X() {
        babelHelpers.classCallCheck(this, X);
      }
      return babelHelpers.createClass(X, [{
        key: _ref,
        value: function value() {}
      }]);
    }((() => {
      var _Foo;
      babelHelpers.get((_thisSuper = babelHelpers.assertThisInitialized(_this), babelHelpers.getPrototypeOf(Foo.prototype)), "method", _thisSuper).call(_thisSuper);
    })());
    return _this;
  }
  babelHelpers.inherits(Foo, _Bar);
  return babelHelpers.createClass(Foo);
}(Bar);
