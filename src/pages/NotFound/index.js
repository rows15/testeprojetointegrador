import { useNavigate } from 'react-router-dom';
import './style.scss';
import { Container } from 'react-bootstrap';
import erro from '../../assets/notfound/erro.jpg';

const NotFound = () => {
  const navigate = useNavigate();
 
  setTimeout(() => {
    navigate('/');
  }, 6000);

  return (
    <>
   
     <title>Not Found</title>
 
    <Container xs={12} sm={8} className="not-found d-flex flex-wrap justify-content-center">
      <div className="m-auto px-4">
    
        <p className="py-2">Oops.....</p>
      </div>
      <div data-aos="zoom-in-left" data-aos-duration="2000">
        <img className="erro-404" src={erro} alt="erro" />
      </div>
    </Container>
    </>
  )
}
export default NotFound;