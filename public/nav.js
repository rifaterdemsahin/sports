(function () {
  const PAGES = [
    { href: "./index.html", id: "home", label: "🏃 Home" },
    { href: "./schedule.html", id: "schedule", label: "📅 Schedule" },
    { href: "./locations.html", id: "locations", label: "📍 Locations" },
    { href: "./supplements.html", id: "supplements", label: "💊 Supplements" },
    { href: "./hypo.html", id: "hypo", label: "⚠️ Hypos" },
  ];

  const INDEX = [
    { title: "🏃 Home", href: "./index.html", text: "stay fit Rifat Erdem Sahin CB1 1BB Better Cambridge weekly plan agent" },
    { title: "📅 Week plan", href: "./schedule.html", text: "monday gym tuesday spin wednesday tennis thursday reading friday swim saturday tennis sunday walk creatine 06:30" },
    { title: "🏋️ Monday gym", href: "./schedule.html#mon", text: "strength parkside abbey 06:35 creatine snack" },
    { title: "🚴 Tuesday spin", href: "./schedule.html#tue", text: "spin class better app 06:35" },
    { title: "🎾 Wednesday tennis", href: "./schedule.html#wed", text: "christ's pieces clubspark 18:00" },
    { title: "🚄 Thursday Reading", href: "./schedule.html#thu", text: "reading travel walk mobility skip cambridge gym" },
    { title: "🏊 Friday swim", href: "./schedule.html#fri", text: "pool parkside table tennis optional" },
    { title: "🎾 Saturday tennis", href: "./schedule.html#sat", text: "christ's pieces weekend" },
    { title: "🚶 Sunday recovery", href: "./schedule.html#sun", text: "easy walk cambridge rest" },
    { title: "⚡ Creatine", href: "./supplements.html", text: "creatine 5g monohydrate daily breakfast water load 20g boost the day" },
    { title: "🔥 Calories", href: "./supplements.html", text: "bmr 1879 tdee 2912 stay-fit 2612 kcal protein macros mifflin" },
    { title: "💊 Supplements", href: "./supplements.html", text: "stack creatine snack water breakfast electrolytes" },
    { title: "🏋️ Parkside", href: "./locations.html#parkside", text: "parkside pools gym gonville place CB1 1LY 06:30 better" },
    { title: "🏋️ Abbey Leisure", href: "./locations.html#abbey", text: "abbey whitehill CB5 8NT pool gym spin" },
    { title: "🎾 Christ’s Pieces", href: "./locations.html#tennis", text: "christ pieces tennis emmanuel clubspark book pay" },
    { title: "🏓 Table tennis", href: "./locations.html#tt", text: "table tennis better court hire friday evening" },
    { title: "🚄 Reading", href: "./locations.html#reading", text: "thursday reading travel" },
    { title: "🚶 London walk", href: "./locations.html#london", text: "london work days walk before desk" },
    { title: "⚠️ Hypoglycaemia", href: "./hypo.html", text: "hypo glucose snack banana toast juice do not train fasted 15g carb" },
  ];

  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const current =
    file === "" || file === "/" ? "index.html" : file.endsWith(".html") ? file : "index.html";

  const host = document.getElementById("site-nav");
  if (!host) return;

  host.innerHTML = `
    <nav class="nav" aria-label="Site">
      <div class="nav-links">
        ${PAGES.map((p) => {
          const active = current === p.href.replace("./", "");
          return `<a href="${p.href}"${active ? ' aria-current="page"' : ""}>${p.label}</a>`;
        }).join("")}
      </div>
      <div class="nav-search">
        <label class="sr-only" for="site-search">Search</label>
        <input id="site-search" type="search" placeholder="🔍 Search pages…" autocomplete="off" />
        <ul id="site-search-results" class="search-results" hidden></ul>
      </div>
    </nav>
  `;

  const input = document.getElementById("site-search");
  const results = document.getElementById("site-search-results");

  function run(q) {
    const needle = q.trim().toLowerCase();
    if (!needle) {
      results.hidden = true;
      results.innerHTML = "";
      return;
    }
    const hits = INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(needle) || item.text.toLowerCase().includes(needle)
    ).slice(0, 8);
    if (!hits.length) {
      results.hidden = false;
      results.innerHTML = `<li class="empty">No matches for “${q.replace(/</g, "")}”</li>`;
      return;
    }
    results.hidden = false;
    results.innerHTML = hits
      .map((h) => `<li><a href="${h.href}">${h.title}</a></li>`)
      .join("");
  }

  input.addEventListener("input", () => run(input.value));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      input.value = "";
      run("");
    }
    if (e.key === "Enter") {
      const first = results.querySelector("a");
      if (first) {
        e.preventDefault();
        location.href = first.getAttribute("href");
      }
    }
  });
  document.addEventListener("click", (e) => {
    if (!host.contains(e.target)) {
      results.hidden = true;
    }
  });

  const params = new URLSearchParams(location.search);
  if (params.get("q")) {
    input.value = params.get("q");
    run(input.value);
  }
})();
