(function () {
  const KEY = "erdem-75-strong-days";
  const TARGET = 75;

  function todayKey() {
    const d = new Date();
    const z = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
  }

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {
      return [];
    }
  }

  function save(days) {
    localStorage.setItem(KEY, JSON.stringify(days));
  }

  function streak(days) {
    const set = new Set(days);
    let n = 0;
    const d = new Date();
    for (;;) {
      const z = (x) => String(x).padStart(2, "0");
      const k = `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
      if (!set.has(k)) break;
      n += 1;
      d.setDate(d.getDate() - 1);
    }
    return n;
  }

  const streakEl = document.getElementById("streak");
  const stateEl = document.getElementById("today-state");
  const mark = document.getElementById("mark-hour");
  const undo = document.getElementById("undo-hour");
  if (!streakEl) return;

  function render() {
    const days = load();
    const t = todayKey();
    const done = days.includes(t);
    const s = streak(days);
    streakEl.textContent = `🔥 ${days.length} / ${TARGET} hours logged · current streak ${s} day${s === 1 ? "" : "s"}`;
    stateEl.textContent = done
      ? "✅ Today’s hour is logged."
      : "⬜ Today’s hour not logged yet.";
    mark.disabled = done;
  }

  mark.addEventListener("click", () => {
    const days = load();
    const t = todayKey();
    if (!days.includes(t)) {
      days.push(t);
      save(days);
    }
    render();
  });
  undo.addEventListener("click", () => {
    save(load().filter((d) => d !== todayKey()));
    render();
  });
  render();
})();
