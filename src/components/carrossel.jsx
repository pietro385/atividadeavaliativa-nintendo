import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import menu1 from './menu1.png';
import menu2 from './menu2.png';
import menu3 from './menu3.png';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={menu1}
          alt="Primeiro slide"
          style={{ height: '55vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={menu2}
          alt="Segundo slide"
          style={{ height: '55vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={menu3}
          alt="Terceiro slide"
          style={{ height: '55vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
                    
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;