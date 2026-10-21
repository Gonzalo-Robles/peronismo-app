export const colors = {
  bg: "#F4F7FB",
  surface: "#FFFFFF",
  deep: "#1B3A6B",
  deep2: "#2A5298",
  sky: "#75AADB",
  skySoft: "#E3F0FB",
  gold: "#F5B301",
  goldSoft: "#FFF4D6",
  text: "#16233B",
  muted: "#6B7A93",
  white: "#FFFFFF",
  ok: "#2FA36B",
  okSoft: "#E2F5EA",
  bad: "#E05252",
  badSoft: "#FBE4E4",
  border: "#E3E9F2",
};

export const spacing = (n: number) => n * 4;

export const type = {
  title: {
    fontSize: 32,
    fontWeight: "800" as const,
    letterSpacing: -0.8,
    lineHeight: 38,
    color: colors.white,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700" as const,
    letterSpacing: -0.3,
    lineHeight: 26,
    color: colors.text,
  },
  body: {
    fontSize: 16,
    lineHeight: 23,
    color: colors.text,
  },
  caption: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.muted,
  },
  label: {
    fontSize: 12,
    fontWeight: "700" as const,
    letterSpacing: 0.3,
    textTransform: "uppercase" as const,
    color: colors.muted,
  },
  stat: {
    fontSize: 40,
    fontWeight: "800" as const,
    letterSpacing: -1,
    lineHeight: 46,
    fontVariant: ["tabular-nums"] as const,
    color: colors.text,
  },
};
