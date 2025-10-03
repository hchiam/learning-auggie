# Naive A11y Checker

A JavaScript accessibility checker designed to work with Chrome Built-in AI APIs. This tool performs basic accessibility audits on web pages, focusing on images, icons, buttons, and interactive elements.

## Features

### 🖼️ Image Accessibility
- Detects missing `alt` attributes
- Identifies empty alt text on non-decorative images
- Flags generic alt text (e.g., "image", "picture")
- Suggests improvements for better image accessibility

### 🔘 Button Accessibility
- Checks for missing accessible names
- Identifies generic button text (e.g., "click", "here")
- Detects disabled buttons that are still focusable
- Validates proper button semantics

### 🎭 Fake Button Detection
- Finds clickable elements that aren't proper buttons
- Checks for missing `role="button"` attributes
- Validates keyboard accessibility (`tabindex`)
- Detects missing keyboard event handlers

### 🎨 Icon Accessibility
- Identifies icons missing accessibility attributes
- Suggests `aria-hidden="true"` for decorative icons
- Recommends `aria-label` for informative icons
- Checks SVG and icon font accessibility

### 🎨 Color Contrast
- Basic color contrast validation
- Identifies potential contrast issues
- Suggests WCAG compliance improvements

### ⌨️ Keyboard Navigation
- Checks for focus indicators
- Suggests skip navigation links
- Validates keyboard accessibility patterns

## Usage

### Basic Usage

```javascript
// Create a new checker instance
const checker = new A11yChecker();

// Run accessibility check on the current page
const report = checker.checkPageAccessibility();

// Display results in a container
checker.displayReport('report-container-id');
```

### Advanced Usage

```javascript
// Create checker and run individual checks
const checker = new A11yChecker();

// Run specific checks
checker.checkImages();
checker.checkButtons();
checker.checkFakeButtons();
checker.checkIcons();
checker.checkColorContrast();
checker.checkKeyboardNavigation();

// Get detailed report
const report = checker.generateReport();
console.log(report);
```

## Report Structure

The checker returns a comprehensive report with three categories:

### Issues (Must Fix) ❌
Critical accessibility problems that prevent users from accessing content:
- Missing alt attributes on images
- Buttons without accessible names
- Clickable elements missing proper roles

### Warnings (Should Fix) ⚠️
Accessibility concerns that may impact user experience:
- Generic alt text or button labels
- Potential color contrast issues
- Missing focus indicators

### Suggestions (Consider) 💡
Recommendations for improved accessibility:
- Adding skip navigation links
- Enhancing descriptive text
- Improving semantic markup

## Integration with Chrome Built-in AI APIs

This checker is designed to complement Chrome's built-in AI APIs by:

1. **Preprocessing content** before AI analysis
2. **Identifying accessibility gaps** that AI might miss
3. **Providing structured feedback** for AI-powered improvements
4. **Enabling automated accessibility** in AI workflows

### Example Integration

```javascript
// Check accessibility before AI processing
const checker = new A11yChecker();
const a11yReport = checker.checkPageAccessibility();

// Use Chrome's AI APIs for enhanced analysis
if (window.ai && window.ai.summarizer) {
    const summarizer = await window.ai.summarizer.create();
    const accessibilitySummary = await summarizer.summarize(
        `Accessibility issues found: ${JSON.stringify(a11yReport)}`
    );
}
```

## Demo

Open `demo.html` in a Chrome browser to see the checker in action. The demo includes:

- ✅ **Good examples** of accessible content
- ❌ **Bad examples** with common accessibility issues
- 📊 **Live reporting** of found issues
- 🔍 **Interactive testing** capabilities

## Installation

1. Include the JavaScript file in your HTML:
```html
<script src="a11y-checker.js"></script>
```

2. Create a container for the report:
```html
<div id="a11y-report"></div>
```

3. Run the checker:
```javascript
const checker = new A11yChecker();
checker.checkPageAccessibility();
checker.displayReport('a11y-report');
```

## Browser Support

- **Chrome/Chromium**: Full support
- **Firefox**: Core functionality
- **Safari**: Core functionality
- **Edge**: Full support

## Limitations

This is a "naive" checker with intentional limitations:

- **Basic contrast calculation** (not full WCAG compliance)
- **Simple heuristics** for detecting issues
- **No complex ARIA validation**
- **Limited screen reader simulation**

For production accessibility testing, use comprehensive tools like:
- axe-core
- WAVE
- Lighthouse accessibility audit
- Manual testing with screen readers

## Contributing

This tool is designed for learning and experimentation with Chrome's AI APIs. Feel free to:

1. Add new accessibility checks
2. Improve detection algorithms
3. Enhance AI integration features
4. Expand browser compatibility

## License

MIT License - See LICENSE file for details.

## Related Projects

- [Chrome Built-in AI APIs Demo](../chrome-built-in-ai-apis/)
- [Learning Auggie CLI](../)

---

**Note**: This checker provides basic accessibility validation. Always combine automated testing with manual testing and real user feedback for comprehensive accessibility compliance.
