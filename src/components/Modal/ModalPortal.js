import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';

import Portal from './Portal';
export { Modal } from './Modal';

const ModalPortal = forwardRef(({ children, modalId, trackOut = true, open: controlledOpen = false }, ref) => {
  let containerRef = useRef();

  let [open, setOpen] = useState(controlledOpen);

  useImperativeHandle(ref, () => ({
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
    open,
  }));

  useEffect(() => {
    if (controlledOpen !== open) {
      setOpen(controlledOpen);
    }
  }, [controlledOpen]);

  let onTrackOut = e => {
    if (trackOut && open && !containerRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      containerRef.current && containerRef.current.addEventListener('click', onTrackOut);
      return () => {
        containerRef.current && containerRef.current.removeEventListener('click', onTrackOut);
      };
    }
  }, [containerRef.current, open]);

  return (
    <>
      {open && typeof window !== 'undefined' && (
        <Portal portalId={modalId}>
          <>
            {children(
              {
                openModal: () => setOpen(true),
                closeModal: () => setOpen(false),
                open,
              },
              containerRef
            )}
          </>
        </Portal>
      )}
    </>
  );
});

ModalPortal.propTypes = {
  modalId: PropTypes.string,
  children: PropTypes.func.isRequired,
  open: PropTypes.bool,
  trackOut: PropTypes.bool,
};

export default ModalPortal;
