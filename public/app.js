let mainImg = document.querySelector("img");
let mainVid = document.querySelector("iframe");
let btn = document.querySelector("button");

fetch('/api/key')
  .then(response => response.text())
  .then(key => {
    // apiKey = apiKey.replace(/(\r\n|\n|\r)/gm, '');
    console.log(key);

    btn.addEventListener("click", () => {
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
  })
  .catch(error => console.error('Error fetching API key:', error));
