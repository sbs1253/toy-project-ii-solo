import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div>
      <button onClick={() => handleNavigate('/')}>Home</button>
      <button onClick={() => handleNavigate('/login')}>Login</button>
    </div>
  );
};

export default Navbar;
