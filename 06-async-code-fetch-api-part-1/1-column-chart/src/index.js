import fetchJson from './utils/fetch-json.js';

const BACKEND_URL = 'https://course-js.javascript.ru';

export default class ColumnChart {

  constructor(url, ...) {

    this.render();
    this.loadData();
  }

  loadData () {

    // n seconds
    fetchJson(this.url)
      .then(data => {
        console.error(data);

        // this.subElement.body = this.renderData(data);
      })
  }
}
