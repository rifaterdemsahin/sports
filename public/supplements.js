import {
  ageYears,
  bmi,
  bmrKcal,
  ACTIVITY,
  tdee,
  macros,
  PROFILE,
} from "./nutrition.js";

const age = ageYears();
const bmr = bmrKcal(age);
const bmiVal = bmi();

document.getElementById("bmi").textContent = bmiVal.toFixed(1);

const rows = [
  { key: "sedentary", note: "Office-only / sick day" },
  { key: "light", note: "Reading Thursday / London walk only" },
  { key: "moderate", note: "⭐ Your normal week — use this" },
  { key: "active", note: "Two-a-day or long tennis" },
];

const maintain = tdee(ACTIVITY.moderate.factor);
const stayFit = Math.round(maintain - 300);

document.getElementById("kcal-row").innerHTML = `
  <div class="kcal-chip">🛌 BMR <strong>${Math.round(bmr)}</strong> kcal</div>
  <div class="kcal-chip accent">⚖️ Maintain (moderate) <strong>${maintain}</strong> kcal</div>
  <div class="kcal-chip warn">🎯 Stay-fit target <strong>${stayFit}</strong> kcal</div>
`;

document.getElementById("kcal-body").innerHTML = rows
  .map(({ key, note }) => {
    const a = ACTIVITY[key];
    const kcal = tdee(a.factor);
    return `<tr><td>${key}</td><td>× ${a.factor} · ${a.label}</td><td><strong>${kcal}</strong></td><td>${note}</td></tr>`;
  })
  .join("");

document.getElementById("formula").textContent =
  `BMR = 10×${PROFILE.weightKg} + 6.25×${PROFILE.heightCm} − 5×${age} + 5 = ${bmr.toFixed(0)} kcal  ·  BMI = ${PROFILE.weightKg} / (1.83²) = ${bmiVal.toFixed(1)}`;

const m = macros(stayFit);
document.getElementById("macros").innerHTML = `
  <li>🥩 Protein <strong>${m.proteinG} g</strong> (1.8 g/kg) — ~${m.proteinG * 4} kcal</li>
  <li>🥑 Fat <strong>${m.fatG} g</strong> (0.8 g/kg) — ~${m.fatG * 9} kcal</li>
  <li>🍞 Carbs <strong>${m.carbG} g</strong> — rest of ${stayFit} kcal (protect hypos)</li>
  <li>⚡ Creatine <strong>5 g</strong> — not in the calorie count</li>
`;
