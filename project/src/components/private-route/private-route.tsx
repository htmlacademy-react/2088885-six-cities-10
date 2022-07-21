import { Navigate } from 'react-router-dom';
import { EAppRoute, EAuthorizationStatus } from '../../constants';

type PrivateRouteProps = {
  authorizationStatus: EAuthorizationStatus,
  children: JSX.Element
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { authorizationStatus, children } = props;
  return (
    authorizationStatus === EAuthorizationStatus.Auth ? children : <Navigate to={EAppRoute.Login} />
  );
};
