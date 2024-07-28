//fetch
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw newError("Something went wrong");
    }
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
