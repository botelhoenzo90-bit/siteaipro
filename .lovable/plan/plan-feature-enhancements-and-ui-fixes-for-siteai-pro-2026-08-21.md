# Plan: Feature Enhancements and UI Fixes for SiteAI Pro

This plan addresses user requests for a pricing calculator, design modernizations, fixing the "struck through" title, and providing guidance on publishing.

## User Requests
- Fix "struck through" (riscado) title on landing page.
- Add Pricing Calculator (calculadora de precificação).
- Modernize design further.
- Guidance on how to publish.

## Proposed Changes

### 1. Fix Landing Page Title
- Inspect and fix the `gradient-brand` implementation in `src/routes/index.tsx`. 
- Ensure `bg-clip-text` works correctly by ensuring `text-transparent` is applied consistently and checking for conflicting styles.

### 2. Implement Pricing Calculator
- Create a new route `src/routes/_authenticated.pricing-calculator.tsx`.
- Build a calculator where users can input project details (number of pages, complexity, features) and see a recommended price for their clients.
- Add a link to this calculator in the authenticated sidebar (`src/routes/_authenticated.tsx`).

### 3. Modernize Design
- Add subtle background patterns/gradients to `src/routes/index.tsx` and `src/routes/_authenticated.tsx`.
- Enhance cards with better hover effects and shadows using standard Tailwind v4 utilities.

### 4. Technical Details & Security
- The Pricing Calculator will be a client-side tool initially.
- Ensure all new components follow the existing dark-themed OKLCH design system.

### 5. Publishing Guidance
- Inform the user that the "Publish" button is located in the bottom actions bar of the Lovable editor.

## Implementation Steps

1. **Update `src/routes/index.tsx`**: Fix the title gradient and add a Pricing Calculator preview section.
2. **Update `src/routes/_authenticated.tsx`**: Add "Calculadora" to the sidebar.
3. **Create `src/routes/_authenticated.pricing-calculator.tsx`**: Implement the calculator logic and UI.
4. **Update `src/styles.css`**: Add any necessary global helpers for the modernized design if needed.
