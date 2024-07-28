//async await
const url = "https://jsonplaceholder.typicode.com/posts";
async function getPost() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
getPost().then((myData) => console.log(myData));

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));
