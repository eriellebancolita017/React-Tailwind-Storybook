export const Color = {
  background: {
    base: "bg-surface-base-light dark:bg-surface-base-dark",
    overlay: "bg-surface-overlay-light dark:bg-surface-overlay-dark",
    alt: "bg-surface-alt-light dark:bg-surface-alt-dark",
    div: "bg-surface-div-light dark:bg-surface-base-dark",
    altLight: "bg-surface-alt-light",
    altDark: "bg-surface-alt-dark",
  },
  action: {
    hover: "hover:bg-action-hover-light dark:hover:bg-action-hover-dark",
    selected: "focus:bg-action-hover-light dark:focus:bg-action-hover-dark",
  },
  text: {
    primary: "text-content-primary-light dark:text-content-primary-dark",
    secondary: "text-content-secondary-light dark:text-content-secondary-dark",
    tetriary: "text-content-tetriary-light dark:text-content-tetriary-dark",
    primaryDark: "text-content-primary-dark",
    tetriaryLight: "text-content-tetriary-light",
  },
  support: {
    accent: "bg-accent-light dark:bg-accent-dark",
    success: "bg-success-light dark:bg-success-dark",
    error: "bg-error-light dark:bg-error-dark",
    progress: "bg-progress-light dark:bg-progress-dark",
  },
  ring: {
    divider: "ring-surface-divider-light dark:ring-surface-divider-dark",
    primary: "ring-content-primary-light dark:ring-content-primary-dark",
    accent: "ring-accent-light dark:ring-accent-dark",
    rightDivider: "ring-surface-divider-light"
  },
  icon: "custom",
};

export const Size = {
  general: { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" },
  icon: {
    xs: "extraSmall",
    sm: "small",
    md: "medium",
    lg: "large",
  },
};

export const badgeType = {
  background: {
    surface: "bg-surface-alt-light dark:bg-surface-alt-dark",
    warning: "bg-warning-ten-light dark:bg-warning-ten-dark",
    success: "bg-success-ten-light dark:bg-success-ten-dark"
  },
  text: {
    surface: "text-content-primary-light dark:text-content-primary-dark",
    warning: "text-content-warning-light dark:text-content-warning-dark",
    success: "text-content-success-light dark:text-content-success-dark"
  },
  icon: {
    surface: "text-content-secondary-light dark:text-content-secondary-dark",
    warning: "text-content-warning-light dark:text-content-warning-dark",
    success: "text-content-success-light dark:text-content-success-dark"
  }
}
