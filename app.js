let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

let random_color = function () {
  let hex = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let start_generating = null;

start.addEventListener("click", function (e) {
  if (!start_generating) {
    start_generating = setInterval(function () {
      document.querySelector("body").style.backgroundColor = random_color();
    }, 500);
  }
});

stop.addEventListener("click", function (e) {
  clearInterval(start_generating);
  start_generating = null;
});
