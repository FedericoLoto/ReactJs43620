import Caja from "./Caja";

const ItemListContainer= (props)=>{
    return(
        <>            
            <div className="baseCaja">
                <Caja/>
                {props.children} 
                {props.children}  
                {props.children}  
                {props.children}  
                {props.children}  
                {props.children}   
                {props.children}  
                {props.children}  
                {props.children}  
            </div>
        </>
        )     
};

export default ItemListContainer;