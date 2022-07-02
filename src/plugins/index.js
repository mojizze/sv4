import * as numeral from "numeral";
import { format } from "date-fns";

export default {
  install: (app) => {
    app.config.globalProperties.$priceFormat = (value) => {
      return `₦${numeral(value).format("0,0.00")}`;
    };

    app.config.globalProperties.$timeFormat = (
      value = null,
      formatString = "d LLLL uuu - hh:mm bbb"
    ) => {
      if (!value) {
        return format(new Date(), formatString);
      }

      return format(value, formatString);
    };
  },
};
