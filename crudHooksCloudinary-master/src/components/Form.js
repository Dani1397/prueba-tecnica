import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';
import {fileUpload} from '../helpers/fileUpload';
import '../styles/Form.css';

export const Form = () => {

    const [productos, setProductos] = useState({
        nombre: '',
        categoria: '',
        descripcion: '',
        marca: '',
        talla: '',
        precio: '',
        imagen: ''
    })

    const {nombre,categoria,descripcion,marca,talla,precio,imagen} = productos;

    const postData = () => {
         axios.post(url,productos)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
         
    }

    const handleChanged = ({target}) => {
        setProductos({
          ...productos,
          [target.name]: target.value
        })
    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
      }

      const handleFileChange = (e) => {
        const file = e.target.files[0];
         fileUpload(file)
        .then(response => {
            productos.imagen = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registra tus prendas</h2>
           <hr/>
           <div>
                   <label>Nombre de la prenda</label>
                   <input id="inputNombrePrenda" name="nombre" value={nombre} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Categoría</label>
                   <select id="selectCategoria" name="categoria" value={categoria} onChange={handleChanged}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="Vestido" value="Vestido">Vestido</option>
                       <option name="Camiseta" value="Camiseta">Camiseta</option>
                       <option name="Camisa" value="Cmisa">Cmisa</option>
                       <option name="Falda" value="Falda">Falda</option>
                       <option name="Conjunto" value="Conjunto">Conjunto</option>
                       <option name="Ropa deportiva" value="Ropa deportiva">Ropa deportiva</option>
                   </select>
               </div>
               <div>
                   <label>Descripción</label>
                   <input id="inputDescripcion" name="descripcion" value={descripcion} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Marca</label>
                   <input id="inputMarca" name="marca" value={marca} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Talla</label>
                   <select id="selectTalla" name="talla" value={talla} onChange={handleChanged}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="XS" value="XS">XS</option>
                       <option name="S" value="S">S</option>
                       <option name="M" value="M">M</option>
                       <option name="L" value="L">L</option>
                       <option name="XL" value="XL">XL</option>
                       <option name="XXL" value="XXL">XXL</option>
                       <option name="XXL" value="XXL">XXL</option>
                   </select>
               </div>
               <div>
                   <label>Precio</label>
                   <input id="inputCelular" type="number" name="precio" value={precio} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" value={imagen}    onChange={handleFileChange}/>
               </div>
               <div>
                   <button onClick={() => postData()} id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}
