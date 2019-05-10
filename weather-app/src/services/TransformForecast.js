import Moment from "moment";
import TransformWeather from "./TransformWeather";

const TransformForecast = data =>
  data.list
    .filter(
      item =>
        Moment.unix(item.dt).hour() === 7 ||
        Moment.unix(item.dt).hour() === 13 ||
        Moment.unix(item.dt).hour() === 19
    )
    .map(item => ({
      weekDay: Moment.unix(item.dt).format("dddd"),
      hour: Moment.unix(item.dt).hour(),
      data: TransformWeather(item)
    }));

export default TransformForecast;
