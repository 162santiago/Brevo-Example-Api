import {BREVO_URL, BREVO_API_KEY, TIME_OUT} from "../config/config.js";
import { getJson } from "../config/helper.js";

class Brevo{
   
  async getAllFolder(){
    try {
      const response =await getJson('contacts/folders?limit=10&offset=0&sort=desc', 'GET')
      return response
    } catch (error) {
      console.log(error);
    }
  }

  async createContact(){

    const body =JSON.stringify({
      ext_id: '8888',
      attributes : {
        NOMBRE: 'sh programming',
        APELLIDOS: 'PROGRAMMING',
        SMS: '+51978695467', //example
        WHATSAPP: '+51978695467', //example
        NACIMIENTO : '29-07-05',
        SEXO: 'MALE'
      },
      email : 'matiasyar9122@gmail.com',
      emailBlacklisted: true,
      smsBlacklisted:true,
    })

    const response = await getJson('contacts', 'POST', body)
    console.log('contact created');
    return response
  }
}

const prueba = new Brevo()
prueba.createContact()