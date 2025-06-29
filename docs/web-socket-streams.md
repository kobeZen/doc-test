---
title: "Web-Socket-Streams"
---



# Change Log

2023-07-15: update `Partial Book Depth`  support 200 levels and Update Speed.

2022-10-11: add field as symbol,eventType,eventTime to Partial Depth Stream.

2022-08-24: change /ws/ to /openapi/quote/ws 

2022-08-19: add ping frame


# Web Socket Streams for coins (2022-08-15)
# General WSS information
* The base endpoint is: **wss://wsapi.pro.coins.ph**
* Streams can be accessed either in a single raw stream or in a combined stream
* Raw streams are accessed at **/openapi/quote/ws/v3/\<streamName\>**
* Combined streams are accessed at **/openapi/quote/stream?streams=\<streamName1\>/\<streamName2\>/\<streamName3\>**
* Combined stream events are wrapped as follows: **{"stream":"\<streamName\>","data":\<rawPayload\>}**
* All symbols for streams are **lowercase**
* The websocket client will send a `ping frame` every 5 minutes. If the websocket server does not receive a `ping frame` order write message from the connection within a 5 minute period, the connection will be disconnected. 

### Ping frame
* Request
  ```javascript
  {
    "ping":1660900682429 //System.currentTimeMillis()
  }
  ```

* Response
  ```javascript
  {
    "pong":1660900682429 //System.currentTimeMillis()
  }
  ```

## Websocket Limits
* A connection that goes beyond the limit will be disconnected; IPs that are repeatedly disconnected may be banned.
* A single connection can listen to a maximum of 1024 streams.

## Live Subscribing/Unsubscribing to streams

* The following data can be sent through the websocket instance in order to subscribe/unsubscribe from streams. Examples can be seen below.
* The `id` used in the JSON payloads is an unsigned INT used as an identifier to uniquely identify the messages going back and forth.
* In the response, if the `result` received is `null` this means the request sent was a success for non-query requests (e.g. Subscribing/Unsubscribing).

### Subscribe to a stream
* Request
  ```javascript
  {
    "method": "SUBSCRIBE",
    "params": [
      "btcusdt@aggTrade",
      "btcusdt@depth"
    ],
    "id": 1
  }
  ```

* Response
  ```javascript
  {
    "result": null,
    "id": 1
  }
  ```

### Unsubscribe to a stream
* Request
  ```javascript
  {
    "method": "UNSUBSCRIBE",
    "params": [
      "btcusdt@depth"
    ],
    "id": 312
  }
  ```

* Response
  ```javascript
  {
    "result": null,
    "id": 312
  }
  ```


### Listing Subscriptions
* Request
  ```javascript
  {
    "method": "LIST_SUBSCRIPTIONS",
    "id": 3
  }
  ```

* Response
  ```javascript
  {
    "result": [
      "btcusdt@aggTrade"
    ],
    "id": 3
  }
  ```

### Error Messages

Error Message | Description
---|---
{"code": 2, "msg": "Invalid request: property name must be a string"}| Property name provided was invalid
{"code": 2, "msg": "Invalid request: request ID must be an unsigned integer"}| Parameter `id` had to be provided or the value provided in the `id` parameter is an unsupported type
{"code": 2, "msg": "Invalid request: unknown variant %s, expected one of `SUBSCRIBE`, `UNSUBSCRIBE`, `LIST_SUBSCRIPTIONS`"} | Possible typo in the provided method or provided method was neither of the expected values
{"code": 2, "msg": "Invalid request: too many parameters"}| Unnecessary parameters provided in the data
{"code": 2, "msg": "Invalid request: missing field `method`"} | `method` was not provided in the data
{"code": 2, "msg": "Invalid request: STREAM [%s] was invalid."} | Stream was invalid
{"code": 2, "msg": "Invalid request: params must less than or equals 1024"} | Number of Streams must less than 1024
{"code":3,"msg":"Invalid JSON"} | JSON data sent has incorrect syntax.
{"code":"-100010","desc":"Invalid Symbols!"} | JSON data sent include symbol not supported.


# Detailed Stream information
## Aggregate Trade Streams
The Aggregate Trade Streams push trade information that is aggregated for a single taker order.

**Stream Name:** \<symbol\>@aggTrade

**Update Speed:** Real-time

**Payload:**
```javascript
{
  "e": "aggTrade",  // Event type
  "E": 123456789,   // Event time
  "s": "BNBBTC",    // Symbol
  "a": 12345,       // Aggregate trade ID
  "p": "0.001",     // Price
  "q": "100",       // Quantity
  "f": 100,         // First trade ID
  "l": 105,         // Last trade ID
  "T": 123456785,   // Trade time
  "m": true,        // Is the buyer the market maker?
  "M": true         // Ignore
}
```

## Trade Streams
The Trade Streams push raw trade information; each trade has a unique buyer and seller.

**Stream Name:** \<symbol\>@trade

**Update Speed:** Real-time

**Payload:**
```javascript
{
  "e": "trade",     // Event type
  "E": 123456789,   // Event time
  "s": "BNBBTC",    // Symbol
  "t": 12345,       // Trade ID
  "p": "0.001",     // Price
  "q": "100",       // Quantity
  "b": 88,          // Buyer order ID
  "a": 50,          // Seller order ID
  "T": 123456785,   // Trade time
  "m": true,        // Is the buyer the market maker?
  "M": true         // Ignore
}
```

## Kline/Candlestick Streams
The Kline/Candlestick Stream push updates to the current klines/candlestick every second.

**Kline/Candlestick chart intervals:**

m -> minutes; h -> hours; d -> days; w -> weeks; M -> months

* 1m
* 3m
* 5m
* 15m
* 30m
* 1h
* 2h
* 4h
* 6h
* 8h
* 12h
* 1d
* 3d
* 1w
* 1M

**Stream Name:** \<symbol\>@kline_\<interval\>

**Update Speed:** 2000ms

**Payload:**
```javascript
{
  "e": "kline",     // Event type
  "E": 123456789,   // Event time
  "s": "BNBBTC",    // Symbol
  "k": {
    "t": 123400000, // Kline start time
    "T": 123460000, // Kline close time
    "s": "BNBBTC",  // Symbol
    "i": "1m",      // Interval
    "f": 100,       // First trade ID
    "L": 200,       // Last trade ID
    "o": "0.0010",  // Open price
    "c": "0.0020",  // Close price
    "h": "0.0025",  // High price
    "l": "0.0015",  // Low price
    "v": "1000",    // Base asset volume
    "n": 100,       // Number of trades
    "x": false,     // Is this kline closed?
    "q": "1.0000",  // Quote asset volume
    "V": "500",     // Taker buy base asset volume
    "Q": "0.500",   // Taker buy quote asset volume
    "B": "123456"   // Ignore
  }
}
```

## Individual Symbol Mini Ticker Stream
24hr rolling window mini-ticker statistics. These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.The start time always starts on a minute, while the closing time is the current time of the update. As such, the effective window might be up to 59999ms wider that <window_size>.
for example: startTime = (System.currentTimeMillis() - 24 * 60 * 60 * 1000) / (60 * 1000) * 60 * 1000

**Stream Name:** \<symbol\>@miniTicker

**Update Speed:** 1000ms

**Payload:**
```javascript
  {
    "e": "24hrMiniTicker",  // Event type
    "E": 123456789,         // Event time
    "s": "BNBBTC",          // Symbol
    "c": "0.0025",          // Close price
    "o": "0.0010",          // Open price
    "h": "0.0025",          // High price
    "l": "0.0010",          // Low price
    "v": "10000",           // Total traded base asset volume
    "q": "18"               // Total traded quote asset volume
  }
```

## All Market Mini Tickers Stream
24hr rolling window mini-ticker statistics for all symbols that changed in an array. Note that only tickers that have changed will be present in the array.
The open time "O" always starts on a minute, while the closing time "C" is the current time of the update. As such, the effective window might be up to 59999ms wider that <window_size>.
for example: startTime = (System.currentTimeMillis() - 24 * 60 * 60 * 1000) / (60 * 1000) * 60 * 1000

**Stream Name:** !miniTicker@arr

**Update Speed:** 1000ms

**Payload:**
```javascript
[
  {
    // Same as <symbol>@miniTicker payload
  }
]
```

## Individual Symbol Ticker Streams
24hr rolling window ticker statistics for a single symbol. These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
The open time "O" always starts on a minute, while the closing time "C" is the current time of the update.
for example: startTime = (System.currentTimeMillis() - 24 * 60 * 60 * 1000) / (60 * 1000) * 60 * 1000

**Stream Name:** \<symbol\>@ticker

**Update Speed:** 1000ms

**Payload:**
```javascript
{
  "e": "24hrTicker",  // Event type
  "E": 123456789,     // Event time
  "s": "BNBBTC",      // Symbol
  "p": "0.0015",      // Price change
  "P": "250.00",      // Price change percent
  "w": "0.0018",      // Weighted average price
  "x": "0.0009",      // First trade(F)-1 price (first trade before the 24hr rolling window)
  "c": "0.0025",      // Last price
  "Q": "10",          // Last quantity
  "b": "0.0024",      // Best bid price
  "B": "10",          // Best bid quantity
  "a": "0.0026",      // Best ask price
  "A": "100",         // Best ask quantity
  "o": "0.0010",      // Open price
  "h": "0.0025",      // High price
  "l": "0.0010",      // Low price
  "v": "10000",       // Total traded base asset volume
  "q": "18",          // Total traded quote asset volume
  "O": 0,             // Statistics open time
  "C": 86400000,      // Statistics close time
  "F": 0,             // First trade ID
  "L": 18150,         // Last trade Id
  "n": 18151          // Total number of trades
}
```

## All Market Tickers Stream
24hr rolling window ticker statistics for all symbols that changed in an array. These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs. Note that only tickers that have changed will be present in the array.
The open time "O" always starts on a minute, while the closing time "C" is the current time of the update. As such, the effective window might be up to 59999ms wider that <window_size>.

**Stream Name:** !ticker@arr

**Update Speed:** 1000ms

**Payload:**
```javascript
[
  {
    // Same as <symbol>@ticker payload
  }
]
```


## Individual Symbol Book Ticker Streams
Pushes any update to the best bid or ask's price or quantity in real-time for a specified symbol.

**Stream Name:** \<symbol\>@bookTicker

**Update Speed:** Real-time

**Payload:**
```javascript
{
  "u":400900217,     // order book updateId
  "s":"BTCPHP",     // symbol
  "b":"25.35190000", // best bid price
  "B":"31.21000000", // best bid qty
  "a":"25.36520000", // best ask price
  "A":"40.66000000"  // best ask qty
}
```

## All Book Tickers Stream
Pushes any update to the best bid or ask's price or quantity in real-time for all symbols.

**Stream Name:** !bookTicker

**Update Speed:** Real-time

**Payload:**
```javascript
{
  // Same as <symbol>@bookTicker payload
}
```

## Partial Book Depth Streams
Top **\<levels\>** bids and asks, pushed every second. Valid **\<levels\>** are 5, 10, 20 or 200.

**Stream Names:** \<symbol\>@depth\<levels\> OR \<symbol\>@depth\<levels\>@100ms

**Update Speed:** 1000ms  for 200 levels, 100ms for other levels when there's update

**Payload:**
```javascript
{
  "s": "XRPPHP",         //symbol
  "e": "depth",          //eventType
  "E": 1665484484791,    //eventTime
  "lastUpdateId": 160,  // Last update ID
  "bids": [             // Bids to be updated
    [
      "0.0024",         // Price level to be updated
      "10"              // Quantity
    ]
  ],
  "asks": [             // Asks to be updated
    [
      "0.0026",         // Price level to be updated
      "100"            // Quantity
    ]
  ]
}
```

## Diff. Depth Stream
Order book price and quantity depth updates used to locally manage an order book.

**Stream Name:** \<symbol\>@depth OR \<symbol\>@depth@100ms

**Update Speed:** 1000ms or 100ms when there's update

**Payload:**
```javascript
{
  "e": "depthUpdate", // Event type
  "E": 123456789,     // Event time
  "s": "BNBBTC",      // Symbol
  "U": 157,           // First update ID in event
  "u": 160,           // Final update ID in event
  "b": [              // Bids to be updated
    [
      "0.0024",       // Price level to be updated
      "10"            // Quantity
    ]
  ],
  "a": [              // Asks to be updated
    [
      "0.0026",       // Price level to be updated
      "100"           // Quantity
    ]
  ]
}
```

## How to manage a local order book correctly
1. Open a stream to **wss://wsapi.pro.coins.ph/openapi/quote/stream?streams=btcphp@depth**.
2. Buffer the events you receive from the stream.
3. Get a depth snapshot from **https://api.pro.coins.ph/openapi/quote/v1/depth?symbol=BTCPHP** .
4. Drop any event where `u` is <= `lastUpdateId` in the snapshot.
5. The first processed event should have `U` <= `lastUpdateId`+1 **AND** `u` >= `lastUpdateId`+1.
6. While listening to the stream, each new event's `U` should be equal to the previous event's `u`+1.
7. The data in each event is the **absolute** quantity for a price level.
8. If the quantity is 0, **remove** the price level.
9. Receiving an event that removes a price level that is not in your local order book can happen and is normal.

Note: 
Due to depth snapshots having a limit on the number of price levels, a price level outside of the initial snapshot that doesn't have a quantity change won't have an update in the Diff. Depth Stream. Consequently, those price levels will not be visible in the local order book even when applying all updates from the Diff. Depth Stream correctly and cause the local order book to have some slight differences with the real order book. 
