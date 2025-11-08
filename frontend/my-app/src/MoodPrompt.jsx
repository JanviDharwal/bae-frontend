import React, { useRef, useState, useEffect } from 'react';
import './MoodPrompt.css';
import { setMood } from './moodTheme';

export default function MoodPrompt({ onAutoDetect, onManual, onClose }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [stream, setStream] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  async function startCamera() {
    try {
      const s = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = s;
        videoRef.current.muted = true;
        await videoRef.current.play().catch(() => {});
      }

      setStream(s);
      setCameraActive(true);
      setErrorMsg('');
    } catch (err) {
      console.error('Camera Error:', err);
      setErrorMsg('Camera Blocked or Unavailable');
      alert('Please allow webcam access in your browser settings.');
    }
  }

  function stopCamera() {
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
    }
    setStream(null);
    setCameraActive(false);
  }

  function fallbackMood() {
    if (videoRef.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0);
    }
    return 'neutral';
  }

  async function captureAndSend() {
    if (!videoRef.current || !canvasRef.current) return;

    setProcessing(true);
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const base64 = canvas.toDataURL('image/jpeg', 0.9);

    try {
      const res = await fetch('https://bae-bringing-aesthetics-to-emotions.onrender.com/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64 }),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      console.log('Server Response:', data);

      const mood = data?.mood || fallbackMood();
      setMood(mood);
      onAutoDetect?.(mood);
    } catch (err) {
      console.error('Error connecting to Flask backend:', err);
      const mood = fallbackMood();
      setMood(mood);
      onAutoDetect?.(mood);
    } finally {
      stopCamera();
      setProcessing(false);
      onClose?.();
    }
  }

  return (
    <div className="mood-backdrop">
      <div className="mood-panel">
        <h3>Detect Your Mood</h3>

        {/* Webcam */}
        <video ref={videoRef} className="mood-video" autoPlay playsInline muted />

        <div className="camera-actions">
          <button className="btn" onClick={captureAndSend} disabled={processing}>
            {processing ? 'Analyzing...' : 'Capture & Detect'}
          </button>
          <button className="btn" onClick={stopCamera}>Cancel</button>
        </div>

        {/* Manual mood option */}
        <button className="btn manual" onClick={onManual}>Choose Manually</button>
        <button className="close-x" onClick={onClose}>✖</button>

        {/* Hidden canvas for image capture */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />

        {errorMsg && <p className="error-text">{errorMsg}</p>}
      </div>
    </div>
  );
}
