import {useState} from 'react';
import {ColorPickerContainer,ColorDivContainer,NameInputContainer,NameInput,PlusInput,NameTitle,Boton} from './colorPicker-style';
import {CompactPicker} from 'react-color';
import {AiOutlinePlus} from 'react-icons/ai';
import DivColor from '../divColor/divColor';
import ColorSaved from '../colorSaved/colorSaved';
const ColorPicker=()=>{
    const [colorSelected,setColorSelected]=useState(
        [{color:undefined},
        {color:undefined},
        {color:undefined},
        {color:undefined},
        {color:undefined}
    ]);
    const [colorSaved,setColorSaved]=useState([]);
    const [name,setName]=useState("");
    const [resizeIndex,setResizeIndex]=useState(-1);
    const [toggle,setToggle]=useState(false);
    //Para los estados, utilizo dos para almacenar los colores, uno para la paleta principal y otro para pasarselo al componente de los guardados, un estado para el nombre de la paleta, otro para el ínidce del color seleccionado y otro para que se muestren los cambios en la pantalla de no-estados
    const resizeDiv=input=>{
        //Esta función coge el índice de los divs de los colores principales y lo almacena en un estado para que aumente el tamaño de ese en concreto, y además ya le cambio el color al predeterminado de paso
        setResizeIndex(input===resizeIndex?-1:input);
        if(colorSelected[input].color===undefined)colorSelected[input].color="#FF00CC";
    };
    const getColor=(input="#FF00CC")=>{
        //Esta función conecta la paleta de colores de la librería con los colores principales, y solo funciona cuando el estado índice es diferente a -1, o sea que hay un div seleccionado
        if(resizeIndex!==-1)colorSelected[resizeIndex].color=input;
        setColorSelected(colorSelected);
        setToggle(!toggle);
    };
    const saveColors=()=>{
        //Esta función coge los 5 colores seleccionados y el nombre y los almacena en un array que está ya pasado al componente de los colores guardados, y después los resetea volviendo los valores a undefined
        let check=false;
        colorSelected.forEach(obj=>{
            if(obj.color===undefined)check=true;
        });
        if(name.length>0&&!check){
            let intro={name,colors:[]};
            setResizeIndex(-1);
            colorSelected.forEach(obj=>{
                intro.colors.push(obj.color);
                obj.color=undefined;
            });
            colorSaved.push(intro);
            setColorSaved(colorSaved);
            setToggle(!toggle);
        }
        else if(name.length===0)alert("Introduce un nombre a la paleta");
        else alert("Falta por introducir algún color");
    };
    const deleteColors=input=>{
        //Esta función se pasa al componente de guardado de las paletas, que le pasa la posición de la paleta a elimiar y la elimina.
        colorSaved.splice(input,1);
        setToggle(!toggle);
    };
    const returnColors=input=>{
        //Esta función también se pasa al componente de guradar, y según el índice dado busca los colores en la lista de colores guardados y los vuelve a colocar en los colores principales
        colorSaved[input].colors.forEach((obj,index)=>{
            colorSelected[index].color=obj;
        });
        setToggle(!toggle);
    };
    return <ColorPickerContainer>
        <ColorDivContainer>
        {/*Para los colores principales he decicido hacerlo en un componente a parte porque despejaba el código de esta página y además pasándole el color ya podía hacer que funcionara como queria*/}
            {colorSelected.map((obj,index)=><Boton key={index} onClick={()=>resizeDiv(index)} resize={index===resizeIndex?true:false}>
                <DivColor color={obj.color}/>
            </Boton>)}
        </ColorDivContainer>
        <NameInputContainer>
            <CompactPicker onChange={e=>getColor(e.hex)}/>
            <div>
                <NameTitle>Name</NameTitle>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:8}}>
                    <NameInput type="text" placeholder='Website color scheme' onChange={e=>setName(e.target.value)}/>
                    <PlusInput onClick={saveColors}>
                        <AiOutlinePlus size={26}/>
                    </PlusInput>
                </div>
            </div>
        </NameInputContainer>
        <ColorSaved data={colorSaved} func={deleteColors} func2={returnColors}/>
    </ColorPickerContainer>
};
export default ColorPicker;