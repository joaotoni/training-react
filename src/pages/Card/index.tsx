import List from "../../products.json"
export default function Cards(){    

    return(
        <>
            <div className="">
                 {List.map((card) => (
                    <div className="flex flex-wrap justify-center m-0 p-4">
                        <div>
                            <img width="180px" height="80px" src={`/src/assets/img/${card.image}`} alt="" />
                        </div>
                        <div className="p-4 text-center " >
                            <h2 className="text-2xl font-bold  ">{card.name}</h2>
                            <h2>A pontuação desse jogo é de {card.score} pontos</h2>
                            <h2 className="">Esse jogo está por apenas ${card.price}</h2>
                            <button className="bg-blue-700 p-4 mt-6">Adicionar no carrinho</button>
                        </div>
                    </div>
                 ))}  
            </div>
        </>
    )
}