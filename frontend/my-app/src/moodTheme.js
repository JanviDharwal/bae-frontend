// Lightweight mood theme manager
export function initMood() {
  try {
    const mood = localStorage.getItem('detectedMood') || localStorage.getItem('mood') || 'neutral';
    applyBodyMood(mood);
  } catch (e) {
    // ignore
  }
}

export function setMood(mood) {
  try {
    localStorage.setItem('detectedMood', mood);
    applyBodyMood(mood);
    // dispatch event for other parts of the app
    window.dispatchEvent(new CustomEvent('moodchange', { detail: { mood } }));
  } catch (e) {
    // ignore
  }
}

function applyBodyMood(mood) {
  if (typeof document === 'undefined') return;
  document.body.classList.remove('mood-happy', 'mood-neutral', 'mood-sad');
  if (mood === 'happy') document.body.classList.add('mood-happy');
  else if (mood === 'sad') document.body.classList.add('mood-sad');
  else document.body.classList.add('mood-neutral');
}

export default { initMood, setMood };