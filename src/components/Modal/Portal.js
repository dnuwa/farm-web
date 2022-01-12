import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

let Portal = ({ children, portalId = 'md-root' }) => {
  let [container] = useState(document.createElement('div'));

  useEffect(() => {
    let modalRoot = document.getElementById(portalId);
    if (!modalRoot) {
      const moalRootEl = document.createElement('div');
      moalRootEl.id = portalId;
      document.body.append(moalRootEl);
      modalRoot = moalRootEl;
    }
    modalRoot.appendChild(container);
    return () => {
      modalRoot.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
};

export default Portal;
