import { useState } from "react";

function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse-item">
        <div className="collapse-about-title">
            <span>{title}</span>
            <button
                className={`collapse-about-icon ${open ? "open" : ""}`}
                onClick={() => setOpen(prev => !prev)}
                aria-expanded={open}
            />
        </div>
        {open && (
            <div className='collapse-about-description'>
                {children}
            </div>
        )}
    </div>
  );
}

export default Collapse;