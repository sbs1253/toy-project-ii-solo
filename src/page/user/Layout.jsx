import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Layout() {
  const userStatus = useSelector((state) => state.user.status);

  if (userStatus !== 'succeeded') {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
