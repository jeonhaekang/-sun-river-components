export const TOOLTIP_BLACK_FONT_COLOR = ["white", "gray1", "gray2"];

export const TOOLTIP_DIRECTION = ["top", "bottom"] as const;

export const TOOLTIP_ANCHOR = ["left", "center", "right"] as const;

export const TOOLTIP_DEFAULT = {
  color: "black",
  direction: "bottom",
  anchor: "center"
} as const;
