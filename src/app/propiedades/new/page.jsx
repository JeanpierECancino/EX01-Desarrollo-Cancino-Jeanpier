"use client"
import axios from "axios";
import React from "react";
import {useState} from 'react'

function PropiedadesForm() {
    const [propiedades,setPropiedades]=useState({

        nombre: "",
        direccion: "",
        caracteristicas: "",
        estado: "",
        precioalquiler: "",
        created_at: "",
        updated_at: ""

    });
  
  
  const handleChange=(e)=>{

      setPropiedades({
        ...propiedades,
        [e.target.nombre]: e.target.value
      });
    }


    const handleSubmit = async (e)=>{
      e.preventDefault();
      console.log(propiedades);
      const res= await axios.post('/api/propiedades',propiedades);
      if(res.status==200){
        alert("Registro exitoso");
        location.href="/propiedades";
      }else{
        alert("Error en el registro");
      }
    }
  
  return (

    <div className="m-8">   
      <h2 className="text-2x1 font-extrabold text-purple-900 hover:text-purple-500 ">Propiedades</h2>

      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 rounded-md shadow-md bg-gray-900">
        <label htmlFor="nombre" className="block mb-2 tex-sm font-medium dark:text-white"> * Nombre:  </label>
        <input type="text" name="nombre" onchange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5" placeholder="   Input nombre"/>
      
        <label htmlFor="direccion" className="block mb-2 tex-sm font-medium dark:text-white"> * Direccion:  </label>
        <input type="text" name="direccion" onchange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5" placeholder="   Input direccion"/>

        <label htmlFor="caracteristicas" className="block mb-2 tex-sm font-medium dark:text-white"> * Caracteristicas:  </label>
        <input type="text" name="caracteristicas" onchange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5" placeholder="   Input caracteristicas"/>

        <label htmlFor="estado" className="block mb-2 tex-sm font-medium dark:text-white"> * Estado:  </label>
        <input type="text" name="estado" onchange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5" placeholder="   Input estado"/>

        <label htmlFor="precioalquiler" className="block mb-2 tex-sm font-medium dark:text-white"> * Precio de alquiler:  </label>
        <input type="text" name="precioalquiler" onchange={handleChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5" placeholder="   Input precio de alquiler"/>
      
        <label htmlFor="created_at" className="block mb-2 tex-sm font-medium dark:text-white"> * Creado:  </label>
        <input type="text" name="created_at" onchange={handleChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5" placeholder=""/>
      
        <label htmlFor="updated_at" className="block mb-2 tex-sm font-medium dark:text-white"> * Actualizado:  </label>
        <input type="text" name="updated_at" onchange={handleChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5" placeholder=""/>
      
        <button className='bg-purple-600 hover:bg-purple-900 text-sm text-white font-bold py-2 px-4 rounded mt-5'>Guardar</button>

      </form>


    </div>

  )

}

export default PropiedadesForm