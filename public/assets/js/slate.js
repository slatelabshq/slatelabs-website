/* ==========================================================================
   SLATE LABS — SITE BEHAVIOUR  (redesign pass, v4)
   --------------------------------------------------------------------------
   No framework, no build step, no third-party script. Everything here is
   additive: with JavaScript off the pages are complete and readable, and
   `prefers-reduced-motion: reduce` freezes every animation while leaving
   all content visible.

   Modules
     1. theme      two-state switch in the bar, persisted, synced to the OS
     2. nav        scrolled state + cyan scroll rail on the bar's hairline
     3. sheet      the mobile menu: focus trap, Escape, scroll lock
     4. ktype      headlines rise word by word out of a mask, on a spring
     5. reveal     staggered scroll reveals for blocks and images
     6. clock      the Lagos time in the hero title block
     8. motion     Hello Monday-style layer: spring + scroll core, page curtain,
                   pointer blob, magnetic buttons, sliding nav pill, liquid
                   image hover, scroll-driven marquee, scroll-skewed headlines
   ========================================================================== */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var calm = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  function each(list, fn) { Array.prototype.forEach.call(list, fn); }
  /* Announce first: every rule that hides content until a reveal fires hangs
     off this class, so a script that is blocked or fails leaves nothing hidden. */
  root.classList.add('motion');

  function on(el, type, fn, opts) { if (el) el.addEventListener(type, fn, opts || false); }

  /* Fine pointer with hover: the pointer-driven effects only exist here. */
  var fine = !!(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches);

  /* ---- motion core: one rAF loop, a spring, and the scroll's velocity ---- */
  function Spring(x, k, d) { this.x = x; this.t = x; this.v = 0; this.k = k || 170; this.d = d || 14; }
  Spring.prototype.step = function (dt) {
    var a = (this.t - this.x) * this.k - this.v * this.d;
    this.v += a * dt;
    this.x += this.v * dt;
    return this.x;
  };
  Spring.prototype.rest = function () {
    return Math.abs(this.t - this.x) < 0.05 && Math.abs(this.v) < 0.05;
  };
  function clamp(n, a, b) { return Math.min(b, Math.max(a, n)); }

  var ticks = [];
  var tprev = 0;
  function tick(fn) { ticks.push(fn); }
  function loop(t) {
    var dt = Math.min(0.034, (t - tprev) / 1000 || 0.016);
    tprev = t;
    if (!doc.hidden) for (var i = 0; i < ticks.length; i++) ticks[i](dt, t);
    window.requestAnimationFrame(loop);
  }

  /* S.v is the scroll speed in px per frame, eased; S.dir is its sign. */
  var S = { y: window.pageYOffset || 0, v: 0, dir: 1 };
  tick(function () {
    var y = window.pageYOffset || 0;
    var d = y - S.y;
    S.y = y;
    S.v += (d - S.v) * 0.14;
    if (Math.abs(d) > 0.5) S.dir = d > 0 ? 1 : -1;
  });
  if (!calm) window.requestAnimationFrame(loop);


  /* ------------------------------------------------------------- 1. THEME */
  /* The pre-paint inline script has already set [data-theme] on <html>.
     This keeps the buttons, the stored choice and the browser chrome colour
     in step, and follows the OS until the visitor chooses for themselves. */
  (function theme() {
    var buttons = doc.querySelectorAll('[data-theme-set]');
    var meta = doc.querySelector('meta[name="theme-color"]');
    var KEY = 'slate-theme';

    function stored() {
      try { return localStorage.getItem(KEY); } catch (e) { return null; }
    }

    function apply(mode, remember) {
      if (mode !== 'light' && mode !== 'dark') return;
      root.setAttribute('data-theme', mode);
      if (meta) meta.setAttribute('content', mode === 'dark' ? '#0C1413' : '#FFFFFF');
      each(buttons, function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-theme-set') === mode));
      });
      if (remember) { try { localStorage.setItem(KEY, mode); } catch (e) {} }
    }

    each(buttons, function (b) {
      on(b, 'click', function () { apply(b.getAttribute('data-theme-set'), true); });
    });

    apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);

    /* No stored choice: keep following the OS as it changes. */
    var mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    if (mq && mq.addEventListener) {
      mq.addEventListener('change', function (e) {
        if (!stored()) apply(e.matches ? 'dark' : 'light', false);
      });
    }
  })();


  /* --------------------------------------------------------------- 2. NAV */
  /* One scroll handler drives both the frosted state and the rail width,
     through rAF, so it costs a single layout read per frame. */
  (function nav() {
    var head = doc.querySelector('[data-nav]');
    if (!head) return;
    var queued = false;

    function paint() {
      queued = false;
      var y = window.pageYOffset || doc.documentElement.scrollTop || 0;
      head.classList.toggle('is-scrolled', y > 8);
      var max = doc.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      root.style.setProperty('--progress', p.toFixed(4));
    }

    function request() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(paint);
    }

    on(window, 'scroll', request, { passive: true });
    on(window, 'resize', request, { passive: true });
    paint();
  })();


  /* ------------------------------------------------------------- 3. SHEET */
  /* Full-screen menu. Focus moves into the sheet, Tab is trapped, Escape
     and the close control both exit, and the page behind cannot scroll.
     Closing at the desktop breakpoint avoids a stuck overlay on rotate. */
  (function sheet() {
    var el = doc.querySelector('[data-nav-sheet]');
    if (!el) return;
    var toggles = doc.querySelectorAll('[data-nav-toggle]');
    var closers = doc.querySelectorAll('[data-nav-close]');
    var lastFocus = null;

    function focusables() {
      return el.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    }

    function isOpen() { return el.getAttribute('data-open') === 'true'; }

    function open() {
      if (isOpen()) return;
      lastFocus = doc.activeElement;
      el.setAttribute('data-open', 'true');
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-modal', 'true');
      each(toggles, function (b) { b.setAttribute('aria-expanded', 'true'); });
      root.style.overflow = 'hidden';
      /* the sheet opens as a circle growing out of the button that was pressed */
      var src = doc.activeElement && doc.activeElement.closest ? doc.activeElement.closest('[data-nav-toggle]') : null;
      src = src || toggles[0];
      if (src) {
        var r = src.getBoundingClientRect();
        el.style.setProperty('--ox', Math.round(r.left + r.width / 2) + 'px');
        el.style.setProperty('--oy', Math.round(r.top + r.height / 2) + 'px');
      }
      var first = el.querySelector('[data-nav-close]') || focusables()[0];
      if (first) first.focus();
    }

    function close(restore) {
      if (!isOpen()) return;
      el.setAttribute('data-open', 'false');
      el.removeAttribute('role');
      el.removeAttribute('aria-modal');
      each(toggles, function (b) { b.setAttribute('aria-expanded', 'false'); });
      root.style.overflow = '';
      if (restore && lastFocus && lastFocus.focus) lastFocus.focus();
    }

    each(toggles, function (b) {
      on(b, 'click', function () { isOpen() ? close(true) : open(); });
    });
    each(closers, function (b) {
      on(b, 'click', function () { close(true); });
    });

    on(doc, 'keydown', function (e) {
      if (!isOpen()) return;
      if (e.key === 'Escape') { close(true); return; }
      if (e.key !== 'Tab') return;
      var f = focusables();
      if (!f.length) return;
      var first = f[0];
      var last = f[f.length - 1];
      if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    /* Follow a link inside the sheet: let the browser navigate, just tidy up. */
    each(el.querySelectorAll('a[href]'), function (a) {
      on(a, 'click', function () { close(false); });
    });

    on(window, 'resize', function () {
      if (isOpen() && window.innerWidth > 1024) close(false);
    }, { passive: true });
  })();


  /* ------------------------------------------------------------- 4. KTYPE */
  /* Headlines rise word by word out of a mask, each word on a spring with a
     little tilt. Words (not measured lines) are the unit, so the effect never
     depends on where the webfont breaks the line. Each heading plays when it
     scrolls into view; the first ones wait a beat for the page curtain.
     With JS off, or reduced motion, nothing is wrapped and nothing hides. */
  function splitWords(el) {
    var i = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = doc.createDocumentFragment();
          n.nodeValue.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(doc.createTextNode(' ')); return; }
            var w = doc.createElement('span');
            var inner = doc.createElement('span');
            w.className = 'kw';
            inner.className = 'kw-i';
            inner.style.setProperty('--i', String(i++));
            inner.textContent = part;
            w.appendChild(inner);
            frag.appendChild(w);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1 && n.tagName !== 'BR') {
          walk(n);
        }
      });
    })(el);
  }

  (function ktype() {
    if (window.__SLATE_SPA) return;
    var heads = doc.querySelectorAll('[data-ktype]');
    if (!heads.length) return;

    if (calm || !('IntersectionObserver' in window)) {
      each(heads, function (el) { el.classList.add('is-in'); });
      return;
    }

    each(heads, function (el) {
      if (el.getAttribute('data-kt') === 'on') return;
      splitWords(el);
      el.setAttribute('data-kt', 'on');
    });

    var ready = false;
    var pending = [];
    function show(el) { el.classList.add('is-in'); }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        if (ready) show(entry.target); else pending.push(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.01 });
    each(heads, function (el) { io.observe(el); });

    var started = false;
    function go() {
      if (started) return;
      started = true;
      window.setTimeout(function () {
        ready = true;
        pending.forEach(show);
        pending = [];
      }, 420);   /* lets the page curtain clear first */
    }
    if (doc.fonts && doc.fonts.ready && doc.fonts.ready.then) {
      doc.fonts.ready.then(go);
      window.setTimeout(go, 1200);
    } else {
      go();
    }
    /* never leave a headline hidden */
    window.setTimeout(function () { each(heads, show); }, 5000);
  })();


  /* ------------------------------------------------------------ 5. REVEAL */
  /* Blocks and images enter on the scroll. Elements that arrive in the same
     frame are staggered 90ms apart (an author's own --reveal-delay wins). */
  (function reveal() {
    if (window.__SLATE_SPA) return;
    var targets = doc.querySelectorAll('[data-reveal], .media--reveal');
    if (!targets.length) return;

    if (calm || !('IntersectionObserver' in window)) {
      each(targets, function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      var hits = entries.filter(function (e) { return e.isIntersecting; });
      hits.sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
      hits.forEach(function (entry, n) {
        var el = entry.target;
        var own = el.style.getPropertyValue('--reveal-delay');
        if (!own) {
          el.style.setProperty('--reveal-delay', (Math.min(n, 5) * 90) + 'ms');
          window.setTimeout(function () { el.style.removeProperty('--reveal-delay'); }, 2600);
        }
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    each(targets, function (el) { io.observe(el); });

    /* Safety net: anything still hidden after five seconds is shown. */
    window.setTimeout(function () {
      each(targets, function (el) { el.classList.add('is-in'); });
    }, 5000);
  })();


  /* ------------------------------------------------------------- 6. CLOCK */
  /* Lagos time in the hero title block. Lagos is UTC+1 with no daylight
     saving, but the zone is named rather than offset so it stays correct
     for a visitor in any timezone. */
  (function clock() {
    var nodes = doc.querySelectorAll('[data-clock]');
    if (!nodes.length) return;

    var fmt;
    try {
      fmt = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', hour12: false
      });
    } catch (e) { return; }

    function tick() {
      var t = fmt.format(new Date());
      each(nodes, function (n) { n.textContent = t; });
    }

    tick();
    window.setInterval(tick, 30000);
  })();


  /* ----------------------------------------------------------- 7. FILTERS */
  /* The portfolio's category chips. Rows are marked data-cat; filtering
     flips the [hidden] attribute, which the stylesheet makes authoritative
     so a class-based display rule cannot out-rank it. */
  (function filters() {
    var wrap = doc.querySelector('[data-filters]');
    var grid = doc.querySelector('[data-work-grid]');
    if (!wrap || !grid) return;
    var rows = grid.querySelectorAll('[data-cat]');
    if (!rows.length) return;
    var empty = doc.querySelector('[data-work-empty]');
    var count = doc.querySelector('[data-work-count]');
    var buttons = wrap.querySelectorAll('[data-filter]');

    function apply(cat) {
      var shown = 0;
      each(rows, function (r) {
        var ok = cat === 'all' || r.getAttribute('data-cat') === cat;
        r.hidden = !ok;
        if (ok) shown++;
      });
      each(buttons, function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === cat));
      });
      if (empty) empty.hidden = shown !== 0;
      if (count) count.textContent = shown + (shown === 1 ? ' project' : ' projects');
    }

    each(buttons, function (b) {
      on(b, 'click', function () { apply(b.getAttribute('data-filter')); });
    });

    apply('all');
  })();


  /* -------------------------------------------------------- hero rule draw */
  (function hero() {
    var hero = doc.querySelector('.hero');
    if (!hero || calm) return;
    window.requestAnimationFrame(function () { hero.classList.add('is-live'); });
  })();


  /* ------------------------------------------------------------ 8. MOTION */
  /* The Hello Monday layer. Every piece is skipped under reduced motion, and
     the pointer pieces only exist for a fine, hovering pointer. */
  if (calm) return;

  /* -- page curtain: leaving ---------------------------------------------- */
  /* Internal links drop the curtain, then navigate. Arrival is pure CSS
     (body::before/::after lift away), so there is no flash of the page. */
  (function curtain() {
    if (window.__SLATE_SPA) return;
    var layers = null;
    function clear() {
      if (!layers) return;
      layers.forEach(function (l) { if (l.parentNode) l.parentNode.removeChild(l); });
      layers = null;
    }
    on(window, 'pageshow', function (e) { if (e.persisted) clear(); });

    on(doc, 'click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      if (a.target && a.target !== '_self') return;
      if (a.hasAttribute('download')) return;
      if (a.protocol !== window.location.protocol || a.host !== window.location.host) return;
      if (a.protocol !== 'http:' && a.protocol !== 'https:' && a.protocol !== 'file:') return;
      /* same document (a hash on this page): let the browser scroll */
      if (a.pathname === window.location.pathname && a.search === window.location.search) return;

      e.preventDefault();
      if (layers) return;
      var href = a.href;
      layers = ['a', 'b'].map(function (k) {
        var d = doc.createElement('div');
        d.className = 'veil veil--' + k;
        d.setAttribute('aria-hidden', 'true');
        doc.body.appendChild(d);
        return d;
      });
      void layers[0].offsetWidth;
      layers.forEach(function (l) { l.classList.add('is-on'); });
      window.setTimeout(function () { window.location.href = href; }, 900);
      /* if navigation is cancelled or slow, never leave the curtain down */
      window.setTimeout(clear, 6000);
    });
  })();

  /* -- scroll-skewed headlines -------------------------------------------- */
  (function skew() {
    var heads = doc.querySelectorAll('[data-ktype]');
    if (!heads.length) return;
    var live = false;
    tick(function () {
      var k = clamp(S.v * 0.07, -2.5, 2.5);
      if (Math.abs(k) < 0.04) {
        if (live) { each(heads, function (h) { h.style.transform = ''; }); live = false; }
        return;
      }
      live = true;
      var t = 'skewY(' + k.toFixed(2) + 'deg)';
      each(heads, function (h) { h.style.transform = t; });
    });
  })();

  /* -- the band: speed and direction follow the scroll --------------------- */
  (function band() {
    var b = doc.querySelector('.band');
    var track = b && b.querySelector('.band__track');
    if (!track) return;
    b.classList.add('is-driven');

    var pos = 0, half = 0, hover = false;
    var dirS = new Spring(1, 40, 10);
    function measure() { half = track.scrollWidth / 2; }
    measure();
    on(window, 'resize', measure, { passive: true });
    if (doc.fonts && doc.fonts.ready && doc.fonts.ready.then) doc.fonts.ready.then(measure);
    on(b, 'mouseenter', function () { hover = true; });
    on(b, 'mouseleave', function () { hover = false; });

    tick(function (dt) {
      if (!half) return;
      dirS.t = S.dir;
      var d = dirS.step(dt);
      var speed = (hover ? 6 : 42) + Math.abs(S.v) * 34;
      pos -= d * speed * dt;
      if (pos <= -half) pos += half;
      if (pos > 0) pos -= half;
      var sk = clamp(-S.v * 0.22, -8, 8);
      track.style.transform = 'translate3d(' + pos.toFixed(2) + 'px,0,0) skewX(' + sk.toFixed(2) + 'deg)';
    });
  })();

  if (!fine) return;

  /* -- pointer blob: follows with lag, stretches along its direction ----------- */
  (function cursor() {
    var el = doc.createElement('div');
    el.className = 'cursor';
    el.setAttribute('aria-hidden', 'true');
    doc.body.appendChild(el);

    var mx = -100, my = -100, x = -100, y = -100, seen = false;
    on(doc, 'mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (!seen) { seen = true; x = mx; y = my; el.classList.add('is-on'); }
    }, { passive: true });
    on(doc, 'mouseout', function (e) { if (!e.relatedTarget) { el.classList.remove('is-on'); seen = false; } });
    on(doc, 'mousedown', function () { el.classList.add('is-down'); });
    on(doc, 'mouseup', function () { el.classList.remove('is-down'); });

    on(doc, 'mouseover', function (e) {
      var t = e.target;
      if (!t || !t.closest) return;
      el.classList.toggle('is-link', !!t.closest('a, button, [role="button"], summary, label, .row'));
      el.classList.toggle('is-media', !!t.closest('.media, .row__thumb'));
      el.classList.toggle('is-text', !!t.closest('input, textarea, select'));
      el.classList.toggle('is-hide', !!t.closest('.btn--primary'));
    });

    tick(function () {
      var dx = mx - x, dy = my - y;
      x += dx * 0.2; y += dy * 0.2;
      var sp = Math.min(Math.sqrt(dx * dx + dy * dy) / 70, 0.7);
      var ang = Math.atan2(dy, dx) * 180 / Math.PI;
      el.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) rotate(' +
        ang.toFixed(1) + 'deg) scale(' + (1 + sp).toFixed(3) + ',' + (1 - sp * 0.45).toFixed(3) + ')';
    });
  })();

  /* -- magnetic controls: pulled toward the pointer, springing back --------- */
  (function magnetic() {
    var items = [];
    each(doc.querySelectorAll('.btn, .burger, .sheet__close'), function (el) {
      var it = { el: el, x: new Spring(0, 200, 11), y: new Spring(0, 200, 11), on: false };
      items.push(it);
      on(el, 'mouseenter', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--bx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--by', (e.clientY - r.top) + 'px');
      });
      on(el, 'mousemove', function (e) {
        var r = el.getBoundingClientRect();
        it.x.t = (e.clientX - (r.left + r.width / 2)) * 0.32;
        it.y.t = (e.clientY - (r.top + r.height / 2)) * 0.4;
      });
      on(el, 'mouseleave', function () { it.x.t = 0; it.y.t = 0; });
    });
    tick(function (dt) {
      items.forEach(function (it) {
        var idle = it.x.t === 0 && it.y.t === 0 && it.x.rest() && it.y.rest();
        if (idle) { if (it.on) { it.el.style.translate = ''; it.on = false; } return; }
        it.on = true;
        it.el.style.translate = it.x.step(dt).toFixed(2) + 'px ' + it.y.step(dt).toFixed(2) + 'px';
      });
    });
  })();

  /* -- nav pill: one blob that slides between links on a spring --------------- */
  (function navPill() {
    var nav = doc.querySelector('.primary');
    var links = nav ? nav.querySelectorAll('.primary__list a') : [];
    if (!links.length) return;
    var blob = doc.createElement('span');
    blob.className = 'primary__blob';
    blob.setAttribute('aria-hidden', 'true');
    nav.appendChild(blob);
    root.classList.add('has-blob');

    var X = new Spring(0, 230, 17), Y = new Spring(0, 230, 17), W = new Spring(0, 230, 17);
    var shown = false, active = false;

    function aim(a) {
      var n = nav.getBoundingClientRect(), r = a.getBoundingClientRect();
      X.t = r.left - n.left + 4;
      W.t = Math.max(0, r.width - 8);
      Y.t = r.top - n.top + (r.height - 34) / 2;
      if (!shown) { X.x = X.t; W.x = W.t; Y.x = Y.t; X.v = W.v = Y.v = 0; }
      shown = true; active = true;
      blob.classList.add('is-on');
    }
    function hide() { blob.classList.remove('is-on'); shown = false; }

    each(links, function (a) {
      on(a, 'mouseenter', function () { aim(a); });
      on(a, 'focus', function () { aim(a); });
    });
    on(nav, 'mouseleave', hide);
    on(nav, 'focusout', hide);

    tick(function (dt) {
      if (!active) return;
      var x = X.step(dt), y = Y.step(dt), w = W.step(dt);
      var stretch = 1 + Math.min(Math.abs(X.v) / 2400, 0.22);
      blob.style.width = Math.max(0, w).toFixed(1) + 'px';
      blob.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) scaleY(' + (2 - stretch).toFixed(3) + ')';
      if (!shown && X.rest() && Y.rest() && W.rest()) active = false;
    });
  })();

  /* -- liquid images: a displacement wobble on hover ------------------------------ */
  /* One shared SVG filter. Entering or leaving a picture kicks a spring that
     drives the displacement scale, so the image ripples and settles. The filter
     is only attached while it is moving. */
  (function liquid() {
    var pairs = [];
    each(doc.querySelectorAll('.row'), function (row) {
      var img = row.querySelector('.row__thumb img');
      if (img) pairs.push([row, img]);
    });
    each(doc.querySelectorAll('.media'), function (m) {
      var img = m.querySelector('img');
      if (img) pairs.push([m, img]);
    });
    if (!pairs.length) return;

    doc.body.insertAdjacentHTML('beforeend',
      '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">' +
      '<filter id="slate-liquid" x="-6%" y="-6%" width="112%" height="112%" color-interpolation-filters="sRGB">' +
      '<feTurbulence type="fractalNoise" baseFrequency="0.008 0.014" numOctaves="2" seed="7" result="n"/>' +
      '<feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/>' +
      '</filter></svg>');
    var turb = doc.querySelector('#slate-liquid feTurbulence');
    var disp = doc.querySelector('#slate-liquid feDisplacementMap');
    if (!turb || !disp) return;

    var sp = new Spring(0, 120, 7);
    var cur = null, amp = 0, clock = 0;

    function kick(img, power) {
      if (cur && cur !== img) cur.style.filter = '';
      cur = img;
      amp = Math.min(46, img.getBoundingClientRect().width * 0.11);
      img.style.filter = 'url(#slate-liquid)';
      sp.v += amp * power;
    }
    pairs.forEach(function (p) {
      on(p[0], 'mouseenter', function () { kick(p[1], 13); });
      on(p[0], 'mouseleave', function () { kick(p[1], -8); });
    });

    tick(function (dt) {
      if (!cur) return;
      clock += dt;
      sp.step(dt);
      turb.setAttribute('baseFrequency', (0.008 + 0.003 * Math.sin(clock * 2.2)).toFixed(4) + ' ' + (0.014 + 0.004 * Math.cos(clock * 1.7)).toFixed(4));
      disp.setAttribute('scale', sp.x.toFixed(1));
      if (Math.abs(sp.x) < 0.3 && Math.abs(sp.v) < 1.5) {
        sp.x = 0; sp.v = 0;
        disp.setAttribute('scale', '0');
        cur.style.filter = '';
        cur = null;
      }
    });
  })();

})();
