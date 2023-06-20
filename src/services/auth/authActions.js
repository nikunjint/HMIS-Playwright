// authActions.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Common from "../../components/common";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          // 'Content-Type': 'multipart/form-data',
          "Content-Type": "application/json",
          'id' :'994dfad3-c873-4fba-b15d-dacdd82cfe60',
          'secret' : '26n8Gy32rYZnDTC2C7BVgoeX1qVareSMjvaPXExS',
        },
      };
      const { data } = await axios.post(
        // `${backendURL}/api/v2/auth/login`,
        `${process.env.REACT_APP_API_URL}login`,
        { username, password },
        config
      );
      // store user's token in local storage
      localStorage.setItem("userToken", JSON.stringify(data.access_token));
      localStorage.setItem("refreshToken", data.access_token);
      Common.notifications("Success", "Login Successfully !", "success");

      return data;
    } catch (error) {
      // toast.error("Invalid username or password.");
      Common.notifications("Error", error.response.data.message, "error");
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
