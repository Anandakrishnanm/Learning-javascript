const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
const {today : {low : lowToday , high : highToday }} = LOCAL_FORECAST;
const {yesterday : {low : lowYesterday} , tomorrow : {low : lowTomorrow}} = LOCAL_FORECAST;