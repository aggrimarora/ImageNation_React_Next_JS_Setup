import Link from 'next/link';

const Navbar = () => (
    <div>
    <nav className="navbar navbar-default">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <div className="container navbar-nav">
        <Link href="/">
          <a className="navbar-brand">Image+Nation</a>
        </Link>
        
        </div>
      <div className="collapse navbar-collapse nav-row" id="nav-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                    
                    <Link href="/">
                        <a className="nav-link" >I+N History </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/festival">
                        <a className="nav-link" >I+N Festival</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/explore">
                        <a className="nav-link" > I+N Explore</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/spaces">
                        <a className="nav-link" > I+N Spaces</a>
                    </Link>
                </li>
            </ul>
    
        </div>
    </div>
  </nav> 
  <style jsx>{`
        
        .nav-item {
            display: inline-block;
            padding: 0 10px 0 10px;
            width: 25%;
        }
        
        .navbar-nav {
            width: 100%;
        }
        .navbar-brand {
            width: 100%;
        }
        .navbar-header {
            width: 100%;
            text-align: center;
        }
        p {
          color: blue;
        }
        h3 {
            display: inline-block;
        }
        nav {
            text-align: center;
        }

      `}</style>
    </div>

);

export default Navbar;