import axios from "axios";

const config = {
  "Access-Control-Allow-Origin": "*",
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getAll: async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/prasetyomuhdwi/Dummy-Db-Podomoro",
      config
    );

    return response.data;
  },
};
