import crown from '../../assets/images/crown2.png'
import "./SectionHeader.css";

export function SectionHeader() {
  return <div className="content-area__header">
    <img  src={crown} alt="" />
    <p>Sophia</p>
  </div>;
}
