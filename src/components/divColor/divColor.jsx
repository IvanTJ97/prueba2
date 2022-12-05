import NoSelect from '../../assets/NoSelect.svg';
import {ColorDiv,ColorUndefined} from './divColor-style';
const DivColor=({color})=>{
    //Si el valor pasado es undefined, coge la imagen de assets y la devuleve, y si esta definido un div con el background del color específico
    return color===undefined?<ColorUndefined src={NoSelect} alt="No selected"/>:<ColorDiv color={color}/>
};
export default DivColor;