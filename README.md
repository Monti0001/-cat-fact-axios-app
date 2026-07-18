# 🐱 Cat Fact Axios App

This is a simple JavaScript project that fetches random cat facts using Axios and displays them on the webpage.

## 🚀 Features
- Fetch random cat facts on button click
- Uses Axios for API requests
- Async/Await implementation
- DOM manipulation
- Error handling

## 📦 API Used
https://catfact.ninja/fact

## 💻 Code

```js
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let fact = await getfacts();
  let p = document.querySelector("#result");
  p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getfacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("error - ", e);
    return "no fact found";
  }
}
