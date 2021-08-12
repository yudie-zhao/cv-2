// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#demo");
var style = document.querySelector("#style");
var string = "/*\u5927\u5BB6\u597D\uFF0C\u6211\u53EB\u5C0F\u8D75\n*\u63A5\u4E0B\u6765\uFF0C\u5411\u5927\u5BB6\u6F14\u793A\u6211\u6240\u5B66\u7684\u524D\u7AEF\u77E5\u8BC6\n*\u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2A div \n*/\n#div1{\n    height:200px;\n    width:200px;\n}\n/*\u4E0B\u9762\uFF0C\u6211\u8981\u628A div \u53D8\u6210\u4E00\u53EA\u5C0F\u732A\n*\u770B\u8FD9\u513F\n*\u6211\u51C6\u5907\u628A div \u53D8\u6210\u5706\n*/\n#div1{\n    border-radius:50%;\n    background:#f772bb;\n}\n/*\u7136\u540E\uFF0C\u7ED9\u5B83\u52A0\u4E2A\u9F3B\u5B50\n*/\n.nose{\n    position:relative;\n    width:80px;\n    height:45px;\n    border-radius:50%;\n    background:#f52b9b;\n    top:110px;\n    left:60px;\nz-index:0;\n}\n/*\u8BA9\u6211\u4EEC\u7ED9\u5B83\u7684\u9F3B\u5B50\u52A0\u4E24\u4E2A\u9F3B\u5B54\u5427\n*/\n.left-naris{\n    position:absolute;\n    width: 15px;\n    height: 30px;\n    top: 7.5px;\n    left: calc(50% - 25px);\n    border-radius: 50%;\n    background:#d70174;\n}\n.right-naris{\n    position:absolute;\n    width: 15px;\n    height: 30px;\n    top: 7.5px;\n    border-radius: 50%;\n    left: calc(50% + 10px);\n    background:#d70174;\n}\n/*\u7ED9\u5B83\u52A0\u4E0A\u773C\u775B\u5427\n*/\n.right-eyes{\n    position:absolute;\n    width:10px;\n    height:20px;\n    background:black;\n    top:70px;\n    left:120px;\n    border-radius:50%;\n}\n.left-eyes{\n    position:absolute;\n    width:10px;\n    height:20px;\n    background:black;\n    top:70px;\n    right:120px;\n    border-radius:50%;\n}\n/*\u7ED9\u5B83\u52A0\u4E0A\u8033\u6735\n*/\n.left-ears{\n    position:absolute;\n    width:0;\n    height:0;\n    border-top:40px solid #c3025f;\n    border-right:40px solid transparent;\n    transform:translate(30px,-30px);\n}\n.right-ears{\n    position:absolute;\n    width:0;\n    height:0;\n    border-top:40px solid #c3025f;\n    border-left:40px solid transparent;\n    transform:translate(130px,-30px);\n}\n    ";
var string2 = "";
var n = 0;

var step = function step() {
  setTimeout(function () {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }

    ;

    if (n < string.length) {
      n += 1;
      html.innerHTML = string2;
      style.innerHTML = string.substring(0, n);
      window.scrollTo(0, 9999);
      demo.scrollTo(0, 9999);
      step();
    }
  }, 2);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.0c16ef85.js.map