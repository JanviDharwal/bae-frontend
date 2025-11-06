import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Upload.css';
import UploadOverlay from './UploadOverlay.jsx';

// Local asset constants (mirror MCP asset filenames)
const imgVector = '/assets/9c4d4fecde8bbb47dac2042c0cc8097f98689bfe.svg';
const imgVector1 = '/assets/aa8113c3608f11d810c2acaa131b0589de150c21.svg';
const imgVector2 = '/assets/3cc1f735931e5da6bfd57bb8ece20157fad1081b.svg';
const imgVector3 = '/assets/3ec4793b0a15827ee9013d0101c10712d18fe10b.svg';
const imgVector4 = '/assets/8a85d1f36f3fd124d9c7b70fbbf1bd30106a5d27.svg';
const imgVector5 = '/assets/a4254035704ca4d77626f1fe461e1eb5e1b62776.svg';
const imgVector6 = '/assets/0b527db1477ba4957eb19bcaae0cce0b9090221f.svg';
const imgVector7 = '/assets/a42b3f01952e5f4808162f1b2b9f559d8cc031e1.svg';
const imgVector8 = '/assets/2ebf00638e65b29f1f37e9479adaea6867dd6da7.svg';
const imgVector9 = '/assets/8302556ae5e3212c963832c665581ecab0299176.svg';
const imgVector10 = '/assets/bedd1b6881feb4615222a688c022a61c137c4a24.svg';
const imgVector11 = '/assets/7258ddd3791dffc2840c77eac791f460941ab2fe.svg';
const imgVector12 = '/assets/8baa62f3fc784bb280918b2acc5282abc3016548.svg';
const imgVector13 = '/assets/5446c014b9931d71ae4e9096fdc559f81b6c53d5.svg';
const imgVector14 = '/assets/148dfa664fecec553521e509d57a8884f7b6c798.svg';
const imgVector15 = '/assets/d79a20db0e71d8c3ee5b73013ef1b43ef3af394f.svg';
const imgVector16 = '/assets/c9e9ad59313f1ce8cea0749b6a3ce9622432234d.svg';
const imgVector17 = '/assets/1f1fa6178f79d7de48bb2e1ae56c45a2bd052945.svg';
const imgVector18 = '/assets/82e3cfca6e9f5761ae00c497dea556975a781a71.svg';
const imgVector19 = '/assets/bc0f45f06fb22743170fb2da5a248f0d423d85a6.svg';
const imgVector20 = '/assets/35ca9b595fb964c94b264f5a134082caf3e8b39c.svg';
const imgVector21 = '/assets/172f13c20d649eb4fe6ed0f4bc922b95520dfa87.svg';
const imgVector22 = '/assets/536fca2bcdd06e2f027c29e58f9af59495418900.svg';
const imgVector23 = '/assets/c279e7b308722ff6a9033e4b9866b8b552b722d7.svg';
const imgVector24 = '/assets/36d08f8ad7fa7b62df35d36651aef70c1c2feb7e.svg';
const imgVector25 = '/assets/2aeb414740f0d81bd7fc6b0a891e8d00de1ca05b.svg';
const imgVector26 = '/assets/c7096ef18360152bc331f2b2f96e836129a13e59.svg';
const imgVector27 = '/assets/a608a05509910d6ff50e17a195e1bcfdd9bc4314.svg';

export default function Upload() {
  const fileInputRef = useRef(null);
  const [uploaded, setUploaded] = useState(null); // { file, preview }
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    return () => {
      if (uploaded && uploaded.preview) URL.revokeObjectURL(uploaded.preview);
    };
  }, [uploaded]);

  function openFilePicker() {
    fileInputRef.current?.click();
  }

  function handleFiles(files) {
    if (!files || files.length === 0) return;
    const file = files[0];
    const preview = URL.createObjectURL(file);
    setUploaded({ file, preview });
    setShowOverlay(true);
  }

  function onInputChange(e) {
    handleFiles(e.target.files);
  }

  function onDrop(e) {
    e.preventDefault();
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length) handleFiles(dt.files);
  }

  function onDragOver(e) { e.preventDefault(); }

  function handleOverlayAdd(itemData) {
    // Persist to localStorage as a lightweight demo (wardrobeItems)
    const existing = JSON.parse(localStorage.getItem('wardrobeItems') || '[]');
    const record = {
      id: Date.now(),
      name: itemData.name || uploaded?.file?.name || 'Unnamed',
      categories: itemData.categories || [],
      notes: itemData.notes || '',
      preview: uploaded?.preview || null,
    };
    existing.unshift(record);
    localStorage.setItem('wardrobeItems', JSON.stringify(existing));
    setShowOverlay(false);
    // keep preview so user can still see; revoke only on unmount
  }

  function handleOverlayClose() {
    setShowOverlay(false);
  }

  return (
    <div className="upload-root">
      <div className="page-grad" />

      <div className="upload-inner">
        <aside className="upload-sidebar">
          <div className="brand">
            <div className="logo">BAE</div>
            <div className="tag">Bringing aesthetic to emotion</div>
          </div>

          <nav className="menu">
            <Link to="/dashboard" className="menu-item">Home</Link>
            <Link to="/profile" className="menu-item">Profile</Link>
            <Link to="/wardrobe" className="menu-item">Wardrobe</Link>
            <Link to="/favorites" className="menu-item">Favorites</Link>
            <Link to="/generator" className="menu-item">Outfit Generator</Link>
            <Link to="/upload" className="menu-item active">Upload Clothes</Link>
          </nav>

          <Link to="/profile" className="guest">
            <div className="guest-avatar" />
            <div className="guest-meta">
              <div className="guest-name">Guest User</div>
              <div className="guest-link">View Profile</div>
            </div>
          </Link>
        </aside>

        <main className="upload-main">
          <div className="page-header">
            <h1>Upload Clothes</h1>
            <p className="lead">Add new items to your wardrobe</p>
          </div>

          <section className="drop-area">
            <div className="drop-card">
              <div className="drop-inner">
                <div className="upload-icon" />
                <h2>Drop your images here</h2>
                <p className="muted">or click to browse from your computer</p>
                <button className="choose-btn" onClick={openFilePicker} aria-haspopup="dialog">Choose Files</button>
                <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={onInputChange} />
                {/* drag/drop handlers on drop-card container */}
              </div>
            </div>

            <div className="pro-tip">
              <h4>Pro Tip</h4>
              <p>Take photos against a plain background for best results with auto background removal</p>
            </div>
          </section>
        </main>
      </div>

      {/* Decorative background vectors positioned like the Figma frame */}
      <div className="bg-lines">
        <img src={imgVector} alt="bg" />
        <img src={imgVector1} alt="bg" />
        <img src={imgVector2} alt="bg" />
        <img src={imgVector3} alt="bg" />
        <img src={imgVector4} alt="bg" />
        <img src={imgVector5} alt="bg" />
      </div>
      {showOverlay && uploaded && (
        <UploadOverlay
          file={uploaded}
          onClose={handleOverlayClose}
          onAdd={handleOverlayAdd}
        />
      )}
    </div>
  );
}