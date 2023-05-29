import { faClipboardCheck, faFileCirclePlus, faHome,faPalette} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar({ setSelectedComponent }) {
  const navigate = useNavigate()

  const handleLink = (component) => {
    setSelectedComponent(component);
    navigate(`/${component}`)
  };

  return (
    <>
      <div className="btm-nav">
        <NavLink
          to="/"
          className="text-primary"
          activeclassname="active"
          onClick={() => handleLink('home')}
        >
        <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          to="/counter"
          className="text-primary"
          activeclassname="active"
          onClick={() => handleLink('counter')}
        >
        <FontAwesomeIcon icon={faFileCirclePlus} className="h-5 w-5" />
        </NavLink>
        <NavLink
          to="/changebackground"
          className="text-primary"
          activeclassname="active"
          onClick={() => handleLink('changebackground')}
        >
          <FontAwesomeIcon icon={faPalette} className="h-5 w-5" />
        </NavLink>
        <NavLink
          to="/todolist"
          className="text-primary"
          activeclassname="active"
          onClick={() => handleLink('todolist')}
        >
          <FontAwesomeIcon icon={faClipboardCheck} fill='none' className="h-5 w-5" />
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;