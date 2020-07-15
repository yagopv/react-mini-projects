import React from "react";
import { cssStyling } from "./CSSModuleStyling.module.css";

export function CSSModuleStyling() {
  return (
    <div className={cssStyling}>
      <p>This is a componente styled with CSS Modules</p>
    </div>
  );
}
