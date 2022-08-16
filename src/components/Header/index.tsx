import CartButton from "../Button/ButtonHeader";

export default function Header(){
    return(
        <header className="">
            <nav className=" bg-black flex justify-between text-2xl p-4">
                <div className="">
                    <h1 className="text-white">Ofertão</h1>
                </div>
               <CartButton />
            </nav>
        </header>
    )
}