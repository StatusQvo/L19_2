const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodosByIds = async (ids) => {
  try {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
  const promises = await Promise.all(requests);
  const allResults = await Promise.all(promises.map((data)=>data.json()));
  console.log("allResults",allResults);
  } catch (error) {
  console.error(error);
  }   
};

getTodosByIds([43, 21, 55, 100, 10]);