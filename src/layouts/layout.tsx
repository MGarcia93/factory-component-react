import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="bg-slate-500 min-h-screen text-white">
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav className=" bg-slate-900">
        <ul className="flex gap-4 max-w-6xl m-auto p-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Section">Section</Link>
          </li>
        </ul>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
export default Layout;
