(function(){
	var carMakerVM = function() {
		this.numberOfClicks = ko.observable(0);
		this.car = ko.observable();
		this.array = ko.observableArray();
		this.addCar = function () {
			this.array.push(this.car());
			this.numberOfClicks(this.numberOfClicks() + 1);
			this.car("");
		}
	};
	ko.applyBindings(new carMakerVM());
})();