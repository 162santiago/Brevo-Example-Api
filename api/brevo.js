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
}

const prueba = new Brevo()
prueba.getAllFolder()