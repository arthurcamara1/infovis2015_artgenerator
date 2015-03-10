ARTGEN.addPainter('ondrugs', {
	//brushes: ['vortex'],
	//brushes: ['cannon'],
	brushes: ['transient'],
    paint: function(time, data){
    	var moon = this.getBrush(0);
    	if(!this._instantiated){
    		moon.setColor(randomColor());
    		moon.start(this.ctx,this.canvas);
    		this._instantiated = true;
    	}
    	moon.update(this.canvas,this.ctx,data);
    	moon.draw(this.ctx);
    }
})