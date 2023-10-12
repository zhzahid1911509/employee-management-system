import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
           <div className="navbar bg-sky-600 text-white">
  <div className="flex-1">
    <Link to='/' className="normal-case text-2xl border-2 border-dashed border-blue-100 rounded-full p-2 font-bold">EAMS</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-xl">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>
            Account
          </summary>
          <ul className="p-2 bg-base-100 text-black">
            <li><Link to='/login'>Sign In</Link></li>
            <li><a><Link to='/register'>Sign Up</Link></a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div> 
        </div>
    );
};

export default Header;