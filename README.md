# Our Story — a cinematic love story
**Run:** `npm install` then `npm run dev` (build: `npm run build`).

- **Edit the text:** `src/data/story.js`. One entry = one screen. Lines starting with `#` appear large. `scene` picks the illustration, `mood` the colour grade, `cta` adds a button.
- **Music:** drop your own file at `public/audio/story-music.mp3`. A small speaker button appears only if the file exists; it never autoplays.
- **Colours:** the four `[data-mood=…]` blocks at the top of `src/index.css`.
- **Illustrations:** SVG scenes in `src/components/CinematicScene.jsx`; the silhouettes in `CharacterIllustration.jsx`.
- **Controls:** the story plays itself. Tap / Space / → skips ahead, ← goes back. Reduced motion is respected.
- `src/sections/*` map each chapter to its slice of the story data.
