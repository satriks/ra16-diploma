import axios from "axios";

const connect = axios.create({
  baseURL: import.meta.env.VITE_HOST || "http://localhost:7070/api/",
});

export const getTopSalesApi = () => {
  return connect.get("/top-sales").then((response) => response.data);
};

export const getCategoriesApi = () => {
  return connect.get("/categories").then((response) => response.data);
};

export const getItemCategoryApi = (
  id: string | number = 0,
  offset: number = 0,
  q: string = ""
) => {
  return connect
    .get("/items", { params: { categoryId: id, offset, q } })
    .then((response) => response.data);
};
