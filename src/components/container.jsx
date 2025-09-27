import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft,faBars  } from "@fortawesome/free-solid-svg-icons";

function Container({resultData,validationResult,handleClear,modifyHandler}) {
    let number=["Clear","/","X",1,2,"%",3,4,"-",5,6,"*",7,8,"+",9,0,",","="]
    return (
        <div className="Container">
            {number.map((val)=>{
                if( typeof val =='string'){
                    if (val === "="){
                       return<button key={val}className="odd equal" onClick={()=>validationResult()}>{val}</button>
                    }
                    if (val === "X"){
                       return<button key={val}className="odd " onClick={()=>modifyHandler() }>{<FontAwesomeIcon icon={faDeleteLeft} />}</button>
                    }
                    if (val =="Clear") {
                        return<button key={val}className="odd clear" onClick={()=>handleClear()}>{val}</button>
                    } 
                    if (val ==",") {
                        return<button key={val}className="odd clear" onClick={()=>resultData("00")}>{"00"}</button>
                    } 
                    return<button key={val}className="odd" onClick={()=>resultData(val)}>{val}</button>
                }
                else{
                     return<button  key={val} className="even" onClick={()=>resultData(val)}>{val}</button>
                }
                
                
            })} 
        </div>
    )
    
}

export default Container