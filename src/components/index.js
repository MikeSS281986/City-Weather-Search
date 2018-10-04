let root = new Vue({
  el: "#root",

  data: {
    temp: "-",
    city: "",
    cityInput: "",
    error: false
  },

  methods: {
    getWeather() {
      const key = process.env.SECRET_KEY;
      if (this.city == "") {
        console.log("error");
      } else {
        fetch(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            this.city +
            ",US&units=imperial&APPID=" +
            key
        )
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              this.error = true;
              this.cityInput = "";
              this.temp = "-";
              throw Error(`Request rejected with status ${res.status}`);
            }
          })
          .catch(console.error)
          .then(
            (this.cityInput =
              this.city
                .toLowerCase()
                .charAt(0)
                .toUpperCase() + this.city.slice(1))
          )
          .then(data => {
            // console.log(Math.round(data.main.temp));
            this.temp = Math.round(data.main.temp);
          });
      }
    },

    reset() {
      this.city = "";
      this.error = false;
    }
  }
});
