<template><div><h1 id="change-log" tabindex="-1"><a class="header-anchor" href="#change-log"><span>Change Log</span></a></h1>
<p>2023-07-15: update <code v-pre>Partial Book Depth</code>  support 200 levels and Update Speed.</p>
<p>2022-10-11: add field as symbol,eventType,eventTime to Partial Depth Stream.</p>
<p>2022-08-24: change /ws/ to /openapi/quote/ws</p>
<p>2022-08-19: add ping frame</p>
<h1 id="web-socket-streams-for-coins-2022-08-15" tabindex="-1"><a class="header-anchor" href="#web-socket-streams-for-coins-2022-08-15"><span>Web Socket Streams for coins (2022-08-15)</span></a></h1>
<h1 id="general-wss-information" tabindex="-1"><a class="header-anchor" href="#general-wss-information"><span>General WSS information</span></a></h1>
<ul>
<li>The base endpoint is: <strong>wss://wsapi.pro.coins.ph</strong></li>
<li>Streams can be accessed either in a single raw stream or in a combined stream</li>
<li>Raw streams are accessed at <strong>/openapi/quote/ws/v3/&lt;streamName&gt;</strong></li>
<li>Combined streams are accessed at <strong>/openapi/quote/stream?streams=&lt;streamName1&gt;/&lt;streamName2&gt;/&lt;streamName3&gt;</strong></li>
<li>Combined stream events are wrapped as follows: <strong>{&quot;stream&quot;:&quot;&lt;streamName&gt;&quot;,&quot;data&quot;:&lt;rawPayload&gt;}</strong></li>
<li>All symbols for streams are <strong>lowercase</strong></li>
<li>The websocket client will send a <code v-pre>ping frame</code> every 5 minutes. If the websocket server does not receive a <code v-pre>ping frame</code> order write message from the connection within a 5 minute period, the connection will be disconnected.</li>
</ul>
<h3 id="ping-frame" tabindex="-1"><a class="header-anchor" href="#ping-frame"><span>Ping frame</span></a></h3>
<ul>
<li>
<p>Request</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"ping"</span><span class="token operator">:</span><span class="token number">1660900682429</span> <span class="token comment">//System.currentTimeMillis()</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Response</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"pong"</span><span class="token operator">:</span><span class="token number">1660900682429</span> <span class="token comment">//System.currentTimeMillis()</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="websocket-limits" tabindex="-1"><a class="header-anchor" href="#websocket-limits"><span>Websocket Limits</span></a></h2>
<ul>
<li>A connection that goes beyond the limit will be disconnected; IPs that are repeatedly disconnected may be banned.</li>
<li>A single connection can listen to a maximum of 1024 streams.</li>
</ul>
<h2 id="live-subscribing-unsubscribing-to-streams" tabindex="-1"><a class="header-anchor" href="#live-subscribing-unsubscribing-to-streams"><span>Live Subscribing/Unsubscribing to streams</span></a></h2>
<ul>
<li>The following data can be sent through the websocket instance in order to subscribe/unsubscribe from streams. Examples can be seen below.</li>
<li>The <code v-pre>id</code> used in the JSON payloads is an unsigned INT used as an identifier to uniquely identify the messages going back and forth.</li>
<li>In the response, if the <code v-pre>result</code> received is <code v-pre>null</code> this means the request sent was a success for non-query requests (e.g. Subscribing/Unsubscribing).</li>
</ul>
<h3 id="subscribe-to-a-stream" tabindex="-1"><a class="header-anchor" href="#subscribe-to-a-stream"><span>Subscribe to a stream</span></a></h3>
<ul>
<li>
<p>Request</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"method"</span><span class="token operator">:</span> <span class="token string">"SUBSCRIBE"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"params"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"btcusdt@aggTrade"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"btcusdt@depth"</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Response</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"result"</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="unsubscribe-to-a-stream" tabindex="-1"><a class="header-anchor" href="#unsubscribe-to-a-stream"><span>Unsubscribe to a stream</span></a></h3>
<ul>
<li>
<p>Request</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"method"</span><span class="token operator">:</span> <span class="token string">"UNSUBSCRIBE"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"params"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"btcusdt@depth"</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">312</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Response</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"result"</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">312</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="listing-subscriptions" tabindex="-1"><a class="header-anchor" href="#listing-subscriptions"><span>Listing Subscriptions</span></a></h3>
<ul>
<li>
<p>Request</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"method"</span><span class="token operator">:</span> <span class="token string">"LIST_SUBSCRIPTIONS"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Response</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"result"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"btcusdt@aggTrade"</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="error-messages" tabindex="-1"><a class="header-anchor" href="#error-messages"><span>Error Messages</span></a></h3>
<table>
<thead>
<tr>
<th>Error Message</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>{&quot;code&quot;: 2, &quot;msg&quot;: &quot;Invalid request: property name must be a string&quot;}</td>
<td>Property name provided was invalid</td>
</tr>
<tr>
<td>{&quot;code&quot;: 2, &quot;msg&quot;: &quot;Invalid request: request ID must be an unsigned integer&quot;}</td>
<td>Parameter <code v-pre>id</code> had to be provided or the value provided in the <code v-pre>id</code> parameter is an unsupported type</td>
</tr>
<tr>
<td>{&quot;code&quot;: 2, &quot;msg&quot;: &quot;Invalid request: unknown variant %s, expected one of <code v-pre>SUBSCRIBE</code>, <code v-pre>UNSUBSCRIBE</code>, <code v-pre>LIST_SUBSCRIPTIONS</code>&quot;}</td>
<td>Possible typo in the provided method or provided method was neither of the expected values</td>
</tr>
<tr>
<td>{&quot;code&quot;: 2, &quot;msg&quot;: &quot;Invalid request: too many parameters&quot;}</td>
<td>Unnecessary parameters provided in the data</td>
</tr>
<tr>
<td>{&quot;code&quot;: 2, &quot;msg&quot;: &quot;Invalid request: missing field <code v-pre>method</code>&quot;}</td>
<td><code v-pre>method</code> was not provided in the data</td>
</tr>
<tr>
<td>{&quot;code&quot;: 2, &quot;msg&quot;: &quot;Invalid request: STREAM [%s] was invalid.&quot;}</td>
<td>Stream was invalid</td>
</tr>
<tr>
<td>{&quot;code&quot;: 2, &quot;msg&quot;: &quot;Invalid request: params must less than or equals 1024&quot;}</td>
<td>Number of Streams must less than 1024</td>
</tr>
<tr>
<td>{&quot;code&quot;:3,&quot;msg&quot;:&quot;Invalid JSON&quot;}</td>
<td>JSON data sent has incorrect syntax.</td>
</tr>
<tr>
<td>{&quot;code&quot;:&quot;-100010&quot;,&quot;desc&quot;:&quot;Invalid Symbols!&quot;}</td>
<td>JSON data sent include symbol not supported.</td>
</tr>
</tbody>
</table>
<h1 id="detailed-stream-information" tabindex="-1"><a class="header-anchor" href="#detailed-stream-information"><span>Detailed Stream information</span></a></h1>
<h2 id="aggregate-trade-streams" tabindex="-1"><a class="header-anchor" href="#aggregate-trade-streams"><span>Aggregate Trade Streams</span></a></h2>
<p>The Aggregate Trade Streams push trade information that is aggregated for a single taker order.</p>
<p><strong>Stream Name:</strong> &lt;symbol&gt;@aggTrade</p>
<p><strong>Update Speed:</strong> Real-time</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"e"</span><span class="token operator">:</span> <span class="token string">"aggTrade"</span><span class="token punctuation">,</span>  <span class="token comment">// Event type</span></span>
<span class="line">  <span class="token string-property property">"E"</span><span class="token operator">:</span> <span class="token number">123456789</span><span class="token punctuation">,</span>   <span class="token comment">// Event time</span></span>
<span class="line">  <span class="token string-property property">"s"</span><span class="token operator">:</span> <span class="token string">"BNBBTC"</span><span class="token punctuation">,</span>    <span class="token comment">// Symbol</span></span>
<span class="line">  <span class="token string-property property">"a"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>       <span class="token comment">// Aggregate trade ID</span></span>
<span class="line">  <span class="token string-property property">"p"</span><span class="token operator">:</span> <span class="token string">"0.001"</span><span class="token punctuation">,</span>     <span class="token comment">// Price</span></span>
<span class="line">  <span class="token string-property property">"q"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span>       <span class="token comment">// Quantity</span></span>
<span class="line">  <span class="token string-property property">"f"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>         <span class="token comment">// First trade ID</span></span>
<span class="line">  <span class="token string-property property">"l"</span><span class="token operator">:</span> <span class="token number">105</span><span class="token punctuation">,</span>         <span class="token comment">// Last trade ID</span></span>
<span class="line">  <span class="token string-property property">"T"</span><span class="token operator">:</span> <span class="token number">123456785</span><span class="token punctuation">,</span>   <span class="token comment">// Trade time</span></span>
<span class="line">  <span class="token string-property property">"m"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// Is the buyer the market maker?</span></span>
<span class="line">  <span class="token string-property property">"M"</span><span class="token operator">:</span> <span class="token boolean">true</span>         <span class="token comment">// Ignore</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trade-streams" tabindex="-1"><a class="header-anchor" href="#trade-streams"><span>Trade Streams</span></a></h2>
<p>The Trade Streams push raw trade information; each trade has a unique buyer and seller.</p>
<p><strong>Stream Name:</strong> &lt;symbol&gt;@trade</p>
<p><strong>Update Speed:</strong> Real-time</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"e"</span><span class="token operator">:</span> <span class="token string">"trade"</span><span class="token punctuation">,</span>     <span class="token comment">// Event type</span></span>
<span class="line">  <span class="token string-property property">"E"</span><span class="token operator">:</span> <span class="token number">123456789</span><span class="token punctuation">,</span>   <span class="token comment">// Event time</span></span>
<span class="line">  <span class="token string-property property">"s"</span><span class="token operator">:</span> <span class="token string">"BNBBTC"</span><span class="token punctuation">,</span>    <span class="token comment">// Symbol</span></span>
<span class="line">  <span class="token string-property property">"t"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>       <span class="token comment">// Trade ID</span></span>
<span class="line">  <span class="token string-property property">"p"</span><span class="token operator">:</span> <span class="token string">"0.001"</span><span class="token punctuation">,</span>     <span class="token comment">// Price</span></span>
<span class="line">  <span class="token string-property property">"q"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span>       <span class="token comment">// Quantity</span></span>
<span class="line">  <span class="token string-property property">"b"</span><span class="token operator">:</span> <span class="token number">88</span><span class="token punctuation">,</span>          <span class="token comment">// Buyer order ID</span></span>
<span class="line">  <span class="token string-property property">"a"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>          <span class="token comment">// Seller order ID</span></span>
<span class="line">  <span class="token string-property property">"T"</span><span class="token operator">:</span> <span class="token number">123456785</span><span class="token punctuation">,</span>   <span class="token comment">// Trade time</span></span>
<span class="line">  <span class="token string-property property">"m"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// Is the buyer the market maker?</span></span>
<span class="line">  <span class="token string-property property">"M"</span><span class="token operator">:</span> <span class="token boolean">true</span>         <span class="token comment">// Ignore</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kline-candlestick-streams" tabindex="-1"><a class="header-anchor" href="#kline-candlestick-streams"><span>Kline/Candlestick Streams</span></a></h2>
<p>The Kline/Candlestick Stream push updates to the current klines/candlestick every second.</p>
<p><strong>Kline/Candlestick chart intervals:</strong></p>
<p>m -&gt; minutes; h -&gt; hours; d -&gt; days; w -&gt; weeks; M -&gt; months</p>
<ul>
<li>1m</li>
<li>3m</li>
<li>5m</li>
<li>15m</li>
<li>30m</li>
<li>1h</li>
<li>2h</li>
<li>4h</li>
<li>6h</li>
<li>8h</li>
<li>12h</li>
<li>1d</li>
<li>3d</li>
<li>1w</li>
<li>1M</li>
</ul>
<p><strong>Stream Name:</strong> &lt;symbol&gt;@kline_&lt;interval&gt;</p>
<p><strong>Update Speed:</strong> 2000ms</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"e"</span><span class="token operator">:</span> <span class="token string">"kline"</span><span class="token punctuation">,</span>     <span class="token comment">// Event type</span></span>
<span class="line">  <span class="token string-property property">"E"</span><span class="token operator">:</span> <span class="token number">123456789</span><span class="token punctuation">,</span>   <span class="token comment">// Event time</span></span>
<span class="line">  <span class="token string-property property">"s"</span><span class="token operator">:</span> <span class="token string">"BNBBTC"</span><span class="token punctuation">,</span>    <span class="token comment">// Symbol</span></span>
<span class="line">  <span class="token string-property property">"k"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"t"</span><span class="token operator">:</span> <span class="token number">123400000</span><span class="token punctuation">,</span> <span class="token comment">// Kline start time</span></span>
<span class="line">    <span class="token string-property property">"T"</span><span class="token operator">:</span> <span class="token number">123460000</span><span class="token punctuation">,</span> <span class="token comment">// Kline close time</span></span>
<span class="line">    <span class="token string-property property">"s"</span><span class="token operator">:</span> <span class="token string">"BNBBTC"</span><span class="token punctuation">,</span>  <span class="token comment">// Symbol</span></span>
<span class="line">    <span class="token string-property property">"i"</span><span class="token operator">:</span> <span class="token string">"1m"</span><span class="token punctuation">,</span>      <span class="token comment">// Interval</span></span>
<span class="line">    <span class="token string-property property">"f"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>       <span class="token comment">// First trade ID</span></span>
<span class="line">    <span class="token string-property property">"L"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>       <span class="token comment">// Last trade ID</span></span>
<span class="line">    <span class="token string-property property">"o"</span><span class="token operator">:</span> <span class="token string">"0.0010"</span><span class="token punctuation">,</span>  <span class="token comment">// Open price</span></span>
<span class="line">    <span class="token string-property property">"c"</span><span class="token operator">:</span> <span class="token string">"0.0020"</span><span class="token punctuation">,</span>  <span class="token comment">// Close price</span></span>
<span class="line">    <span class="token string-property property">"h"</span><span class="token operator">:</span> <span class="token string">"0.0025"</span><span class="token punctuation">,</span>  <span class="token comment">// High price</span></span>
<span class="line">    <span class="token string-property property">"l"</span><span class="token operator">:</span> <span class="token string">"0.0015"</span><span class="token punctuation">,</span>  <span class="token comment">// Low price</span></span>
<span class="line">    <span class="token string-property property">"v"</span><span class="token operator">:</span> <span class="token string">"1000"</span><span class="token punctuation">,</span>    <span class="token comment">// Base asset volume</span></span>
<span class="line">    <span class="token string-property property">"n"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>       <span class="token comment">// Number of trades</span></span>
<span class="line">    <span class="token string-property property">"x"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>     <span class="token comment">// Is this kline closed?</span></span>
<span class="line">    <span class="token string-property property">"q"</span><span class="token operator">:</span> <span class="token string">"1.0000"</span><span class="token punctuation">,</span>  <span class="token comment">// Quote asset volume</span></span>
<span class="line">    <span class="token string-property property">"V"</span><span class="token operator">:</span> <span class="token string">"500"</span><span class="token punctuation">,</span>     <span class="token comment">// Taker buy base asset volume</span></span>
<span class="line">    <span class="token string-property property">"Q"</span><span class="token operator">:</span> <span class="token string">"0.500"</span><span class="token punctuation">,</span>   <span class="token comment">// Taker buy quote asset volume</span></span>
<span class="line">    <span class="token string-property property">"B"</span><span class="token operator">:</span> <span class="token string">"123456"</span>   <span class="token comment">// Ignore</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="individual-symbol-mini-ticker-stream" tabindex="-1"><a class="header-anchor" href="#individual-symbol-mini-ticker-stream"><span>Individual Symbol Mini Ticker Stream</span></a></h2>
<p>24hr rolling window mini-ticker statistics. These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.The start time always starts on a minute, while the closing time is the current time of the update. As such, the effective window might be up to 59999ms wider that &lt;window_size&gt;.
for example: startTime = (System.currentTimeMillis() - 24 * 60 * 60 * 1000) / (60 * 1000) * 60 * 1000</p>
<p><strong>Stream Name:</strong> &lt;symbol&gt;@miniTicker</p>
<p><strong>Update Speed:</strong> 1000ms</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"e"</span><span class="token operator">:</span> <span class="token string">"24hrMiniTicker"</span><span class="token punctuation">,</span>  <span class="token comment">// Event type</span></span>
<span class="line">    <span class="token string-property property">"E"</span><span class="token operator">:</span> <span class="token number">123456789</span><span class="token punctuation">,</span>         <span class="token comment">// Event time</span></span>
<span class="line">    <span class="token string-property property">"s"</span><span class="token operator">:</span> <span class="token string">"BNBBTC"</span><span class="token punctuation">,</span>          <span class="token comment">// Symbol</span></span>
<span class="line">    <span class="token string-property property">"c"</span><span class="token operator">:</span> <span class="token string">"0.0025"</span><span class="token punctuation">,</span>          <span class="token comment">// Close price</span></span>
<span class="line">    <span class="token string-property property">"o"</span><span class="token operator">:</span> <span class="token string">"0.0010"</span><span class="token punctuation">,</span>          <span class="token comment">// Open price</span></span>
<span class="line">    <span class="token string-property property">"h"</span><span class="token operator">:</span> <span class="token string">"0.0025"</span><span class="token punctuation">,</span>          <span class="token comment">// High price</span></span>
<span class="line">    <span class="token string-property property">"l"</span><span class="token operator">:</span> <span class="token string">"0.0010"</span><span class="token punctuation">,</span>          <span class="token comment">// Low price</span></span>
<span class="line">    <span class="token string-property property">"v"</span><span class="token operator">:</span> <span class="token string">"10000"</span><span class="token punctuation">,</span>           <span class="token comment">// Total traded base asset volume</span></span>
<span class="line">    <span class="token string-property property">"q"</span><span class="token operator">:</span> <span class="token string">"18"</span>               <span class="token comment">// Total traded quote asset volume</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="all-market-mini-tickers-stream" tabindex="-1"><a class="header-anchor" href="#all-market-mini-tickers-stream"><span>All Market Mini Tickers Stream</span></a></h2>
<p>24hr rolling window mini-ticker statistics for all symbols that changed in an array. Note that only tickers that have changed will be present in the array.
The open time &quot;O&quot; always starts on a minute, while the closing time &quot;C&quot; is the current time of the update. As such, the effective window might be up to 59999ms wider that &lt;window_size&gt;.
for example: startTime = (System.currentTimeMillis() - 24 * 60 * 60 * 1000) / (60 * 1000) * 60 * 1000</p>
<p><strong>Stream Name:</strong> !miniTicker@arr</p>
<p><strong>Update Speed:</strong> 1000ms</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Same as &lt;symbol>@miniTicker payload</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="individual-symbol-ticker-streams" tabindex="-1"><a class="header-anchor" href="#individual-symbol-ticker-streams"><span>Individual Symbol Ticker Streams</span></a></h2>
<p>24hr rolling window ticker statistics for a single symbol. These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
The open time &quot;O&quot; always starts on a minute, while the closing time &quot;C&quot; is the current time of the update.
for example: startTime = (System.currentTimeMillis() - 24 * 60 * 60 * 1000) / (60 * 1000) * 60 * 1000</p>
<p><strong>Stream Name:</strong> &lt;symbol&gt;@ticker</p>
<p><strong>Update Speed:</strong> 1000ms</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"e"</span><span class="token operator">:</span> <span class="token string">"24hrTicker"</span><span class="token punctuation">,</span>  <span class="token comment">// Event type</span></span>
<span class="line">  <span class="token string-property property">"E"</span><span class="token operator">:</span> <span class="token number">123456789</span><span class="token punctuation">,</span>     <span class="token comment">// Event time</span></span>
<span class="line">  <span class="token string-property property">"s"</span><span class="token operator">:</span> <span class="token string">"BNBBTC"</span><span class="token punctuation">,</span>      <span class="token comment">// Symbol</span></span>
<span class="line">  <span class="token string-property property">"p"</span><span class="token operator">:</span> <span class="token string">"0.0015"</span><span class="token punctuation">,</span>      <span class="token comment">// Price change</span></span>
<span class="line">  <span class="token string-property property">"P"</span><span class="token operator">:</span> <span class="token string">"250.00"</span><span class="token punctuation">,</span>      <span class="token comment">// Price change percent</span></span>
<span class="line">  <span class="token string-property property">"w"</span><span class="token operator">:</span> <span class="token string">"0.0018"</span><span class="token punctuation">,</span>      <span class="token comment">// Weighted average price</span></span>
<span class="line">  <span class="token string-property property">"x"</span><span class="token operator">:</span> <span class="token string">"0.0009"</span><span class="token punctuation">,</span>      <span class="token comment">// First trade(F)-1 price (first trade before the 24hr rolling window)</span></span>
<span class="line">  <span class="token string-property property">"c"</span><span class="token operator">:</span> <span class="token string">"0.0025"</span><span class="token punctuation">,</span>      <span class="token comment">// Last price</span></span>
<span class="line">  <span class="token string-property property">"Q"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span>          <span class="token comment">// Last quantity</span></span>
<span class="line">  <span class="token string-property property">"b"</span><span class="token operator">:</span> <span class="token string">"0.0024"</span><span class="token punctuation">,</span>      <span class="token comment">// Best bid price</span></span>
<span class="line">  <span class="token string-property property">"B"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span>          <span class="token comment">// Best bid quantity</span></span>
<span class="line">  <span class="token string-property property">"a"</span><span class="token operator">:</span> <span class="token string">"0.0026"</span><span class="token punctuation">,</span>      <span class="token comment">// Best ask price</span></span>
<span class="line">  <span class="token string-property property">"A"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span>         <span class="token comment">// Best ask quantity</span></span>
<span class="line">  <span class="token string-property property">"o"</span><span class="token operator">:</span> <span class="token string">"0.0010"</span><span class="token punctuation">,</span>      <span class="token comment">// Open price</span></span>
<span class="line">  <span class="token string-property property">"h"</span><span class="token operator">:</span> <span class="token string">"0.0025"</span><span class="token punctuation">,</span>      <span class="token comment">// High price</span></span>
<span class="line">  <span class="token string-property property">"l"</span><span class="token operator">:</span> <span class="token string">"0.0010"</span><span class="token punctuation">,</span>      <span class="token comment">// Low price</span></span>
<span class="line">  <span class="token string-property property">"v"</span><span class="token operator">:</span> <span class="token string">"10000"</span><span class="token punctuation">,</span>       <span class="token comment">// Total traded base asset volume</span></span>
<span class="line">  <span class="token string-property property">"q"</span><span class="token operator">:</span> <span class="token string">"18"</span><span class="token punctuation">,</span>          <span class="token comment">// Total traded quote asset volume</span></span>
<span class="line">  <span class="token string-property property">"O"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>             <span class="token comment">// Statistics open time</span></span>
<span class="line">  <span class="token string-property property">"C"</span><span class="token operator">:</span> <span class="token number">86400000</span><span class="token punctuation">,</span>      <span class="token comment">// Statistics close time</span></span>
<span class="line">  <span class="token string-property property">"F"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>             <span class="token comment">// First trade ID</span></span>
<span class="line">  <span class="token string-property property">"L"</span><span class="token operator">:</span> <span class="token number">18150</span><span class="token punctuation">,</span>         <span class="token comment">// Last trade Id</span></span>
<span class="line">  <span class="token string-property property">"n"</span><span class="token operator">:</span> <span class="token number">18151</span>          <span class="token comment">// Total number of trades</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="all-market-tickers-stream" tabindex="-1"><a class="header-anchor" href="#all-market-tickers-stream"><span>All Market Tickers Stream</span></a></h2>
<p>24hr rolling window ticker statistics for all symbols that changed in an array. These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs. Note that only tickers that have changed will be present in the array.
The open time &quot;O&quot; always starts on a minute, while the closing time &quot;C&quot; is the current time of the update. As such, the effective window might be up to 59999ms wider that &lt;window_size&gt;.</p>
<p><strong>Stream Name:</strong> !ticker@arr</p>
<p><strong>Update Speed:</strong> 1000ms</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Same as &lt;symbol>@ticker payload</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="individual-symbol-book-ticker-streams" tabindex="-1"><a class="header-anchor" href="#individual-symbol-book-ticker-streams"><span>Individual Symbol Book Ticker Streams</span></a></h2>
<p>Pushes any update to the best bid or ask's price or quantity in real-time for a specified symbol.</p>
<p><strong>Stream Name:</strong> &lt;symbol&gt;@bookTicker</p>
<p><strong>Update Speed:</strong> Real-time</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"u"</span><span class="token operator">:</span><span class="token number">400900217</span><span class="token punctuation">,</span>     <span class="token comment">// order book updateId</span></span>
<span class="line">  <span class="token string-property property">"s"</span><span class="token operator">:</span><span class="token string">"BTCPHP"</span><span class="token punctuation">,</span>     <span class="token comment">// symbol</span></span>
<span class="line">  <span class="token string-property property">"b"</span><span class="token operator">:</span><span class="token string">"25.35190000"</span><span class="token punctuation">,</span> <span class="token comment">// best bid price</span></span>
<span class="line">  <span class="token string-property property">"B"</span><span class="token operator">:</span><span class="token string">"31.21000000"</span><span class="token punctuation">,</span> <span class="token comment">// best bid qty</span></span>
<span class="line">  <span class="token string-property property">"a"</span><span class="token operator">:</span><span class="token string">"25.36520000"</span><span class="token punctuation">,</span> <span class="token comment">// best ask price</span></span>
<span class="line">  <span class="token string-property property">"A"</span><span class="token operator">:</span><span class="token string">"40.66000000"</span>  <span class="token comment">// best ask qty</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="all-book-tickers-stream" tabindex="-1"><a class="header-anchor" href="#all-book-tickers-stream"><span>All Book Tickers Stream</span></a></h2>
<p>Pushes any update to the best bid or ask's price or quantity in real-time for all symbols.</p>
<p><strong>Stream Name:</strong> !bookTicker</p>
<p><strong>Update Speed:</strong> Real-time</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Same as &lt;symbol>@bookTicker payload</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="partial-book-depth-streams" tabindex="-1"><a class="header-anchor" href="#partial-book-depth-streams"><span>Partial Book Depth Streams</span></a></h2>
<p>Top <strong>&lt;levels&gt;</strong> bids and asks, pushed every second. Valid <strong>&lt;levels&gt;</strong> are 5, 10, 20 or 200.</p>
<p><strong>Stream Names:</strong> &lt;symbol&gt;@depth&lt;levels&gt; OR &lt;symbol&gt;@depth&lt;levels&gt;@100ms</p>
<p><strong>Update Speed:</strong> 1000ms  for 200 levels, 100ms for other levels when there's update</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"s"</span><span class="token operator">:</span> <span class="token string">"XRPPHP"</span><span class="token punctuation">,</span>         <span class="token comment">//symbol</span></span>
<span class="line">  <span class="token string-property property">"e"</span><span class="token operator">:</span> <span class="token string">"depth"</span><span class="token punctuation">,</span>          <span class="token comment">//eventType</span></span>
<span class="line">  <span class="token string-property property">"E"</span><span class="token operator">:</span> <span class="token number">1665484484791</span><span class="token punctuation">,</span>    <span class="token comment">//eventTime</span></span>
<span class="line">  <span class="token string-property property">"lastUpdateId"</span><span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span>  <span class="token comment">// Last update ID</span></span>
<span class="line">  <span class="token string-property property">"bids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>             <span class="token comment">// Bids to be updated</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"0.0024"</span><span class="token punctuation">,</span>         <span class="token comment">// Price level to be updated</span></span>
<span class="line">      <span class="token string">"10"</span>              <span class="token comment">// Quantity</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"asks"</span><span class="token operator">:</span> <span class="token punctuation">[</span>             <span class="token comment">// Asks to be updated</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"0.0026"</span><span class="token punctuation">,</span>         <span class="token comment">// Price level to be updated</span></span>
<span class="line">      <span class="token string">"100"</span>            <span class="token comment">// Quantity</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="diff-depth-stream" tabindex="-1"><a class="header-anchor" href="#diff-depth-stream"><span>Diff. Depth Stream</span></a></h2>
<p>Order book price and quantity depth updates used to locally manage an order book.</p>
<p><strong>Stream Name:</strong> &lt;symbol&gt;@depth OR &lt;symbol&gt;@depth@100ms</p>
<p><strong>Update Speed:</strong> 1000ms or 100ms when there's update</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"e"</span><span class="token operator">:</span> <span class="token string">"depthUpdate"</span><span class="token punctuation">,</span> <span class="token comment">// Event type</span></span>
<span class="line">  <span class="token string-property property">"E"</span><span class="token operator">:</span> <span class="token number">123456789</span><span class="token punctuation">,</span>     <span class="token comment">// Event time</span></span>
<span class="line">  <span class="token string-property property">"s"</span><span class="token operator">:</span> <span class="token string">"BNBBTC"</span><span class="token punctuation">,</span>      <span class="token comment">// Symbol</span></span>
<span class="line">  <span class="token string-property property">"U"</span><span class="token operator">:</span> <span class="token number">157</span><span class="token punctuation">,</span>           <span class="token comment">// First update ID in event</span></span>
<span class="line">  <span class="token string-property property">"u"</span><span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span>           <span class="token comment">// Final update ID in event</span></span>
<span class="line">  <span class="token string-property property">"b"</span><span class="token operator">:</span> <span class="token punctuation">[</span>              <span class="token comment">// Bids to be updated</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"0.0024"</span><span class="token punctuation">,</span>       <span class="token comment">// Price level to be updated</span></span>
<span class="line">      <span class="token string">"10"</span>            <span class="token comment">// Quantity</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"a"</span><span class="token operator">:</span> <span class="token punctuation">[</span>              <span class="token comment">// Asks to be updated</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"0.0026"</span><span class="token punctuation">,</span>       <span class="token comment">// Price level to be updated</span></span>
<span class="line">      <span class="token string">"100"</span>           <span class="token comment">// Quantity</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-manage-a-local-order-book-correctly" tabindex="-1"><a class="header-anchor" href="#how-to-manage-a-local-order-book-correctly"><span>How to manage a local order book correctly</span></a></h2>
<ol>
<li>Open a stream to <strong>wss://wsapi.pro.coins.ph/openapi/quote/stream?streams=btcphp@depth</strong>.</li>
<li>Buffer the events you receive from the stream.</li>
<li>Get a depth snapshot from <strong>https://api.pro.coins.ph/openapi/quote/v1/depth?symbol=BTCPHP</strong> .</li>
<li>Drop any event where <code v-pre>u</code> is &lt;= <code v-pre>lastUpdateId</code> in the snapshot.</li>
<li>The first processed event should have <code v-pre>U</code> &lt;= <code v-pre>lastUpdateId</code>+1 <strong>AND</strong> <code v-pre>u</code> &gt;= <code v-pre>lastUpdateId</code>+1.</li>
<li>While listening to the stream, each new event's <code v-pre>U</code> should be equal to the previous event's <code v-pre>u</code>+1.</li>
<li>The data in each event is the <strong>absolute</strong> quantity for a price level.</li>
<li>If the quantity is 0, <strong>remove</strong> the price level.</li>
<li>Receiving an event that removes a price level that is not in your local order book can happen and is normal.</li>
</ol>
<p>Note:
Due to depth snapshots having a limit on the number of price levels, a price level outside of the initial snapshot that doesn't have a quantity change won't have an update in the Diff. Depth Stream. Consequently, those price levels will not be visible in the local order book even when applying all updates from the Diff. Depth Stream correctly and cause the local order book to have some slight differences with the real order book.</p>
</div></template>


