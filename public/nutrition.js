/** Erdem: male, 17 Apr 1980, 183 cm, 96 kg. Mifflin–St Jeor. */
export const PROFILE = {
  name: "Rifat Erdem Sahin",
  sex: "male",
  dob: "1980-04-17",
  heightCm: 183,
  weightKg: 96,
};

export function ageYears(asOf = new Date()) {
  const dob = new Date(PROFILE.dob + "T00:00:00");
  let age = asOf.getFullYear() - dob.getFullYear();
  const m = asOf.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && asOf.getDate() < dob.getDate())) age -= 1;
  return age;
}

export function bmi() {
  const m = PROFILE.heightCm / 100;
  return PROFILE.weightKg / (m * m);
}

/** Mifflin–St Jeor BMR (kcal/day). */
export function bmrKcal(age = ageYears()) {
  const { weightKg, heightCm } = PROFILE;
  return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
}

export const ACTIVITY = {
  sedentary: { factor: 1.2, label: "Desk only" },
  light: { factor: 1.375, label: "1–3 sessions / week" },
  moderate: { factor: 1.55, label: "Erdem week (gym, spin, tennis, walks)" },
  active: { factor: 1.725, label: "Hard daily training" },
};

export function tdee(factor) {
  return Math.round(bmrKcal() * factor);
}

export function macros(kcal) {
  const proteinG = Math.round(1.8 * PROFILE.weightKg);
  const fatG = Math.round(0.8 * PROFILE.weightKg);
  const proteinKcal = proteinG * 4;
  const fatKcal = fatG * 9;
  const carbKcal = Math.max(kcal - proteinKcal - fatKcal, 0);
  const carbG = Math.round(carbKcal / 4);
  return { proteinG, fatG, carbG, kcal };
}

export function creatinePlan() {
  return {
    maintenanceG: 5,
    loadingG: 20,
    loadingDays: 5,
    waterExtraMl: 400,
    with: "breakfast carbs (toast / banana) after the 06:30 session, or with the pre-gym snack if you train later",
  };
}
