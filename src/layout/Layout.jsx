import Navbar from "components/Navbar/Navbar";

const Layout = ({ children, navTitle }) => {
  return (
    <>
      <Navbar navTitle={navTitle} />
      {children}
    </>
  );
};

export default Layout;
