import * as numeral from "numeral";

export default {
  install: (app) => {
    app.config.globalProperties.$priceFormat = (value) => {
      return `₦${numeral(value).format("0,0.00")}`;
    };
  },
};
