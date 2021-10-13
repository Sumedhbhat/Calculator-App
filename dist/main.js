result = "";

var buttons = document.querySelectorAll(".btn");
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.innerHTML.trim() == "DEL") {
      if (result != "") {
        result = result.substring(0, result.length - 1);
      } else if ((result = "0")) {
        result = result;
      }
    } else if (button.innerHTML.trim() == "AC") {
      result = "";
    } else if (button.innerHTML.trim() == "=") {
      result = eval(result).toString();
    } else {
      result = result + button.innerHTML.trim();
    }
    var area = document.querySelector(".area");
    area.innerHTML = result;
  })
);
