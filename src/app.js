

const express = require('express');
const app = express();

app.use(express.static('public')); // Assuming your CSS file is in the 'public' directory

// ... Your other server configurations and routes

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
// import "dotenv/config";
const dotenv = require('dotenv');
dotenv.config();

let mainImg = document.querySelector("img");
let mainVid = document.querySelector("iframe");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
 
  const key = process.env.API_KEY;
  const choice = document.querySelector("input").value.toLowerCase();
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${choice}`;
  fetch(url)
    .then((res) => res.json()) 
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        mainImg.src = data.hdurl;
      } else if (data.media_type === "video") {
        mainVid.src = data.url;
        mainImg.classList.add("active");
        mainVid.classList.add("active");
      }

      document.querySelector(
        "h3"
      ).innerText = `About this: ${data.explanation}`;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
});




