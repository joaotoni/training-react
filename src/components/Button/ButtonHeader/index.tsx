import Cart from "../../../assets/icons/cart-icon.svg"

export default function CartButton(){
return(
    <div className=" ">
        <button>
            <img src={Cart} alt="" width="30px" height="20px" />
        </button>
    </div>
)
}