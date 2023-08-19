function handleClickToTriangle() {
  const base = getInputValue("base");
  const height = getInputValue("height");
  const area = 0.5 * base * height;
  setAreaValue("triangleArea", area);
  calculateAreaValueToEntry("triangle", area);
}
function handleClickToRectangular() {
  const width = getInputValue("width");
  const length = getInputValue("length");
  const area = width * length;
  setAreaValue("rectangularArea", area);
  calculateAreaValueToEntry("rectangularArea", area);
}
function handleClickToParallelogram() {
  const b = getInputValue("major");
  const h = getInputValue("minor");
  const parallelogramArea = b * h;
  setAreaValue("parallelogramArea", parallelogramArea);
  calculateAreaValueToEntry("parallelogramArea", parallelogramArea);
}

function getInputValue(inputId) {
  const fieldValue = document.getElementById(inputId);
  const inputValue = fieldValue.value;
  const value = parseFloat(inputValue);
  return value;
}

function setAreaValue(inputId, area) {
  const textValue = document.getElementById(inputId);
  textValue.innerText = area;
}

function calculateAreaValueToEntry(areaType, area) {
  const calculation = document.getElementById("calculationEntry");
  const count = calculation.childElementCount;
  const p = document.createElement("p");
  p.innerHTML = ` ${
    count + 1
  }.${areaType} ${area} <button class=  "btn btn-primary btn-sm mb-2 ">Convert</button>`;
  calculation.appendChild(p);
}
