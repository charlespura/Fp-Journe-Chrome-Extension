# F.P. Journe Chrome Extension

A beautiful, interactive Chrome extension featuring an F.P. Journe-inspired mechanical watch with titanium fingers that display the hour through hand gestures and a sweeping red minute hand.

## Features

- **Real-time analog display** with separate hour and minute hands
- **Titanium fingers** that form different gestures for each hour (1-12)
- **Sweeping red minute hand** with smooth continuous movement
- **Small date window** at 4:30 position
- **Digital time display** with power reserve indicator
- **Luxury watch aesthetic** with radial gradient dial and metallic accents

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the folder containing these files
6. The F.P. Journe icon will appear in your extensions bar

## Files Structure
fp-journe-extension/
├── manifest.json # Extension configuration
├── popup.html # Main watch interface
├── popup.js # Watch logic and time handling
└── styles.css # All styling and animations



## How It Works

- **Minute Hand**: Red arrow rotates 6° per minute with smooth sweep
- **Hour Hand**: Titanium fingers rotate 30° per hour + 0.5° per minute
- **Finger Gestures**: Different finger combinations appear for each hour:
  - 1h: Index finger
  - 2h: Victory sign
  - 3h: Three fingers
  - 4h: Four fingers
  - 5h: Open hand
  - 6h: Thumb only
  - 7h: Thumb + index
  - 8h: Thumb + two fingers
  - 9h: Thumb + three fingers
  - 10h: Four fingers (no thumb)
  - 11h: Pinky only
  - 12h: Thumb + pinky

## Usage

Click the extension icon in Chrome's toolbar to open the watch popup. The time updates automatically and displays:

- Current hour (via finger gestures)
- Current minute (via red arrow)
- Digital time display
- Current date (day and month)

## Technical Details

- Built with Manifest V3
- Pure CSS with Google Fonts (Cinzel)
- No external dependencies
- Updates every 100ms for smooth animation
- Responsive design within 400x520px popup

## License

Free for personal and commercial use.

---

*F.P. Journe style tribute · Invenit et Fecit*