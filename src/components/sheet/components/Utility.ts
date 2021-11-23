export const basicThrust = (ST: number): string => {
  let value = ST;

  if (ST < 19) {
    const modifier = 6 - Math.round((value - 1) / 2);
    return `1d-${modifier || ""}`;
  }

  value -= 11;

  if (ST > 50) {
    value--;

    if (ST > 79) {
      value -= 1 + Math.round((ST - 80) / 5);
    }
  }

  const modifier = Math.round((value % 8) / 2) - 1;

  return `${Math.round(value / 8) + 1}d${modifier || ""}`;
};

export const basicSwing = (ST: number): string => {
  let value = ST;

  if (ST < 10) {
    const modifier = 6 - Math.round((value - 1) / 2);

    return `1d-${modifier || ""}`;
  }

  if (ST < 28) {
    value -= 9;

    const modifier = Math.round(value % 4) - 1;

    return `${Math.round(value / 4) + 1}d${modifier || ""}`;
  }

  if (ST > 40) {
    value -= Math.round((ST - 40) / 5);
  }

  if (ST > 59) {
    value++;
  }

  value += 9;

  const modifier = Math.round((value % 8) / 2) - 1;

  return `${Math.round(value / 8) + 1}d${modifier || ""}`;
};

export const hpThresholds = (
  curr: number,
  max: number
): { value: string; toolTip?: string } => {
  if (curr <= max * -5) {
    return { value: "Dead" };
  }
  if (curr <= max * -1) {
    return {
      value: "Dying",
      toolTip: `Roll vs. HT to avoid death.\nRoll vs. HT${Math.round(
        curr / max
      )} every second to avoid falling unconscious.\nMove and Dodge are halved (B419)`,
    };
  }
  if (curr <= 0) {
    return {
      value: "Collapsed",
      toolTip:
        "Roll vs. HT every second to avoid falling unconscious\nMove and Dodge are halved (B419)",
    };
  }
  if (curr <= Math.round(max / 3)) {
    return { value: "Reeling", toolTip: "Move and Dodge are halved (B419)" };
  }
  if (curr < max) {
    return { value: "Wounded" };
  }
  return { value: "Healthy" };
};

export const fpThresholds = (
  curr: number,
  max: number
): { value: string; toolTip?: string } => {
  if (curr <= max * -1) {
    return {
      value: "Unconscious",
    };
  }
  if (curr <= 0) {
    return {
      value: "Collapse",
      toolTip:
        "Roll vs. Will to do anything besides talk or rest; failure causes unconsciousness\nEach FP you lose below 0 also causes 1 HP of injury\nMove, Dodge and ST are halved (B426)",
    };
  }
  if (curr <= Math.round(max / 3)) {
    return { value: "Tired", toolTip: "Move and Dodge are halved (B419)" };
  }
  if (curr < max) {
    return { value: "Tiring" };
  }
  return { value: "Rested" };
};

export const encumbranceLoad: { [key: number]: number } = {
  0: 1,
  1: 2,
  2: 3,
  3: 6,
  4: 10,
};
