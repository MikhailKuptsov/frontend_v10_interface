import axios from 'axios';
import user_attributes from './User_data'

const API_ENDPOINT = 'https://9l1rs9ln-8000.euw.devtunnels.ms/users';
const api_key=user_attributes.api_session_key;

export const getUsers = async () => {
    try {
      // const response = await axios({url: `${API_ENDPOINT}/users/`, method:'GET',headers:{'api-session-key':api_key}});
      const response= await axios.get("https://9l1rs9ln-8000.euw.devtunnels.ms/users/",
        {headers:{'api-session-key':api_key}})
      if (response.status === 200 && response.data && response.data.length > 0) {
        return response.data;
      } else {
        return "данных нет";
      }
    } catch (error) {
      console.error("Ошибка при получении пользователей:", error);
      return "данных нет";
    }
  };