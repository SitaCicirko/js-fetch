console.log("Hello world!");

// async function getMyStuffFromOverThere() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log("HTTP Response:", response);
//   const json = await response.json();
//   console.log("JSON Data:", json);
// }

// getMyStuffFromOverThere();

async function getMyGit() {
  const response = await fetch(
    "https://api.github.com/repos/SitaCicirko/Accessible-Image-Gallery"
  );

  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);

  const output = document.getElementById("info");
  const stargazers = json.stargazers_count;

  output.textContent = `Number of starss: ${stargazers}`;
}

getMyGit();
