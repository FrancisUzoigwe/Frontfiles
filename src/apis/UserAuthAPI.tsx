import axios from "axios";

// const URL: string = "https://hack-project-management.onrender.com/api";
const URL: string = "http://localhost:3100/api/v1";

export const RegisterAPI = async (data: any) => {
  try {
    const config: any = {
      "content-type": "multipart/formdata",
    };
    return await axios
      .post(`${URL}/register`, data, config)
      .then((res: any) => {
        console.log("authapi",res)
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const SigninAPI = async (data: any) => {
  try {
    return await axios.post(`${URL}/signin`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const readUserAPI = async () => {
  try {
    return await axios.get(`${URL}/view`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const readOneAPI = async (id: string) => {
  try {
    return await axios.get(`${URL}/${id}/get-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
