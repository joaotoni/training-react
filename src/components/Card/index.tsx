import List from "../../products.json"

export default function Cards(){    

    return(
        <>
            <div>
                 {List.map((card) => (
                    <div>{card}</div>
                 ))}  
            </div>
        </>
    )
}