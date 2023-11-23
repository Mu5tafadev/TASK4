import Container from "../Container/Container";
import "./Header.css";

import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <Container >
        <div className="content">
          <div className="logo">Dashboard</div>
          <div className="search">
            <input type="text" placeholder="Search"/>
            <IoSearchOutline className="icon"/>
          </div>
          <button className="add">+ New Product</button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
