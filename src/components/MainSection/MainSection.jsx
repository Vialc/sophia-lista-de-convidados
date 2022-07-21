import { GlassArea } from "../GlassArea/GlassArea";
import { StarsEffect } from "../StarsEffect/StarsEffect";

import "./MainSection.css";

export function MainSection() {
  return (
    <section className="main-section">
      <div className="star-effect">
        <StarsEffect />
      </div>

      <GlassArea />
    </section>
  );
}
