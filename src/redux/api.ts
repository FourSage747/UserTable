import axios from "axios";
import { User } from "./reducer";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = async (): Promise<User[]> => {
  const response = await instance.get<User[]>("/users");
  return response.data;
};
