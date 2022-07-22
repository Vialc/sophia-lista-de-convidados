import crown from '../../assets/images/crown2.png'
import adorno from '../../assets/images/adorno.png'
import "./SectionHeader.css";

export function SectionHeader() {
  return <div className="content-area__header">
    <img  src={crown} alt="" />
    <p>Sophia</p>
    <img className='adorno'  src={adorno} alt="" />
  </div>;
}
