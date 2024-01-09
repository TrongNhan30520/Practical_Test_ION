import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
    <div className='w-full flex text-center justify-center p-2  gap-3'>
        <Link to='/admin'  className=''>Admin</Link>
        <Link to='/consumer'>Consumer</Link>
    </div>
      <Outlet />
    </div>
  )
}

export default Layout
