  
  
  export const fetchGet = async (url) => { // Función fetch para cualquier URL que no sea de gráficos
    const response = await fetch(url)
    if (!response.ok){
      throw new Error ("La data no está, la data se fue")
    } else {
      return response.json()
    }
  }
  
  export const fetchData = async (url) => { //Función para manejar resultados obtenidos y dejarlos listos para usar en chart, google charts o cualquier poronganeitor que se desee. Coingecko no devuelve la data en un formato accesible para estas Apis, con lo cual hay que reformatear todo.
  let data = [ ];
  let result = await fetchGet(url);
  data.push(['Date','price'])
  for (const item of result.prices) {
      data.push([new Date(item[0]) ,item[1]])}
  return data;
};