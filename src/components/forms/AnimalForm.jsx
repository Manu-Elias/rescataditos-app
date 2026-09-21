import {useState, useEffect} from 'react'

const formularioVacio = {
    nombre:"",
    especie:"Perro",
    historia:"",
    fotos:""
}
const AnimalForm =({onCrearAnimal, animalAEditar,onEditarAnimal })=>{
const [formulario, setFormulario] = useState(formularioVacio);

const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormulario({
        ...formulario,
        [name]: value
    });
}

const handleSubmit=(e)=>{ e.preventDefault();
if (animalAEditar){
    onEditarAnimal(formulario);
}

else{
    onCrearAnimal(formulario);
    setFormulario(formularioVacio); 
}

}


useEffect(() => {
  if (animalAEditar) {
    setFormulario(animalAEditar)
  }
  else{
    setFormulario(formularioVacio);
  }
}, [animalAEditar]);


    return(
<form onSubmit={handleSubmit}>
    <label htmlFor='nombre-animal'>Nombre: </label>
    <input type="text" id='nombre-animal' name='nombre' value={formulario.nombre} onChange={handleChange}/>

    <label htmlFor='especie-animal'> Especie: </label>
    <select id="especie-animal" name='especie' value={formulario.especie} onChange={handleChange}>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
        <option value="Conejo">Conejo</option>
        <option value="Cerdo">Cerdo</option>
        <option value="Otro">Otro</option>
    </select>
    
    <label htmlFor='historia-animal'>Mi Historia: </label>
    <textarea  id="historia-animal" name='historia' value={formulario.historia} onChange={handleChange}></textarea>

    <label htmlFor='fotos-animal'>Fotos:  </label>
    <input type="text"  id="fotos-animal" name='fotos' value={formulario.fotos} onChange={handleChange} />

    <button type='submit'>{animalAEditar ? "Guardar Cambios" : "Crear Animal"}</button>
</form>
    );
}

export default AnimalForm;