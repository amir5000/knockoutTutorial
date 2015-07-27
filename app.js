
(function(){
	var carMaker = {
		car: ko.observable(),
		array: ko.observableArray(),
		addCar: function () {
			this.array.push(this.car());
		}
	};

	carMaker.array.push('Car Makers:');
	ko.applyBindings(carMaker);
})();