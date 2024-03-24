export const getTableData = async () => {
  try {
    const response = await fetch("http://localhost:9000/all");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
