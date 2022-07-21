import './GlassArea.css'
import leftImage from '../../assets/images/left1.png'
import rightImage from '../../assets/images/right1.png'


export function GlassArea() {
  return (
    <div className='glass-area__conteiner'>
      <div className='glass-area__images-layer'>
        <img src={leftImage} alt="" />
      </div>
      <div className='glass-area__wrapper'>
        <div className='glass-area__header'> <h2>Titulo</h2></div>
        <div className='glass-area__content'><h3>Conteudo que vai ficar aqui</h3></div>
      </div>
    </div>
  )
}
