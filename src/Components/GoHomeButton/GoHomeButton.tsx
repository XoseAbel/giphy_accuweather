import { Tooltip } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import routes from 'src/routes/constants';

const GoHomeButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(routes.home.url);
  };

  return (
    <Tooltip title='Ir a home'>
      <span onClick={handleNavigate} style={{ cursor: 'pointer' }}>
        <FaHome data-testid='goHome' />
      </span>
    </Tooltip>
  );
};

export { GoHomeButton };
