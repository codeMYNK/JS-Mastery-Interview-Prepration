// app.js
// Demonstrates code-splitting via dynamic import (lazy loading) in the browser.
// Usage: include this from an HTML file with: <script type="module" src="./app.js"></script>

// Create a simple button to trigger loading the heavy module on demand
const btn = document.createElement('button');
btn.textContent = 'Load heavy module (dynamic import)';
btn.style.fontSize = '16px';
btn.style.padding = '8px 12px';
document.body.appendChild(btn);

btn.addEventListener('click', async () => {
  btn.disabled = true;
  btn.textContent = 'Loading...';

  // Dynamic import is a code-splitting boundary: heavy.js won't be fetched
  // by the browser until this line runs. In bundlers like webpack, this
  // produces a separate chunk for `heavy.js`.
  try {
    const mod = await import('./heavy.js');
    const out = mod.heavyComputation();
    console.log('heavyComputation result:', out);
    btn.textContent = 'Loaded — check console';
  } catch (err) {
    console.error('Failed to load heavy module:', err);
    btn.textContent = 'Load failed';
  }
});

// Helpful note for study:
// - Open the browser DevTools Network tab and click the button: you'll see
//   a separate request for `heavy.js` (or a chunk file emitted by your bundler).
// - This demonstrates how dynamic import lets you split rarely-used code
//   away from the initial bundle, improving initial load time.
