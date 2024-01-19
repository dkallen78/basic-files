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
//Math                                                  //
//------------------------------------------------------//

function factorial(number) {
  //----------------------------------------------------//
  //Finds the factorial of a number                     //
  //----------------------------------------------------//
  //number(integer): number to find the factorial of    //
  //----------------------------------------------------//
  //return(integer): factorial value of the number      //
  //----------------------------------------------------//

  if (number === 1) {
    return 1
  } else {
    return number * factorial(number - 1);
  }
}

function findSemiMinor(a, e) {
  /*----------------------------------------------------//
  //Finds the semi-minor axis of an ellipse             //
  //----------------------------------------------------//
  //a(float): semi-major axis of ellipse                //
  //e(float): eccentricity of ellipse                   //
  //----------------------------------------------------//
  //return(float): semi-minor axis of an ellipse        //
  //----------------------------------------------------*/

  return (a * Math.sqrt(1 - (e ** 2)));
}

function findFocus(a, b) {
  //----------------------------------------------------//
  //Finds the distance from the center of an ellipse to //
  //  its foci                                          //
  //----------------------------------------------------//
  //a(float): semi-major axis of ellipse                //
  //b(float): semi-minor axis of ellipse                //
  //----------------------------------------------------//
  //return(float): distance from center of an ellipse   //
  //  to its foci                                       //
  //----------------------------------------------------//

  return (Math.sqrt((a ** 2) - (b ** 2)));
}

function toRad(deg) {
	//----------------------------------------------------//
	//Converts an angle in degrees to an angle in radians	//
	//----------------------------------------------------//
	//deg(float): angle to be converted to radians				//
	//----------------------------------------------------//
	//return(float): converted degrees in radians					//
	//----------------------------------------------------//

	return deg * (Math.PI / 180);
}

function toDeg(rad) {
	//----------------------------------------------------//
	//Converts an angle in radians to an angle in degrees	//
	//----------------------------------------------------//
	//deg(float): angle to be converted to degrees				//
	//----------------------------------------------------//
	//return(float): converted radians in degrees					//
	//----------------------------------------------------//

	return rad * (180 / Math.PI);
}

class Point {
	//----------------------------------------------------//
	//A data structure to make managing and representing	//
	//	Cartesian points easier														//
	//----------------------------------------------------//
	//x(float): x coordinate of the point									//
	//y(float): y coordinate of the point									//
	//----------------------------------------------------//

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

	static center(p1, p2) {
		//----------------------------------------------------//
		//Finds the center point between p1 and p2						//
		//----------------------------------------------------//
		//p1, p2(Point): points to find the center of					//
		//----------------------------------------------------//
		//return(Point): the point at the midpoint between the//
		//	original two points																//
		//----------------------------------------------------//

		const midX = (p1.x + p2.x) / 2;
		const midY = (p1.y + p2.y) / 2;
		const newCenter = new Point(midX, midY);
		return newCenter;
	}

  static distance(p1, p2) {
    /*----------------------------------------------------//
    //Finds the  distance between two points on a         //
    //  cartesian plane using the Pythagorean theorem     //
    //----------------------------------------------------//
    //p1(Point): first point                              //
    //p2(Point): second point                             //
    //----------------------------------------------------//
    //return(float): distance between two points          //
    //----------------------------------------------------*/
  
    return (Math.sqrt(((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2))).toFixed(4);
  }

	static vector(p1, p2) {
		//----------------------------------------------------//
		//Finds the vector from p1 to p2											//
		//----------------------------------------------------//
		//p1, p2(Point): points on the vector to be found			//
		//----------------------------------------------------//
		//return(Point): the vector from p1 to p2							//
		//----------------------------------------------------//

		const vecX = (p1.x - p2.x);
		const vecY = (p1.y - p2.y);
		const newVector = new Point(vecX, vecY);
		return newVector;
	}
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

function makeSVGcircle(x, y, r) {
  //----------------------------------------------------//
  //Makes an SVG <circle> element                       //
  //----------------------------------------------------//
  //x(float): the x coordinate of the circle's center   //
  //y(float): the y coordinate of the circle's center   //
  //r(float): the radius of the circle                  //
  //----------------------------------------------------//
  //return(element): SVG <circle> element               //
  //----------------------------------------------------//

  let circle = makeSVG("circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", r);
  return circle;
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
  img.src = src;
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
