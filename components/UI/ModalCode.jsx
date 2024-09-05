import React, { useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ModalCode = ({ SourceCode, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(SourceCode);
      alert("Código copiado al portapapeles");
    } catch (err) {
      alert("Error al copiar el código");
    }
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-xl bg-opacity-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="relative bg-[#09090b] border-2 border-white/5 overflow-auto max-w-3xl w-full max-h-[90vh] p-6 rounded-2xl "
      >
        <span className="w-24 h-24 bg-white/30 blur-3xl absolute top-0 left-0" />
        <span className="w-24 h-24 bg-white/30 blur-3xl absolute top-0 right-0" />

        <div className="relative h-full overflow-auto code-container">
          <SyntaxHighlighter
            language="x86asm"
            style={dark}
            customStyle={{
              backgroundColor: "transparent",
              padding: "0",
              borderRadius: "0",
              overflow: "auto",
              scrollbarWidth: "none",
            }}
          >
            {SourceCode}
          </SyntaxHighlighter>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleCopyCode}
            className="px-4 py-2 border border-white/5 text-white rounded-2xl"
          >
            Copy
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-white/5 text-white rounded-2xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCode;
