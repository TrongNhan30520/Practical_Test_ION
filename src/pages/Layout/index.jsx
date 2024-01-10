import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const {pathname} = useLocation()
  return (
    <div>
    <div className='w-full flex text-center justify-center p-2 mb-2 gap-3 bg-gray-300'>
        <Link to='/admin'  className={`p-2   ${pathname === '/admin' ? 'bg-gray-100 shadow-lg': ''}`}>Admin</Link>
        <Link to='/consumer'  className={`p-2   ${pathname === '/consumer' ? 'bg-gray-100 shadow-lg': ''}`}>Consumer</Link>
    </div>
      <div className="p-4">
      <Outlet />
      </div>
    </div>
  )
}

export default Layout
