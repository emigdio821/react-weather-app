import Moment from "moment";
import TransformWeather from "./TransformWeather";

const TransformForecast = data =>
  data.list
    // .filter(
    //   item =>
    //     Moment.unix(item.dt).hour() === 6 ||
    //     Moment.unix(item.dt).hour() === 12 ||
    //     Moment.unix(item.dt).hour() === 18
    // )
    .map(item => ({
      weekDay: Moment.unix(item.dt).format("dddd"),
      hour: Moment.unix(item.dt).hour(),
      data: TransformWeather(item)
    }));

export default TransformForecast;
