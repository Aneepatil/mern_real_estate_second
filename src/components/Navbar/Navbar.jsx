import '../Navbar/navbar.scss';

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="left">
            <a href="/" className='logo'>
                <img src="/logo.png" alt="logo" />
                <span>Real Estate</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
        </div>
        <div className="right">
        <a href="/">Sign-in</a>
        <a href="/" className='signUp'>Sign-up</a>
        </div>
      </nav>
    </>
  );
};
