import { arr_propiedades_ventas } from "./array_propiedades.js";

const container_venta = document.getElementById("SoloVentasId")
 
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
const Page_Ventas = () => {
    arr_propiedades_ventas.forEach((propiedad) => {
    console.log('valor -->' + propiedad.banio)
    const card_propiedades = document.createElement('div')
    card_propiedades.className = 'col-md-4 mb-4'
        card_propiedades.innerHTML = html(propiedad)
    container_venta.appendChild(card_propiedades)
    })
}

window.onload = () => {
  Page_Ventas()  
}