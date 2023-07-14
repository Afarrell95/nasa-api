let mainImg = document.querySelector("img");
let mainVid = document.querySelector("iframe");
let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
  const key = 'u8IyZlTi7HZhLIOjxE8q8cCaXKsLonpXq8sKVY3X'
  const choice = document.querySelector("input").value.toLowerCase();
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${choice}`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
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


