import "./GlassArea.css";
import leftImage from "../../assets/images/left1.png";
import rightImage from "../../assets/images/right1.png";
import footerImage from '../../assets/images/footer.png'
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { SectionContent } from "../SectionContent/SectionContent";

export function GlassArea() {
  return (
    <div className="glass-area__conteiner">
      <div className="glass-area__images-layer">
        <img
          className="glass-area__images-layer--left-image"
          src={leftImage}
          alt=""
        />
        <img
          className="glass-area__images-layer--right-image"
          src={rightImage}
          alt=""
        />
        <img
          className="glass-area__images-layer--footer-image"
          src={footerImage}
          alt=""
        />
      </div>
      <div className="glass-area__wrapper">
        <SectionHeader />

        <SectionContent />
      </div>
    </div>
  );
}
