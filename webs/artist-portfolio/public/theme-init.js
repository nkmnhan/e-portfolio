// Applies the saved color theme before first paint (no flash). Key must match THEME_STORAGE_KEY in @eportfolio/theme.
// An unknown id matches no [data-theme] block, so the :root default theme applies.
try {
  var savedTheme = localStorage.getItem("eportfolio-color-theme");
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
} catch (error) {
  // Storage unavailable — keep the default theme
}
