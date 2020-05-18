/*********
*
* D3 example #01:
* Introduction to SVG
* Selecting elements
* Manipulating attributes
* Maybe even scales!
*
*********/

(function () {

  var cities = [
    {
      name: 'Washington, DC',
      population: 0.7,
      continent: 'North America'
    },
    {
      name: 'Los Angeles',
      population: 5,
      continent: 'North America'
    },
    {
      name: 'Jakarta',
      population: 9.5,
      contient: 'Asia'
    },
    {
      name: 'Delhi',
      population: 19,
      contient: 'Asia'
    },
    {
      name: 'Moscow',
      population: 12,
      contient: 'Asia'
    },
    {
      name: 'Paris',
      population: 2.24,
      continent: 'Europe'
    },
    {
      name: 'London',
      population: 8.79,
      continent: 'Europe'
    }
  ]  


  // color scale website: http://colorbrewer2.org/

  var colorScale = d3.scaleLinear()
  var lengthSize = d3.scaleLinear()
  var continentScale = d3.scaleOrdinal()
  var radiusScale = d3.scaleSqrt()
  
  // d3 code goes here

})