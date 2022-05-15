import MoviesList from "../components/MoviesList";


export const filtrar = (terminoBusqueda)=>{
    var resultadosBusqueda=MoviesList.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    //setUsuarios(resultadosBusqueda);
  }