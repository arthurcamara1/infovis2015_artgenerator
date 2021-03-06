//Base painter

/* 
 * base painter constructor
 * @param {Object} canvas canvas object
 * @param {Object} ctx Canvas context
 */
var basePainter = function() {};

/* 
 * empty set of brushes
 */
basePainter.prototype.brushes = [];

/* 
 * initializes a painter
 */
basePainter.prototype.init = function(canvas, ctx, options) {
    this.canvas = canvas;
    this.ctx = ctx;
    for (var i = 0; i < this.brushes.length; i++) {
        var brush = ARTGEN._brushes.get(this.brushes[i]);
        this.brushes[i] = new brush();
        this.brushes[i].init(ctx);
    };

    if (this.options) {
        //compute defaults
        var defaults = {};
        _.forIn(this.options, function(value, key) {
            defaults[key] = value.options[0];
        });

        options = (_.isPlainObject(options)) ? options : {};

        this.options = _.extend(defaults, options);
    }
};

/* 
 * setup bruhes
 */
basePainter.prototype.setup = function() {
    //placeholder method
};

/* 
 * gets one of the brushes that this painter uses
 */
basePainter.prototype.getBrush = function(name) {
    return this.brushes[name];
};