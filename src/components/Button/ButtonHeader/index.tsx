import Cart from "../../../assets/icons/cart-icon.svg"
import { Link } from "react-router-dom";

export default function CartButton(){
return(
    <div className=" ">
        <Link to={"/card"}>
            <img src={Cart} alt="" width="30px" height="20px" />
        </Link>
    </div>
)
}