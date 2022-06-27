const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const input = document.getElementById("barcode");
  const correctP = document.getElementsByClassName(
    "wrapper__message__correct"
  )[0];
  const incorrectP = document.getElementsByClassName(
    "wrapper__message__incorrect"
  )[0];

  const value = document.getElementById("barcode").value;
  let arr = value.split(" ");
  if(arr.length === 1){
    arr = [...value];
  }
  
  const lastElement = parseInt(arr[arr.length - 1]);
  let display = true;
  arr.pop();

  const sumOddsMbt =
    arr
      .filter((number, index) => index % 2 === 1)
      .reduce((acc, cur) => parseInt(acc) + parseInt(cur)) * 3;

  const sumEvensAndPlusmbt =
    arr
      .filter((number, index) => index % 2 === 0)
      .reduce((acc, cur) => parseInt(acc) + parseInt(cur)) + sumOddsMbt;

  const result = 10 - (sumEvensAndPlusmbt % 10);
  display = result === lastElement ? true : false;

  if (display) {
    correctP.classList.add("active");
    incorrectP.classList.remove("active", "wrong");
  } else {
    incorrectP.classList.add("active");
    input.classList.add("wrong");
    correctP.classList.remove("active");
  }
});
