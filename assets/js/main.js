/* =============================================================
   main.js  |  연구그룹 홈페이지
   내용은 전부 data.js 에서 옵니다.
   ============================================================= */
(function () {
  "use strict";

  var D = window.RG_DATA || {};
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var soft = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function dt(iso) {
    var s = String(iso == null ? "" : iso);
    if (/^\d{4}$/.test(s)) return s;
    if (/^\d{4}-\d{2}$/.test(s)) return s.replace("-", ".");
    var d = new Date(s);
    if (isNaN(d)) return s;
    return d.getFullYear() + "." + String(d.getMonth() + 1).padStart(2, "0") + "." + String(d.getDate()).padStart(2, "0");
  }
  function teamById(id) { return (D.teams || []).filter(function (t) { return t.id === id; })[0] || null; }
  function trackOf(m) {
    var t = teamById((m.teams || [])[0]);
    return t ? t.track : (m.side === "이공" ? "sci" : "hs");
  }
  var KCI = "KCI";
  function tally(key) {
    var pubs = D.publications || [], confs = D.conferences || [];
    if (key === "publications") return pubs.length;
    if (key === "publications:KCI") return pubs.filter(function (p) { return p.type === KCI; }).length;
    if (key === "publications:국제색인") return pubs.filter(function (p) { return p.type !== KCI; }).length;
    if (key === "presentations") return (D.presentations || []).length;
    if (key === "awards") return (D.awards || []).length;
    if (key === "conferences") return confs.length;
    if (key === "conferences:국제") return confs.filter(function (c) { return c.scope === "국제"; }).length;
    if (key === "conferences:국내") return confs.filter(function (c) { return c.scope === "국내"; }).length;
    return 0;
  }

  function nowYearIdx() {
    var t = Date.now(), k = -1;
    (D.roadmap || []).forEach(function (r, i) { if (t >= new Date(r.start).getTime()) k = i; });
    return k;
  }

  /* ---------- 헤더 ---------- */
  function initNav() {
    var b = $(".burger"), n = $(".gnb");
    if (b && n) {
      b.addEventListener("click", function () {
        var o = n.classList.toggle("open");
        b.setAttribute("aria-expanded", o ? "true" : "false");
      });
    }
    var here = location.pathname.split("/").pop() || "index.html";
    $$(".gnb a").forEach(function (a) {
      var h = (a.getAttribute("href") || "").split("/").pop().split("#")[0];
      if (h && h === here) a.classList.add("on");
    });
    var s = $("[data-stat]");
    if (s) {
      var i = nowYearIdx(), r = i >= 0 ? D.roadmap[i] : null;
      s.textContent = r ? r.year + " 진행 중" : "연구기간 " + (D.project ? D.project.period : "");
    }
    var y = $("[data-y]");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- 등장 ---------- */
  function initRise() {
    var n = $$(".rise");
    if (!n.length) return;
    if (soft || !("IntersectionObserver" in window)) { n.forEach(function (x) { x.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .1, rootMargin: "0px 0px -30px 0px" });
    n.forEach(function (x) { io.observe(x); });
  }

  /* ---------- 연구진 명부 ---------- */
  function rosterHTML(list) {
    return list.map(function (m, i) {
      var tk = trackOf(m);
      var tnames = (m.teams || []).map(function (id) {
        var t = teamById(id); return t ? t.name : id;
      }).join(", ");
      var duty = (m.duty || []).map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("");
      var flds = (m.fields || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");
      var id = "rd" + i;
      return '<button class="rrow" type="button" data-track="' + tk + '" aria-expanded="false" aria-controls="' + id + '">' +
          '<span class="rname">' +
            '<img class="rphoto" src="' + esc(m.photo) + '" alt="' + esc(m.name) + ' 교수" loading="lazy" width="120" height="120">' +
            "<span><b>" + esc(m.name) + '</b><i>' + esc(m.nameEn) + "</i></span>" +
          "</span>" +
          '<span class="rmid"><b>' + esc(m.affil) + " " + esc(m.dept) + " " + esc(m.title) + "</b>" +
            "<span>" + esc(m.role) + " / " + esc((m.fields || []).join(", ")) + "</span></span>" +
          '<span class="rtog" aria-hidden="true">+</span>' +
        "</button>" +
        '<div class="rdet" id="' + id + '" data-track="' + tk + '"><div class="rdet-in">' +
          "<div>" + esc(tnames) + "</div>" +
          "<div><p>" + esc(m.note) + "</p>" +
            '<div class="cols">' +
              "<div><h4>연구 분야</h4><ul>" + flds + "</ul></div>" +
              "<div><h4>역할 분담</h4><ul>" + duty + "</ul></div>" +
            "</div>" +
          "</div>" +
        "</div></div>";
    }).join("");
  }
  function bindRoster(root) {
    $$(".rrow", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var d = b.nextElementSibling;
        var o = b.getAttribute("aria-expanded") === "true";
        b.setAttribute("aria-expanded", o ? "false" : "true");
        if (d) d.classList.toggle("open", !o);
      });
    });
  }

  /* ---------- 논문 ---------- */
  function pubItem(p) {
    var hi = p.badge ? '<span class="tag hi">' + esc(p.badge) + "</span>" : "";
    var meta = [];
    if (p.authors) meta.push('<span class="au">' + esc(p.authors) + "</span>");
    meta.push("<span>" + esc(p.venue) + "</span>");
    if (p.metrics) meta.push('<span class="mt">' + esc(p.metrics) + "</span>");
    var abs = p.abstract
      ? "<p>" + esc(p.abstract) + "</p>"
      : '<p class="none">초록이 아직 등록되지 않았습니다.</p>';
    return '<article class="pitem">' +
      '<button class="phead" type="button" aria-expanded="false">' +
        "<span><span class='ptitle'>" + esc(p.title) + "</span>" +
          "<span class='pmeta'>" + meta.join("") + "</span></span>" +
        '<span class="pside">' + hi + '<span class="tag" data-t="' + esc(p.type) + '">' + esc(p.type) + "</span>" +
        '<span class="ptog" aria-hidden="true">+</span></span>' +
      "</button>" +
      '<div class="pabs"><div class="in"><h4>ABSTRACT / 연구개요</h4>' + abs + "</div></div>" +
    "</article>";
  }
  function pubHTML(list, grouped) {
    if (!list.length) return '<p class="noresult">조건에 맞는 논문이 없습니다. 검색어나 필터를 바꿔 보세요.</p>';
    if (!grouped) return '<div class="plist">' + list.map(pubItem).join("") + "</div>";
    var years = list.map(function (p) { return p.year; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
    return years.map(function (y) {
      var rows = list.filter(function (p) { return p.year === y; });
      return '<div class="yearmark"><b>' + y + "</b><span>" + rows.length + "편</span></div>" +
        '<div class="plist">' + rows.map(pubItem).join("") + "</div>";
    }).join("");
  }
  function presItem(p) {
    var hi = p.badge ? '<span class="tag hi">' + esc(p.badge) + "</span>" : "";
    var meta = ["<span>" + esc(p.venue) + "</span>", '<span class="mt">' + esc(p.when) + "</span>"];
    if (p.doi) meta.push('<span class="mt">DOI ' + esc(p.doi) + "</span>");
    return '<article class="pitem">' +
      '<button class="phead" type="button" aria-expanded="false">' +
        "<span><span class='ptitle'>" + esc(p.title) + "</span>" +
          "<span class='pmeta'>" + meta.join("") + "</span></span>" +
        '<span class="pside">' + hi + '<span class="ptog" aria-hidden="true">+</span></span>' +
      "</button>" +
      '<div class="pabs"><div class="in"><h4>연구개요</h4><p>' + esc(p.abstract) + "</p></div></div>" +
    "</article>";
  }
  function bindPubs(root) {
    $$(".phead", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var it = b.closest(".pitem");
        var o = it.classList.toggle("open");
        b.setAttribute("aria-expanded", o ? "true" : "false");
      });
    });
  }

  /* ---------- 학술대회 / 수상 ---------- */
  function confHTML(list) {
    if (!list.length) return '<p class="noresult">해당하는 발표가 없습니다.</p>';
    return '<ul class="clist">' + list.map(function (c) {
      return '<li data-track="' + (c.scope === "국제" ? "sci" : "hs") + '">' +
        '<span class="cscope">' + esc(c.scope) + "</span>" +
        "<span class='cmain'><b>" + esc(c.title) + "</b>" +
          "<span>" + esc(c.authors) + "</span></span>" +
        "<span class='cev'>" + esc(c.event) + (c.fusion ? " <em>융복합</em>" : "") + "</span>" +
        '<span class="cdate">' + dt(c.date) + "</span></li>";
    }).join("") + "</ul>";
  }
  function awardHTML(list) {
    return '<ul class="alist">' + list.map(function (a) {
      return "<li><span class='akind'>" + esc(a.kind) + "</span>" +
        "<span class='amain'><b>" + esc(a.title) + "</b>" +
        (a.who ? "<span>" + esc(a.who) + "</span>" : "") + "</span>" +
        "<span class='aorg'>" + esc(a.org) + "</span>" +
        "<span class='cdate'>" + esc(a.date) + "</span></li>";
    }).join("") + "</ul>";
  }

  /* ---------- 게시판 ---------- */
  function rowsHTML(list) {
    var tk = { "공지": "hs", "발표": "sci", "수상": "mix", "행사": "mix" };
    return list.map(function (n) {
      return '<button class="brow" type="button" data-id="' + esc(n.id) + '" data-track="' + (tk[n.cat] || "hs") + '">' +
        '<span class="bc">' + esc(n.cat) + "</span>" +
        '<span class="bt">' + esc(n.title) + "</span>" +
        '<span class="bd">' + dt(n.date) + "</span></button>";
    }).join("");
  }
  function bindRows(root) {
    $$(".brow", root).forEach(function (b) {
      b.addEventListener("click", function () { openNotice(b.getAttribute("data-id")); });
    });
  }
  function openNotice(id) {
    var n = (D.notices || []).filter(function (x) { return x.id === id; })[0];
    var m = $("[data-modal]");
    if (!n || !m) return;
    $("[data-mbody]").innerHTML = '<span class="c">' + esc(n.cat) + "</span><h3>" + esc(n.title) +
      '</h3><p class="d">' + dt(n.date) + "</p><p>" + esc(n.body) + "</p>";
    m.classList.add("on");
    document.body.style.overflow = "hidden";
    var c = $(".mclose", m); if (c) c.focus();
  }
  function initModal() {
    var m = $("[data-modal]");
    if (!m) return;
    function close() { m.classList.remove("on"); document.body.style.overflow = ""; }
    m.addEventListener("click", function (e) {
      if (e.target.closest(".mclose") || e.target.classList.contains("mback")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && m.classList.contains("on")) close();
    });
  }

  /* ---------- 홈 ---------- */
  function renderHome() {
    var P = D.project || {}, PL = D.pipeline || {};

    var tko = $("[data-title-ko]");
    if (tko) {
      var lead = P.titleKoLead;
      lead = (typeof lead === "string" ? [lead] : lead || []);
      tko.innerHTML = lead.map(function (t) {
        return '<span class="ln">' + esc(t) + " </span>";
      }).join("") + '<span class="tail">' + esc(P.titleKoTail) + "</span>";
    }
    var ten = $("[data-title-en]");
    if (ten) ten.textContent = P.titleEn;

    var f = $("[data-facts]");
    if (f) {
      f.innerHTML = [
        ["연구기간", P.period],
        ["과제번호", P.grantNo]
      ].map(function (x) { return "<span>" + esc(x[0]) + " <b>" + esc(x[1]) + "</b></span>"; }).join("");
    }

    var fi = $("[data-flow-in]");
    if (fi) {
      fi.innerHTML = (PL.inputs || []).map(function (x) {
        return '<li class="strip" data-track="' + esc(x.track) + '"><b>' + esc(x.name) + "</b><span>" + esc(x.note) + "</span></li>";
      }).join("");
    }
    var fm = $("[data-flow-mid]");
    if (fm) {
      fm.innerHTML = (PL.fusion || []).map(function (x) {
        return '<li class="strip" data-track="' + esc(x.track) + '"><b>' + esc(x.name) + "</b><span>" + esc(x.note) + "</span></li>";
      }).join("");
    }
    var fo = $("[data-flow-out]");
    if (fo) fo.innerHTML = (PL.outputs || []).map(function (x) { return "<li>" + esc(x.name) + "</li>"; }).join("");

    var ov = $("[data-intro]");
    if (ov && D.overview) {
      ov.innerHTML = D.overview.body.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
    }

    var ach = $("[data-ach]");
    if (ach && D.achievements) {
      ach.innerHTML = D.achievements.map(function (a) {
        var v = (a.n != null) ? a.n : tally(a.count);
        return '<div class="ach"><b class="m">' + v +
          (a.unit ? "<small>" + esc(a.unit) + "</small>" : "") + "</b>" +
          "<span>" + esc(a.label) + "</span>" +
          (a.goal ? "<i>" + esc(a.goal) + "</i>" : "") + "</div>";
      }).join("");
    }
    var an = $("[data-achnote]");
    if (an) {
      var t = {};
      (D.publications || []).forEach(function (p) { t[p.type] = (t[p.type] || 0) + 1; });
      var mix = Object.keys(t).sort().map(function (k) {
        return "<span>" + esc(k) + " <b>" + t[k] + "</b>편</span>";
      }).join("");
      an.innerHTML = "<span>게재논문 색인별</span>" + mix +
        '<span>주요 발표 <b>' + tally("presentations") + "</b>건</span>";
    }

    var tr = $("[data-teams]");
    if (tr) {
      var main = (D.teams || []).filter(function (t) { return t.track !== "mix"; });
      var br = (D.teams || []).filter(function (t) { return t.track === "mix"; })[0];
      tr.innerHTML = main.map(trackCard).join("") + (br ?
        '<article class="bridge" data-track="mix">' +
          '<div><span class="kind">' + esc(br.tag || "") + '</span><h3>' + esc(br.name) + "</h3></div>" +
          "<p>" + esc(br.desc) + "</p>" +
          '<div class="who">' + (br.members || []).map(function (n) { return "<span>" + esc(n) + "</span>"; }).join("") + "</div>" +
        "</article>" : "");
    }

    var ys = $("[data-years]");
    if (ys && D.roadmap) {
      var cur = nowYearIdx();
      ys.innerHTML = D.roadmap.map(function (r, i) {
        var c = i === cur ? "now" : (i < cur ? "done" : "");
        return '<div class="yr ' + c + '"><p class="t">' + esc(r.year) + "  " + esc(r.period.replace(/ /g, "")) + "</p>" +
          "<h4>" + esc(r.goal) + "</h4><p>" + (r.milestones || []).slice(0, 2).map(esc).join(", ") + "</p></div>";
      }).join("");
    }

    var sc = $("[data-schedule]");
    if (sc && D.schedule) {
      sc.innerHTML = (D.teams || []).map(function (t) {
        var rows = D.schedule.filter(function (s) { return s.team === t.id; });
        if (!rows.length) return "";
        return '<div class="schcol" data-track="' + esc(t.track) + '"><h4>' + esc(t.name) + "</h4><ul>" +
          rows.map(function (s) {
            return "<li><span class='p m'>" + esc(s.period) + "</span><span>" + esc(s.work) + "</span></li>";
          }).join("") + "</ul></div>";
      }).join("");
    }

    var rs = $("[data-roster]");
    if (rs) { rs.innerHTML = rosterHTML(D.members || []); bindRoster(rs); }

    renderFeatured();

    var tot = $("[data-total]");
    if (tot) {
      tot.innerHTML = "본 과제 게재논문 <b>" + (D.publications || []).length + "</b>편, 주요 발표 <b>" +
        (D.presentations || []).length + "</b>건, 학술대회 발표 <b>" + (D.conferences || []).length + "</b>건";
    }

    var all = (D.notices || []).slice().sort(function (a, b) { return b.date.localeCompare(a.date); });
    var b1 = $("[data-board1]"), b2 = $("[data-board2]");
    if (b1) { b1.innerHTML = rowsHTML(all.filter(function (n) { return n.cat === "공지" || n.cat === "행사"; }).slice(0, 4)); bindRows(b1); }
    if (b2) { b2.innerHTML = rowsHTML(all.filter(function (n) { return n.cat === "발표" || n.cat === "수상"; }).slice(0, 4)); bindRows(b2); }

    var og = $("[data-orgs]");
    if (og) {
      og.innerHTML = (D.institutions || []).map(function (o) {
        var art = o.logo
          ? '<img src="' + esc(o.logo) + '" alt="' + esc(o.name) + '" loading="lazy" data-h="' + (o.logoH || 26) + '">'
          : "<b>" + esc(o.name) + "</b>";
        return '<a class="org" href="' + esc(o.url) + '" target="_blank" rel="noopener">' +
          "<i>" + esc(o.role) + "</i>" + art +
          '<span class="sr-only">' + esc(o.name) + " 홈페이지로 이동</span></a>";
      }).join("");
      $$("img[data-h]", og).forEach(function (im) {
        im.style.setProperty("height", im.getAttribute("data-h") + "px");
      });
    }
  }

  function trackCard(t) {
    var kind = t.tag || "";
    var topics = (t.topics || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    return '<article class="track" data-track="' + esc(t.track) + '">' +
      '<span class="kind">' + kind + "</span><h3>" + esc(t.name) + "</h3><p>" + esc(t.desc) + "</p>" +
      (topics ? '<ul class="ttopics">' + topics + "</ul>" : "") +
      '<div class="who">' + (t.members || []).map(function (n) { return "<span>" + esc(n) + "</span>"; }).join("") + "</div>" +
    "</article>";
  }

  /* ---------- 연구진 페이지 ---------- */
  function renderMembers() {
    var tr = $("[data-teams-full]");
    if (tr) tr.innerHTML = (D.teams || []).map(trackCard).join("");

    var host = $("[data-members]");
    if (!host) return;
    var f = "all";
    var chips = $("[data-mfilter]");
    if (chips) {
      var opts = [{ id: "all", name: "전체" }].concat(D.teams || []);
      chips.innerHTML = opts.map(function (t) {
        return '<button class="chip" type="button" data-g="' + esc(t.id) + '" aria-pressed="' + (t.id === "all") + '">' + esc(t.name) + "</button>";
      }).join("");
      chips.addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (!b) return;
        f = b.getAttribute("data-g");
        $$("button", chips).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        paint();
      });
    }
    function paint() {
      var list = (D.members || []).filter(function (m) { return f === "all" || (m.teams || []).indexOf(f) > -1; });
      host.innerHTML = rosterHTML(list);
      bindRoster(host);
      var c = $("[data-mcount]");
      if (c) c.textContent = list.length;
    }
    paint();
  }

  /* ---------- 대표 논문 카드 ---------- */
  function renderFeatured() {
    var host = $("[data-featured]");
    if (!host) return;
    var pubs = D.publications || [];
    host.innerHTML = (D.featured || []).map(function (f) {
      var p = pubs.filter(function (x) { return x.id === f.id; })[0];
      if (!p) return "";
      var au = esc(p.authors || "");
      if (f.me && au.indexOf(esc(f.me)) > -1) au = au.split(esc(f.me)).join("<b>" + esc(f.me) + "</b>");
      var acts = "";
      if (f.doi) acts += '<a class="pbtn" href="' + esc(f.doi) + '" target="_blank" rel="noopener">DOI</a>';
      if (p.abstract) acts += '<button class="pbtn" type="button" data-abs aria-expanded="false">초록</button>';
      return '<article class="pcard">' +
          '<a class="pfig" href="' + esc(f.doi || "publications.html") + '"' + (f.doi ? ' target="_blank" rel="noopener"' : "") + '>' +
            '<img src="' + esc(f.thumb) + '" alt="' + esc(f.alt || "") + '" loading="lazy" width="900" height="600">' +
          "</a>" +
          '<div class="pbody">' +
            "<h3>" + esc(p.title) + "</h3>" +
            (au ? '<p class="pau">' + au + "</p>" : "") +
            '<p class="pven">' + esc(p.venue) +
              '<span class="tag" data-t="' + esc(p.type) + '">' + esc(p.type) + "</span></p>" +
            '<p class="pdesc">' + esc(f.note || "") + "</p>" +
            '<div class="pacts">' + acts + "</div>" +
            '<div class="pfull"><h4>ABSTRACT / 연구개요</h4><p>' + esc(p.abstract || "") + "</p></div>" +
          "</div>" +
        "</article>";
    }).join("");
    $$("[data-abs]", host).forEach(function (b) {
      b.addEventListener("click", function () {
        var box = $(".pfull", b.closest(".pcard"));
        var o = b.getAttribute("aria-expanded") === "true";
        b.setAttribute("aria-expanded", o ? "false" : "true");
        if (box) box.classList.toggle("open", !o);
      });
    });
  }

  /* ---------- 연구조원 ---------- */
  function renderAssistants() {
    var host = $("[data-assistants]");
    if (!host) return;
    var list = D.assistants || [];
    host.innerHTML = list.map(function (a) {
      return '<div class="asst" data-track="' + esc(a.track || "mix") + '">' +
          "<b>" + esc(a.name) + "</b>" +
          '<span class="ac">' + esc(a.course) + "</span>" +
          '<span class="aa">' + esc(a.affil) + (a.dept ? "<br>" + esc(a.dept) : "") + "</span>" +
        "</div>";
    }).join("");
    var c = $("[data-acount]");
    if (c) c.textContent = list.length;
  }

  /* ---------- 성과 페이지 ---------- */
  function renderPubs() {
    var host = $("[data-pubs]");
    if (!host) return;
    var all = (D.publications || []).slice();
    var st = { tab: "j", q: "", sort: "new" };

    var qs = new URLSearchParams(location.search);
    if (qs.get("tab")) st.tab = qs.get("tab");

    var tabs = $("[data-tabs]");
    if (tabs) {
      var defs = [
        { id: "j", label: "게재논문", n: all.length },
        { id: "t", label: "주요 발표", n: (D.presentations || []).length },
        { id: "c", label: "학술대회 발표", n: (D.conferences || []).length },
        { id: "a", label: "수상", n: (D.awards || []).length }
      ];
      tabs.innerHTML = defs.map(function (d) {
        return '<button class="tab" type="button" data-tab="' + d.id + '" aria-pressed="' + (d.id === st.tab) + '">' +
          esc(d.label) + '<span class="m">' + d.n + "</span></button>";
      }).join("");
      tabs.addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (!b) return;
        st.tab = b.getAttribute("data-tab");
        $$("button", tabs).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        run();
      });
    }

    var inQ = $("[data-q]"), selS = $("[data-sort]");

    function match(text) {
      var q = st.q.trim().toLowerCase();
      return !q || text.toLowerCase().indexOf(q) > -1;
    }

    function run() {
      var tools = $("[data-jtools]");
      if (tools) tools.style.display = st.tab === "j" ? "" : "none";
      var out, n;

      if (st.tab === "j") {
        out = all.filter(function (p) {
          return match(p.title + " " + p.authors + " " + p.venue + " " + p.year + " " + p.abstract);
        });
        out.sort(function (a, b) {
          if (st.sort === "old") return a.year - b.year || a.title.localeCompare(b.title, "ko");
          if (st.sort === "title") return a.title.localeCompare(b.title, "ko");
          return b.year - a.year || a.title.localeCompare(b.title, "ko");
        });
        host.innerHTML = pubHTML(out, st.sort !== "title");
        bindPubs(host);
        n = out.length;
      } else if (st.tab === "t") {
        out = (D.presentations || []).filter(function (p) { return match(p.title + " " + p.venue + " " + p.when + " " + p.abstract); });
        host.innerHTML = out.length ? '<div class="plist">' + out.map(presItem).join("") + "</div>"
          : '<p class="noresult">조건에 맞는 발표가 없습니다.</p>';
        bindPubs(host);
        n = out.length;
      } else if (st.tab === "c") {
        out = (D.conferences || []).filter(function (c) {
          return match(c.title + " " + c.authors + " " + c.event);
        });
        out.sort(function (a, b) { return st.sort === "old" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date); });
        host.innerHTML = confHTML(out);
        n = out.length;
      } else {
        out = (D.awards || []).filter(function (a) { return match(a.title + " " + a.org + " " + a.who); });
        host.innerHTML = awardHTML(out);
        n = out.length;
      }

      var c = $("[data-count]");
      if (c) c.innerHTML = "검색 결과 <b>" + n + "</b>건";
      var ex = $("[data-expand]");
      if (ex) {
        ex.style.display = (st.tab === "j" || st.tab === "t") ? "" : "none";
        ex.setAttribute("data-open", "0");
        ex.textContent = "초록 모두 펼치기";
      }
    }

    if (inQ) inQ.addEventListener("input", function () { st.q = this.value; run(); });
    if (selS) selS.addEventListener("change", function () { st.sort = this.value; run(); });

    var ex = $("[data-expand]");
    if (ex) {
      ex.addEventListener("click", function () {
        var open = ex.getAttribute("data-open") === "1";
        $$(".pitem", host).forEach(function (it) {
          it.classList.toggle("open", !open);
          var b = $(".phead", it);
          if (b) b.setAttribute("aria-expanded", !open ? "true" : "false");
        });
        ex.setAttribute("data-open", open ? "0" : "1");
        ex.textContent = open ? "초록 모두 펼치기" : "초록 모두 접기";
      });
    }
    var rs = $("[data-reset]");
    if (rs) {
      rs.addEventListener("click", function () {
        st.q = ""; st.sort = "new";
        if (inQ) inQ.value = "";
        if (selS) selS.value = "new";
        run();
      });
    }
    run();
  }

  /* ---------- 소식 페이지 ---------- */
  function renderNews() {
    var host = $("[data-news]");
    if (!host) return;
    var all = (D.notices || []).slice().sort(function (a, b) { return b.date.localeCompare(a.date); });
    var per = 6, page = 1, cat = "all";

    var chips = $("[data-nfilter]");
    if (chips) {
      var cats = ["all"].concat(all.map(function (n) { return n.cat; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));
      chips.innerHTML = cats.map(function (c) {
        return '<button class="chip" type="button" data-c="' + esc(c) + '" aria-pressed="' + (c === "all") + '">' + (c === "all" ? "전체" : esc(c)) + "</button>";
      }).join("");
      chips.addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (!b) return;
        cat = b.getAttribute("data-c"); page = 1;
        $$("button", chips).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        paint();
      });
    }
    function paint() {
      var rows = all.filter(function (n) { return cat === "all" || n.cat === cat; });
      var pages = Math.max(1, Math.ceil(rows.length / per));
      page = Math.min(page, pages);
      host.innerHTML = rows.length ? rowsHTML(rows.slice((page - 1) * per, page * per)) : '<p class="noresult">등록된 글이 없습니다.</p>';
      bindRows(host);
      var c = $("[data-ncount]");
      if (c) c.innerHTML = "전체 <b>" + rows.length + "</b>건";
      var pg = $("[data-pager]");
      if (pg) {
        var h = '<button type="button" data-p="' + (page - 1) + '"' + (page === 1 ? " disabled" : "") + ">&lsaquo;</button>";
        for (var i = 1; i <= pages; i++) h += '<button type="button" data-p="' + i + '" aria-current="' + (i === page) + '">' + i + "</button>";
        h += '<button type="button" data-p="' + (page + 1) + '"' + (page === pages ? " disabled" : "") + ">&rsaquo;</button>";
        pg.innerHTML = h;
        $$("button", pg).forEach(function (b) {
          b.addEventListener("click", function () {
            var p = parseInt(b.getAttribute("data-p"), 10);
            if (p >= 1 && p <= pages) {
              page = p; paint();
              window.scrollTo({ top: host.offsetTop - 110, behavior: soft ? "auto" : "smooth" });
            }
          });
        });
      }
    }
    paint();
  }

  /* ---------- 시작 ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initModal();
    var p = document.body.getAttribute("data-page");
    if (p === "home" || p === "all") renderHome();
    if (p === "members" || p === "all") { renderMembers(); renderAssistants(); }
    if (p === "pubs" || p === "all") renderPubs();
    if (p === "news" || p === "all") renderNews();
    initRise();
  });
})();
