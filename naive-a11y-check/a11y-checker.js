/**
 * Naive A11y Checker for Chrome Built-in AI APIs
 * Checks accessibility of images, icons, buttons, and fake buttons
 */

class A11yChecker {
    constructor() {
        this.issues = [];
        this.warnings = [];
        this.suggestions = [];
    }

    /**
     * Main function to check accessibility of the entire page
     */
    checkPageAccessibility() {
        this.issues = [];
        this.warnings = [];
        this.suggestions = [];

        console.log('🔍 Starting accessibility check...');
        
        this.checkImages();
        this.checkButtons();
        this.checkFakeButtons();
        this.checkIcons();
        this.checkColorContrast();
        this.checkKeyboardNavigation();
        
        return this.generateReport();
    }

    /**
     * Check images for accessibility issues
     */
    checkImages() {
        const images = document.querySelectorAll('img');
        
        images.forEach((img, index) => {
            const alt = img.getAttribute('alt');
            const src = img.src;
            
            // Check for missing alt text
            if (alt === null) {
                this.issues.push({
                    type: 'error',
                    element: 'img',
                    message: `Image missing alt attribute`,
                    element_info: `src: ${src}`,
                    suggestion: 'Add descriptive alt text or alt="" for decorative images'
                });
            }
            
            // Check for empty alt on non-decorative images
            if (alt === '' && !this.isDecorativeImage(img)) {
                this.warnings.push({
                    type: 'warning',
                    element: 'img',
                    message: `Image has empty alt text but may not be decorative`,
                    element_info: `src: ${src}`,
                    suggestion: 'Consider adding descriptive alt text if image conveys information'
                });
            }
            
            // Check for generic alt text
            if (alt && this.isGenericAltText(alt)) {
                this.warnings.push({
                    type: 'warning',
                    element: 'img',
                    message: `Image has generic alt text: "${alt}"`,
                    element_info: `src: ${src}`,
                    suggestion: 'Use more descriptive alt text that explains the image content'
                });
            }
        });
    }

    /**
     * Check buttons for accessibility issues
     */
    checkButtons() {
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach((button, index) => {
            const text = button.textContent.trim();
            const ariaLabel = button.getAttribute('aria-label');
            const ariaLabelledBy = button.getAttribute('aria-labelledby');
            
            // Check for missing accessible name
            if (!text && !ariaLabel && !ariaLabelledBy) {
                this.issues.push({
                    type: 'error',
                    element: 'button',
                    message: `Button has no accessible name`,
                    element_info: `class: ${button.className}`,
                    suggestion: 'Add text content, aria-label, or aria-labelledby attribute'
                });
            }
            
            // Check for generic button text
            if (text && this.isGenericButtonText(text)) {
                this.warnings.push({
                    type: 'warning',
                    element: 'button',
                    message: `Button has generic text: "${text}"`,
                    element_info: `class: ${button.className}`,
                    suggestion: 'Use more descriptive button text that explains the action'
                });
            }
            
            // Check if button is disabled but focusable
            if (button.disabled && button.tabIndex >= 0) {
                this.warnings.push({
                    type: 'warning',
                    element: 'button',
                    message: `Disabled button is still focusable`,
                    element_info: `text: ${text}`,
                    suggestion: 'Remove tabindex or set to -1 for disabled buttons'
                });
            }
        });
    }

    /**
     * Check fake buttons (divs, spans with click handlers)
     */
    checkFakeButtons() {
        const clickableElements = document.querySelectorAll('[onclick], [data-click]');
        
        clickableElements.forEach((element) => {
            if (element.tagName.toLowerCase() !== 'button' && 
                element.tagName.toLowerCase() !== 'a') {
                
                const role = element.getAttribute('role');
                const tabIndex = element.getAttribute('tabindex');
                const text = element.textContent.trim();
                
                // Check for missing button role
                if (role !== 'button') {
                    this.issues.push({
                        type: 'error',
                        element: element.tagName.toLowerCase(),
                        message: `Clickable element missing role="button"`,
                        element_info: `text: ${text}`,
                        suggestion: 'Add role="button" to clickable non-button elements'
                    });
                }
                
                // Check for missing tabindex
                if (tabIndex === null) {
                    this.issues.push({
                        type: 'error',
                        element: element.tagName.toLowerCase(),
                        message: `Clickable element not keyboard accessible`,
                        element_info: `text: ${text}`,
                        suggestion: 'Add tabindex="0" to make element keyboard accessible'
                    });
                }
                
                // Check for missing keyboard event handlers
                if (!this.hasKeyboardHandlers(element)) {
                    this.warnings.push({
                        type: 'warning',
                        element: element.tagName.toLowerCase(),
                        message: `Clickable element may not respond to keyboard`,
                        element_info: `text: ${text}`,
                        suggestion: 'Add keyboard event handlers (Enter/Space keys)'
                    });
                }
            }
        });
    }

    /**
     * Check icons for accessibility
     */
    checkIcons() {
        // Check for icon fonts and SVG icons
        const iconElements = document.querySelectorAll('[class*="icon"], [class*="fa-"], svg');
        
        iconElements.forEach((icon) => {
            const ariaHidden = icon.getAttribute('aria-hidden');
            const ariaLabel = icon.getAttribute('aria-label');
            const role = icon.getAttribute('role');
            const title = icon.querySelector('title');
            
            // Check if icon conveys information but lacks accessibility attributes
            if (!ariaHidden && !ariaLabel && !title && !role) {
                this.warnings.push({
                    type: 'warning',
                    element: icon.tagName.toLowerCase(),
                    message: `Icon may need accessibility attributes`,
                    element_info: `class: ${icon.className}`,
                    suggestion: 'Add aria-hidden="true" for decorative icons or aria-label for informative icons'
                });
            }
        });
    }

    /**
     * Basic color contrast check
     */
    checkColorContrast() {
        const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, button, a');
        
        textElements.forEach((element) => {
            const styles = window.getComputedStyle(element);
            const color = styles.color;
            const backgroundColor = styles.backgroundColor;
            
            // Simple check for very light text on light background or dark on dark
            if (this.isPotentialContrastIssue(color, backgroundColor)) {
                this.warnings.push({
                    type: 'warning',
                    element: element.tagName.toLowerCase(),
                    message: `Potential color contrast issue`,
                    element_info: `color: ${color}, background: ${backgroundColor}`,
                    suggestion: 'Verify color contrast meets WCAG guidelines (4.5:1 for normal text)'
                });
            }
        });
    }

    /**
     * Check keyboard navigation
     */
    checkKeyboardNavigation() {
        const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        // Check for skip links
        const skipLinks = document.querySelectorAll('a[href^="#"]');
        if (skipLinks.length === 0) {
            this.suggestions.push({
                type: 'suggestion',
                message: 'Consider adding skip navigation links',
                suggestion: 'Add "Skip to main content" link for keyboard users'
            });
        }
        
        // Check for focus indicators
        focusableElements.forEach((element) => {
            const styles = window.getComputedStyle(element, ':focus');
            if (styles.outline === 'none' && !styles.boxShadow && !styles.border) {
                this.warnings.push({
                    type: 'warning',
                    element: element.tagName.toLowerCase(),
                    message: `Element may lack visible focus indicator`,
                    element_info: `text: ${element.textContent.trim().substring(0, 30)}`,
                    suggestion: 'Ensure focus indicators are visible for keyboard navigation'
                });
            }
        });
    }

    /**
     * Helper methods
     */
    isDecorativeImage(img) {
        // Simple heuristic: check if image is in a decorative context
        const parent = img.parentElement;
        return parent && (
            parent.classList.contains('decoration') ||
            parent.classList.contains('background') ||
            img.classList.contains('decoration')
        );
    }

    isGenericAltText(alt) {
        const genericTerms = ['image', 'picture', 'photo', 'graphic', 'icon', 'logo'];
        return genericTerms.some(term => alt.toLowerCase().includes(term)) && alt.length < 20;
    }

    isGenericButtonText(text) {
        const genericTerms = ['click', 'button', 'here', 'link', 'more'];
        return genericTerms.includes(text.toLowerCase()) || text.length < 3;
    }

    hasKeyboardHandlers(element) {
        // Check if element has keyboard event listeners
        const events = ['onkeydown', 'onkeyup', 'onkeypress'];
        return events.some(event => element.getAttribute(event) !== null);
    }

    isPotentialContrastIssue(color, backgroundColor) {
        // Very basic contrast check - in real implementation, you'd calculate actual contrast ratios
        const isLightText = color.includes('rgb(255') || color.includes('#fff') || color.includes('white');
        const isLightBg = backgroundColor.includes('rgb(255') || backgroundColor.includes('#fff') || backgroundColor.includes('white');
        
        return (isLightText && isLightBg) || (!isLightText && !isLightBg && backgroundColor !== 'rgba(0, 0, 0, 0)');
    }

    /**
     * Generate accessibility report
     */
    generateReport() {
        const report = {
            summary: {
                total_issues: this.issues.length,
                total_warnings: this.warnings.length,
                total_suggestions: this.suggestions.length
            },
            issues: this.issues,
            warnings: this.warnings,
            suggestions: this.suggestions
        };

        console.log('📊 Accessibility Report:', report);
        return report;
    }

    /**
     * Display report in a user-friendly format
     */
    displayReport(containerId = 'a11y-report') {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Report container not found');
            return;
        }

        const report = this.generateReport();
        let html = `
            <div class="a11y-report">
                <h2>🔍 Accessibility Report</h2>
                <div class="summary">
                    <span class="errors">${report.summary.total_issues} Issues</span>
                    <span class="warnings">${report.summary.total_warnings} Warnings</span>
                    <span class="suggestions">${report.summary.total_suggestions} Suggestions</span>
                </div>
        `;

        // Add issues
        if (report.issues.length > 0) {
            html += '<h3>❌ Issues (Must Fix)</h3><ul>';
            report.issues.forEach(issue => {
                html += `<li><strong>${issue.message}</strong><br>
                         Element: ${issue.element} - ${issue.element_info}<br>
                         <em>Suggestion: ${issue.suggestion}</em></li>`;
            });
            html += '</ul>';
        }

        // Add warnings
        if (report.warnings.length > 0) {
            html += '<h3>⚠️ Warnings (Should Fix)</h3><ul>';
            report.warnings.forEach(warning => {
                html += `<li><strong>${warning.message}</strong><br>
                         Element: ${warning.element} - ${warning.element_info}<br>
                         <em>Suggestion: ${warning.suggestion}</em></li>`;
            });
            html += '</ul>';
        }

        // Add suggestions
        if (report.suggestions.length > 0) {
            html += '<h3>💡 Suggestions (Consider)</h3><ul>';
            report.suggestions.forEach(suggestion => {
                html += `<li><strong>${suggestion.message}</strong><br>
                         <em>${suggestion.suggestion}</em></li>`;
            });
            html += '</ul>';
        }

        html += '</div>';
        container.innerHTML = html;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = A11yChecker;
}

// Global instance for browser use
window.A11yChecker = A11yChecker;
