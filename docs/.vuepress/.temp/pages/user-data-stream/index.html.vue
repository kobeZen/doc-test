<template><div><h1 id="change-log" tabindex="-1"><a class="header-anchor" href="#change-log"><span>Change Log</span></a></h1>
<p>2025-03-25: update <code v-pre>Business Type (CHAIN_DEPOSIT, FIAT_DEPOSIT, TRADE, FEE, FIAT_WITHDRAWAL, CHAIN_WITHDRAWAL, CONVERT, DISTRIBUTION, P2P_TRANSFER, SPOT_TO_CREDIT, CREDIT_TO_SPOT, VIRTUAL_DISTRIBUTE, OTHERS)</code> to Balance Update endpoint</p>
<p>2024-10-16: add <code v-pre>account email</code> and <code v-pre>busienss serial number</code> to Balance Update endpoint, add <code v-pre>account email</code> to Account Update endpoint.</p>
<p>2024-07-29: add <code v-pre>Business Type</code> to Balance Update endpoint</p>
<p>2023-07-15: update <code v-pre>balanceUpdate</code> trigger condition</p>
<p>2022-08-19: add weight infomation for all interfaces</p>
<h1 id="user-data-streams-for-coins-2022-08-19" tabindex="-1"><a class="header-anchor" href="#user-data-streams-for-coins-2022-08-19"><span>User Data Streams for Coins (2022-08-19)</span></a></h1>
<h2 id="general-wss-information" tabindex="-1"><a class="header-anchor" href="#general-wss-information"><span>General WSS information</span></a></h2>
<ul>
<li>The base endpoint is: <strong>https://api.pro.coins.ph</strong></li>
<li>A User Data Stream <code v-pre>listenKey</code> is valid for 60 minutes after creation.</li>
<li>Doing a <code v-pre>PUT</code> on a <code v-pre>listenKey</code> will extend its validity for 60 minutes.</li>
<li>Doing a <code v-pre>DELETE</code> on a <code v-pre>listenKey</code> will close the stream and invalidate the listenKey.</li>
<li>Doing a <code v-pre>POST</code> on an account with an active <code v-pre>listenKey</code> will return the currently active <code v-pre>listenKey</code> and extend its validity for 60 minutes.</li>
<li>The base websocket endpoint is: <strong>wss://wsapi.pro.coins.ph</strong></li>
<li>User Data Streams are accessed at <strong>/openapi/ws/&lt;listenKey&gt;</strong></li>
<li>A single connection to api endpoint is only valid for 24 hours; expect to be disconnected at the 24 hour mark</li>
</ul>
<h2 id="api-endpoints" tabindex="-1"><a class="header-anchor" href="#api-endpoints"><span>API Endpoints</span></a></h2>
<h3 id="create-a-listenkey" tabindex="-1"><a class="header-anchor" href="#create-a-listenkey"><span>Create a listenKey</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v1/userDataStream</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent.that listenKey will be returned and its validity will be extended for 60 minutes.</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters:</strong></p>
<p>None</p>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"listenKey"</span><span class="token operator">:</span> <span class="token string">"1A9LWJjuMwKWYP4QQPw34GRm8gz3x5AephXSuqcDef1RnzoBVhEeGE963CoS1Sgj"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ping-keep-alive-a-listenkey" tabindex="-1"><a class="header-anchor" href="#ping-keep-alive-a-listenkey"><span>Ping/Keep-alive a listenKey</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">PUT /openapi/v1/userDataStream</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>listenKey</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="close-a-listenkey" tabindex="-1"><a class="header-anchor" href="#close-a-listenkey"><span>Close a listenKey</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">DELETE /openapi/v1/userDataStream</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Close out a user data stream.</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>listenKey</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="web-socket-payloads" tabindex="-1"><a class="header-anchor" href="#web-socket-payloads"><span>Web Socket Payloads</span></a></h2>
<h3 id="account-update" tabindex="-1"><a class="header-anchor" href="#account-update"><span>Account Update</span></a></h3>
<p><code v-pre>outboundAccountPosition</code> is sent any time an account balance has changed and contains the assets that were possibly changed by the event that generated the balance change.</p>
<p><strong>Payload:</strong>
balance snapshot</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"e"</span><span class="token operator">:</span> <span class="token string">"outboundAccountPosition"</span><span class="token punctuation">,</span> <span class="token comment">// Event Type</span></span>
<span class="line">  <span class="token string-property property">"E"</span><span class="token operator">:</span> <span class="token number">1564034571105</span><span class="token punctuation">,</span>             <span class="token comment">// Event Time</span></span>
<span class="line">  <span class="token string-property property">"u"</span><span class="token operator">:</span> <span class="token number">1564034571073</span><span class="token punctuation">,</span>             <span class="token comment">// Account Last Update time</span></span>
<span class="line">  <span class="token string-property property">"B"</span><span class="token operator">:</span> <span class="token punctuation">[</span>                          <span class="token comment">// Balance</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"a"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span>                 <span class="token comment">// Asset</span></span>
<span class="line">      <span class="token string-property property">"f"</span><span class="token operator">:</span> <span class="token string">"10000.000000"</span><span class="token punctuation">,</span>        <span class="token comment">// Free</span></span>
<span class="line">      <span class="token string-property property">"l"</span><span class="token operator">:</span> <span class="token string">"0.000000"</span>             <span class="token comment">// Locked</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"em"</span><span class="token operator">:</span> <span class="token string">"test@coins.ph"</span>          <span class="token comment">// Account email,This parameter will only be provided when the master account is whitelisted and there has been a balance change on the sub-account.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="balance-update" tabindex="-1"><a class="header-anchor" href="#balance-update"><span>Balance Update</span></a></h3>
<p><code v-pre>balanceUpdate</code>  is pushed upon non trading fund activities - transfer / deposit / withdrawal</p>
<p><strong>Payload:</strong>
contains balance changed</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"e"</span><span class="token operator">:</span> <span class="token string">"balanceUpdate"</span><span class="token punctuation">,</span>         <span class="token comment">// Event Type</span></span>
<span class="line">  <span class="token string-property property">"E"</span><span class="token operator">:</span> <span class="token number">1573200697110</span><span class="token punctuation">,</span>           <span class="token comment">// Event Time</span></span>
<span class="line">  <span class="token string-property property">"a"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span>                   <span class="token comment">// Asset</span></span>
<span class="line">  <span class="token string-property property">"d"</span><span class="token operator">:</span> <span class="token string">"100.00000000"</span><span class="token punctuation">,</span>          <span class="token comment">// Balance Delta</span></span>
<span class="line">  <span class="token string-property property">"T"</span><span class="token operator">:</span> <span class="token number">1573200697068</span><span class="token punctuation">,</span>           <span class="token comment">// Clear Time</span></span>
<span class="line">  <span class="token string-property property">"BS"</span><span class="token operator">:</span> <span class="token string">"CHAIN_DEPOSIT"</span><span class="token punctuation">,</span>        <span class="token comment">// Business Type (CHAIN_DEPOSIT, FIAT_DEPOSIT, TRADE, FEE, FIAT_WITHDRAWAL, CHAIN_WITHDRAWAL, CONVERT, DISTRIBUTION, P2P_TRANSFER, SPOT_TO_CREDIT, CREDIT_TO_SPOT, VIRTUAL_DISTRIBUTE, OTHERS)</span></span>
<span class="line">  <span class="token string-property property">"em"</span><span class="token operator">:</span> <span class="token string">"test@coins.ph"</span><span class="token punctuation">,</span>        <span class="token comment">// Account email,This parameter will only be provided when the master account is whitelisted and there has been a balance change on the sub-account.</span></span>
<span class="line">  <span class="token string-property property">"BI"</span><span class="token operator">:</span> <span class="token string">"123456789"</span>             <span class="token comment">// Business serial number,This parameter will only be provided when the master account is whitelisted and there has been a balance change on the sub-account.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="order-update" tabindex="-1"><a class="header-anchor" href="#order-update"><span>Order Update</span></a></h3>
<p>Orders are updated with the <code v-pre>executionReport</code> event. Check the API documentation and below for relevant enum definitions.
Average price can be found by doing <code v-pre>Z</code> divided by <code v-pre>z</code>.</p>
<p><strong>Payload:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"e"</span><span class="token operator">:</span> <span class="token string">"executionReport"</span><span class="token punctuation">,</span>        <span class="token comment">// Event type</span></span>
<span class="line">  <span class="token string-property property">"E"</span><span class="token operator">:</span> <span class="token number">1499405658658</span><span class="token punctuation">,</span>            <span class="token comment">// Event time</span></span>
<span class="line">  <span class="token string-property property">"s"</span><span class="token operator">:</span> <span class="token string">"ETHBTC"</span><span class="token punctuation">,</span>                 <span class="token comment">// Symbol</span></span>
<span class="line">  <span class="token string-property property">"c"</span><span class="token operator">:</span> <span class="token string">"1000087761"</span><span class="token punctuation">,</span>             <span class="token comment">// Client order ID</span></span>
<span class="line">  <span class="token string-property property">"S"</span><span class="token operator">:</span> <span class="token string">"BUY"</span><span class="token punctuation">,</span>                    <span class="token comment">// Side</span></span>
<span class="line">  <span class="token string-property property">"o"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span>                  <span class="token comment">// Order type</span></span>
<span class="line">  <span class="token string-property property">"f"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span>                    <span class="token comment">// Time in force</span></span>
<span class="line">  <span class="token string-property property">"q"</span><span class="token operator">:</span> <span class="token string">"1.00000000"</span><span class="token punctuation">,</span>             <span class="token comment">// Order quantity</span></span>
<span class="line">  <span class="token string-property property">"p"</span><span class="token operator">:</span> <span class="token string">"0.10264410"</span><span class="token punctuation">,</span>             <span class="token comment">// Order price</span></span>
<span class="line">  <span class="token string-property property">"P"</span><span class="token operator">:</span> <span class="token string">"0.00000000"</span><span class="token punctuation">,</span>             <span class="token comment">// Stop price</span></span>
<span class="line">  <span class="token string-property property">"x"</span><span class="token operator">:</span> <span class="token string">"NEW"</span><span class="token punctuation">,</span>                    <span class="token comment">// Current execution type</span></span>
<span class="line">  <span class="token string-property property">"X"</span><span class="token operator">:</span> <span class="token string">"NEW"</span><span class="token punctuation">,</span>                    <span class="token comment">// Current order status</span></span>
<span class="line">  <span class="token string-property property">"r"</span><span class="token operator">:</span> <span class="token string">"NONE"</span><span class="token punctuation">,</span>                   <span class="token comment">// Order reject reason</span></span>
<span class="line">  <span class="token string-property property">"i"</span><span class="token operator">:</span> <span class="token number">1241518645726809840</span><span class="token punctuation">,</span>      <span class="token comment">// Order ID</span></span>
<span class="line">  <span class="token string-property property">"l"</span><span class="token operator">:</span> <span class="token string">"0.00000000"</span><span class="token punctuation">,</span>             <span class="token comment">// Last executed quantity</span></span>
<span class="line">  <span class="token string-property property">"z"</span><span class="token operator">:</span> <span class="token string">"0.00000000"</span><span class="token punctuation">,</span>             <span class="token comment">// Cumulative filled quantity</span></span>
<span class="line">  <span class="token string-property property">"L"</span><span class="token operator">:</span> <span class="token string">"0.00000000"</span><span class="token punctuation">,</span>             <span class="token comment">// Last executed price</span></span>
<span class="line">  <span class="token string-property property">"n"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>                      <span class="token comment">// Commission amount</span></span>
<span class="line">  <span class="token string-property property">"N"</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>                     <span class="token comment">// Commission asset</span></span>
<span class="line">  <span class="token string-property property">"T"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>                       <span class="token comment">// Transaction time</span></span>
<span class="line">  <span class="token string-property property">"t"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>                    	 <span class="token comment">// Trade ID</span></span>
<span class="line">  <span class="token string-property property">"w"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                     <span class="token comment">// Is the order on the book?</span></span>
<span class="line">  <span class="token string-property property">"m"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>                    <span class="token comment">// Is this trade the maker side?</span></span>
<span class="line">  <span class="token string-property property">"O"</span><span class="token operator">:</span> <span class="token number">1499405658657</span><span class="token punctuation">,</span>            <span class="token comment">// Order creation time</span></span>
<span class="line">  <span class="token string-property property">"Z"</span><span class="token operator">:</span> <span class="token string">"0.00000000"</span>              <span class="token comment">// Cumulative quote asset transacted quantity</span></span>
<span class="line">  <span class="token string-property property">"Y"</span><span class="token operator">:</span> <span class="token string">"0.00000000"</span><span class="token punctuation">,</span>             <span class="token comment">// Last quote asset transacted quantity (i.e. lastPrice * lastQty)</span></span>
<span class="line">  <span class="token string-property property">"Q"</span><span class="token operator">:</span> <span class="token string">"0.00000000"</span>              <span class="token comment">// Quote Order Qty</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Execution types:</strong></p>
<ul>
<li>NEW - The order has been accepted into the engine.</li>
<li>CANCELED - The order has been canceled by the user.</li>
<li>REJECTED  - The order has been rejected and was not processed.</li>
<li>TRADE - Part of the order or all of the order's quantity has filled.</li>
<li>EXPIRED - The order was canceled according to the order type's rules (e.g. LIMIT FOK orders with no fill, LIMIT IOC or MARKET orders that partially fill) or by the exchange.</li>
</ul>
</div></template>


