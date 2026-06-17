import { useState } from "react";
import './Collapse.css'

function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse-item">
        <div className="collapse-title">
            <span>{title}</span>
            <button
                className={`collapse-icon ${open ? "open" : ""}`}
                onClick={() => setOpen(prev => !prev)}
                aria-expanded={open}
            />
        </div>
        <div className={`collapse-description ${open ? "open" : ""}`}>
            {children}
        </div>
    </div>
  );
}

export default Collapse;