export default function EListener() {
	var self = this;
	
	self.onDataUpdatedListeners = [];
	
	self.onUpdated = function(_this, fn) {
		var index = -1, i;
		for(i = 0; i < self.onDataUpdatedListeners.length; ++i) {
			if (self.onDataUpdatedListeners[i].name === _this.constructor.name) {
				index = i;
				break;
			}
		}
		if (i === -1) {
            self.onDataUpdatedListeners.push({ name: _this.constructor.name, fn: fn });
        } else {
            self.onDataUpdatedListeners[i] = { name: _this.constructor.name, fn: fn };
        }
    };

    self.dataUpdated = function(fm) {
		var i;
		for(i = 0; i < self.onDataUpdatedListeners.length; ++i) {
			self.onDataUpdatedListeners[i].fn(fm);
		}
    };
}