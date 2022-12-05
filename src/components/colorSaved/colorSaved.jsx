import {FaTrashAlt} from 'react-icons/fa';
import {ColorSavedContainer,ColorSavedTitle,Element,ElementTop,ElementBottom,ElementsDivs,Name,BotonTrash} from './colorSaved-style';
const ColorSaved=({data,func,func2})=>{
    //En este componte le paso los datos para que los dibuje en la pantalla, con el ternario le digo cuando quiero que los dibuje, no antes de que no haya información, y las dos funciones me ayudan para poder realizar funciones en el componente padre.
    return <ColorSavedContainer>
        <ColorSavedTitle>Saved pallettes</ColorSavedTitle>
        <Element>
            {data.length>0?data.map((obj,index)=><div key={index}>
            <ElementTop>
                <Name>{obj.name}</Name>
                <BotonTrash onClick={()=>func(index)}>
                    <FaTrashAlt color='#FFFFFF'/>
                </BotonTrash>
            </ElementTop>
            <ElementBottom onClick={()=>func2(index)}>
                {obj.colors.map((obj2,index2)=><ElementsDivs key={index2} color={obj2}/>)}
            </ElementBottom>
        </div>)
        :null}
        </Element>
    </ColorSavedContainer>
};
export default ColorSaved;