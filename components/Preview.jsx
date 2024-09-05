"use client";
import { Components } from "@/data/Components";
import "@/styles/mask.css";
import ModalCode from "./UI/ModalCode";

import { useState } from "react";

const Preview = () => {
  const [selectedCode, setSelectedCode] = useState(null);

  const handleOpenModalCode = (code) => {
    setSelectedCode(code);
  };

  const handleCloseModal = () => {
    setSelectedCode(null);
  };

  return (
    <section className="grid grid-cols-1 gap-8 mx-auto place-items-center justify-items-center md:grid-cols-2 max-w-7xl py-28">
      {Components.map((el, index) => (
        <div
          key={index}
          className="relative w-full sm:max-w-sm mask lg:max-w-md"
        >
          {index === 0 && (
            <button
              onClick={() => handleOpenModalCode(el.CSSCode)}
              type="button"
              className="mt-4 px-2 py-1 border z-10 absolute top-0 right-5 border-white/5  text-white/50 rounded-xl"
            >
              CSS
            </button>
          )}
          {index >= 1 && index <= 7 && (
            <button
              onClick={() => handleOpenModalCode(el.CSSCode)}
              type="button"
              className="mt-4 px-2 py-1 border z-10 absolute top-0 right-5 border-white/5  text-white/50 rounded-xl"
            >
              CSS
            </button>
          )}
          <div className="relative flex items-center justify-center transition-all duration-700 overflow-hidden rounded-3xl p-4 border border-white/10">
            <div className="flex relative h-[350px] w-[350px] items-center justify-center">
              <p className="absolute top-0 text-white/50">{el.name}</p>
              <div className="absolute bottom-0 left-0 gap-2 flex text-white/20">
                {el.stack.tagAnimation.map((tag, i) => (
                  <span
                    key={i}
                    className=" px-2 py-1 rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="w-[106px] blur-3xl h-[106px] bg-[#5b5fa7] rounded-full absolute -top-32" />
              <div
                type="button"
                className="absolute top-0 left-0 text-white/50"
              >
                {el.type}
              </div>
              <div className="absolute bottom-0 z-20 right-0 gap-2 flex flex-wrap text-white/70">
                {el.stack.tagDev.map((tag, i) => (
                  <button
                    onClick={() => handleOpenModalCode(el.SourceCode)}
                    key={i}
                    type="button"
                    className="border border-white/5 px-2 py-1 rounded-md text-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {el.Component ? <el.Component /> : null}
            </div>
          </div>
        </div>
      ))}
      {selectedCode && (
        <ModalCode SourceCode={selectedCode} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Preview;
