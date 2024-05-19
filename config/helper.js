import { BREVO_URL, BREVO_API_KEY, TIME_OUT } from "./config.js"

export function timer(s){
  return new Promise((_, rej) => {
    setTimeout(()=>{
      rej(new Error( 'Error coneccion'))
    }, s * 1000)
  })
}

export async function getJson(url, method){
  try {

    const headers = {method:  `${method}`, 
    headers: {accept: 'application/json', 
    'api-key': BREVO_API_KEY}}

    const query = fetch(BREVO_URL+ url, headers )
    const response = await Promise.race([query, timer(TIME_OUT)])
    const data = await response.json()
    console.log(data);

    if (!response.ok) throw new Error('ERROR:', response.status)
    return data;
  
  } catch (error) {
    console.log(error);
  }
}