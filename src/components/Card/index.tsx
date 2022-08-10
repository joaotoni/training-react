import List from "../../products.json"
import  "../../assets/img/index"
import { image } from "../../assets/img/index"
export default function Cards(){    

    function Compare(){
        const products = {image: 'super-mario-odyssey'}
        const imagem = {image:image }
        
    
    }
    return(
        <>
            <div>
                 {List.map((card) => (
                   <div>
                   <img src={`../../assets/img/ ${card.image}`} alt="" />
                   <h2>{card.name}</h2>
                   <h2>A pontuação desse jogo é de {card.score}</h2>
                   <h2>Esse jogo está por apenas ${card.price}</h2>
               </div>
                 ))}  
            </div>
        </>
    )
}