function rnd(floor, ceiling) {
  //----------------------------------------------------//
  //Generates a random number within a range of numbers //
  //----------------------------------------------------//
  //floor(integer): lower bound of the random number    //
  //ceiling(integer): upper bound of the random number  //
  //----------------------------------------------------//
  //return(integer): random number w/in the range       //
  //----------------------------------------------------//

  let range = (ceiling - floor) + 1;
  return Math.floor((Math.random() * range) + floor);
}

function vw(v) {
  //----------------------------------------------------//
  //I found this online. It finds the pixel value of a  //
  //  CSS vw value.                                     //
  //----------------------------------------------------//
  //integer-> v: the percentage of vw to convert into a //
  //  pixel value                                       //
  //----------------------------------------------------//
  //return(integer): pixels from the left of the screen //
  //----------------------------------------------------//

  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

//------------------------------------------------------//
//DOM manipulation                                      //
//------------------------------------------------------//

function makeSVG(type, id, ...classes) {
  //----------------------------------------------------//
  //Returns an SVG element of the type indicated        //
  //----------------------------------------------------//
  //type(string): type of SVG element to create         //
  //id(string): id of the element                       //
  //classes(string): classes to add to the element       //
  //----------------------------------------------------//
  //return(element): SVG element                        //
  //----------------------------------------------------//

  let svg = document.createElementNS("http://www.w3.org/2000/svg", type);
  if (typeof id === "string") {svg.id = id}
  classes.forEach(x => svg.classList.add(x));
  return svg;
}

function makeElement(type, id, ...classes) {
  //----------------------------------------------------//
  //Returns an HTML element                             //
  //----------------------------------------------------//
  //type(string): type of HTML element to create        //
  //id(string): id of the element                       //
  //classes(string): classes to add to the element      //
  //----------------------------------------------------//
  //return(element): HTML element                       //
  //----------------------------------------------------//

  let element = document.createElement(type);
  if (typeof id === "string") {element.id = id}
  classes.forEach(x => element.classList.add(x));
  return element;
}

function makeImg(src, id, ...classes) {
  //----------------------------------------------------//
  //Returns an <img> element                            //
  //----------------------------------------------------//
  //src(string): file path to the image file            //
  //id(string): id of the <img> element                 //
  //classes(string): classes to add to the <img> element//
  //----------------------------------------------------//
  //return(element): <img> element                      //
  //----------------------------------------------------//

  let img = makeElement("img", id, ...classes);
  //let img = document.createElement("img");
  img.src = src;
  //if (typeof id === "string") {img.id = id}
  //classes.forEach(x => img.classList.add(x));
  return img;
}

function clearElement(...elements) {
  //----------------------------------------------------//
  //Clears the innerHTML of any number of elements      //
  //----------------------------------------------------//
  //DOM element-> elements: elements to be cleared      //
  //----------------------------------------------------//

  elements.forEach(x => x.innerHTML = "");
}

function removeElement(...elements) {
  //----------------------------------------------------//
  //Removes elements from the DOM                       //
  //----------------------------------------------------//
  //DOM element-> elements: elements to be removed      //
  //----------------------------------------------------//

  elements.forEach(x => x.parentNode.removeChild(x));
}

//------------------------------------------------------//
//String manipulation                                   //
//------------------------------------------------------//

function insertCommas(x) {
  //----------------------------------------------------//
  //Inserts commas between every third digit of a number//
  //  to increase readability on larger numbers         //
  //----------------------------------------------------//
  //x(string/number): number to insert commas into      //
  //----------------------------------------------------//
  //return(string): number w/ commas                    //
  //----------------------------------------------------//

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
