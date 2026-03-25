# StructIQ Pipeline Visualization - PRD

## Original Problem Statement
Build a single-page React application that serves as an interactive, animated presentation for a hackathon demo video. The presenter presses RIGHT ARROW key (or click anywhere) to advance through 7 steps (0-6). LEFT ARROW goes back. Each step has smooth Framer Motion animations. Blueprint/retro-technical aesthetic with sepia/cream grid paper background.

## User Personas
- **Primary**: Hackathon presenter standing in front of TV displaying the app in full-screen Chrome
- **Secondary**: Hackathon judges watching the demo

## Core Requirements (Static)
- Full viewport (100vw x 100vh), no scrolling, 1920x1080 target
- Blueprint grid background (#F5F0E1 with #D4C9A8 grid lines)
- Ink-dark elements (#2C2C2C)
- Inter font for headings, JetBrains Mono for technical text
- Semantic accent colors: red (rejected), green (selected), blue (zone), amber (in-progress)
- Arrow key + click navigation
- Smooth Framer Motion animations
- Step counter + watermark on all steps

## What's Been Implemented (Jan 2026)
- ✅ Step 0: Title Card - "StructIQ" with subtitle
- ✅ Step 1: Raw Input - Video icon + 96-frame grid with wave animation
- ✅ Step 2: Smart Frame Selection - Filtering animation (75 fade, 21 survive)
- ✅ Step 3: Spatial Context Problem - "?" reveal with punchline text
- ✅ Step 4: QR Zone Detection - 3 color-coded zones with typing animation
- ✅ Step 5: VLM Analysis - Brain element + output cards pipeline
- ✅ Step 6: Evidence Not Trust - Dashboard mockup with closing statement
- ✅ Keyboard navigation (ArrowRight/ArrowLeft/Space)
- ✅ Click-to-advance functionality
- ✅ Step counter (bottom-left)
- ✅ StructIQ watermark (bottom-right)
- ✅ Blueprint grid background on all steps

## Prioritized Backlog
### P0 (Critical) - COMPLETE
All core functionality implemented and tested.

### P1 (Important)
- None remaining

### P2 (Nice to Have)
- Custom cursor for presentation mode
- Progress bar indicator
- Touch/swipe support for tablet presentations

## Next Tasks
1. Ready for production use
2. Consider adding presenter notes/timer feature
3. Optional: Export to static HTML for offline use
