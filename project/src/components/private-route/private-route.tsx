import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus,
  children: JSX.Element
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { authorizationStatus, children } = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
};
