import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import Card from "../Card"

export default function List(){
    const cards = useSelector((state) => state.cards);
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getAllCards());
        },
        [dispatch]
    );

    return(
       <div>
            <div className="row">{cards.map((card: any,index: React.Key | null | undefined) => <Card key={index} card={card} />)}</div>
        </div> 
    )
}

function getAllCards(): any {
    throw new Error("Function not implemented.");
}
