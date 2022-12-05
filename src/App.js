import './App.css';
import {MdOutlinePalette} from 'react-icons/md';
import ColorPicker from './components/colorPicker/colorPicker';
const App=()=>{
  //Aquí he utlizado CSS normal pero en los componentes he utilizado styled para todos los estilos
  return <div className='Container'>
    <header>
      {/*Aquí y en el resto de la aplicación he utliziado una biblio de React para los iconos*/}
      <MdOutlinePalette color='#FFFFFF' size={50}/>
      <h1>Color palette generator</h1>
    </header>
    <main>
      {/*He decicido utilizar un componente general y el resto renderizarán dentro de este, como una página de navegación*/}
      <ColorPicker/>
    </main>
  </div>
}
export default App;
