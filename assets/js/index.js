import { arr_propiedades_alquiler, arr_propiedades_ventas } from "./array_propiedades.js";//trae los array

const container_venta = document.getElementById("VentasId")
const container_alquiler = document.getElementById("AlquilerId")
const array_alquier = []
const array_ventas = []
 
const html = (propiedad) =>{
  const htmlcard =  `
  <div class="card">
    <img
      src="${propiedad.src}"
      class="card-img-top"
      alt="Imagen de la propiedad"
    />
    <div class="card-body">
      <h5 class="card-title">${propiedad.nombre}</h5>
      <p class="card-text">${propiedad.descripcion}</p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.camas} Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad.banio} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
      <p class="${/*inicio condicionalidades*/propiedad.smoke ? "text-success" : "text-danger"}"> 
            <i class="fas ${  
              propiedad.smoke ? "fa-smoking" : "fa-smoking-ban" 
            }"></i>
            ${
              propiedad.smoke
                ? "Está permitido fumar"
                : "No se permite fumar"
            }
          </p>
          <p class="${propiedad.pets ? "text-success" : "text-danger"}">
            <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>  
            ${
              propiedad.pets
                ? "Mascotas permitidas"
                : "No se permiten mascotas"
            }
          </p>
    </div>
  </div>`
  return (htmlcard)
}

//mustrar los tres departamentos según tipo de ventas
const Home_Propiedades = () => {
  for (let i = 0; i < 3; i++) {
    array_alquier.push(arr_propiedades_alquiler[i])
    array_ventas.push(arr_propiedades_ventas[i])
  }

  array_ventas.forEach((propiedad) => {
    console.log('valor -->' + propiedad.banio)
    const card_propiedades = document.createElement('div')
    card_propiedades.className = 'col-md-4 mb-4'
    card_propiedades.innerHTML = html(propiedad)
    container_venta.appendChild(card_propiedades)
  })

  array_alquier.forEach((propiedad) => {
    console.log('valor -->' + propiedad.banio)
    const card_propiedades = document.createElement('div')
    card_propiedades.className = 'col-md-4 mb-4'
    card_propiedades.innerHTML = html(propiedad)
    container_alquiler.appendChild(card_propiedades)
  })
}

window.onload = () => {
  Home_Propiedades()  
}
  