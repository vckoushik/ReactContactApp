import logo from "../images/logo192.png";

function Header() {
  return (
    <div className="py-2 pl-2 mx-auto" style={{ borderBottom: "1px solid #777"}}>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 pt-4 m-2 text-white-50" style={{color:"white"}}>Contacts App</span>
    </div>
  );
}

export default Header;