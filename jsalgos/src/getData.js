const dfd = require('danfojs');




export function convertTime(series) {
    let time = [];

    const times = series.values

    times.forEach(element => {
        let date = new Date(element)
        time.push(date.toLocaleDateString('en-US'))
    });


    // for(let i =0; i < length; i++){

    //     let date = new Date(series.iloc([i])['$data'][0])
    //     time.push(date)
    //     // console.log(series.iloc([i])['$data'][0])
    // }
    return time
}

export const calculateYield = (side, price) => {
  let percentage = 0.0
  let arrayToReturn = []
  let num = 0

  const sides = side.values
  const prices = price.values

  while(num < sides.length) {
    if(sides[num] === "BUY"){
      arrayToReturn.push(percentage.toFixed(2))
    } else {
      let amount = (((prices[num] * 1) - (prices[(num-1)] *1))/(prices[(num-1)] * 1)) * 100
      percentage = percentage + amount
      arrayToReturn.push(percentage.toFixed(2))
    }
    num++
  }

  return arrayToReturn
}

const simpleMovingAverage = (series, period) => {

    let prices = series.values

    let i = 0
    let sum = 0

    while(i < period){
        sum = sum + (prices[i] * 1)
        i++
    }

    const sma = sum/period

    return sma
}


const estimatedMovingAverage = (series, sma, period) => {
  // EMA = Closing price x multiplier + EMA (previous day) x (1-multiplier)

  // multiplier = [2 ÷ (period + 1)]

  const multiplier = [2 / (period + 1)]

  let priceArray = series.values

  let emaArray = [];
  let num = 0

  while(num < (period-1)) {
      emaArray.push(NaN)
      num++
  }

  emaArray.push(sma)

  while(num < (priceArray.length - 1)){
      let nums = num - 1
      let ema = (priceArray[num] * 1) * multiplier + emaArray[num] * (1 - multiplier)
      emaArray.push(ema)
      num++
  }

  return emaArray
}



export async function getData(inputEmaOne, inputEmaTwo, name) {
  // Fetch data from external API
  const emaFirst = (inputEmaOne * 1);
  const emaSecond = (inputEmaTwo * 1);

  console.log(emaFirst, emaSecond)

  const limit = (emaSecond * 1) + 365

  const res = await fetch(`https://api.binance.us/api/v3/klines?symbol=${name}USDT&interval=1d&limit=${limit}`)
  const data = await res.json()

  

  let df = new dfd.DataFrame(data, {columns:['Open Time', 'Open', 'High', 'Low', 'Close', 'Volume', 'CloseTime', 'Quote Asset Volume', '# Of Trades', 'Buy Base Volume', 'Buy Quote Volume', 'ignore']})


  df.drop({ columns: ['Volume', 'Open Time', 'Quote Asset Volume','High', 'Low',  '# Of Trades', 'Buy Base Volume', 'Buy Quote Volume', 'ignore'], inplace : true});

  const smaOne = simpleMovingAverage(df['Close'], emaFirst);
  const smaTwo = simpleMovingAverage(df['Close'], emaSecond);
  console.log(smaTwo)

  const emaOne = new dfd.Series(estimatedMovingAverage(df['Close'], smaOne, emaFirst));
  const emaTwo = new dfd.Series(estimatedMovingAverage(df['Close'], smaTwo, emaSecond));

  const emaDifference = emaOne.sub(emaTwo)

  df.addColumn("EMA_Cross", emaDifference, { inplace: true })
  df.addColumn(`EMA_${emaFirst}`, emaOne, { inplace: true })
  df.addColumn(`EMA_${emaSecond}`, emaTwo, { inplace: true })

  // df.print()

  df.dropNa({inplace:true})
  df.resetIndex({inplace:true})

  const dfLength = df.shape[0]
  let jsonObj = []
  let num = 0
  let inTrade = false;
  let firstCrossOver = false


  while ( num < dfLength) {
    let checker = df.iloc({rows: [num]})['$data'][0][3]
    let objToAppend = df.iloc({rows: [num]})['$data'][0]
    
    if(firstCrossOver){
      if (!inTrade) {
        if (checker < 0) {
          objToAppend.push("BUY");
          jsonObj.push(objToAppend);
          inTrade = true
          num++
        } else { objToAppend.push(NaN);
                jsonObj.push(objToAppend);
                num++}
      } else if (inTrade) {
        if (checker > 0 ) {
          objToAppend.push("SELL");
          jsonObj.push(objToAppend);
          inTrade = false
          num++
        } else  { objToAppend.push(NaN);
                jsonObj.push(objToAppend); 
                num++}
      }
    } else{
      if (checker < 0){
        objToAppend.push(NaN);
        jsonObj.push(objToAppend);
        num++
      } else {
        objToAppend.push(NaN);
        jsonObj.push(objToAppend);
        num++
        firstCrossOver = true
      }
    }

  }
  // console.log(jsonObj)
  // Pass data to the page via props
  return jsonObj
}

