/*! ZCJ(ZippCast JavaScript) Library v1.0.3, By: Louis Gualtieri (c) ZippCast 2017 | https://raw.githubusercontent.com/ZippCast/JS-Framework/master/LICENSE
Forked by bads.tm, so now this is BVJF (BadsVideo Javascript Framework) (c) 2018 bads.tm
https://raw.githubusercontent.com/bads-tm/JS-Framework/master/LICENSE
*/
 ! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("No document found in current window");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  function c(a, b) {
    return new c.mage.init(a)
  }

  function d(a) {
    var b = "length" in a && a.length,
      d = c.type(a);
    return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
  }

  function e(a, b, c, d) {
    var f;
    if ("object" == typeof b) {
      for (f in b) e(a, f, c, b[f]);
      return a
    }
    return void 0 === d && (d = c, c = void 0), d !== !1 && (d ? a.forEach(function() {
      this.addEventListener(b, d, c)
    }) : a)
  }
  var f = new Date,
    g = f.getFullYear(),
    h = {},
    i = h.toString,
    j = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
  return c.mage = c.prototype = {}, c.magic = c.mage.extend = function() {
    var a, b, d, e, f, g, h = arguments[0] || {},
      i = 1,
      j = arguments.length,
      k = !1;
    for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" == typeof h || c.isFunction(h) || (h = {}), i === j && (h = this, i--); i < j; i++)
      if (null !== (f = arguments[i]))
        for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
    return h
  }, c.magic({
    constructor: c,
    copyright: "ZippCast [Louis Gualtieri] 2017 - " + g + " All rights reserved.",
    ZCJ: this.copyright,
    isReady: !0,
    isFunction: function(a) {
      return "function" === this.type(a)
    },
    isArray: Array.isArray,
    isWindow: function(a) {
      return null !== a && a === a.window
    },
    isPlainObject: function(a) {
      return "object" === c.type(a) && !a.nodeType && !this.isWindow(a) && !(a.constructor && !hasOwn.call(a.constructor.prototype, "isPrototypeOf"))
    },
    type: function(a) {
      return null === a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
    },
    forEach: function(a, b, c) {
      var e = 0,
        f = a.length,
        g = d(a);
      if (c) {
        if (g)
          for (; e < f && b.apply(a[e], c) !== !1; e++);
        else
          for (e in a)
            if (b.apply(a[e], c) === !1) break
      } else if (g)
        for (; e < f && b.call(a[e], e, a[e]) !== !1; e++);
      else
        for (e in a)
          if (b.call(a[e], e, a[e]) === !1) break;
      return a
    },
    create: function(a, b) {
      var d = document.createElement(a);
      if (b) {
        b.className && (c(d).addClass(b.className), delete b.className), b.text && (c(d).txt(b.text), delete b.text);
        for (var e in b) b.hasOwnProperty(e) && c(d).attr(e, b[e])
      }
      return d
    },
    map: function(a) {
      for (var b = [], c = 0; c < this.length; c++) b.push(a.call(this, this[c], c));
      return b
    },
    unite: function(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
      return a.length = e, a
    },
    now: f
  }), (c.mage.init = function(a, b) {
    var d, e;
    if (!a) return this;
    if ("string" != typeof a) return this.context = this[0] = a, this.length = 1, this;
    if (!(d = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : j.exec(a)) || !d[1]) {
      e = document.querySelectorAll(a), this.context = document, this.selector = a;
      for (var f = 0; f < e.length; f++) this[f] = e[f];
      return this.length = e.length, this
    }
    b = b instanceof c ? b[0] : b, c.unite(this, c.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : document, !0))
  }).prototype = c.mage, c.mage.append = function(a) {
    return a = c.parseHTML(a), this.forEach(function() {
      this.appendChild(a[0])
    })
  }, c.mage.attr = function(a, b) {
    return void 0 !== b ? this.forEach(function() {
      this.setAttribute(a, b)
    }) : this[0].getAttribute(a)
  }, c.mage.extend({
    hasClass: function(a) {
      return this[0].classList ? this[0].classList.contains(a) : new RegExp("(^| )" + a + "( |$)", "gi").test(this[0].className)
    },
    addClass: function(a) {
      var b = "";
      if ("string" != typeof a)
        for (var c = 0; c < a.length; c++) b += " " + a[c];
      else b = " " + a;
      return this.forEach(function() {
        this.className += b
      })
    },
    removeClass: function(a) {
      return this.forEach(function() {
        for (var b, c = this.className.split(" ");
          (b = c.indexOf(a)) > -1;) c = c.slice(0, b).concat(c.slice(++b));
        this.className = c.join(" ")
      })
    },
    swapClass: function(a, b) {
      this.removeClass(a), this.addClass(b)
    },
    toggleClass: function(a) {
      return this.forEach(function() {
        if (this.classList) this.classList.toggle(a);
        else {
          var b = this.className.split(" "),
            c = b.indexOf(a);
          c >= 0 ? b.splice(c, 1) : b.push(a), this.className = b.join(" ")
        }
      })
    }
  }), c.mage.hide = function() {
    return this.forEach(function() {
      this.style.display = "none"
    })
  }, c.mage.show = function() {
    return this.forEach(function() {
      this.style.display = "block"
    })
  }, c.mage.toggleDisplay = function() {
    return this.forEach(function() {
      "none" != this.style.display ? this.style.display = "none" : this.style.display = "block"
    })
  }, c.mage.extend({
    next: function() {
      return this[0].nextElementSibling
    },
    prev: function() {
      return this[0].previousElementSibling
    },
    parent: function() {
      return this[0].parentNode
    }
  }), c.mage.fn = function(a) {
    a.call(this[0])
  }, c.mage.forEach = function(a, b) {
    return c.forEach(this, a, b)
  }, c.mage.fadeIn = function() {
    return this.forEach(function() {
      var a = this,
        b = 0,
        c = setInterval(function() {
          a.style.display = "block", a.style.opacity = b, a.style.filter = "alpha(opacity=" + 100 * b + ")", (b += .1) >= 1 && clearInterval(c)
        }, 25)
    })
  }, c.mage.fadeOut = function() {
    return this.forEach(function() {
      var a = this,
        b = 1,
        c = setInterval(function() {
          a.style.opacity = b, a.style.filter = "alpha(opacity=" + 100 * b + ")", (b -= .1) <= 0 && (clearInterval(c), a.style.display = "none")
        }, 25)
    })
  }, c.mage.html = function(a) {
    return void 0 !== a ? this.forEach(function() {
      this.innerHTML = a
    }) : this[0].innerHTML
  }, c.mage.off = function(a, b) {
    return this.forEach(function() {
      this.removeEventListener(a, b, !1)
    })
  }, c.mage.on = function(a, b, c) {
    return e(this, a, b, c)
  }, c.mage.prepend = function(a) {
    return this.forEach(function() {
      this.insertBefore(a, this.firstChild)
    })
  }, c.mage.remove = function() {
    return this.forEach(function() {
      return this.parentNode.removeChild(this)
    })
  }, c.mage.txt = function(a) {
    return void 0 !== a ? this.forEach(function() {
      this.textContent = a
    }) : this[0].textContent
  }, c.mage.val = function(a) {
    return void 0 !== a ? this.forEach(function() {
      this.value = a
    }) : this[0].value
  }, c.magic({
    xmlhttp: function() {
      return a.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
    },
    Ajax: function(a) {
      var b, c, d;
      if (!a.url) return void(a.debugLog === !0 && console.log("No Url!"));
      if (!a.type) return void(a.debugLog === !0 && console.log("No Default type (GET/POST) given!"));
      a.method || (a.method = !0), a.debugLog || (a.debugLog = !1);
      var e = this.xmlhttp();
      e.onreadystatechange = function() {
        if (4 == e.readyState && 200 == e.status) {
          var b = e.responseText;
          "json" == a.contentType && (b = b ? JSON.parse(b) : ""), a.success && a.success(b, e.readyState), a.debugLog === !0 && console.log("SuccessResponse"), a.debugLog === !0 && console.log("Response Data:" + e.responseText)
        } else a.debugLog === !0 && console.log("FailureResponse --> State:" + e.readyState + "Status:" + e.status)
      };
      var f = [],
        g = a.data;
      if ("string" == typeof g) {
        var h = String.prototype.split.call(g, "&");
        for (c = 0, d = h.length; c < d; c++) b = h[c].split("="), f.push(encodeURIComponent(b[0]) + "=" + encodeURIComponent(b[1]))
      } else if ("object" == typeof g && !(g instanceof String || FormData && g instanceof FormData))
        for (var i in g)
          if (b = g[i], "[object Array]" == Object.prototype.toString.call(b))
            for (c = 0, d = b.length; c < d; c++) f.push(encodeURIComponent(i) + "[]=" + encodeURIComponent(b[c]));
          else f.push(encodeURIComponent(i) + "=" + encodeURIComponent(b));
      if (f = f.join("&"), "GET" == a.type) e.open("GET", a.url + "?" + f, a.method), e.send(), a.debugLog === !0 && console.log("GET fired at:" + a.url + "?" + f);
      else if ("POST" == a.type) e.open("POST", a.url, a.method), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send(f), a.debugLog === !0 && console.log("POST fired at:" + a.url + " || Data:" + f);
      else {
        if ("UPLOAD" != a.type) return !1;
        e.open("POST", a.url, a.method), e.send(a.data)
      }
    }
  }), c("a[data-hide]").on("click", function() {
    c(c(this).attr("data-hide")).hide()
  }), c("a[data-toggle]").on("click", function() {
    c(c(this).attr("data-toggle")).toggleClass("display-none")
  }), c("input[data-check-all]").on("change", function() {
    var a = c(this).attr("data-check-all");
    this.checked === !0 ? c('input[name="' + a + '"]').forEach(function() {
      this.checked = !0
    }) : c('input[name="' + a + '"]').forEach(function() {
      this.checked = !1
    })
  }), c("input[data-check-toggle]").on("change", function() {
    var a = c(this).attr("data-check-toggle");
    this.checked === !0 ? c(a).show() : 0 === c('input[name="' + c(this).attr("name") + '"]:checked').length && c(a).hide()
  }), c.magic({
    parseHTML: function(a) {
      var b = document.implementation.createHTMLDocument(null);
      return b.body.innerHTML = a, b.body.children
    }
  }), b || (a.ZCJ = a.$ = c), console.log("%cBVJF (bads.tm Javascript Framework [Fork Of ZippCast] ) Console Debugger", "color:blue; font-weight: bold; font-size: x-large"), console.log("%cThis is nerd stuff. If you dont know what your doing, then you probably shouldnt be here.", "color:blue; font-size: medium"), c
});

/*
playback timings (ms):
  LoadShardBlock: 60.966 (3)
  esindex: 0.007
  captures_list: 86.584
  CDXLines.iter: 18.031 (3)
  PetaboxLoader3.datanode: 68.999 (4)
  exclusion.robots: 0.199
  exclusion.robots.policy: 0.174
  RedisCDXSource: 4.472
  PetaboxLoader3.resolve: 48.598
  load_resource: 81.883
*/
