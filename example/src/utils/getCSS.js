const getCSS = () => {
  return [...document.styleSheets]
  .map(styleSheet => {
    try {
      return [...styleSheet.cssRules]
        .map(rule => rule.cssText)
        .join('');
    } catch (e) {
      console.log('Access to stylesheet %s is denied. Ignoring...', styleSheet.href);
    }
  })
  .filter(Boolean)
  .join('\n');
}

export default getCSS
