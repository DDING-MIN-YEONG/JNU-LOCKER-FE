import { ReactNode, useEffect, useState } from "react";

import { createPortal } from "react-dom";

interface SpinnerPortalProps {
  children: ReactNode;
}

export default function SpinnerPortal({ children }: SpinnerPortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === "undefined" || !mounted) return null;

  const modalRoot = document.getElementById("spinner-root");

  if (!modalRoot) return null;

  return createPortal(children, modalRoot);
}
