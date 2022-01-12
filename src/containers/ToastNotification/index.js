import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { ToastContainer } from 'components/Notification/Toast';
import { ToastNotification, NotificationTypes } from 'components/Notification';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  let timerRef = useRef(false);
  let [queue, setQueue] = useState([]);

  const addToast = ({ title, description, time, type, autoDismiss = true }) => {
    setQueue([
      ...queue,
      {
        i: new Date().getUTCMilliseconds(),
        title,
        description,
        time,
        type,
        autoDismiss,
      },
    ]);
  };

  const removeTost = t => setQueue([...queue.filter(({ i }) => i !== t)]);

  useEffect(() => {
    if (queue.length === 0) return;

    if (timerRef.current !== false) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      let [{ i, autoDismiss }] = queue;
      if (autoDismiss) removeTost(i);
    }, 5000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [queue]);

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <ToastContainer inView={!!queue.length}>
        {queue.map((p, i) => (
          <ToastNotification
            key={i}
            onDismiss={() => {
              removeTost(p.i);
            }}
            {...p}
          />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  let sendToast = useContext(ToastContext);

  return [
    {
      errorToast: p => sendToast({ ...p, type: NotificationTypes.Error }),
      successToast: p => sendToast({ ...p, type: NotificationTypes.Success }),
      warningToast: p => sendToast({ ...p, type: NotificationTypes.Warning }),
      infoToast: p => sendToast({ ...p, type: NotificationTypes.Info }),
    },
    sendToast,
    NotificationTypes,
  ];
};
