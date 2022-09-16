const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <img src={`${process.env.PUBLIC_URL}/assets/img/logo.svg`} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
