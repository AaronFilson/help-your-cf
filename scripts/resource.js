var Resource = function(opts) {
  this.url = opts.url;
  this.title = opts.title;
  this.contentPage= opts.contentPage; //nav, like productivity , food
  this.category = opts.category;//food truck, restaurant and diner
  this.subcategory = opts.subcategory; //thailand food, mexico...
  this.mainContent = opts.mainContent;
  this.description = opts.description;
  this.author = opts.author;
  this.date = opts.date;
  this.image = opts.image;
};
