 import axios from "axios";



 const especiesPlaceholder = ["dog", "cat", "dog", "cat", "rabbit"];

 const mapearUserAAnimal = (user)=>{
    const especie = especiesPlaceholder[user.id % especiesPlaceholder.length];
    const historia = `${user.name} fue rescatado y está esperando un hogar lleno de amor.`
    const fotos = [ `https://loremflickr.com/200/200/${especie}?lock=${user.id}`  ];
    
    return{
      id: user.id,
      nombre: user.name,
      especie,
      historia,
      fotos
    }
 }

 export const getAnimals = async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data.map(mapearUserAAnimal)

}