!(function () {
  var t = "https://newships-sdk.web.app/";
  const e =
    "position: fixed; z-index:9999999; min-width: 356px; max-height: calc(100% - 30px); right: 20px; bottom: 20px; height: 80px; width: 80px;";
  function i() {
    var i = document.createElement("iframe");
    const d = document
      .getElementById("__webwhizSdk__")
      .getAttribute("chatbotId");
    return (
      i.setAttribute("id", "webwhizWidget"),
      i.setAttribute("data-powered-by", "https://www.webwhiz.ai/"),
      i.setAttribute("frameborder", "0"),
      i.setAttribute("style", e),
      document.body.appendChild(i),
      i.setAttribute("src", t + "?kbId=" + d),
      i
    );
  }
  function d(t) {
    window.onmessage = (function (t) {
      return function (e) {
        "webwhiz:widget_expand" === e.data ||
        "webwhiz:widget_minimize" === e.data
          ? ((t.style.height = "490px"), (t.style.width = "356px"))
          : "webwhiz:widget_collapse" === e.data
          ? setTimeout(() => {
              (t.style.height = "80px"), (t.style.width = "80px");
            }, 350)
          : "webwhiz:widget_maximize" === e.data &&
            ((t.style.height = "calc(100% - 30px)"), (t.style.width = "50%"));
      };
    })(t);
  }
  var n;
  (n = () => {
    setTimeout(() => {
      d(i());
    }, 1e3);
  }),
    "loading" === document.readyState
      ? document.addEventListener("DOMContentLoaded", n)
      : n();
})();
//# sourceMappingURL=webwhiz-sdk.js.map
