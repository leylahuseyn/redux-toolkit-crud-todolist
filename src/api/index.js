import axios from "axios";

const BASE_URL = 'https://northwind.vercel.app/api/categories';


export const fetchCategories = async () => {
  return await axios.get(BASE_URL);
};

export const deleteCategory = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
}

export const getCategory = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`);
}

export const createCategory = async (data) => {
  return await axios.post(BASE_URL, data);
}
export const editCategory = async (category) => {
  
  const response = await axios.put(`/api/categories/${category.id}`, category);
  return response.data;
};