import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>404 Not Found</h1>
      <i>design: WIP</i>
      <h3 onClick={handleBack} style={{ cursor: 'pointer' }}>
        {'<<< return back <<<'}
      </h3>
    </div>
  );
};
