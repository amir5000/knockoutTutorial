(function(){
	var carMakerVM = function() {
		this.car = ko.observable(),
		this.array = ko.observableArray(),
		this.addCar = function () {
			this.array.push(this.car());
		}
	};
	ko.applyBindings(new carMakerVM());
})();	