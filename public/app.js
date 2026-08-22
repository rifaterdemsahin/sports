const WEEK = [
  { day: "Mon", title: "🏋️ Better gym — strength", meta: "⚡ creatine 5 g + snack · 06:35–07:25 · Parkside or Abbey" },
  { day: "Tue", title: "🚴 Spin class", meta: "⚡ creatine 5 g · 06:35–07:20 · Better app · easy gear if glucose dips" },
  { day: "Wed", title: "🎾 Tennis · Christ’s Pieces", meta: "18:00–19:15 · ClubSpark · ⚡ creatine with breakfast" },
  { day: "Thu", title: "🚄 Reading travel day", meta: "⚡ creatine + 🚶 06:45 walk 20–30 min · skip heavy gym" },
  { day: "Fri", title: "🏊 Pool swim", meta: "⚡ creatine · 06:35–07:20 easy · 🏓 table tennis optional evening" },
  { day: "Sat", title: "🎾 Tennis · Christ’s Pieces", meta: "10:00–11:15 · social / match · ⚡ creatine with breakfast" },
  { day: "Sun", title: "🚶 Recovery walk", meta: "09:00–09:45 · Cambridge easy · rest if tired · still take creatine" },
];

const weekEl = document.getElementById("week");
if (weekEl) {
  const ids = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  weekEl.innerHTML = WEEK.map(
    (w, i) =>
      `<li id="${ids[i]}"><span class="day">${w.day}</span><div><strong>${w.title}</strong><div class="meta">${w.meta}</div></div></li>`
  ).join("");
}

const chat = document.getElementById("chat");
function say(role, text) {
  if (!chat) return;
  const p = document.createElement("p");
  p.className = `msg ${role}`;
  p.textContent = (role === "user" ? "You: " : "Agent: ") + text;
  chat.appendChild(p);
  chat.scrollTop = chat.scrollHeight;
}
if (chat) {
  say("agent", "⚡ Creatine 5 g every morning with food. 🔥 Stay-fit target ~2,612 kcal (BMR ~1,879 × 1.55, then −300). 🏋️ Gym from 06:30. 🚄 Thursday is Reading — walk only.");
}

function answer(q) {
  const s = q.toLowerCase();
  if (s.includes("hypo") || s.includes("glucose") || s.includes("sugar") || s.includes("snack")) {
    return "Do not train fasted. 15–30 min before: banana, toast, or juice. Carry glucose. If you feel shaky, stop and take 15–20 g fast carb. Morning sessions stay under an hour so you can eat breakfast after.";
  }
  if (s.includes("thursday") || s.includes("reading")) {
    return "Thursday is Reading travel. Skip the 06:30 Cambridge gym. Walk 20–30 minutes and do mobility. If a Better centre is next to your Reading stop, a light gym is fine — no heavy legs before the train home.";
  }
  if (s.includes("london") || s.includes("walk")) {
    return "On London days, walk from station/hotel to work before you sit. 25–40 minutes, easy pace. If you already did tennis or gym the evening before, keep it a walk only.";
  }
  if (s.includes("tennis") || s.includes("christ")) {
    return "Christ’s Pieces courts must be reserved and paid on ClubSpark (Emmanuel Rd). Wednesday evening and Saturday morning are on the calendar. Warm up 10–15 min; stop if you feel hypo.";
  }
  if (s.includes("spin") || s.includes("gym") || s.includes("pool") || s.includes("better") || s.includes("abbey") || s.includes("parkside")) {
    return "Parkside (CB1 1LY): Mon–Fri 6.30am–10.00pm, Sat–Sun 8.00am–5.30pm. better.org.uk/parksidepools. Abbey (CB5 8NT) also 06:30 weekdays. Book gym/swim/spin in the Better UK app.";
  }
  if (s.includes("table")) {
    return "🏓 Table tennis is optional — Friday evening when you feel good. Better memberships often include one racquet-court booking per week. Keep it social, not a third hard session.";
  }
  if (s.includes("creatine") || s.includes("supplement") || s.includes("vitamin") || s.includes("vault")) {
    return "🏠 Jun 2025 vault (homeSupplements.md): C 1000, B-complex, multi, D3, Ca/Mg/K, extra Mg 2 caps, K2, hemp oil, fish oil, turmeric, greens, collagen greens (3 servings), potassium tabs, Siberian ginseng, EVOO 1 tbsp/meal, salad. You only: ginkgo, Brain Focus. Sleep: tryptophan, melatonin. As needed: fasting salts. Stopped: keto electrolytes, Lion’s Mane. Sport layer: ⚡ creatine 5 g with food. Not medical advice.";
  }
  if (s.includes("sleep") || s.includes("melatonin") || s.includes("tryptophan") || s.includes("bed")) {
    return "😴 Lights out ~22:00 so you can hit Parkside at 6.30am. Vault sleep: L-Tryptophan (L-Trotoplan) and melatonin gummies. Don’t go to bed empty (hypos). See the Sleep page.";
  }
  if (s.includes("strong") || s.includes("75") || s.includes("hour") || s.includes("rule of thumb")) {
    return "💪 75 Strong: one hour of sport every day for 75 days. Not 75 Hard (no two-a-days, no restart). Travel walks count. Fuel first. Log the hour on the 75 Strong page.";
  }
  if (s.includes("calorie") || s.includes("kcal") || s.includes("tdee") || s.includes("eat") || s.includes("macro")) {
    return "🔥 BMR ≈ 1,879 kcal (Mifflin–St Jeor). Moderate week TDEE ≈ 2,912. Stay-fit target ≈ 2,612 kcal (~300 deficit). Protein ~173 g, fat ~77 g, carbs fill the rest so hypos stay rare.";
  }
  return "Stay-fit week: 🏋️ Mon gym, 🚴 Tue spin, 🎾 Wed tennis, 🚄 Thu Reading walk, 🏊 Fri swim (+ 🏓 optional), 🎾 Sat tennis, 🚶 Sun recovery. ⚡ Creatine 5 g daily. Fuel before every session because of hypoglycaemia.";
}

const ask = document.getElementById("ask");
if (ask) {
  ask.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = e.target.q.value.trim();
    if (!q) return;
    say("user", q);
    say("agent", answer(q));
    e.target.reset();
  });
}
