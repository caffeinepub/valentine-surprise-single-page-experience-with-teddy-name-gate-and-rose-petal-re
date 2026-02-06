# Specification

## Summary
**Goal:** Enhance the reveal (second) screen with a Bengali love shayari section, a gentle teddy animation, and a more celebratory “page open” rose/petal animation start—while preserving the existing dreamy Valentine aesthetic and two-state flow.

**Planned changes:**
- Add a dedicated Bengali (Bangla script) shayari block directly under the existing “You are my Valentine ❤️” headline, styled to match the current romantic/glassmorphic look and remain responsive/legible on small screens.
- Add a teddy visual element on the reveal screen with a subtle animation (e.g., sway/bounce) positioned so it complements the layout without covering text or interfering with interactions.
- Update the reveal-screen rose/petal animation to include an initial “reveal burst” moment when the screen becomes visible, then return to the existing gentle continuous falling behavior (with pointer-events disabled and no runaway timers/loops).

**User-visible outcome:** On opening the reveal screen, users see an initial celebratory petal/rose burst, a clearly readable Bengali love shayari beneath the main headline, and a cute gently-animated teddy that fits the existing dreamy Valentine theme on both mobile and desktop.
