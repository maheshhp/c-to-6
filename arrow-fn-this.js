const foot = {
  kick() {
    this.yelp = "Ouch!";
    setImmediate(function () {
      console.log(this.yelp);
    });
  },
};
foot.kick();
module.exports = foot;
