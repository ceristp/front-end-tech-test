export const getProductByID = async (productID) => {
  try {
    const url = `http://localhost:5000/api/products/${productID}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
