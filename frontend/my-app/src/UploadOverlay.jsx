import React, { useState } from 'react';
import './UploadOverlay.css';

export default function UploadOverlay({ file, onClose, onAdd }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [cat1, setCat1] = useState('');
  const [cat2, setCat2] = useState('');
  const [cat3, setCat3] = useState('');

  function submit(e) {
    e.preventDefault();
    const payload = {
      name: name.trim(),
      category,
      categories: [cat1, cat2, cat3].filter(Boolean),
      notes: '',
    };
    onAdd(payload);
  }

  return (
    <div className="upload-overlay-backdrop" role="dialog" aria-modal="true">
      <div className="overlay-panel">
        <div className="overlay-header">
          <h3>Item Details</h3>
          <button className="overlay-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <form className="overlay-form" onSubmit={submit}>
          <div className="row two-cols">
            <div className="field">
              <label className="label">Item Name</label>
              <input className="input" value={name} onChange={e => setName(e.target.value)} placeholder="e.g., Blue Denim Jacket" />
            </div>

            <div className="field">
              <label className="label">Category</label>
              <input className="input" value={category} onChange={e => setCategory(e.target.value)} placeholder="e.g., Outerwear" />
            </div>
          </div>

          <div className="field">
            <label className="label">Category 1</label>
            <input className="input" value={cat1} onChange={e => setCat1(e.target.value)} placeholder="e.g., casual" />
          </div>

          <div className="field">
            <label className="label">Category 2</label>
            <input className="input" value={cat2} onChange={e => setCat2(e.target.value)} placeholder="e.g., summer" />
          </div>

          <div className="field">
            <label className="label">Category 3</label>
            <input className="input" value={cat3} onChange={e => setCat3(e.target.value)} placeholder="e.g., comfortable" />
          </div>

          <div className="overlay-actions">
            <button type="submit" className="add-btn">Add to Wardrobe</button>
          </div>
        </form>
      </div>
    </div>
  );
}