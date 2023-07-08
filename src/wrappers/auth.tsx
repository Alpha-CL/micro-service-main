import useAuth from '@/hooks/useAuth';
import { Navigate, Outlet } from 'umi';

export default (props) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
