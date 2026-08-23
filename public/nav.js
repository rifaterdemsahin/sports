(function () {
  const PAGES = [
    { href: "./index.html", id: "home", label: "🏃 Home" },
    { href: "./schedule.html", id: "schedule", label: "📅 Schedule" },
    { href: "./strong.html", id: "strong", label: "💪 75 Strong" },
    { href: "./better.html", id: "better", label: "🏋️ Better" },
    { href: "./locations.html", id: "locations", label: "📍 Locations" },
    { href: "./supplements.html", id: "supplements", label: "💊 Supplements" },
    { href: "./sleep.html", id: "sleep", label: "😴 Sleep" },
    { href: "./hypo.html", id: "hypo", label: "⚠️ Hypos" },
    { href: "./sanity-check.html", id: "sanity-check", label: "🩺 Sanity Check" },
  ];

  const INDEX = [
    { title: "🏃 Home", href: "./index.html", text: "stay fit Rifat Erdem Sahin CB1 1BB Better Cambridge weekly plan agent" },
    { title: "🩺 Content Sanity Check", href: "./sanity-check.html", text: "sanity check content verification audit bmr tdee 75 strong hypo protocol feasibility does that make sense" },
    { title: "💪 75 Strong", href: "./strong.html", text: "one hour of sport a day 75 days strong not hard stay fit rule of thumb creatine fuel walk tennis gym" },
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
    { title: "💊 Supplements", href: "./supplements.html", text: "vault homeSupplements vitamin C D3 B complex magnesium k2 fish oil creatine" },
    { title: "🏠 Vault stack", href: "./supplements.html#vault", text: "vitamin C 1000 B complex multivitamin D3 calcium magnesium potassium k2 hemp fish oil turmeric greens collagen ginseng evoo ginkgo melatonin tryptophan fasting salts" },
    { title: "😴 Sleep", href: "./sleep.html", text: "sleep 22:00 05:45 parkside melatonin tryptophan magnesium hypo overnight 75 strong" },
    { title: "😴 Sleep supplements", href: "./sleep.html#stack", text: "tryptophan l-trotoplan melatonin gummies magnesium" },
    { title: "⛔ Stopped supplements", href: "./supplements.html#stopped", text: "keto electrolytes lions mane raspberry ketones" },
    { title: "🏋️ Better Cambridge", href: "./better.html", text: "better gll cambridge membership parkside abbey cherry hinton jesus green lido ice arena kings hedges splashpads" },
    { title: "🏋️ Parkside", href: "./better.html#parkside", text: "parkside pools gym gonville place CB1 1LY opening times monday friday 6.30am 10.00pm saturday sunday 8.00am 5.30pm better.org.uk/parksidepools" },
    { title: "🏋️ Abbey Leisure", href: "./better.html#abbey", text: "abbey whitehill CB5 8NT pool gym spin 06:30" },
    { title: "🏋️ Cherry Hinton", href: "./better.html#cherry", text: "cherry hinton village leisure colville CB1 9EJ gym badminton pickleball table tennis racquets" },
    { title: "🏊 Jesus Green Lido", href: "./better.html#lido", text: "jesus green lido outdoor pool chesterton CB4 3AX sauna" },
    { title: "⛸️ Ice Arena", href: "./better.html#ice", text: "cambridge ice arena newmarket road CB5 8AA skating" },
    { title: "🧒 Kings Hedges pool", href: "./better.html#kings", text: "kings hedges learner pool buchan street CB4 2XF" },
    { title: "👨‍👩‍👧 Splashpads", href: "./better.html#splash", text: "cambridge splashpads paddling abbey coleridge lammas sheep green" },
    { title: "🏋️ Parkside (travel)", href: "./locations.html#parkside", text: "parkside pools gym gonville place CB1 1LY 06:30 better" },
    { title: "🏋️ Abbey (travel)", href: "./locations.html#abbey", text: "abbey whitehill CB5 8NT pool gym spin" },
    { title: "🎾 Christ’s Pieces", href: "./locations.html#tennis", text: "christ pieces tennis emmanuel clubspark book pay" },
    { title: "🏓 Table tennis", href: "./locations.html#tt", text: "table tennis better court hire friday evening" },
    { title: "🚄 Reading", href: "./locations.html#reading", text: "thursday reading travel" },
    { title: "🚶 London walk", href: "./locations.html#london", text: "london work days walk before desk" },
    { title: "⚠️ Hypoglycaemia", href: "./hypo.html", text: "hypo glucose snack banana toast juice do not train fasted 15g carb" },
  ];

  const file = (location.pathname.replace(/\/$/, "").split("/").pop() || "index.html").toLowerCase();
  const slug = file.replace(/\.html$/, "") || "index";

  const host = document.getElementById("site-nav");
  if (!host) return;

  host.innerHTML = `
    <nav class="nav" aria-label="Site">
      <div class="nav-links">
        ${PAGES.map((p) => {
          const active = slug === p.id || slug === "index" && p.id === "home";
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
