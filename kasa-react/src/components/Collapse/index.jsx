import { useState } from "react";
import './Collapse.sass'

function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse__item">
        <div className="collapse__title">
            <span>{title}</span>
            <button
                className={`collapse__icon ${open ? "open" : ""}`}
                onClick={() => setOpen(prev => !prev)}
                aria-expanded={open}
            />
        </div>
        <div className={`collapse__description ${open ? "open" : ""}`}>
            {children}
        </div>
    </div>
  );
}

export default Collapse;