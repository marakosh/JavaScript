var car = {
    manufacturer: "Mercedes",
    model: "AMG GT 63",
    year: 2023,
    averageSpeed: 100,
  
    displayInfo: function() {
      console.log("Manufacturer: " + this.manufacturer);
      console.log("Model: " + this.model);
      console.log("Year: " + this.year);
      console.log("Average Speed: " + this.averageSpeed + " km/h");
    },
  
    calculateTravelTime: function(distance) {
      var travelTime = distance / this.averageSpeed; 
      var breaks = Math.floor(travelTime / 4);
  
      var totalTravelTime = travelTime + breaks;
  
      return totalTravelTime;
    }
  };
  

  car.displayInfo();
  

  var distance = 300; 
  var travelTime = car.calculateTravelTime(distance);
  console.log("Время в пути: " + travelTime + " часов");
  