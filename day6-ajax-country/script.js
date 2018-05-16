const app = {
  init() {
    const searchBox = document.getElementById("searchBox");
    this.resultContainer = document.getElementById("result");
    this.countriesData = [];
    this.fetchCountryData().then(
      countries => (this.countriesData = [...countries])
    );
    // TODO: 加入 頁面顯示邏輯
    searchBox.addEventListener("keyup", this.handleSearch.bind(this));
  },
  handleSearch(evt) {
    const keyword = evt.target.value;
    const result = this.findFilteredCountry(this.countriesData, keyword);
    if (result.length > 0) {
      this.appendResult(result);
    }
  },
  findFilteredCountry(countries, keyword) {
    return countries.filter(country => {
      const regex = new RegExp(keyword, "g");
      return country.CityName.match(regex);
    }, keyword);
  },
  fetchCountryData() {
    const taiwanCountryJson = "./taiwanCountry.json";
    return new Promise((resolve, reject) => {
      fetch(taiwanCountryJson)
        .then(response => {
          return response.json();
        })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject("沒救哩");
        });
    });
  },
  appendResult(result) {
    let tpl = '';
    tpl = result.reduce((tpl, r, i) => {
      return `${tpl}<div class="result-tab">${r.CityName}</div>`;
    }, tpl);
    this.resultContainer.innerHTML = tpl;
  }
};


window.addEventListener('load', app.init());
