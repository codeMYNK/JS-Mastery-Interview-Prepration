// heavy.js
// Simulated "heavy" module. Exporting a function that does a CPU-ish task
// so you can observe when it's loaded and executed.

export function heavyComputation() {
  console.log('heavy.js: module evaluated — performing heavy computation');
  // Simulate some work (but keep it short so it's safe to run)
  const result = [];
  for (let i = 0; i < 1000000; i++) {
    if (i < 5) result.push(i);
  }
  return result;
}

export const description = 'Simulated heavy module for code-splitting examples.';
