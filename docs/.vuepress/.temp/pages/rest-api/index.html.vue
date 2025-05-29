<template><div><h1 id="change-log" tabindex="-1"><a class="header-anchor" href="#change-log"><span>Change log:</span></a></h1>
<p>2025-05-21: Added the <code v-pre>statuses</code> parameter to the <code v-pre>/openapi/wallet/v1/deposit/history</code> endpoint.</p>
<p>2025-04-23: Added the <code v-pre>/openapi/v1/fund-collect/collect-from-sub-account</code>,<code v-pre>/openapi/v1/fund-collect/get-fund-record</code> endpoint.</p>
<p>2025-04-03: Updated status parameter descriptions for endpoints: <code v-pre>openapi/fiat/v1/details</code>, <code v-pre>openapi/fiat/v1/history</code>, <code v-pre>openapi/fiat/v2/history</code>.</p>
<p>2025-03-25: Added the <code v-pre>/openapi/v1/asset/transaction/history</code> endpoint.</p>
<p>2025-01-02: Added the <code v-pre>/openapi/fiat/v2/history</code> endpoint.</p>
<p>2024-10-11: Added the <code v-pre>/openapi/v1/sub-account/wallet/deposit/address</code>,<code v-pre>/openapi/v1/sub-account/wallet/deposit/history</code> endpoint.</p>
<p>2024-08-26: Added the <code v-pre>startTime</code> <code v-pre>endTime</code> parameter to the <code v-pre>openapi/fiat/v1/history</code> endpoint.</p>
<p>2024-05-10: Added the <code v-pre>from_address</code> <code v-pre>to_address</code> parameter to the <code v-pre>/openapi/transfer/v3/transfers</code> endpoint.</p>
<p>2024-04-29: Added the <code v-pre>inversePrice</code> response parameter to the <code v-pre>/openapi/convert/query-order-history</code> endpoint.</p>
<p>2024-04-24: Added <a href="#sub-account-endpoints">Sub-account</a> endpoints: <code v-pre>/openapi/v1/sub-account/list</code>, <code v-pre>/openapi/v1/sub-account/create</code>, <code v-pre>/openapi/v1/sub-account/asset</code>, <code v-pre>/openapi/v1/sub-account/transfer/universal-transfer</code>, <code v-pre>/openapi/v1/sub-account/transfer/sub-to-master</code>, <code v-pre>/openapi/v1/sub-account/transfer/universal-transfer-history</code>, <code v-pre>/openapi/v1/sub-account/transfer/sub-history</code>, <code v-pre>/openapi/v1/sub-account/apikey/ip-restriction</code>, <code v-pre>/openapi/v1/sub-account/apikey/add-ip-restriction</code>, <code v-pre>/openapi/v1/sub-account/apikey/delete-ip-restriction</code>.</p>
<p>2024-04-17: Added the <code v-pre>targetAmount</code> parameter to the <code v-pre>/openapi/convert/v1/get-quote</code> endpoint.</p>
<p>2024-02-19: Added the <code v-pre>openapi/v1/user/ip</code> endpoint.</p>
<p>2023-12-29: Added kyc remaining and limit to the <code v-pre>/openapi/v1/account</code> endpoint.</p>
<p>2023-12-06: Added the <code v-pre>internalOrderId</code> generate rule description to the <code v-pre>/openapi/fiat/v1/cash-out</code> endpoint.</p>
<p>2023-09-20: Added the <code v-pre>message</code> parameter to the <code v-pre>/openapi/transfer/v3/transfers</code> endpoint.</p>
<p>2023-08-30: Added <code v-pre>/openapi/convert/v1/query-order-history</code>, and updated<code v-pre>openapi/fiat/v1/cash-out</code>, <code v-pre>openapi/fiat/v1/support-channel</code> docs.</p>
<p>2023-08-17: Updated <code v-pre>/openapi/convert/v1/accept-quote</code>, <code v-pre>openapi/fiat/v1/history</code>, <code v-pre>openapi/fiat/v1/cash-out</code>, <code v-pre>openapi/fiat/v1/support-channel</code>, <code v-pre>openapi/migration/v4/sellorder</code>, <code v-pre>openapi/migration/v4/validate-field</code>, <code v-pre>openapi/migration/v4/payout-outlets/{id}</code>, <code v-pre>openapi/migration/v4/payout-outlet-categories/{id}</code>, <code v-pre>openapi/migration/v4/payout-outlet-fees</code> docs.</p>
<p>2023-08-08: Updated <code v-pre>openapi/fiat/v1/history</code>, <code v-pre>openapi/fiat/v1/cash-out</code>, <code v-pre>openapi/fiat/v1/support-channel</code>, <code v-pre>openapi/migration/v4/sellorder</code>, <code v-pre>openapi/migration/v4/validate-field</code>, <code v-pre>openapi/migration/v4/payout-outlets/{id}</code>, <code v-pre>openapi/migration/v4/payout-outlet-categories/{id}</code>, <code v-pre>openapi/migration/v4/payout-outlet-fees</code> docs.</p>
<p>2023-07-31: Added <code v-pre>openapi/fiat/v1/history</code> endpoint to query fiat currency order history</p>
<p>2023-07-15: Updated <code v-pre>MARKET order type now supports quantity for buy and quoteOrderQty for sell</code></p>
<p>2023-07-15: Added  <code v-pre>stpFlag</code> in the request of New order (TRADE) endpoint for anti self-trading behaviour.</p>
<p>2023-07-15: Added order status <code v-pre>EXPIRED</code>.</p>
<p>2023-06-08: Added the <code v-pre>payment request</code> interface.</p>
<p>2023-05-17: The disclaimer regarding the following endpoints being in the QA phase has been removed as the QA process has been successfully completed: <code v-pre>/openapi/account/v3/crypto-accounts</code>, <code v-pre>/openapi/transfer/v3/transfers</code>, and <code v-pre>/openapi/transfer/v3/transfers/{id}</code>.</p>
<p>2023-05-08: Added the following endpoints: <code v-pre>/openapi/account/v3/crypto-accounts</code>, <code v-pre>/openapi/transfer/v3/transfers</code>, and <code v-pre>/openapi/transfer/v3/transfers/{id}</code>. The endpoints are still in QA and are appropriately marked as such.</p>
<p>2023-05-04: Removed the endpoints <code v-pre>/openapi/convert/v1/query-order-history</code> and <code v-pre>openapi/fiat/v1/history</code>; removed a personal detail from a code sample in <code v-pre>/openapi/fiat/v1/details</code>.</p>
<p>2023-04-13: Added the <code v-pre>invoice</code> interface.</p>
<p>2023-04-10: Added the <code v-pre>transfer</code> interfaces.</p>
<p>2022-09-12: Modified the <code v-pre>symbol</code> in the <code v-pre>Cancel All Open Orders on a Symbol</code> API request as required.</p>
<p>2022-09-09: Changed the <code v-pre>orderId/transactTime/time/updateTime</code> response from string to number in order related interfaces.</p>
<p>2022-08-24: Updated the <code v-pre>STOP_LOSS/TAKE_PROFIT</code> description in the <code v-pre>New order (TRADE)</code> API.</p>
<p>2022-08-23: Fixed incorrect depth information.</p>
<p>2022-08-19: Added weight information for all interfaces.</p>
<p>2022-08-12: Changed <code v-pre>maxNumOrders</code> to 200 in <code v-pre>filter MAX_NUM_ORDERS</code>.</p>
<p>2022-08-12: Changed <code v-pre>maxNumAlgoOrders</code> to 5 in <code v-pre>filter MAX_NUM_ALGO_ORDERS</code>.</p>
<!--more-->
<p>**# Public Rest API for Coins (2022-09-12)</p>
<h2 id="general-api-information" tabindex="-1"><a class="header-anchor" href="#general-api-information"><span>General API Information</span></a></h2>
<ul>
<li>The base endpoint is: <strong>https://api.pro.coins.ph</strong></li>
<li>All endpoints return data in either a JSON object or array format.</li>
<li>Data is returned in <strong>ascending</strong> order, with the oldest records appearing first and the newest records appearing last.</li>
<li>All time and timestamp related fields are expressed in milliseconds.</li>
</ul>
<h2 id="http-return-codes" tabindex="-1"><a class="header-anchor" href="#http-return-codes"><span>HTTP Return Codes</span></a></h2>
<ul>
<li>HTTP <code v-pre>4XX</code> return codes are used for malformed requests; the issue is on the sender's side.</li>
<li>HTTP <code v-pre>403</code> return code is used when the WAF Limit (Web Application Firewall) has been violated.</li>
<li>HTTP <code v-pre>429</code> return code is used when breaking a request rate limit.</li>
<li>HTTP <code v-pre>418</code> return code is used when an IP has been auto-banned for continuing to send requests after receiving <code v-pre>429</code> codes.</li>
<li>HTTP <code v-pre>5XX</code> return codes are used for internal errors; the issue is on exchange's side. It is important to <strong>NOT</strong> treat this as a failure operation; the execution status is UNKNOWN and could have been a success.</li>
</ul>
<h2 id="error-codes" tabindex="-1"><a class="header-anchor" href="#error-codes"><span>Error Codes</span></a></h2>
<ul>
<li>Any endpoint can return an ERROR; the error payload is as follows:</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"code"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"msg"</span><span class="token operator">:</span> <span class="token string">"An unknown error occurred while processing the request."</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Specific error codes and messages are defined in another document.</li>
</ul>
<h2 id="api-library" tabindex="-1"><a class="header-anchor" href="#api-library"><span>API Library</span></a></h2>
<h3 id="connectors" tabindex="-1"><a class="header-anchor" href="#connectors"><span>Connectors</span></a></h3>
<p>The following are lightweight libraries that work as connectors to the Coins public API, written in different languages:</p>
<ul>
<li>Python <a href="https://github.com/coins-docs/coins-connector-python">https://github.com/coins-docs/coins-connector-python</a></li>
</ul>
<h3 id="postman-collections" tabindex="-1"><a class="header-anchor" href="#postman-collections"><span>Postman Collections</span></a></h3>
<p>Postman collections are available, and they are recommended for new users seeking a quick and easy start with the API.</p>
<ul>
<li>Postman <a href="https://github.com/coins-docs/coins-api-postman">https://github.com/coins-docs/coins-api-postman</a></li>
</ul>
<h2 id="general-information-on-endpoints" tabindex="-1"><a class="header-anchor" href="#general-information-on-endpoints"><span>General Information on Endpoints</span></a></h2>
<ul>
<li>For <code v-pre>GET</code> endpoints, parameters must be sent as a <code v-pre>query string</code>.</li>
<li>For <code v-pre>POST</code>, <code v-pre>PUT</code>, and <code v-pre>DELETE</code> endpoints, the parameters may be sent as a <code v-pre>query string</code> or in the <code v-pre>request body</code> with content type
<code v-pre>application/x-www-form-urlencoded</code>. It is also possible to use a combination of parameters in both the query string and the request body if desired.</li>
<li>Parameters can be sent in any order.</li>
<li>If a parameter is included in both the <code v-pre>query string</code> and the <code v-pre>request body</code>, the value of the parameter from the <code v-pre>query string</code> will take precedence and be used.</li>
</ul>
<h3 id="limits" tabindex="-1"><a class="header-anchor" href="#limits"><span>LIMITS</span></a></h3>
<p><strong>General Info on Limits</strong></p>
<ul>
<li>
<p><code v-pre>intervalNum</code> describes the amount of the interval. For example, <code v-pre>intervalNum 5</code> with <code v-pre>intervalLetter M</code> means &quot;Every 5 minutes&quot;.</p>
</li>
<li>
<p>An HTTP status code 429 will be returned when the rate limit is violated.</p>
</li>
</ul>
<h3 id="ip-limits" tabindex="-1"><a class="header-anchor" href="#ip-limits"><span>IP Limits</span></a></h3>
<ul>
<li>Each route has a <code v-pre>weight</code> which determines the number of requests each endpoint counts for. Endpoints with heavier operations or those that involve multiple symbols will have a higher <code v-pre>weight</code>.</li>
<li>When a 429 response code is received, it is mandatory for the API user to back off and refrain from making further requests.</li>
<li><strong>Repeated failure to comply with rate limits and a disregard for backing off after receiving 429 responses can result in an automated IP ban. The HTTP status code 418 is used for IP bans.</strong></li>
<li>IP bans are tracked and their duration increases for repeat offenders, ranging <strong>from 2 minutes to 3 days</strong>.</li>
<li>A <code v-pre>Retry-After</code> header is included in 418 or 429 responses, indicating the number of seconds that need to be waited in order to prevent a ban (for 429) or until the ban is lifted (for 418).</li>
<li><strong>The limits imposed by the API are based on IP addresses rather than API keys.</strong></li>
</ul>
<h3 id="order-rate-limits" tabindex="-1"><a class="header-anchor" href="#order-rate-limits"><span>Order Rate Limits</span></a></h3>
<ul>
<li>
<p>When the order count exceeds the limit, you will receive a 429 error without the <code v-pre>Retry-After</code> header.</p>
</li>
<li>
<p>The order rate limit is counted against each IP and UID.</p>
</li>
</ul>
<h3 id="websocket-limits" tabindex="-1"><a class="header-anchor" href="#websocket-limits"><span>Websocket Limits</span></a></h3>
<ul>
<li>A single connection can listen to a maximum of 1024 streams.</li>
</ul>
<h3 id="api-limit-introduction" tabindex="-1"><a class="header-anchor" href="#api-limit-introduction"><span>/api/ Limit Introduction</span></a></h3>
<ul>
<li>
<p>For endpoints related to <code v-pre>/api/*</code>:</p>
<ul>
<li>
<p>There are two modes of limit enforcement: IP limit and UID limit. Each mode operates independently.</p>
</li>
<li>
<p>The IP limit allows a maximum of 1200 requests per minute across all endpoints within the <code v-pre>/api/*</code> namespace.</p>
</li>
</ul>
</li>
</ul>
<h3 id="endpoint-security-type" tabindex="-1"><a class="header-anchor" href="#endpoint-security-type"><span>Endpoint Security Type</span></a></h3>
<ul>
<li>Each endpoint is associated with a security type, which indicates how you should interact with it. The security type is specified next to the name of the endpoint.
<ul>
<li>If no security type is mentioned, assume that the security type is NONE.</li>
</ul>
</li>
<li>API keys are passed to the Rest API via the <code v-pre>X-COINS-APIKEY</code> header.</li>
<li>Both API keys and secret keys <strong>are case sensitive</strong>.</li>
<li>API keys can be configured to have access only to specific types of secure endpoints. For example, one API key may be restricted to TRADE routes only, while another API key can have access to all routes except TRADE.</li>
<li>By default, API keys have access to all secure routes.</li>
</ul>
<table>
<thead>
<tr>
<th>Security Type</th>
<th>Additional parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>NONE</td>
<td>none</td>
<td>Endpoint can be accessed freely.</td>
</tr>
<tr>
<td>TRADE</td>
<td><code v-pre>X-COINS-APIKEY</code>、<code v-pre>signature</code>、<code v-pre>timestamp</code></td>
<td>Endpoint requires sending a valid API Key and signature and timing security.</td>
</tr>
<tr>
<td>USER_DATA</td>
<td><code v-pre>X-COINS-APIKEY</code>、<code v-pre>signature</code>、<code v-pre>timestamp</code></td>
<td>Endpoint requires sending a valid API Key and signature and timing security..</td>
</tr>
<tr>
<td>USER_STREAM</td>
<td><code v-pre>X-COINS-APIKEY</code></td>
<td>Endpoint requires sending a valid API Key.</td>
</tr>
<tr>
<td>MARKET_DATA</td>
<td><code v-pre>X-COINS-APIKEY</code></td>
<td>Endpoint requires sending a valid API Key.</td>
</tr>
</tbody>
</table>
<ul>
<li><code v-pre>TRADE</code> and <code v-pre>USER_DATA</code> endpoints are <code v-pre>SIGNED</code> endpoints.</li>
</ul>
<h3 id="signed-trade-and-user-data-endpoint-security" tabindex="-1"><a class="header-anchor" href="#signed-trade-and-user-data-endpoint-security"><span>SIGNED (TRADE and USER_DATA) Endpoint Security</span></a></h3>
<ul>
<li><code v-pre>SIGNED</code> endpoints require an additional parameter, <code v-pre>signature</code>, to be
sent in the  <code v-pre>query string</code> or <code v-pre>form request body</code> or <code v-pre>header</code>.</li>
<li>Endpoints use <code v-pre>HMAC SHA256</code> signatures. The <code v-pre>HMAC SHA256 signature</code> is a keyed <code v-pre>HMAC SHA256</code> operation.
Use your <code v-pre>secretKey</code> as the key and <code v-pre>totalParams</code> as the value for the HMAC operation.</li>
<li>The <code v-pre>signature</code> is <strong>not case sensitive</strong>.</li>
<li><code v-pre>totalParams</code> is defined as the <code v-pre>query string</code> concatenated with the
<code v-pre>request body</code>(exclude <code v-pre>signature</code> parameters and values If signature parameters are in both).</li>
<li>We recommend the use of the <code v-pre>query string</code> for GET requests and the <code v-pre>form request body</code> for POST requests. However, for Spot Trading APIs, we recommend using the <code v-pre>query string</code>.</li>
</ul>
<h3 id="timing-security" tabindex="-1"><a class="header-anchor" href="#timing-security"><span>Timing Security</span></a></h3>
<ul>
<li>
<p>A <code v-pre>SIGNED</code> endpoint requires an additional parameter, <code v-pre>timestamp</code>, to be
sent in the  <code v-pre>query string</code> or <code v-pre>form request body</code> or <code v-pre>header</code>(Not recommended). The <code v-pre>timestamp</code> should be in millisecond timestamp indicating when the request was created and sent.</p>
</li>
<li>
<p>An optional parameter, <code v-pre>recvWindow</code>, can be included to specify the validity duration of the request in milliseconds after the timestamp. If <code v-pre>recvWindow</code> is not provided, <strong>it will default to 5000 milliseconds</strong>.</p>
</li>
<li>
<p>The logic is as follows:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>timestamp <span class="token operator">&lt;</span> <span class="token punctuation">(</span>serverTime <span class="token operator">+</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>serverTime <span class="token operator">-</span> timestamp<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> recvWindow<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// process request</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// reject request</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>Serious trading is about timing.</strong> Networks can be unstable and unreliable,
which can lead to requests taking varying amounts of time to reach the
servers. With <code v-pre>recvWindow</code>, you can specify that the request must be
processed within a certain number of milliseconds or be rejected by the
server.</p>
<p><strong>To ensure optimal performance, it is recommended to use a <code v-pre>recvWindow</code> value of 5000 milliseconds or less. The maximum value allowed for <code v-pre>recvWindow</code> is 60,000 milliseconds and should not exceed this limit.</strong></p>
<h3 id="signed-endpoint-examples-for-post-openapi-v1-order" tabindex="-1"><a class="header-anchor" href="#signed-endpoint-examples-for-post-openapi-v1-order"><span>SIGNED Endpoint Examples for POST /openapi/v1/order</span></a></h3>
<p>Here is a step-by-step example of how to send a valid signed payload from the
Linux command line using <code v-pre>echo</code>, <code v-pre>openssl</code>, and <code v-pre>curl</code>:</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>apiKey</td>
<td>tAQfOrPIZAhym0qHISRt8EFvxPemdBm5j5WMlkm3Ke9aFp0EGWC2CGM8GHV4kCYW</td>
</tr>
<tr>
<td>secretKey</td>
<td>lH3ELTNiFxCQTmi9pPcWWikhsjO04Yoqw3euoHUuOLC3GYBW64ZqzQsiOEHXQS76</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>symbol</td>
<td>BTCPHP</td>
</tr>
<tr>
<td>side</td>
<td>BUY</td>
</tr>
<tr>
<td>type</td>
<td>LIMIT</td>
</tr>
<tr>
<td>timeInForce</td>
<td>GTC</td>
</tr>
<tr>
<td>quantity</td>
<td>1</td>
</tr>
<tr>
<td>price</td>
<td>0.1</td>
</tr>
<tr>
<td>recvWindow</td>
<td>5000</td>
</tr>
<tr>
<td>timestamp</td>
<td>1538323200000</td>
</tr>
</tbody>
</table>
<h4 id="example-1-as-a-query-string" tabindex="-1"><a class="header-anchor" href="#example-1-as-a-query-string"><span>Example 1: As a query string</span></a></h4>
<ul>
<li><strong>queryString:</strong> symbol=BTCPHP&amp;side=BUY&amp;type=LIMIT&amp;timeInForce=GTC&amp;quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1538323200000</li>
<li><strong>HMAC SHA256 signature:</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token punctuation">[</span>linux<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"symbol=BTCPHP&amp;side=BUY&amp;type=LIMIT&amp;timeInForce=GTC&amp;quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1538323200000"</span> <span class="token operator">|</span> openssl dgst <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-hmac</span> <span class="token string">"lH3ELTNiFxCQTmi9pPcWWikhsjO04Yoqw3euoHUuOLC3GYBW64ZqzQsiOEHXQS76"</span></span>
<span class="line"><span class="token punctuation">(</span>stdin<span class="token punctuation">)</span><span class="token operator">=</span> d7b09aa959094bafd1de10be3985651691fff6cc04b5cd94aea8cc1ca02e0ed8</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>curl command:</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span>linux<span class="token punctuation">]</span>$ <span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">"X-COINS-APIKEY: tAQfOrPIZAhym0qHISRt8EFvxPemdBm5j5WMlkm3Ke9aFp0EGWC2CGM8GHV4kCYW"</span> <span class="token parameter variable">-X</span> POST <span class="token string">'https://$HOST/openapi/v1/order?symbol=BTCPHP&amp;side=BUY&amp;type=LIMIT&amp;timeInForce=GTC&amp;quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1538323200000&amp;signature=d7b09aa959094bafd1de10be3985651691fff6cc04b5cd94aea8cc1ca02e0ed8'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-2-as-a-request-body" tabindex="-1"><a class="header-anchor" href="#example-2-as-a-request-body"><span>Example 2: As a request body</span></a></h4>
<ul>
<li><strong>requestBody:</strong> symbol=BTCPHP&amp;side=BUY&amp;type=LIMIT&amp;timeInForce=GTC&amp;quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1538323200000</li>
<li><strong>HMAC SHA256 signature:</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token punctuation">[</span>linux<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"symbol=BTCPHP&amp;side=BUY&amp;type=LIMIT&amp;timeInForce=GTC&amp;quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1538323200000"</span> <span class="token operator">|</span> openssl dgst <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-hmac</span> <span class="token string">"lH3ELTNiFxCQTmi9pPcWWikhsjO04Yoqw3euoHUuOLC3GYBW64ZqzQsiOEHXQS76"</span></span>
<span class="line"><span class="token punctuation">(</span>stdin<span class="token punctuation">)</span><span class="token operator">=</span> d7b09aa959094bafd1de10be3985651691fff6cc04b5cd94aea8cc1ca02e0ed8</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>curl command:</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span>linux<span class="token punctuation">]</span>$ <span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">"X-COINS-APIKEY: tAQfOrPIZAhym0qHISRt8EFvxPemdBm5j5WMlkm3Ke9aFp0EGWC2CGM8GHV4kCYW"</span> <span class="token parameter variable">-X</span> POST <span class="token string">'https://$HOST/openapi/v1/order'</span> <span class="token parameter variable">-d</span> <span class="token string">'symbol=BTCPHP&amp;side=BUY&amp;type=LIMIT&amp;timeInForce=GTC&amp;quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1538323200000&amp;signature=d7b09aa959094bafd1de10be3985651691fff6cc04b5cd94aea8cc1ca02e0ed8'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-3-mixed-query-string-and-request-body" tabindex="-1"><a class="header-anchor" href="#example-3-mixed-query-string-and-request-body"><span>Example 3: Mixed query string and request body</span></a></h4>
<ul>
<li><strong>queryString:</strong> symbol=BTCPHP&amp;side=BUY&amp;type=LIMIT&amp;timeInForce=GTC</li>
<li><strong>requestBody:</strong> quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1538323200000</li>
<li><strong>HMAC SHA256 signature:</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token punctuation">[</span>linux<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"symbol=BTCPHP&amp;side=BUY&amp;type=LIMIT&amp;timeInForce=GTCquantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1538323200000"</span> <span class="token operator">|</span> openssl dgst <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-hmac</span> <span class="token string">"lH3ELTNiFxCQTmi9pPcWWikhsjO04Yoqw3euoHUuOLC3GYBW64ZqzQsiOEHXQS76"</span></span>
<span class="line"><span class="token punctuation">(</span>stdin<span class="token punctuation">)</span><span class="token operator">=</span> 340037ed5366e650bd0e09e170db4a6ace0a9cba3e8af4e5c37ba2143fb84de0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>curl command:</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span>linux<span class="token punctuation">]</span>$ <span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">"X-COINS-APIKEY: tAQfOrPIZAhym0qHISRt8EFvxPemdBm5j5WMlkm3Ke9aFp0EGWC2CGM8GHV4kCYW"</span> <span class="token parameter variable">-X</span> POST <span class="token string">'https://$HOST/openapi/v1/order?symbol=BTCPHP&amp;side=BUY&amp;type=LIMIT&amp;timeInForce=GTC'</span> <span class="token parameter variable">-d</span> <span class="token string">'quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1538323200000&amp;signature=340037ed5366e650bd0e09e170db4a6ace0a9cba3e8af4e5c37ba2143fb84de0'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that in Example 3, the signature is different from the previous examples. Specifically, there should be no <code v-pre>&amp;</code> character between <code v-pre>GTC</code> and <code v-pre>quantity=1</code>.</p>
<h2 id="public-api-endpoints" tabindex="-1"><a class="header-anchor" href="#public-api-endpoints"><span>Public API Endpoints</span></a></h2>
<h3 id="terminology" tabindex="-1"><a class="header-anchor" href="#terminology"><span>Terminology</span></a></h3>
<p>These terms will be used throughout the documentation, so new users are encouraged to read them to help their understanding of the API.</p>
<ul>
<li><code v-pre>base asset</code> refers to the asset that is the <code v-pre>quantity</code> of a symbol. For the symbol BTCUSDT, BTC would be the <code v-pre>base asset</code>.</li>
<li><code v-pre>quote asset</code> refers to the asset that is the <code v-pre>price</code> of a symbol. For the symbol BTCUSDT, USDT would be the <code v-pre>quote asset</code>.</li>
</ul>
<h3 id="enum-definitions" tabindex="-1"><a class="header-anchor" href="#enum-definitions"><span>ENUM definitions</span></a></h3>
<p><strong>Symbol status:</strong></p>
<ul>
<li>TRADING</li>
<li>BREAK (ongoing)</li>
<li>CANCEL_ONLY (ongoing)</li>
</ul>
<p><strong>Order status:</strong></p>
<table>
<thead>
<tr>
<th>Status</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>NEW</code></td>
<td>The order has been accepted by the engine.</td>
</tr>
<tr>
<td><code v-pre>PARTIALLY_FILLED</code></td>
<td>A part of the order has been filled.</td>
</tr>
<tr>
<td><code v-pre>FILLED</code></td>
<td>The order has been completed.</td>
</tr>
<tr>
<td><code v-pre>PARTIALLY_CANCELED</code></td>
<td>A part of the order has been cancelled with self trade.</td>
</tr>
<tr>
<td><code v-pre>CANCELED</code></td>
<td>The order has been canceled by the user</td>
</tr>
<tr>
<td><code v-pre>EXPIRED</code></td>
<td>The order has been cancelled by matching-engine: LIMIT FOK order not filled, limit order not fully filled etc</td>
</tr>
</tbody>
</table>
<p><strong>Order types:</strong></p>
<ul>
<li>LIMIT</li>
<li>MARKET</li>
<li>LIMIT_MAKER</li>
<li>STOP_LOSS</li>
<li>STOP_LOSS_LIMIT</li>
<li>TAKE_PROFIT</li>
<li>TAKE_PROFIT_LIMIT</li>
</ul>
<p><strong>Order Response Type (newOrderRespType):</strong></p>
<ul>
<li>
<p>ACK</p>
</li>
<li>
<p>RESULT</p>
</li>
<li>
<p>FULL</p>
</li>
</ul>
<p><strong>Order side:</strong></p>
<ul>
<li>BUY</li>
<li>SELL</li>
</ul>
<p><strong>Anti self-trading behaviour(stpFlag):</strong></p>
<table>
<thead>
<tr>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>CB</code></td>
<td>Both orders will be cancelled by match engine</td>
</tr>
<tr>
<td><code v-pre>CN</code></td>
<td>The new order will be cancelled by match engine</td>
</tr>
<tr>
<td><code v-pre>CO</code></td>
<td>The old order will be cancelled by match engine</td>
</tr>
</tbody>
</table>
<p><strong>Time in force (timeInForce):</strong></p>
<p>This sets how long an order will be active before expiration.</p>
<table>
<thead>
<tr>
<th>Status</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>GTC</code></td>
<td>Good Til Canceled <br> An order will be on the book unless the order is canceled.</td>
</tr>
<tr>
<td><code v-pre>IOC</code></td>
<td>Immediate Or Cancel <br> An order will try to fill the order as much as it can before the order expires.</td>
</tr>
<tr>
<td><code v-pre>FOK</code></td>
<td>Fill or Kill <br> An order will expire if the full order cannot be filled upon execution.</td>
</tr>
</tbody>
</table>
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
<h3 id="general-endpoints" tabindex="-1"><a class="header-anchor" href="#general-endpoints"><span>General endpoints</span></a></h3>
<h4 id="test-connectivity" tabindex="-1"><a class="header-anchor" href="#test-connectivity"><span>Test connectivity</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/ping</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test connectivity to the Rest API.</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters:</strong> NONE</p>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="check-server-time" tabindex="-1"><a class="header-anchor" href="#check-server-time"><span>Check server time</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/time</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test connectivity to the Rest API and get the current server time.</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters:</strong> NONE</p>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"serverTime"</span><span class="token operator">:</span> <span class="token number">1538323200000</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-user-ip" tabindex="-1"><a class="header-anchor" href="#get-user-ip"><span>Get user ip</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/user/ip</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Get the user ip.</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters:</strong> NONE</p>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"ip"</span><span class="token operator">:</span> <span class="token string">"57.181.16.43"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="exchange-information" tabindex="-1"><a class="header-anchor" href="#exchange-information"><span>Exchange information</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/exchangeInfo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Current exchange trading rules and symbol information</p>
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
<td>symbol</td>
<td>STRING</td>
<td>NO</td>
<td>Specify a trading pair, for example symbol=BTCPHP</td>
</tr>
<tr>
<td>symbols</td>
<td>STRING</td>
<td>NO</td>
<td>Specify multiple trading pairs, such as symbols=<code v-pre>&quot;BTCPHP,BTCUSDT&quot;</code></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"UTC"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"serverTime"</span><span class="token operator">:</span> <span class="token number">1538323200000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"exchangeFilters"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"symbols"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BTCPHP"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"TRADING"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"baseAsset"</span><span class="token operator">:</span> <span class="token string">"BTC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"baseAssetPrecision"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"quoteAsset"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"quoteAssetPrecision"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"orderTypes"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"MARKET"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"LIMIT_MAKER"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"STOP_LOSS_LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"STOP_LOSS"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"TAKE_PROFIT_LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"TAKE_PROFIT"</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"filters"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"filterType"</span><span class="token operator">:</span> <span class="token string">"PRICE_FILTER"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"minPrice"</span><span class="token operator">:</span> <span class="token string">"0.00000100"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"maxPrice"</span><span class="token operator">:</span> <span class="token string">"100000.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"tickSize"</span><span class="token operator">:</span> <span class="token string">"0.00000100"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"filterType"</span><span class="token operator">:</span> <span class="token string">"LOT_SIZE"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"minQty"</span><span class="token operator">:</span> <span class="token string">"0.00100000"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"maxQty"</span><span class="token operator">:</span> <span class="token string">"100000.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"stepSize"</span><span class="token operator">:</span> <span class="token string">"0.00100000"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"filterType"</span><span class="token operator">:</span> <span class="token string">"NOTIONAL"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"minNotional"</span><span class="token operator">:</span> <span class="token string">"0.00100000"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"filterType"</span><span class="token operator">:</span> <span class="token string">"MIN_NOTIONAL"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"minNotional"</span><span class="token operator">:</span> <span class="token string">"0.00100000"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"filterType"</span><span class="token operator">:</span> <span class="token string">"MAX_NUM_ORDERS"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"maxNumOrders"</span><span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"filterType"</span><span class="token operator">:</span> <span class="token string">"MAX_NUM_ALGO_ORDERS"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"maxNumAlgoOrders"</span><span class="token operator">:</span> <span class="token number">5</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wallet-endpoints" tabindex="-1"><a class="header-anchor" href="#wallet-endpoints"><span>Wallet endpoints</span></a></h3>
<h4 id="all-coins-information-user-data" tabindex="-1"><a class="header-anchor" href="#all-coins-information-user-data"><span>All Coins' Information (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/wallet/v1/config/getall  <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Get information on coins (available for deposit and withdrawal) for the user.</p>
<p><strong>Weight(IP):</strong> 10</p>
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
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"coin"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"depositAllEnable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"withdrawAllEnable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"free"</span><span class="token operator">:</span> <span class="token string">"1.9144"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"locked"</span><span class="token operator">:</span> <span class="token string">"0.0426"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"networkList"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string-property property">"addressRegex"</span><span class="token operator">:</span> <span class="token string">"0x([0-9a-fA-F]){40}"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"memoRegex"</span><span class="token operator">:</span> <span class="token string">"^[0-9A-Za-z\\-_]{1,120}$"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"network"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"ERC20"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"depositEnable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"minConfirm"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"unLockConfirm"</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"withdrawDesc"</span><span class="token operator">:</span> <span class="token string">"1234567890"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"withdrawEnable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"withdrawFee"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"withdrawIntegerMultiple"</span><span class="token operator">:</span> <span class="token string">"0.00000001"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"withdrawMax"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"withdrawMin"</span><span class="token operator">:</span> <span class="token string">"0.001"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"sameAddress"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"legalMoney"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="deposit-address-user-data" tabindex="-1"><a class="header-anchor" href="#deposit-address-user-data"><span>Deposit Address (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/wallet/v1/deposit/address  <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Fetch a deposit address along with its network.</p>
<p><strong>Weight(IP):</strong> 10</p>
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
<td>coin</td>
<td>STRING</td>
<td>YES</td>
<td>The value is from All Coins' Information API</td>
</tr>
<tr>
<td>network</td>
<td>STRING</td>
<td>YES</td>
<td>The value is from All Coins' Information API</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"coin"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"0xfe98628173830bf79c59f04585ce41f7de168784"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"addressTag"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="withdraw-user-data" tabindex="-1"><a class="header-anchor" href="#withdraw-user-data"><span>Withdraw (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/wallet/v1/withdraw/apply  <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Submit a withdrawal request.</p>
<p><strong>Weight(UID):</strong> 100</p>
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
<td>coin</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>network</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>address</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>addressTag</td>
<td>STRING</td>
<td>NO</td>
<td>Secondary address identifier for coins like XRP,XMR etc.</td>
</tr>
<tr>
<td>amount</td>
<td>DECIMAL</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>withdrawOrderId</td>
<td>STRING</td>
<td>NO</td>
<td>client id for withdraw, length is limited to 30.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<ul>
<li>Please note that the <code v-pre>coin</code>/<code v-pre>network</code>/<code v-pre>address</code>/<code v-pre>addressTag</code> combination <strong>MUST</strong> be in the withdrawal address whitelist. You must set up the withdrawal address whitelist before making this API call.</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"id"</span><span class="token operator">:</span><span class="token string">"459165282044051456"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="deposit-history-user-data" tabindex="-1"><a class="header-anchor" href="#deposit-history-user-data"><span>Deposit History (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/wallet/v1/deposit/history  <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Fetch deposit history.</p>
<p><strong>Weight(IP):</strong> 2</p>
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
<td>coin</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>txId</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>status</td>
<td>INT</td>
<td>NO</td>
<td>0-PROCESSING, 1-SUCCESS, 2-FAILED, 3-NEED_FILL_DATA(travel rule info)</td>
</tr>
<tr>
<td>statuses</td>
<td>STRING</td>
<td>NO</td>
<td>Specify multiple status, such as statuses=<code v-pre>&quot;1,3&quot;</code></td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td>Default: 90 days from current timestamp</td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td>Default: current timestamp</td>
</tr>
<tr>
<td>offset</td>
<td>INT</td>
<td>NO</td>
<td>Default:0</td>
</tr>
<tr>
<td>limit</td>
<td>LONG</td>
<td>NO</td>
<td>Default:1000, Max:1000</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>Please note the default <code v-pre>startTime</code> and <code v-pre>endTime</code> to ensure the time interval is within 0-90 days.</p>
</li>
<li>
<p>If both <code v-pre>startTime</code> and <code v-pre>endTime</code> are sent, time between <code v-pre>startTime</code> and <code v-pre>endTime</code> must be less than 90 days.</p>
</li>
<li>
<p>Please note you can send either <code v-pre>status</code> or <code v-pre>statuses</code>, but not both.</p>
</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"d_769800519366885376"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"0.001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"coin"</span><span class="token operator">:</span> <span class="token string">"BNB"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"network"</span><span class="token operator">:</span> <span class="token string">"BNB"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"addressTag"</span><span class="token operator">:</span> <span class="token string">"101764890"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"txId"</span><span class="token operator">:</span> <span class="token string">"98A3EA560C6B3336D348B6C83F0F95ECE4F1F5919E94BD006E5BF3BF264FACFC"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"insertTime"</span><span class="token operator">:</span> <span class="token number">1661493146000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"confirmNo"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"d_769754833590042625"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span><span class="token string">"0.5"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"coin"</span><span class="token operator">:</span><span class="token string">"IOTA"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"network"</span><span class="token operator">:</span><span class="token string">"IOTA"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"address"</span><span class="token operator">:</span><span class="token string">"SIZ9VLMHWATXKV99LH99CIGFJFUMLEHGWVZVNNZXRJJVWBPHYWPPBOSDORZ9EQSHCZAMPVAPGFYQAUUV9DROOXJLNW"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"addressTag"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"txId"</span><span class="token operator">:</span><span class="token string">"ESBFVQUTPIWQNJSPXFNHNYHSQNTGKRVKPRABQWTAXCDWOAKDKYWPTVG9BGXNVNKTLEJGESAVXIKIZ9999"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"insertTime"</span><span class="token operator">:</span><span class="token number">1599620082000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"confirmNo"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="withdraw-history-user-data" tabindex="-1"><a class="header-anchor" href="#withdraw-history-user-data"><span>Withdraw History (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/wallet/v1/withdraw/history  <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Fetch withdrawal history.</p>
<p><strong>Weight(IP):</strong> 2</p>
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
<td>coin</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>withdrawOrderId</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>status</td>
<td>INT</td>
<td>NO</td>
<td>0-PROCESSING, 1-SUCCESS, 2-FAILED</td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td>Default: 90 days from current timestamp</td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td>Default: current timestamp</td>
</tr>
<tr>
<td>offset</td>
<td>INT</td>
<td>NO</td>
<td>Default:0</td>
</tr>
<tr>
<td>limit</td>
<td>LONG</td>
<td>NO</td>
<td>Default:1000, Max:1000</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>Please note the default <code v-pre>startTime</code> and <code v-pre>endTime</code> to ensure the time interval is within 0-90 days.</p>
</li>
<li>
<p>If both <code v-pre>startTime</code> and <code v-pre>endTime</code> are sent, time between <code v-pre>startTime</code> and <code v-pre>endTime</code> must be less than 90 days.</p>
</li>
<li>
<p>If <code v-pre>withdrawOrderId</code> is sent, time between <code v-pre>startTime</code> and <code v-pre>endTime</code> must be less than 7 days.</p>
</li>
<li>
<p>If <code v-pre>withdrawOrderId</code> is sent and <code v-pre>startTime</code> and <code v-pre>endTime</code> are not provided, the API will return records from the last 7 days by default.</p>
</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"459890698271244288"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"0.01"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"transactionFee"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"coin"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"0x386AE30AE2dA293987B5d51ddD03AEb70b21001F"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"addressTag"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"txId"</span><span class="token operator">:</span> <span class="token string">"0x4ae2fed36a90aada978fc31c38488e8b60d7435cfe0b4daed842456b4771fcf7"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"applyTime"</span><span class="token operator">:</span> <span class="token number">1673601139000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"network"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"withdrawOrderId"</span><span class="token operator">:</span> <span class="token string">"thomas123"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"info"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"confirmNo"</span><span class="token operator">:</span> <span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"451899190746456064"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"0.00063"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"transactionFee"</span><span class="token operator">:</span> <span class="token string">"0.00037"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"coin"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"0x386AE30AE2dA293987B5d51ddD03AEb70b21001F"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"addressTag"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"txId"</span><span class="token operator">:</span> <span class="token string">"0x62690ca4f9d6a8868c258e2ce613805af614d9354dda7b39779c57b2e4da0260"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"applyTime"</span><span class="token operator">:</span> <span class="token number">1671695815000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"network"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"withdrawOrderId"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"info"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"confirmNo"</span><span class="token operator">:</span> <span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="transfers-user-data" tabindex="-1"><a class="header-anchor" href="#transfers-user-data"><span>Transfers (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/transfer/v3/transfers</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint is used to transfer funds between two accounts.</p>
<p><strong>Weight:</strong> 50</p>
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
<td>client_transfer_id</td>
<td>STRING</td>
<td>NO</td>
<td>Client Transfer ID, cannot send duplicate ID</td>
</tr>
<tr>
<td>account</td>
<td>STRING</td>
<td>YES</td>
<td>Either the token (e.g. PHP, BTC, ETH) or the Balance ID (e.g. <code v-pre>1447779051242545455</code>) to be transferred.</td>
</tr>
<tr>
<td>target_address</td>
<td>STRING</td>
<td>YES</td>
<td>The phone number or email for recipient account (e.g. <code v-pre>+63 9686490252</code> or <code v-pre>testsub@gmail.com</code>)</td>
</tr>
<tr>
<td>amount</td>
<td>BigDecimal</td>
<td>YES</td>
<td>The amount being transferred</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time when the transfer is performed</td>
</tr>
<tr>
<td>message</td>
<td>STRING</td>
<td>NO</td>
<td>The message sent to the recipient account</td>
</tr>
</tbody>
</table>
<p>If the client_transfer_id or id parameter is passed in, the type parameter is invalid.</p>
<p><strong>Request:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"account"</span><span class="token operator">:</span> <span class="token string">"1451431230880900352"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"target_address"</span><span class="token operator">:</span> <span class="token string">"christina@coins.ph"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"1232"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"transfer"</span><span class="token operator">:</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"1451431230880900352"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span><span class="token comment">//status enum: pending,success,failed</span></span>
<span class="line">      <span class="token string-property property">"account"</span><span class="token operator">:</span> <span class="token string">"90dfg03goamdf02fs"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"target_address"</span><span class="token operator">:</span> <span class="token string">"testsub@gmail.com"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"exchange"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"payment"</span><span class="token operator">:</span> <span class="token string">"23094j0amd0fmag9agjgasd"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"client_transfer_id"</span><span class="token operator">:</span> <span class="token string">"1487573639841995271"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"message"</span><span class="token operator">:</span> <span class="token string">"example"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"errorMessage"</span><span class="token operator">:</span><span class="token string">""</span><span class="token comment">//Error message returned when transfer fails, eg: Insufficient balance</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="payment-request-user-data" tabindex="-1"><a class="header-anchor" href="#payment-request-user-data"><span>Payment request (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v3/payment-request/payment-requests <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Initiate a new payment transaction by creating a payment request.
<strong>Weight:</strong> 1</p>
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
<td>payer_contact_info</td>
<td>STRING</td>
<td>YES</td>
<td>The contact information, typically an email address, to which the payment request should be sent.</td>
</tr>
<tr>
<td>receiving_account</td>
<td>STRING</td>
<td>YES</td>
<td>Either the token (e.g. PHP) or the Balance ID (e.g. 1447779051242545455 Refer to the id field in /openapi/account/v3/crypto-accounts.) to be transferred.</td>
</tr>
<tr>
<td>amount</td>
<td>DECIMAL</td>
<td>YES</td>
<td>The requested amount to be transferred to the requestor's receiving_account.</td>
</tr>
<tr>
<td>message</td>
<td>STRING</td>
<td>YES</td>
<td>An arbitrary message that will be attached to the payment request.</td>
</tr>
<tr>
<td>supported_payment_collectors</td>
<td>STRING</td>
<td>NO</td>
<td>Methods of payment that are available to a user when they view a payment request, optional items <code v-pre>coins_peso_wallet,CEBL,MLH,PLWN</code>,  e.g. <code v-pre>[&quot;coins_peso_wallet&quot;]</code> or <code v-pre>[&quot;coins_peso_wallet&quot;,&quot;CEBL&quot;,&quot;MLH&quot;,&quot;PLWN&quot;]</code>. Note: when a payment method is closed, it will be unavailable.</td>
</tr>
<tr>
<td>expires_at</td>
<td>STRING</td>
<td>NO</td>
<td>The expiration date of the payment request. Expected to be in ISO 8601 datetime format (e.g., 2016-10-20T13:00:00.000000Z) or a time delta from the current time (Option:1w,3d,2h,32m,5s). The default expiration period is set to 7 days.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"payment-request"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"message"</span><span class="token operator">:</span> <span class="token string">"i am boss"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"1433341829953096704"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"invoice"</span><span class="token operator">:</span> <span class="token string">"1433341829953096704"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"20"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"currency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"pending"</span><span class="token punctuation">,</span><span class="token comment">//pending,fully_paid,expired,canceled</span></span>
<span class="line">        <span class="token string-property property">"created_at"</span><span class="token operator">:</span> <span class="token string">"1685603661217"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updated_at"</span><span class="token operator">:</span> <span class="token string">"1685603661217"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"expires_at"</span><span class="token operator">:</span> <span class="token string">"1686208461219"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"supported_payment_collectors"</span><span class="token operator">:</span> <span class="token string">"[\"coins_peso_wallet\"]"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"payment_url"</span><span class="token operator">:</span> <span class="token string">"https://www.pro.coins.ph/payment/invoice/1433341829953096704"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"payer_contact_info"</span><span class="token operator">:</span> <span class="token string">"jennins@coins.ph"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="account-information-user-data" tabindex="-1"><a class="header-anchor" href="#account-information-user-data"><span>Account information (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/account <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>GET current account information.</p>
<p><strong>Weight:</strong> 10</p>
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
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token string-property property">"accountType"</span><span class="token operator">:</span><span class="token string">"SPOT"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"canDeposit"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"canTrade"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"canWithdraw"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"balances"</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token string-property property">"asset"</span><span class="token operator">:</span><span class="token string">"456"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token string-property property">"free"</span><span class="token operator">:</span><span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token string-property property">"locked"</span><span class="token operator">:</span><span class="token string">"0"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token string-property property">"asset"</span><span class="token operator">:</span><span class="token string">"APE"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token string-property property">"free"</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token string-property property">"locked"</span><span class="token operator">:</span><span class="token string">"0"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token string-property property">"asset"</span><span class="token operator">:</span><span class="token string">"AXS"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token string-property property">"free"</span><span class="token operator">:</span><span class="token string">"0.00005"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token string-property property">"locked"</span><span class="token operator">:</span><span class="token string">"0"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"token"</span><span class="token operator">:</span><span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"daily"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"cashInLimit"</span><span class="token operator">:</span><span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"cashInRemaining"</span><span class="token operator">:</span><span class="token string">"499994"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"cashOutLimit"</span><span class="token operator">:</span><span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"cashOutRemaining"</span><span class="token operator">:</span><span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"totalWithdrawLimit"</span><span class="token operator">:</span><span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"totalWithdrawRemaining"</span><span class="token operator">:</span><span class="token string">"500000"</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"monthly"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"cashInLimit"</span><span class="token operator">:</span><span class="token string">"10000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"cashInRemaining"</span><span class="token operator">:</span><span class="token string">"9999157"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"cashOutLimit"</span><span class="token operator">:</span><span class="token string">"10000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"cashOutRemaining"</span><span class="token operator">:</span><span class="token string">"10000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"totalWithdrawLimit"</span><span class="token operator">:</span><span class="token string">"10000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"totalWithdrawRemaining"</span><span class="token operator">:</span><span class="token string">"10000000"</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"annually"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"cashInLimit"</span><span class="token operator">:</span><span class="token string">"120000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"cashInRemaining"</span><span class="token operator">:</span><span class="token string">"119998577"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"cashOutLimit"</span><span class="token operator">:</span><span class="token string">"120000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"cashOutRemaining"</span><span class="token operator">:</span><span class="token string">"119999488"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"totalWithdrawLimit"</span><span class="token operator">:</span><span class="token string">"120000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"totalWithdrawRemaining"</span><span class="token operator">:</span><span class="token string">"119998487.97"</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"updateTime"</span><span class="token operator">:</span><span class="token number">1707273549694</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="market-data-endpoints" tabindex="-1"><a class="header-anchor" href="#market-data-endpoints"><span>Market Data endpoints</span></a></h3>
<h4 id="order-book" tabindex="-1"><a class="header-anchor" href="#order-book"><span>Order book</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/quote/v1/depth</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong></p>
<p>Adjusted based on the limit:</p>
<table>
<thead>
<tr>
<th>Limit</th>
<th>Weight</th>
</tr>
</thead>
<tbody>
<tr>
<td>5, 10, 20, 50, 100</td>
<td>1</td>
</tr>
<tr>
<td>200</td>
<td>5</td>
</tr>
</tbody>
</table>
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
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Default 100; max 200.</td>
</tr>
</tbody>
</table>
<p><strong>Caution:</strong> setting limit=0 can return 200 records.</p>
<p><strong>Response:</strong></p>
<p>[PRICE, QTY]</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"lastUpdateId"</span><span class="token operator">:</span> <span class="token number">1027024</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"bids"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"4.90000000"</span><span class="token punctuation">,</span>   <span class="token comment">// PRICE</span></span>
<span class="line">      <span class="token string">"331.00000000"</span>  <span class="token comment">// QTY</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"4.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"431.00000000"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"asks"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"4.00000200"</span><span class="token punctuation">,</span>  <span class="token comment">// PRICE</span></span>
<span class="line">      <span class="token string">"12.00000000"</span>  <span class="token comment">// QTY</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"5.10000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"28.00000000"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="recent-trades-list" tabindex="-1"><a class="header-anchor" href="#recent-trades-list"><span>Recent trades list</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/quote/v1/trades</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Get recent trades (up to last 60).</p>
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
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td>EXP: BTCUSDT</td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Default 500; max 1000. if limit &lt;=0 or &gt; 1000 then return 1000</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">28457</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"4.00000100"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"qty"</span><span class="token operator">:</span> <span class="token string">"12.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"quoteQty"</span><span class="token operator">:</span> <span class="token string">"48.000012"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token number">1499865549590</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"isBuyerMaker"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"isBestMatch"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="kline-candlestick-data" tabindex="-1"><a class="header-anchor" href="#kline-candlestick-data"><span>Kline/Candlestick data</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/quote/v1/klines</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Kline/candlestick bars for a symbol.
Klines are uniquely identified by their open time.</p>
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
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td>EXP: BTCUSDT</td>
</tr>
<tr>
<td>interval</td>
<td>ENUM</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Default 500; max 1000.</td>
</tr>
</tbody>
</table>
<ul>
<li>If startTime and endTime are not sent, the most recent klines are returned.</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span></span>
<span class="line">    <span class="token number">1499040000000</span><span class="token punctuation">,</span>      <span class="token comment">// Open time</span></span>
<span class="line">    <span class="token string">"0.01634790"</span><span class="token punctuation">,</span>       <span class="token comment">// Open</span></span>
<span class="line">    <span class="token string">"0.80000000"</span><span class="token punctuation">,</span>       <span class="token comment">// High</span></span>
<span class="line">    <span class="token string">"0.01575800"</span><span class="token punctuation">,</span>       <span class="token comment">// Low</span></span>
<span class="line">    <span class="token string">"0.01577100"</span><span class="token punctuation">,</span>       <span class="token comment">// Close</span></span>
<span class="line">    <span class="token string">"148976.11427815"</span><span class="token punctuation">,</span>  <span class="token comment">// Volume</span></span>
<span class="line">    <span class="token number">1499644799999</span><span class="token punctuation">,</span>      <span class="token comment">// Close time</span></span>
<span class="line">    <span class="token string">"2434.19055334"</span><span class="token punctuation">,</span>    <span class="token comment">// Quote asset volume</span></span>
<span class="line">    <span class="token number">308</span><span class="token punctuation">,</span>                <span class="token comment">// Number of trades</span></span>
<span class="line">    <span class="token string">"1756.87402397"</span><span class="token punctuation">,</span>    <span class="token comment">// Taker buy base asset volume</span></span>
<span class="line">    <span class="token string">"28.46694368"</span>       <span class="token comment">// Taker buy quote asset volume</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_24hr-ticker-price-change-statistics" tabindex="-1"><a class="header-anchor" href="#_24hr-ticker-price-change-statistics"><span>24hr ticker price change statistics</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/quote/v1/ticker/24hr</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>24 hour price change statistics. <strong>Careful</strong> when accessing this with no symbol.</p>
<p><strong>Weight:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Symbols Provided</th>
<th>Weight</th>
</tr>
</thead>
<tbody>
<tr>
<td>symbol</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td></td>
<td>symbol parameter is omitted</td>
<td>40</td>
</tr>
<tr>
<td>symbols</td>
<td>1-20</td>
<td>1</td>
</tr>
<tr>
<td></td>
<td>21-100</td>
<td>20</td>
</tr>
<tr>
<td></td>
<td>101 or more</td>
<td>40</td>
</tr>
<tr>
<td></td>
<td>symbol parameter is omitted</td>
<td>40</td>
</tr>
</tbody>
</table>
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
<td>symbol</td>
<td>STRING</td>
<td>NO</td>
<td>Example: BTCUSDT</td>
</tr>
<tr>
<td>symbols</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
</tbody>
</table>
<ul>
<li>Parameter symbol and symbols cannot be used in combination.If neither parameter is sent, tickers for all symbols will be returned in an array.Examples of accepted format for the symbols parameter: [&quot;BTCUSDT&quot;,&quot;BNBUSDT&quot;] and not case sensitive</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BNBBTC"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"priceChange"</span><span class="token operator">:</span> <span class="token string">"-94.99999800"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"priceChangePercent"</span><span class="token operator">:</span> <span class="token string">"-95.960"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"weightedAvgPrice"</span><span class="token operator">:</span> <span class="token string">"0.29628482"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"prevClosePrice"</span><span class="token operator">:</span> <span class="token string">"0.10002000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"lastPrice"</span><span class="token operator">:</span> <span class="token string">"4.00000200"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"lastQty"</span><span class="token operator">:</span> <span class="token string">"200.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"bidPrice"</span><span class="token operator">:</span> <span class="token string">"4.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"bidQty"</span><span class="token operator">:</span> <span class="token string">"100.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"askPrice"</span><span class="token operator">:</span> <span class="token string">"4.00000200"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"askQty"</span><span class="token operator">:</span> <span class="token string">"100.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"openPrice"</span><span class="token operator">:</span> <span class="token string">"99.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"highPrice"</span><span class="token operator">:</span> <span class="token string">"100.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"lowPrice"</span><span class="token operator">:</span> <span class="token string">"0.10000000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"volume"</span><span class="token operator">:</span> <span class="token string">"8913.30000000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"quoteVolume"</span><span class="token operator">:</span> <span class="token string">"15.30000000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"openTime"</span><span class="token operator">:</span> <span class="token number">1499783499040</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"closeTime"</span><span class="token operator">:</span> <span class="token number">1499869899040</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"firstId"</span><span class="token operator">:</span> <span class="token number">28385</span><span class="token punctuation">,</span>   <span class="token comment">// first trade id</span></span>
<span class="line">  <span class="token string-property property">"lastId"</span><span class="token operator">:</span> <span class="token number">28460</span><span class="token punctuation">,</span>    <span class="token comment">// Last tradeId</span></span>
<span class="line">  <span class="token string-property property">"count"</span><span class="token operator">:</span> <span class="token number">76</span>         <span class="token comment">// Trade count</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OR</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BNBBTC"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"priceChange"</span><span class="token operator">:</span> <span class="token string">"-94.99999800"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"priceChangePercent"</span><span class="token operator">:</span> <span class="token string">"-95.960"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"weightedAvgPrice"</span><span class="token operator">:</span> <span class="token string">"0.29628482"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"prevClosePrice"</span><span class="token operator">:</span> <span class="token string">"0.10002000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"lastPrice"</span><span class="token operator">:</span> <span class="token string">"4.00000200"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"lastQty"</span><span class="token operator">:</span> <span class="token string">"200.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"bidPrice"</span><span class="token operator">:</span> <span class="token string">"4.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"bidQty"</span><span class="token operator">:</span> <span class="token string">"100.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"askPrice"</span><span class="token operator">:</span> <span class="token string">"4.00000200"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"askQty"</span><span class="token operator">:</span> <span class="token string">"100.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"openPrice"</span><span class="token operator">:</span> <span class="token string">"99.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"highPrice"</span><span class="token operator">:</span> <span class="token string">"100.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"lowPrice"</span><span class="token operator">:</span> <span class="token string">"0.10000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"volume"</span><span class="token operator">:</span> <span class="token string">"8913.30000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"quoteVolume"</span><span class="token operator">:</span> <span class="token string">"15.30000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"openTime"</span><span class="token operator">:</span> <span class="token number">1499783499040</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"closeTime"</span><span class="token operator">:</span> <span class="token number">1499869899040</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"firstId"</span><span class="token operator">:</span> <span class="token number">28385</span><span class="token punctuation">,</span>   <span class="token comment">// First tradeId</span></span>
<span class="line">    <span class="token string-property property">"lastId"</span><span class="token operator">:</span> <span class="token number">28460</span><span class="token punctuation">,</span>    <span class="token comment">// Last tradeId</span></span>
<span class="line">    <span class="token string-property property">"count"</span><span class="token operator">:</span> <span class="token number">76</span>         <span class="token comment">// Trade count</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="symbol-price-ticker" tabindex="-1"><a class="header-anchor" href="#symbol-price-ticker"><span>Symbol price ticker</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/quote/v1/ticker/price</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Latest price for a symbol or symbols.</p>
<p><strong>Weight:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Symbols Provided</th>
<th>Weight</th>
</tr>
</thead>
<tbody>
<tr>
<td>symbol</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td></td>
<td>symbol parameter is omitted</td>
<td>2</td>
</tr>
<tr>
<td>symbols</td>
<td>Any</td>
<td>2</td>
</tr>
</tbody>
</table>
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
<td>symbol</td>
<td>STRING</td>
<td>NO</td>
<td>Example: BTCUSDT</td>
</tr>
<tr>
<td>symbols</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
</tbody>
</table>
<ul>
<li>Parameter symbol and symbols cannot be used in combination.If neither parameter is sent, prices for all symbols will be returned in an array.Examples of accepted format for the symbols parameter: [&quot;BTCUSDT&quot;,&quot;BNBUSDT&quot;] and not case sensitive</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"LTCBTC"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"4.00000200"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OR</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"LTCBTC"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"4.00000200"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BTCPHP"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"0.07946600"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="symbol-order-book-ticker" tabindex="-1"><a class="header-anchor" href="#symbol-order-book-ticker"><span>Symbol order book ticker</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/quote/v1/ticker/bookTicker</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Best price/qty on the order book for a symbol or symbols.</p>
<p><strong>Weight:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Symbols Provided</th>
<th>Weight</th>
</tr>
</thead>
<tbody>
<tr>
<td>symbol</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td></td>
<td>symbol parameter is omitted</td>
<td>2</td>
</tr>
<tr>
<td>symbols</td>
<td>Any</td>
<td>2</td>
</tr>
</tbody>
</table>
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
<td>symbol</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>symbols</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
</tbody>
</table>
<ul>
<li>Parameter symbol and symbols cannot be used in combination.If neither parameter is sent, bookTickers for all symbols will be returned in an array.Examples of accepted format for the symbols parameter: [&quot;BTCUSDT&quot;,&quot;BNBUSDT&quot;] and not case sensitive</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"LTCBTC"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"bidPrice"</span><span class="token operator">:</span> <span class="token string">"4.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"bidQty"</span><span class="token operator">:</span> <span class="token string">"431.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"askPrice"</span><span class="token operator">:</span> <span class="token string">"4.00000200"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"askQty"</span><span class="token operator">:</span> <span class="token string">"9.00000000"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OR</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"LTCBTC"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"bidPrice"</span><span class="token operator">:</span> <span class="token string">"4.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"bidQty"</span><span class="token operator">:</span> <span class="token string">"431.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"askPrice"</span><span class="token operator">:</span> <span class="token string">"4.00000200"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"askQty"</span><span class="token operator">:</span> <span class="token string">"9.00000000"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BTCPHP"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"bidPrice"</span><span class="token operator">:</span> <span class="token string">"0.07946700"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"bidQty"</span><span class="token operator">:</span> <span class="token string">"9.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"askPrice"</span><span class="token operator">:</span> <span class="token string">"100000.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"askQty"</span><span class="token operator">:</span> <span class="token string">"1000.00000000"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="current-average-price" tabindex="-1"><a class="header-anchor" href="#current-average-price"><span>Current average price</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/quote/v1/avgPrice</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Current average price for a symbol.</p>
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
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td>symbol is not case sensitive, e.g. BTCUSDT or btcusdt</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"mins"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"9.35751834"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cryptoasset-trading-pairs" tabindex="-1"><a class="header-anchor" href="#cryptoasset-trading-pairs"><span>Cryptoasset trading pairs</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/pairs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>a summary on cryptoasset trading pairs available on the exchange</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters:</strong></p>
<p>None</p>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"LTCBTC"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"quoteToken"</span><span class="token operator">:</span> <span class="token string">"LTC"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"baseToken"</span><span class="token operator">:</span> <span class="token string">"BTC"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BTCUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"quoteToken"</span><span class="token operator">:</span> <span class="token string">"BTC"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"baseToken"</span><span class="token operator">:</span> <span class="token string">"USDT"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spot-trading-endpoints" tabindex="-1"><a class="header-anchor" href="#spot-trading-endpoints"><span>Spot Trading Endpoints</span></a></h3>
<h4 id="new-order-trade" tabindex="-1"><a class="header-anchor" href="#new-order-trade"><span>New order  (TRADE)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v1/order  <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Send in a new order.</p>
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
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>side</td>
<td>ENUM</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>ENUM</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>timeInForce</td>
<td>ENUM</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>quantity</td>
<td>DECIMAL</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>quoteOrderQty</td>
<td>DECIMAL</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>price</td>
<td>DECIMAL</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>newClientOrderId</td>
<td>STRING</td>
<td>NO</td>
<td>A unique id among open orders. Automatically generated if not sent. Orders with the same <code v-pre>newClientOrderID</code> can be accepted only when the previous one is filled, otherwise the order will be rejected.</td>
</tr>
<tr>
<td>stopPrice</td>
<td>DECIMAL</td>
<td>NO</td>
<td>Used with <code v-pre>STOP_LOSS</code>, <code v-pre>STOP_LOSS_LIMIT</code>, <code v-pre>TAKE_PROFIT</code>, and <code v-pre>TAKE_PROFIT_LIMIT</code> orders.</td>
</tr>
<tr>
<td>newOrderRespType</td>
<td>ENUM</td>
<td>NO</td>
<td>Set the response JSON. <code v-pre>ACK</code>, <code v-pre>RESULT</code>, or <code v-pre>FULL</code>; <code v-pre>MARKET</code> and <code v-pre>LIMIT</code> order types default to <code v-pre>FULL</code>, all other orders default to <code v-pre>ACK</code>.</td>
</tr>
<tr>
<td>stpFlag</td>
<td>ENUM</td>
<td>NO</td>
<td>The anti self-trading behaviour, Default anti self-dealing behaviour is CB</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p>Additional mandatory parameters based on <code v-pre>type</code>:</p>
<table>
<thead>
<tr>
<th>Type</th>
<th>Additional mandatory parameters</th>
<th>Additional Information</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>LIMIT</code></td>
<td><code v-pre>quantity</code>, <code v-pre>price</code></td>
<td></td>
</tr>
<tr>
<td><code v-pre>MARKET</code></td>
<td><code v-pre>quantity</code> or <code v-pre>quoteOrderQty</code></td>
<td><code v-pre>MARKET</code> orders using <code v-pre>quantity</code> field specifies the amount of the base asset the user wants to buy/sell, E.g. <code v-pre>MARKET</code> order on BCHUSDT  will specify how much BCH the user is buying/selling. <br /><code v-pre>MARKET</code> orders using <code v-pre>quoteOrderQty</code> field specifies the amount of the quote asset the user wants to buy/sell, E.g. <code v-pre>MARKET</code> order on BCHUSDT  will specify how much USDT the user is buying/selling.<br /></td>
</tr>
<tr>
<td><code v-pre>STOP_LOSS</code></td>
<td><code v-pre>quantity</code> or <code v-pre>quoteOrderQty</code>, <code v-pre>stopPrice</code></td>
<td>This will execute a <code v-pre>MARKET</code> order when<code v-pre>stopPrice</code> is met. Use <code v-pre>quantity</code> for selling, <code v-pre>quoteOrderQty</code> for buying.</td>
</tr>
<tr>
<td><code v-pre>STOP_LOSS_LIMIT</code></td>
<td><code v-pre>quantity</code>,  <code v-pre>price</code>, <code v-pre>stopPrice</code></td>
<td>This will execute a <code v-pre>LIMIT</code> order when<code v-pre>stopPrice</code> is met.</td>
</tr>
<tr>
<td><code v-pre>TAKE_PROFIT</code></td>
<td><code v-pre>quantity</code> or <code v-pre>quoteOrderQty</code>, <code v-pre>stopPrice</code></td>
<td>This will execute a <code v-pre>MARKET</code> order when<code v-pre>stopPrice</code> is met. Use <code v-pre>quantity</code> for selling, <code v-pre>quoteOrderQty</code> for buying.</td>
</tr>
<tr>
<td><code v-pre>TAKE_PROFIT_LIMIT</code></td>
<td><code v-pre>quantity</code>, <code v-pre>price</code>, <code v-pre>stopPrice</code></td>
<td>This will execute a <code v-pre>LIMIT</code> order when<code v-pre>stopPrice</code> is met.</td>
</tr>
<tr>
<td><code v-pre>LIMIT_MAKER</code></td>
<td><code v-pre>quantity</code>, <code v-pre>price</code></td>
<td>This is a <code v-pre>LIMIT</code> order that will be rejected if the order immediately matches and trades as a taker.</td>
</tr>
</tbody>
</table>
<p>Trigger order price rules against market price for both MARKET and LIMIT versions:</p>
<ul>
<li>Price above market price: <code v-pre>STOP_LOSS/STOP_LOSS_LIMIT</code> <code v-pre>BUY</code>, <code v-pre>TAKE_PROFIT/TAKE_PROFIT_LIMIT</code> <code v-pre>SELL</code></li>
<li>Price below market price: <code v-pre>STOP_LOSS/STOP_LOSS_LIMIT</code> <code v-pre>SELL</code>, <code v-pre>TAKE_PROFIT/TAKE_PROFIT_LIMIT</code> <code v-pre>BUY</code></li>
</ul>
<p><strong>Response ACK:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BCHUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1202289462787244800</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"165806007267756"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"transactTime"</span><span class="token operator">:</span> <span class="token number">1656900365976</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response RESULT:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BCHUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1202289462787244800</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"165806007267756"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"transactTime"</span><span class="token operator">:</span> <span class="token number">1656900365976</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"101"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"101"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"101"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"FILLED"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"SELL"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response FULL:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BCHUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1202289462787244800</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"165806007267756"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"transactTime"</span><span class="token operator">:</span> <span class="token number">1656900365976</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"101"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"101"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"101"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"FILLED"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"SELL"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">    <span class="token string-property property">"fills"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"qty"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"commission"</span><span class="token operator">:</span> <span class="token string">"0.01"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"commissionAsset"</span><span class="token operator">:</span> <span class="token string">"USDT"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"tradeId"</span><span class="token operator">:</span> <span class="token string">"1205027741844507648"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"qty"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"commission"</span><span class="token operator">:</span> <span class="token string">"0.005"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"commissionAsset"</span><span class="token operator">:</span> <span class="token string">"USDT"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"tradeId"</span><span class="token operator">:</span> <span class="token string">"1205027331347975169"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="test-new-order-trade" tabindex="-1"><a class="header-anchor" href="#test-new-order-trade"><span>Test new order (TRADE)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v1/order/test <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test new order creation and signature/recvWindow long.
Creates and validates a new order but does not send it into the matching engine.</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters:</strong></p>
<p>Same as <code v-pre>POST /openapi/v1/order</code></p>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="query-order-user-data" tabindex="-1"><a class="header-anchor" href="#query-order-user-data"><span>Query order (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/order <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Check an order's status.</p>
<p><strong>Weight:</strong> 2</p>
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
<td>orderId</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>origClientOrderId</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p>Notes:</p>
<ul>
<li>Either <code v-pre>orderId</code> or <code v-pre>origClientOrderId</code> must be sent. If both parameters are sent, <code v-pre>orderId</code> takes precedence. A list will be returned for orders with identical clientOrderId.</li>
</ul>
<p><strong>Response Single Order:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'clientOrderId'</span><span class="token operator">:</span> <span class="token string">'test5678'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'cummulativeQuoteQty'</span><span class="token operator">:</span> <span class="token string">'3946.87326'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'executedQty'</span><span class="token operator">:</span> <span class="token string">'0.001'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'isWorking'</span><span class="token operator">:</span> False<span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'orderId'</span><span class="token operator">:</span> <span class="token number">1799249051008066560</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'origQty'</span><span class="token operator">:</span> <span class="token string">'0.001'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'origQuoteOrderQty'</span><span class="token operator">:</span> <span class="token string">'3946.87326'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'price'</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'side'</span><span class="token operator">:</span> <span class="token string">'BUY'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'status'</span><span class="token operator">:</span> <span class="token string">'FILLED'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'stopPrice'</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'symbol'</span><span class="token operator">:</span> <span class="token string">'BTCPHP'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'time'</span><span class="token operator">:</span> <span class="token number">1729223201090</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'timeInForce'</span><span class="token operator">:</span> <span class="token string">'GTC'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'type'</span><span class="token operator">:</span> <span class="token string">'MARKET'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'updateTime'</span><span class="token operator">:</span> <span class="token number">1729223201201</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response Order List:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'clientOrderId'</span><span class="token operator">:</span> <span class="token string">'test5678'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'cummulativeQuoteQty'</span><span class="token operator">:</span> <span class="token string">'3946.87326'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'executedQty'</span><span class="token operator">:</span> <span class="token string">'0.001'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'isWorking'</span><span class="token operator">:</span> False<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'orderId'</span><span class="token operator">:</span> <span class="token number">1799249051008066560</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'origQty'</span><span class="token operator">:</span> <span class="token string">'0.001'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'origQuoteOrderQty'</span><span class="token operator">:</span> <span class="token string">'3946.87326'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'price'</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'side'</span><span class="token operator">:</span> <span class="token string">'BUY'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'status'</span><span class="token operator">:</span> <span class="token string">'FILLED'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'stopPrice'</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'symbol'</span><span class="token operator">:</span> <span class="token string">'BTCPHP'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'time'</span><span class="token operator">:</span> <span class="token number">1729223201090</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'timeInForce'</span><span class="token operator">:</span> <span class="token string">'GTC'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'type'</span><span class="token operator">:</span> <span class="token string">'MARKET'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'updateTime'</span><span class="token operator">:</span> <span class="token number">1729223201201</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'clientOrderId'</span><span class="token operator">:</span> <span class="token string">'test5678'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'cummulativeQuoteQty'</span><span class="token operator">:</span> <span class="token string">'127.24738'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'executedQty'</span><span class="token operator">:</span> <span class="token string">'2.21'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'isWorking'</span><span class="token operator">:</span> False<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'orderId'</span><span class="token operator">:</span> <span class="token number">1799253321187025920</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'origQty'</span><span class="token operator">:</span> <span class="token string">'2.21'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'origQuoteOrderQty'</span><span class="token operator">:</span> <span class="token string">'127.24738'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'price'</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'side'</span><span class="token operator">:</span> <span class="token string">'BUY'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'status'</span><span class="token operator">:</span> <span class="token string">'FILLED'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'stopPrice'</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'symbol'</span><span class="token operator">:</span> <span class="token string">'USDCPHP'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'time'</span><span class="token operator">:</span> <span class="token number">1729223710134</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'timeInForce'</span><span class="token operator">:</span> <span class="token string">'GTC'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'type'</span><span class="token operator">:</span> <span class="token string">'MARKET'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'updateTime'</span><span class="token operator">:</span> <span class="token number">1729223710186</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cancel-order-trade" tabindex="-1"><a class="header-anchor" href="#cancel-order-trade"><span>Cancel order (TRADE)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">DELETE /openapi/v1/order  <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cancel an active order.</p>
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
<td>orderId</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>origClientOrderId</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p>Notes:</p>
<ul>
<li>Either <code v-pre>orderId</code> or <code v-pre>origClientOrderId</code> must be sent. If both parameters are sent, <code v-pre>orderId</code> takes precedence.</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BCHBUSD"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1205324142243592448</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"165830718862761"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"8"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"16"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"CANCELED"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"SELL"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cancel-all-open-orders-on-a-symbol-trade" tabindex="-1"><a class="header-anchor" href="#cancel-all-open-orders-on-a-symbol-trade"><span>Cancel All Open Orders on a Symbol (TRADE)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">DELETE /openapi/v1/openOrders  <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cancels all active orders on a symbol.</p>
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
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BTCUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1200757068661824000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"165787739706155"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"19999"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"0.01"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"CANCELED"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"BUY"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BTCUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1200760572449167872</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"165787781474653"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"19999"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"0.01"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"CANCELED"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"BUY"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BTCUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1200760629206489600</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"165787782151456"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"19999"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"0.01"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"CANCELED"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"BUY"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="current-open-orders-user-data" tabindex="-1"><a class="header-anchor" href="#current-open-orders-user-data"><span>Current open orders (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/openOrders  <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>GET all open orders on a symbol. <strong>Careful</strong> when accessing this with no symbol.</p>
<p><strong>Weight:</strong> 10</p>
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
<td>symbol</td>
<td>String</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BTCUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1200757068661824000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"165787739706155"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"19999"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"0.01"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"NEW"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"BUY"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token number">1657877397079</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updateTime"</span><span class="token operator">:</span> <span class="token number">1657877397092</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"isWorking"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BTCUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1200760572449167872</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"165787781474653"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"19999"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"0.01"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"NEW"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"BUY"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token number">1657877814763</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updateTime"</span><span class="token operator">:</span> <span class="token number">1657877814776</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"isWorking"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BTCUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1200760629206489600</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"165787782151456"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"19999"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"0.01"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"NEW"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"BUY"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token number">1657877821529</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updateTime"</span><span class="token operator">:</span> <span class="token number">1657877821542</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"isWorking"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="history-orders-user-data" tabindex="-1"><a class="header-anchor" href="#history-orders-user-data"><span>History orders (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/historyOrders <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>GET all orders of the account;  canceled, filled or rejected.</p>
<p><strong>Weight:</strong> 10 with symbol, <strong>40</strong> when the symbol parameter is omitted;</p>
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
<td>symbol</td>
<td>String</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>orderId</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Default 500; max 1000.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Notes:</strong></p>
<ul>
<li>If <code v-pre>orderId</code> is set, it will get orders &gt;= that <code v-pre>orderId</code>. Otherwise most recent orders are returned.</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BCHBUSD"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1194453962386908672</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"1657126007990"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"4.56"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"4.56"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"FILLED"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"SELL"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token number">1657126008273</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updateTime"</span><span class="token operator">:</span> <span class="token number">1657126008357</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"isWorking"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BCHBUSD"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1194453774196830976</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"165712598575253"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"4"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"18"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"FILLED"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"MARKET"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"BUY"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token number">1657126008363</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updateTime"</span><span class="token operator">:</span> <span class="token number">1657126008402</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"isWorking"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"18"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BCHBUSD"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1194460299787314688</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"clientOrderId"</span><span class="token operator">:</span> <span class="token string">"1657126763487"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"0.46"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQty"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"executedQty"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"cummulativeQuoteQty"</span><span class="token operator">:</span> <span class="token string">"4.56"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"FILLED"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"timeInForce"</span><span class="token operator">:</span> <span class="token string">"GTC"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"LIMIT"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"side"</span><span class="token operator">:</span> <span class="token string">"SELL"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"stopPrice"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token number">1657126763736</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updateTime"</span><span class="token operator">:</span> <span class="token number">1657126763786</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"isWorking"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"origQuoteOrderQty"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="account-trade-list-user-data" tabindex="-1"><a class="header-anchor" href="#account-trade-list-user-data"><span>Account trade list (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/myTrades  <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Get trades for a specific account and symbol.</p>
<p><strong>Weight:</strong> 10</p>
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
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>orderId</td>
<td>LONG</td>
<td>NO</td>
<td>This can only be used in combination with <code v-pre>symbol</code>.</td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>fromId</td>
<td>LONG</td>
<td>NO</td>
<td>TradeId to fetch from. Default gets most recent trades.</td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Default 500; max 1000.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Notes:</strong></p>
<ul>
<li>If fromId (tradeId) is set, it will get id (tradeId) &gt;= that fromId (tradeId). Otherwise most recent trades are returned.</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BNBBTC"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1194460299787317856</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token number">1194453774196830977</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"4.00000100"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"qty"</span><span class="token operator">:</span> <span class="token string">"12.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"quoteQty"</span><span class="token operator">:</span> <span class="token string">"48.000012"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"commission"</span><span class="token operator">:</span> <span class="token string">"10.10000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"commissionAsset"</span><span class="token operator">:</span> <span class="token string">"BNB"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token number">1499865549590</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"isBuyer"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"isMaker"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"isBestMatch"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="trade-fee-user-data" tabindex="-1"><a class="header-anchor" href="#trade-fee-user-data"><span>Trade Fee (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/asset/tradeFee <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Fetch trade fee</p>
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
<td>symbol</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"BTCUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"makerCommission"</span><span class="token operator">:</span> <span class="token string">"0.002"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"takerCommission"</span><span class="token operator">:</span> <span class="token string">"0.003"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"symbol"</span><span class="token operator">:</span> <span class="token string">"ETHUSDT"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"makerCommission"</span><span class="token operator">:</span> <span class="token string">"0.001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"takerCommission"</span><span class="token operator">:</span> <span class="token string">"0.001"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="convert-endpoints" tabindex="-1"><a class="header-anchor" href="#convert-endpoints"><span>Convert endpoints</span></a></h3>
<h4 id="get-supported-trading-pairs-trade" tabindex="-1"><a class="header-anchor" href="#get-supported-trading-pairs-trade"><span>Get supported trading pairs (TRADE)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/convert/v1/get-supported-trading-pairs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This continuously updated endpoint returns a list of all available trading pairs.</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters:</strong></p>
<p>N/A</p>
<p><strong>Response:</strong></p>
<table>
<thead>
<tr>
<th>Field name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>sourceCurrency</td>
<td>Source token.</td>
</tr>
<tr>
<td>targetCurrency</td>
<td>Target token.</td>
</tr>
<tr>
<td>minSourceAmount</td>
<td>amount range min value.</td>
</tr>
<tr>
<td>maxSourceAmount</td>
<td>amount range max value.</td>
</tr>
<tr>
<td>precision</td>
<td>The level of precision in decimal places used.</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"status"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string-property property">"error"</span><span class="token operator">:</span><span class="token string">"OK"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"data"</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">     <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"sourceCurrency"</span><span class="token operator">:</span><span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"targetCurrency"</span><span class="token operator">:</span><span class="token string">"BTC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"minSourceAmount"</span><span class="token operator">:</span><span class="token string">"1000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maxSourceAmount"</span><span class="token operator">:</span><span class="token string">"15000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"precision"</span><span class="token operator">:</span><span class="token string">"2"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"sourceCurrency"</span><span class="token operator">:</span><span class="token string">"BTC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"targetCurrency"</span><span class="token operator">:</span><span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"minSourceAmount"</span><span class="token operator">:</span><span class="token string">"0.0001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maxSourceAmount"</span><span class="token operator">:</span><span class="token string">"0.1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"precision"</span><span class="token operator">:</span><span class="token string">"8"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"sourceCurrency"</span><span class="token operator">:</span><span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"targetCurrency"</span><span class="token operator">:</span><span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"minSourceAmount"</span><span class="token operator">:</span><span class="token string">"1000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maxSourceAmount"</span><span class="token operator">:</span><span class="token string">"18000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"precision"</span><span class="token operator">:</span><span class="token string">"2"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"sourceCurrency"</span><span class="token operator">:</span><span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"targetCurrency"</span><span class="token operator">:</span><span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"minSourceAmount"</span><span class="token operator">:</span><span class="token string">"0.003"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maxSourceAmount"</span><span class="token operator">:</span><span class="token string">"4.2"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"precision"</span><span class="token operator">:</span><span class="token string">"8"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fetch-a-quote-trade" tabindex="-1"><a class="header-anchor" href="#fetch-a-quote-trade"><span>Fetch a quote (TRADE)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/convert/v1/get-quote</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint returns a quote for a specified source currency (sourceCurrency) and target currency (targetCurrency) pair.</p>
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
<td>sourceCurrency</td>
<td>STRING</td>
<td>YES</td>
<td>The currency the user holds</td>
</tr>
<tr>
<td>targetCurrency</td>
<td>STRING</td>
<td>YES</td>
<td>The currency the user would like to obtain</td>
</tr>
<tr>
<td>sourceAmount</td>
<td>STRING</td>
<td>NO</td>
<td>The amount of sourceCurrency. You only need to fill in either the source amount or the target amount. If both are filled, it will result in an error.</td>
</tr>
<tr>
<td>targetAmount</td>
<td>STRING</td>
<td>NO</td>
<td>The amount of targetCurrency. You only need to fill in either the source amount or the target amount. If both are filled, it will result in an error.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<table>
<thead>
<tr>
<th>Field name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>quoteId</td>
<td>Quote unique id.</td>
</tr>
<tr>
<td>sourceCurrency</td>
<td>Source token.</td>
</tr>
<tr>
<td>targetCurrency</td>
<td>Target token.</td>
</tr>
<tr>
<td>sourceAmount</td>
<td>Source token amount.</td>
</tr>
<tr>
<td>price</td>
<td>Trading pairs price.</td>
</tr>
<tr>
<td>targetAmount</td>
<td>Targe token amount.</td>
</tr>
<tr>
<td>expiry</td>
<td>Quote expire time seconds.</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string-property property">"error"</span><span class="token operator">:</span> <span class="token string">"OK"</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"quoteId"</span><span class="token operator">:</span> <span class="token string">"2182b4fc18ff4556a18332245dba75ea"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"sourceCurrency"</span><span class="token operator">:</span> <span class="token string">"BTC"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"targetCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"sourceAmount"</span><span class="token operator">:</span> <span class="token string">"0.1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"59999"</span><span class="token punctuation">,</span>             <span class="token comment">//1BTC=59999PHP</span></span>
<span class="line">            <span class="token string-property property">"targetAmount"</span><span class="token operator">:</span> <span class="token string">"5999"</span><span class="token punctuation">,</span>       <span class="token comment">//The amount of PHP the user holds</span></span>
<span class="line">            <span class="token string-property property">"expiry"</span><span class="token operator">:</span> <span class="token string">"10"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="accept-the-quote-trade" tabindex="-1"><a class="header-anchor" href="#accept-the-quote-trade"><span>Accept the quote (TRADE)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/convert/v1/accept-quote</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Use this endpoint to accept the quote and receive the result instantly.</p>
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
<td>quoteId</td>
<td>STRING</td>
<td>YES</td>
<td>The ID assigned to the quote</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<table>
<thead>
<tr>
<th>Field name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>0 mean order are created.</td>
</tr>
<tr>
<td>data.orderId</td>
<td>Order ID generated by the server.</td>
</tr>
<tr>
<td>data.status</td>
<td>The order status is an enumeration with values <code v-pre>SUCCESS</code>, <code v-pre>PROCESSING</code>;PROCESSING mean that the server is processing,SUCCESS means the order is successful.</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token string-property property">"orderId"</span> <span class="token operator">:</span> <span class="token string">"49d10b74c60a475298c6bbed08dd58fa"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"SUCCESS"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"error"</span><span class="token operator">:</span> <span class="token string">"ok"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>Error code description:</strong></em></p>
<table>
<thead>
<tr>
<th>status code</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>means that the call is processed normally.(Applicable to other endpoint if there is a status structure)</td>
</tr>
<tr>
<td>10000003</td>
<td>Failed to fetch account verification information.</td>
</tr>
<tr>
<td>10000003</td>
<td>Quote expired.</td>
</tr>
<tr>
<td>10000003</td>
<td>Unable to fetch account information.</td>
</tr>
<tr>
<td>10000003</td>
<td>The price has changed! Please confirm the updated rate to complete the transaction.</td>
</tr>
<tr>
<td>10000003</td>
<td>Insufficient balance.</td>
</tr>
<tr>
<td>10000003</td>
<td>Failed to fetch liquidity. Try again later.</td>
</tr>
</tbody>
</table>
<h4 id="retrieve-order-history-user-data" tabindex="-1"><a class="header-anchor" href="#retrieve-order-history-user-data"><span>Retrieve order history (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/convert/v1/query-order-history</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint retrieves order history with the option to define a specific time period using start and end times.</p>
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
<td>startTime</td>
<td>STRING</td>
<td>No</td>
<td>Numeric string representing milliseconds. The starting point of the required period. If no period is defined, the entire order history is returned.</td>
</tr>
<tr>
<td>endTime</td>
<td>STRING</td>
<td>No</td>
<td>Numeric string representing milliseconds. The end point of the required period. If no period is defined, the entire order history is returned.</td>
</tr>
<tr>
<td>status</td>
<td>STRING</td>
<td>No</td>
<td>deliveryStatus, If this field is available, use it with startTime. <code v-pre>TODO</code>, <code v-pre>SUCCESS</code>, <code v-pre>FAILED</code>, <code v-pre>PROCESSING</code></td>
</tr>
<tr>
<td>page</td>
<td>int</td>
<td>No</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>int</td>
<td>No</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<table>
<thead>
<tr>
<th>Field name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>orderId</td>
<td>Order ID generated by the server.</td>
</tr>
<tr>
<td>quoteId</td>
<td>Order reference quote Id.</td>
</tr>
<tr>
<td>userId</td>
<td>user id.</td>
</tr>
<tr>
<td>sourceCurrency</td>
<td>source currency.</td>
</tr>
<tr>
<td>targetCurrency</td>
<td>target currency.</td>
</tr>
<tr>
<td>sourceAmount</td>
<td>source currency amount.</td>
</tr>
<tr>
<td>targetAmount</td>
<td>target currency amount.</td>
</tr>
<tr>
<td>price</td>
<td>price.</td>
</tr>
<tr>
<td>status</td>
<td>Order status.<code v-pre>TODO</code>, <code v-pre>SUCCESS</code>, <code v-pre>FAILED</code>, <code v-pre>PROCESSING</code></td>
</tr>
<tr>
<td>createdAt</td>
<td>Order create time.</td>
</tr>
<tr>
<td>errorMessage</td>
<td>Error message if order failed.</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"error"</span><span class="token operator">:</span> <span class="token string">"OK"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"id"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"orderId"</span><span class="token operator">:</span> <span class="token string">"25a9b92bcd4d4b2598c8be97bc65b466"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"quoteId"</span><span class="token operator">:</span> <span class="token string">"1ecce9a7265a4a329cce80de46e2c583"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"userId"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"sourceCurrency"</span><span class="token operator">:</span> <span class="token string">"BTC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"sourceCurrencyIcon"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"targetCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"targetCurrencyIcon"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"sourceAmount"</span><span class="token operator">:</span> <span class="token string">"0.11"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"targetAmount"</span><span class="token operator">:</span> <span class="token string">"4466.89275956"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"price"</span><span class="token operator">:</span> <span class="token string">"40608.115996"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"SUCCESS"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"1671797993000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"errorCode"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"errorMessage"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"inversePrice"</span><span class="token operator">:</span> <span class="token string">"3306.115996"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"total"</span><span class="token operator">:</span> <span class="token number">23</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="user-data-stream-endpoints" tabindex="-1"><a class="header-anchor" href="#user-data-stream-endpoints"><span>User data stream endpoints</span></a></h3>
<p>Specifics on how user data streams work is in another document(user-data-stream.md).</p>
<h4 id="start-user-data-stream-user-stream" tabindex="-1"><a class="header-anchor" href="#start-user-data-stream-user-stream"><span>Start user data stream (USER_STREAM)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v1/userDataStream</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent.</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters:</strong></p>
<p>None</p>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"listenKey"</span><span class="token operator">:</span> <span class="token string">"xDqtskqOciCzRashthgjTHBcymasBBShEEzPiXgOGEujviYWCuyYwcPDVPeezJOT"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="keepalive-user-data-stream-user-stream" tabindex="-1"><a class="header-anchor" href="#keepalive-user-data-stream-user-stream"><span>Keepalive user data stream (USER_STREAM)</span></a></h4>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="close-user-data-stream-user-stream" tabindex="-1"><a class="header-anchor" href="#close-user-data-stream-user-stream"><span>Close user data stream (USER_STREAM)</span></a></h4>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="filters" tabindex="-1"><a class="header-anchor" href="#filters"><span>Filters</span></a></h3>
<p>Filters define trading rules on a symbol or an exchange. Filters come in two forms: <code v-pre>symbol filters</code> and <code v-pre>exchange filters</code>.</p>
<h4 id="symbol-filters" tabindex="-1"><a class="header-anchor" href="#symbol-filters"><span>Symbol filters</span></a></h4>
<h5 id="price-filter" tabindex="-1"><a class="header-anchor" href="#price-filter"><span>PRICE_FILTER</span></a></h5>
<p>The <code v-pre>PRICE_FILTER</code> defines the <code v-pre>price</code> rules for a symbol. There are 3 parts:</p>
<ul>
<li><code v-pre>minPrice</code> defines the minimum <code v-pre>price</code>/<code v-pre>stopPrice</code> allowed.</li>
<li><code v-pre>maxPrice</code> defines the maximum <code v-pre>price</code>/<code v-pre>stopPrice</code> allowed.</li>
<li><code v-pre>tickSize</code> defines the intervals that a <code v-pre>price</code>/<code v-pre>stopPrice</code> can be increased/decreased by.</li>
</ul>
<p>In order to pass the <code v-pre>price filter</code>, the following must be true for <code v-pre>price</code>/<code v-pre>stopPrice</code>:</p>
<ul>
<li><code v-pre>price</code> &gt;= <code v-pre>minPrice</code></li>
<li><code v-pre>price</code> &lt;= <code v-pre>maxPrice</code></li>
<li>(<code v-pre>price</code>-<code v-pre>minPrice</code>) % <code v-pre>tickSize</code> == 0</li>
</ul>
<p><strong>/exchangeInfo format:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"filterType"</span><span class="token operator">:</span> <span class="token string">"PRICE_FILTER"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"minPrice"</span><span class="token operator">:</span> <span class="token string">"0.00000100"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"maxPrice"</span><span class="token operator">:</span> <span class="token string">"100000.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"tickSize"</span><span class="token operator">:</span> <span class="token string">"0.00000100"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="percent-price" tabindex="-1"><a class="header-anchor" href="#percent-price"><span>PERCENT_PRICE</span></a></h5>
<p>The <code v-pre>PERCENT_PRICE</code> filter defines the valid range for a price based on the weighted average of the previous trades. <code v-pre>avgPriceMins</code> is the number of minutes the weighted average price is calculated over.</p>
<p>In order to pass the <code v-pre>percent price</code>, the following must be true for <code v-pre>price</code>:</p>
<ul>
<li><code v-pre>price</code> &lt;= <code v-pre>weightedAveragePrice</code> * <code v-pre>multiplierUp</code></li>
<li><code v-pre>price</code> &gt;= <code v-pre>weightedAveragePrice</code> * <code v-pre>multiplierDown</code></li>
</ul>
<p><strong>/exchangeInfo format:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"filterType"</span><span class="token operator">:</span> <span class="token string">"PERCENT_PRICE"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"multiplierUp"</span><span class="token operator">:</span> <span class="token string">"1.3000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"multiplierDown"</span><span class="token operator">:</span> <span class="token string">"0.7000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"avgPriceMins"</span><span class="token operator">:</span> <span class="token number">5</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="percent-price-sa" tabindex="-1"><a class="header-anchor" href="#percent-price-sa"><span>PERCENT_PRICE_SA</span></a></h5>
<p>The <code v-pre>PERCENT_PRICE_SA</code> filter defines the valid range for a price based on the simple average of the previous trades. <code v-pre>avgPriceMins</code> is the number of minutes the simple average price is calculated over.</p>
<p>In order to pass the <code v-pre>percent_price_sa</code>, the following must be true for <code v-pre>price</code>:</p>
<ul>
<li><code v-pre>price</code> &lt;= <code v-pre>simpleAveragePrice</code> * <code v-pre>multiplierUp</code></li>
<li><code v-pre>price</code> &gt;= <code v-pre>simpleAveragePrice</code> * <code v-pre>multiplierDown</code></li>
</ul>
<p><strong>/exchangeInfo format:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"filterType"</span><span class="token operator">:</span> <span class="token string">"PERCENT_PRICE_SA"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"multiplierUp"</span><span class="token operator">:</span> <span class="token string">"1.3000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"multiplierDown"</span><span class="token operator">:</span> <span class="token string">"0.7000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"avgPriceMins"</span><span class="token operator">:</span> <span class="token number">5</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="percent-price-by-side" tabindex="-1"><a class="header-anchor" href="#percent-price-by-side"><span>PERCENT_PRICE_BY_SIDE</span></a></h5>
<p>The <code v-pre>PERCENT_PRICE_BY_SIDE</code> filter defines the valid range for the price based on the last price of the symbol.
There is a different range depending on whether the order is placed on the <code v-pre>BUY</code> side or the <code v-pre>SELL</code> side.</p>
<p>Buy orders will succeed on this filter if:</p>
<ul>
<li><code v-pre>Order price</code> &lt;= <code v-pre>bidMultiplierUp</code> * <code v-pre>lastPrice</code></li>
<li><code v-pre>Order price</code> &gt;= <code v-pre>bidMultiplierDown</code> * <code v-pre>lastPrice</code></li>
</ul>
<p>Sell orders will succeed on this filter if:</p>
<ul>
<li><code v-pre>Order Price</code> &lt;= <code v-pre>askMultiplierUp</code> * <code v-pre>lastPrice</code></li>
<li><code v-pre>Order Price</code> &gt;= <code v-pre>askMultiplierDown</code> * <code v-pre>lastPrice</code></li>
</ul>
<p><strong>/exchangeInfo format:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"filterType"</span><span class="token operator">:</span> <span class="token string">"PERCENT_PRICE_BY_SIDE"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"bidMultiplierUp"</span><span class="token operator">:</span> <span class="token string">"1.2"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"bidMultiplierDown"</span><span class="token operator">:</span> <span class="token string">"0.2"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"askMultiplierUp"</span><span class="token operator">:</span> <span class="token string">"1.5"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"askMultiplierDown"</span><span class="token operator">:</span> <span class="token string">"0.8"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="percent-price-index" tabindex="-1"><a class="header-anchor" href="#percent-price-index"><span>PERCENT_PRICE_INDEX</span></a></h5>
<p>The <code v-pre>PERCENT_PRICE_INDEX</code> filter defines the valid range for a price based on the index price, which is calculated from several exchanges in the market according to certain rules. (indexPrice websocket pushing will be available in the future)</p>
<p>In order to pass the <code v-pre>percent_price_index</code>, the following must be true for <code v-pre>price</code>:</p>
<ul>
<li><code v-pre>price</code> &lt;= <code v-pre>indexPrice</code> * <code v-pre>multiplierUp</code></li>
<li><code v-pre>price</code> &gt;= <code v-pre>indexPrice</code> * <code v-pre>multiplierDown</code></li>
</ul>
<p><strong>/exchangeInfo format:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"filterType"</span><span class="token operator">:</span> <span class="token string">"PERCENT_PRICE_INDEX"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"multiplierUp"</span><span class="token operator">:</span> <span class="token string">"1.3000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"multiplierDown"</span><span class="token operator">:</span> <span class="token string">"0.7000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="percent-price-order-size" tabindex="-1"><a class="header-anchor" href="#percent-price-order-size"><span>PERCENT_PRICE_ORDER_SIZE</span></a></h5>
<p>The <code v-pre>PERCENT_PRICE_ORDER_SIZE</code> filter  is used to determine whether the execution of an order would cause the market price to fluctuate beyond the limit price, and if so, the order will be rejected.</p>
<p>In order to pass the <code v-pre>percent_price_order_size</code>, the following must be true:</p>
<ul>
<li>A buy order needs to meet: the market price after the order get filled  &lt;<code v-pre>askPrice</code> * <code v-pre>multiplierUp</code></li>
<li>A sell order needs to meet: the market price after the order get filled  &gt;<code v-pre>bidPrice</code> * <code v-pre>multiplierDown</code></li>
</ul>
<p><strong>/exchangeInfo format:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"filterType"</span><span class="token operator">:</span> <span class="token string">"PERCENT_PRICE_ORDER_SIZE"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"multiplierUp"</span><span class="token operator">:</span> <span class="token string">"1.3000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"multiplierDown"</span><span class="token operator">:</span> <span class="token string">"0.7000"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="static-price-range" tabindex="-1"><a class="header-anchor" href="#static-price-range"><span>STATIC_PRICE_RANGE</span></a></h5>
<p>The <code v-pre>STATIC_PRICE_RANGE</code> filter defines a static valid range for the price.</p>
<p>In order to pass the <code v-pre>static_price_range</code>, the following must be true for <code v-pre>price</code>:</p>
<ul>
<li><code v-pre>price</code> &lt;= <code v-pre>priceUp</code></li>
<li><code v-pre>price</code> &gt;= <code v-pre>priceDown</code></li>
</ul>
<p><strong>/exchangeInfo format:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"filterType"</span><span class="token operator">:</span> <span class="token string">"STATIC_PRICE_RANGE"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"priceUp"</span><span class="token operator">:</span> <span class="token string">"520"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"priceDown"</span><span class="token operator">:</span> <span class="token string">"160"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="lot-size" tabindex="-1"><a class="header-anchor" href="#lot-size"><span>LOT_SIZE</span></a></h5>
<p>The <code v-pre>LOT_SIZE</code> filter defines the <code v-pre>quantity</code> (aka &quot;lots&quot; in auction terms) rules for a symbol. There are 3 parts:</p>
<ul>
<li><code v-pre>minQty</code> defines the minimum <code v-pre>quantity</code> allowed.</li>
<li><code v-pre>maxQty</code> defines the maximum <code v-pre>quantity</code> allowed.</li>
<li><code v-pre>stepSize</code> defines the intervals that a <code v-pre>quantity</code>can be increased/decreased by.</li>
</ul>
<p>In order to pass the <code v-pre>lot size</code>, the following must be true for <code v-pre>quantity</code>:</p>
<ul>
<li><code v-pre>quantity</code> &gt;= <code v-pre>minQty</code></li>
<li><code v-pre>quantity</code> &lt;= <code v-pre>maxQty</code></li>
<li>(<code v-pre>quantity</code>-<code v-pre>minQty</code>) % <code v-pre>stepSize</code> == 0</li>
</ul>
<p><strong>/exchangeInfo format:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"filterType"</span><span class="token operator">:</span> <span class="token string">"LOT_SIZE"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"minQty"</span><span class="token operator">:</span> <span class="token string">"0.00100000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"maxQty"</span><span class="token operator">:</span> <span class="token string">"99999999.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"stepSize"</span><span class="token operator">:</span> <span class="token string">"0.00100000"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="notional" tabindex="-1"><a class="header-anchor" href="#notional"><span>NOTIONAL</span></a></h5>
<p>The <code v-pre>NOTIONAL</code> filter defines the acceptable notional range allowed for an order on a symbol.</p>
<p>In order to pass this filter, the notional (<code v-pre>price * quantity</code>) has to pass the following conditions:</p>
<ul>
<li><code v-pre>price * quantity</code> &lt;= <code v-pre>maxNotional</code></li>
<li><code v-pre>price * quantity</code> &gt;= <code v-pre>minNotional</code></li>
</ul>
<p><strong>/exchangeInfo format:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token string-property property">"filterType"</span><span class="token operator">:</span> <span class="token string">"NOTIONAL"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"minNotional"</span><span class="token operator">:</span> <span class="token string">"10.00000000"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">"maxNotional"</span><span class="token operator">:</span> <span class="token string">"10000.00000000"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="max-num-orders" tabindex="-1"><a class="header-anchor" href="#max-num-orders"><span>MAX_NUM_ORDERS</span></a></h5>
<p>The <code v-pre>MAX_NUM_ORDERS</code> filter defines the maximum number of orders an account is allowed to have open on a symbol.
Note that both triggered &quot;algo&quot; orders and normal orders are counted for this filter.</p>
<p><strong>/exchangeInfo format:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"filterType"</span><span class="token operator">:</span> <span class="token string">"MAX_NUM_ORDERS"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"maxNumOrders"</span><span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="max-num-algo-orders" tabindex="-1"><a class="header-anchor" href="#max-num-algo-orders"><span>MAX_NUM_ALGO_ORDERS</span></a></h5>
<p>The <code v-pre>MAX_ALGO_ORDERS</code> filter defines the maximum number of untriggered &quot;algo&quot; orders an account is allowed to have open on a symbol.
&quot;Algo&quot; orders are <code v-pre>STOP_LOSS</code>, <code v-pre>STOP_LOSS_LIMIT</code>, <code v-pre>TAKE_PROFIT</code>, and <code v-pre>TAKE_PROFIT_LIMIT</code> orders.</p>
<p><strong>/exchangeInfo format:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"filterType"</span><span class="token operator">:</span> <span class="token string">"MAX_NUM_ALGO_ORDERS"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"maxNumAlgoOrders"</span><span class="token operator">:</span> <span class="token number">5</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="exchange-filters" tabindex="-1"><a class="header-anchor" href="#exchange-filters"><span>Exchange Filters</span></a></h4>
<p>None for now</p>
<h3 id="fiat-endpoints" tabindex="-1"><a class="header-anchor" href="#fiat-endpoints"><span>Fiat endpoints</span></a></h3>
<h4 id="get-supported-fiat-channels-trade" tabindex="-1"><a class="header-anchor" href="#get-supported-fiat-channels-trade"><span>Get supported fiat channels (TRADE)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST openapi/fiat/v1/support-channel</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This continuously updated endpoint returns a list of all available fiat channels.
<strong>Weight:</strong> 1</p>
<p><strong>Parameters(suggest json body):</strong></p>
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
<td>transactionType</td>
<td>STRING</td>
<td>Yes</td>
<td>Set this parameter to -1 to indicate a cash-out transaction. At present, only cash-out transactions are supported.</td>
</tr>
<tr>
<td>currency</td>
<td>STRING</td>
<td>Yes</td>
<td>The parameter represents the currency used in the transaction and should be set to PHP as it is the only currency currently supported.</td>
</tr>
<tr>
<td>transactionChannel</td>
<td>STRING</td>
<td>No</td>
<td>Filter the list by first-level channel. The first-level channel is an enumeration. The optional values are INSTAPAY, SWIFTPAY_PESONET.</td>
</tr>
<tr>
<td>transactionSubject</td>
<td>STRING</td>
<td>No</td>
<td>Filter the list by secondary channels. Such as Gcash.</td>
</tr>
<tr>
<td>amount</td>
<td>STRING</td>
<td>No</td>
<td>Used to match the fee rate. If the fee rate is calculated based on the amount range, the default value is 0 if not filled in.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<table>
<thead>
<tr>
<th>FieldName</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>Long</td>
<td>channel id</td>
</tr>
<tr>
<td>transactionChannel</td>
<td>String</td>
<td>The first-level channel to which it belongs.</td>
</tr>
<tr>
<td>transactionChannelName</td>
<td>String</td>
<td>The name of the first-level channel to which it belongs</td>
</tr>
<tr>
<td>transactionSubject</td>
<td>String</td>
<td>Channel code.</td>
</tr>
<tr>
<td>transactionSubjectType</td>
<td>String</td>
<td>Channel type.</td>
</tr>
<tr>
<td>transactionSubjectTypeLabel</td>
<td>String</td>
<td>Channel label.</td>
</tr>
<tr>
<td>transactionSubjectName</td>
<td>String</td>
<td>Channel name.</td>
</tr>
<tr>
<td>transactionType</td>
<td>int</td>
<td>1 mean cash in,-1 mean cash out.</td>
</tr>
<tr>
<td>paymentMethod</td>
<td>String</td>
<td>Payment type, BANK_TRANSFER only.</td>
</tr>
<tr>
<td>channelIcon</td>
<td>url</td>
<td>first-level channel Icon.</td>
</tr>
<tr>
<td>subjectIcon</td>
<td>url</td>
<td>Channel Icon.</td>
</tr>
<tr>
<td>maximum</td>
<td>String</td>
<td>Maximum order amount.</td>
</tr>
<tr>
<td>minimum</td>
<td>String</td>
<td>Minimum order amount.</td>
</tr>
<tr>
<td>dailyLimit</td>
<td>String</td>
<td>Channel daily limit.</td>
</tr>
<tr>
<td>monthlyLimit</td>
<td>String</td>
<td>Channel monthly limit.</td>
</tr>
<tr>
<td>annualLimit</td>
<td>String</td>
<td>Channel annual limit.</td>
</tr>
<tr>
<td>remainingDailyLimit</td>
<td>String</td>
<td>Channel daily limit remaining.</td>
</tr>
<tr>
<td>remainingMonthlyLimit</td>
<td>String</td>
<td>Channel monthly limit remaining.</td>
</tr>
<tr>
<td>remainingAnnualLimit</td>
<td>String</td>
<td>Channel annual limit remaining.</td>
</tr>
<tr>
<td>precision</td>
<td>String</td>
<td>Preserved precision.</td>
</tr>
<tr>
<td>fee</td>
<td>String</td>
<td>Fee rate.</td>
</tr>
<tr>
<td>feeType</td>
<td>String</td>
<td>Channel fee method, FIXED stands for fixed, value PERCENTAGE stands for percentage charging.</td>
</tr>
<tr>
<td>status</td>
<td>String</td>
<td>Channel status 1 means it is normally available, 0 means the channel is under maintenance.</td>
</tr>
<tr>
<td>maxWithdrawBalance</td>
<td>String</td>
<td>Current user’s balance available for withdrawal.</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"status"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"error"</span><span class="token operator">:</span><span class="token string">"OK"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"data"</span><span class="token operator">:</span></span>
<span class="line">  <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">782</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"SWIFTPAY_PESONET"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"swiftpay_pesonet"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"alamanah"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"bank"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectTypeLabel"</span><span class="token operator">:</span> <span class="token string">"Banks"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"Al-Amanah Islamic Invest. Bank"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"paymentMethod"</span><span class="token operator">:</span> <span class="token string">"BANK_TRANSFER"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"channelIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/InstaPay+Pesonet+copy/PesoNet@136.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"subjectIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/Al-Amanah+Islamic+Bank.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maximum"</span><span class="token operator">:</span> <span class="token string">"100000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"minimum"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"dailyLimit"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"monthlyLimit"</span><span class="token operator">:</span> <span class="token string">"10000001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"annualLimit"</span><span class="token operator">:</span> <span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingDailyLimit"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingMonthlyLimit"</span><span class="token operator">:</span> <span class="token string">"10000001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingAnnualLimit"</span><span class="token operator">:</span> <span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"precision"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"fee"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"feeType"</span><span class="token operator">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maxWithdrawBalance"</span><span class="token operator">:</span> <span class="token string">"10000037084.37574788"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">622</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"INSTAPAY"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"instapay"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"allbank"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"bank"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectTypeLabel"</span><span class="token operator">:</span> <span class="token string">"Banks"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"AllBank (A Thrift Bank), Inc."</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"paymentMethod"</span><span class="token operator">:</span> <span class="token string">"BANK_TRANSFER"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"channelIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/InstaPay+Pesonet+copy/InstaPay@136.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"subjectIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/AllBank.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maximum"</span><span class="token operator">:</span> <span class="token string">"50000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"minimum"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"dailyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"monthlyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"annualLimit"</span><span class="token operator">:</span> <span class="token string">"1000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingDailyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingMonthlyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingAnnualLimit"</span><span class="token operator">:</span> <span class="token string">"999656"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"precision"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"fee"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"feeType"</span><span class="token operator">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maxWithdrawBalance"</span><span class="token operator">:</span> <span class="token string">"10000037084.37574788"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">783</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"SWIFTPAY_PESONET"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"swiftpay_pesonet"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"allbank"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"bank"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectTypeLabel"</span><span class="token operator">:</span> <span class="token string">"Banks"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"AllBank (A Thrift Bank), Inc."</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"paymentMethod"</span><span class="token operator">:</span> <span class="token string">"BANK_TRANSFER"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"channelIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/InstaPay+Pesonet+copy/PesoNet@136.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"subjectIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/AllBank.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maximum"</span><span class="token operator">:</span> <span class="token string">"100000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"minimum"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"dailyLimit"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"monthlyLimit"</span><span class="token operator">:</span> <span class="token string">"10000001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"annualLimit"</span><span class="token operator">:</span> <span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingDailyLimit"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingMonthlyLimit"</span><span class="token operator">:</span> <span class="token string">"10000001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingAnnualLimit"</span><span class="token operator">:</span> <span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"precision"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"fee"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"feeType"</span><span class="token operator">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maxWithdrawBalance"</span><span class="token operator">:</span> <span class="token string">"10000037084.37574788"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">785</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"SWIFTPAY_PESONET"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"swiftpay_pesonet"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"anz"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"bank"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectTypeLabel"</span><span class="token operator">:</span> <span class="token string">"Banks"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"ANZ Banking Group Ltd"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"paymentMethod"</span><span class="token operator">:</span> <span class="token string">"BANK_TRANSFER"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"channelIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/InstaPay+Pesonet+copy/PesoNet@136.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"subjectIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/Australia+&amp;+New+Zealand+Bank.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maximum"</span><span class="token operator">:</span> <span class="token string">"100000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"minimum"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"dailyLimit"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"monthlyLimit"</span><span class="token operator">:</span> <span class="token string">"10000001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"annualLimit"</span><span class="token operator">:</span> <span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingDailyLimit"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingMonthlyLimit"</span><span class="token operator">:</span> <span class="token string">"10000001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingAnnualLimit"</span><span class="token operator">:</span> <span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"precision"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"fee"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"feeType"</span><span class="token operator">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maxWithdrawBalance"</span><span class="token operator">:</span> <span class="token string">"10000037084.37574788"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">647</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"INSTAPAY"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"instapay"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"guinobatan"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"bank"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectTypeLabel"</span><span class="token operator">:</span> <span class="token string">"Banks"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"Asenso"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"paymentMethod"</span><span class="token operator">:</span> <span class="token string">"BANK_TRANSFER"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"channelIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/InstaPay+Pesonet+copy/InstaPay@136.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"subjectIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/Asenso.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maximum"</span><span class="token operator">:</span> <span class="token string">"50000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"minimum"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"dailyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"monthlyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"annualLimit"</span><span class="token operator">:</span> <span class="token string">"1000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingDailyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingMonthlyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingAnnualLimit"</span><span class="token operator">:</span> <span class="token string">"999656"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"precision"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"fee"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"feeType"</span><span class="token operator">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maxWithdrawBalance"</span><span class="token operator">:</span> <span class="token string">"10000037084.37574788"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">837</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"SWIFTPAY_PESONET"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"swiftpay_pesonet"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"guinobatan"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"bank"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectTypeLabel"</span><span class="token operator">:</span> <span class="token string">"Banks"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"Asenso"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"paymentMethod"</span><span class="token operator">:</span> <span class="token string">"BANK_TRANSFER"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"channelIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/InstaPay+Pesonet+copy/PesoNet@136.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"subjectIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/Asenso.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maximum"</span><span class="token operator">:</span> <span class="token string">"100000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"minimum"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"dailyLimit"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"monthlyLimit"</span><span class="token operator">:</span> <span class="token string">"10000001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"annualLimit"</span><span class="token operator">:</span> <span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingDailyLimit"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingMonthlyLimit"</span><span class="token operator">:</span> <span class="token string">"10000001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingAnnualLimit"</span><span class="token operator">:</span> <span class="token string">"500000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"precision"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"fee"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"feeType"</span><span class="token operator">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maxWithdrawBalance"</span><span class="token operator">:</span> <span class="token string">"10000037084.37574788"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">623</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"INSTAPAY"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"instapay"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"aub"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"e-wallet"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectTypeLabel"</span><span class="token operator">:</span> <span class="token string">"E-wallets"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"Asia United Bank"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"paymentMethod"</span><span class="token operator">:</span> <span class="token string">"BANK_TRANSFER"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"channelIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/InstaPay+Pesonet+copy/InstaPay@136.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"subjectIcon"</span><span class="token operator">:</span> <span class="token string">"https://static.pro.coins.xyz/resource/images/fiat/fiat-png/AUB.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maximum"</span><span class="token operator">:</span> <span class="token string">"50000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"minimum"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"dailyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"monthlyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"annualLimit"</span><span class="token operator">:</span> <span class="token string">"1000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingDailyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingMonthlyLimit"</span><span class="token operator">:</span> <span class="token string">"100000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"remainingAnnualLimit"</span><span class="token operator">:</span> <span class="token string">"999656"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"precision"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"fee"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"feeType"</span><span class="token operator">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"maxWithdrawBalance"</span><span class="token operator">:</span> <span class="token string">"10000037084.37574788"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cash-out-trade" tabindex="-1"><a class="header-anchor" href="#cash-out-trade"><span>Cash out (TRADE)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST openapi/fiat/v1/cash-out</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint allows users to withdraw funds from their fiat account.</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters(with json body):</strong></p>
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
<td>internalOrderId</td>
<td>STRING</td>
<td>yes</td>
<td>Internal ID assigned to the funds withdrawal order, all are numbers and does not start with 0, Length is 10 to 20</td>
</tr>
<tr>
<td>currency</td>
<td>STRING</td>
<td>Yes</td>
<td>The parameter represents the currency used in the transaction and should be set to PHP as it is the only currency currently supported.</td>
</tr>
<tr>
<td>amount</td>
<td>STRING</td>
<td>Yes</td>
<td>The amount of currency to be withdrawn.</td>
</tr>
<tr>
<td>channelName</td>
<td>STRING</td>
<td>Yes</td>
<td>The first-level channel to which it belongs.The first-level channel is an enumeration. The optional values are INSTAPAY, SWIFTPAY_PESONET.</td>
</tr>
<tr>
<td>channelSubject</td>
<td>STRING</td>
<td>Yes</td>
<td>Channel code.</td>
</tr>
<tr>
<td>extendInfo</td>
<td>JSON Object</td>
<td>No</td>
<td>A JSON object with additional information. Its structure and content may vary depending on the specific channel(Refer to demo below). The fields within the JSON object are: <code v-pre>recipientName</code>, <code v-pre>recipientAccountNumber</code>, <code v-pre>recipientAddress</code>, <code v-pre>remarks</code>.</td>
</tr>
</tbody>
</table>
<p><strong>Request:</strong></p>
<ul>
<li>SWIFTPAY_PESONET （Large amount arrives on T+1）</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"1000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"internalOrderId"</span><span class="token operator">:</span><span class="token string">"2023090410571114"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"currency"</span><span class="token operator">:</span><span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"channelName"</span><span class="token operator">:</span> <span class="token string">"SWIFTPAY_PESONET"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"channelSubject"</span><span class="token operator">:</span><span class="token string">"gcash"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"extendInfo"</span><span class="token operator">:</span><span class="token punctuation">{</span>    </span>
<span class="line">    <span class="token string-property property">"recipientAccountNumber"</span><span class="token operator">:</span> <span class="token string">"095656x4060"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"recipientName"</span><span class="token operator">:</span><span class="token string">"Joseph Pal Fajagut"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"recipientAddress"</span><span class="token operator">:</span> <span class="token string">"Santo"</span><span class="token punctuation">,</span>  <span class="token comment">// optional</span></span>
<span class="line">    <span class="token string-property property">"remarks"</span><span class="token operator">:</span> <span class="token string">"pesonet Cash out"</span>  <span class="token comment">// optional</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>INSTAPAY （Near real-time payment）</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"1000"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"internalOrderId"</span><span class="token operator">:</span><span class="token string">"2023090410571114"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"currency"</span><span class="token operator">:</span><span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"channelName"</span><span class="token operator">:</span> <span class="token string">"INSTAPAY"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"channelSubject"</span><span class="token operator">:</span><span class="token string">"gcash"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"extendInfo"</span><span class="token operator">:</span><span class="token punctuation">{</span>    </span>
<span class="line">    <span class="token string-property property">"recipientAccountNumber"</span><span class="token operator">:</span> <span class="token string">"095656x4060"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"recipientName"</span><span class="token operator">:</span><span class="token string">"Joseph Pal Fajagut"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response:</strong></p>
<table>
<thead>
<tr>
<th>FieldName</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>externalOrderId</td>
<td>String</td>
<td>Coins internal ID, query not supported yet; ignore it.</td>
</tr>
<tr>
<td>internalOrderId</td>
<td>String</td>
<td>The unique order id generated by the server or the passed <code v-pre>internalOrderId</code>.</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"error"</span><span class="token operator">:</span> <span class="token string">"OK"</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token string-property property">"externalOrderId"</span><span class="token operator">:</span> <span class="token string">"1380692028693995623"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token string-property property">"internalOrderId"</span><span class="token operator">:</span> <span class="token string">"1388420429697583896"</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"params"</span><span class="token operator">:</span> <span class="token keyword">null</span>  <span class="token comment">//Reserved field Ignore it</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>status code description:</strong></em></p>
<table>
<thead>
<tr>
<th>status code</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>means that the call is processed normally.(Applicable to other endpoint if there is a status structure)</td>
</tr>
<tr>
<td>88010002</td>
<td>User account disabled,please contact support for assistance.</td>
</tr>
<tr>
<td>88010003</td>
<td>order amount lower than channel minAmount.</td>
</tr>
<tr>
<td>88010004</td>
<td>order amount great than channel maxAmount.</td>
</tr>
<tr>
<td>88010005</td>
<td>Daily cash-out limit exceeded.</td>
</tr>
<tr>
<td>88010006</td>
<td>Monthly cash-out limit exceeded.</td>
</tr>
<tr>
<td>88010007</td>
<td>Annual cash-out limit exceeded.</td>
</tr>
<tr>
<td>88010008,88010009,88010010,88010011</td>
<td>Cash-outs method unavailable. please try again later</td>
</tr>
<tr>
<td>88010012</td>
<td>Cash-out order in progress. Wait for its completion and create a new one.</td>
</tr>
<tr>
<td>88010013</td>
<td>Insufficient balance.Please make sure you have enough available balance</td>
</tr>
<tr>
<td>88010014,88010015,88010016,88010018</td>
<td>Please pass kyc first.</td>
</tr>
<tr>
<td>88010017</td>
<td>Please bind your phone number under Account Settings first.</td>
</tr>
<tr>
<td>88010000</td>
<td>Server side error,please contact support for assistance.</td>
</tr>
</tbody>
</table>
<h4 id="curl-example" tabindex="-1"><a class="header-anchor" href="#curl-example"><span>Curl Example</span></a></h4>
<ul>
<li><strong>queryString:</strong> k1=v1&amp;k2=v2</li>
<li><strong>requestBody:</strong> {&quot;key&quot;:&quot;value&quot;}</li>
<li><strong>HMAC SHA256 signature:</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token punctuation">[</span>linux<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">'k1=v1&amp;k2=v2{"key":"value"}'</span> <span class="token operator">|</span> openssl dgst <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-hmac</span> <span class="token string">"lH3ELTNiFxCQTmi9pPcWWikhsjO04Yoqw3euoHUuOLC3GYBW64ZqzQsiOEHXQS76"</span></span>
<span class="line"><span class="token punctuation">(</span>stdin<span class="token punctuation">)</span><span class="token operator">=</span> ef230e573e76e304d4579ef7f777a7f236aec25b8881ccc9797bb91b186e24dd</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>curl command:</strong></li>
</ul>
<p>Note: X-COINS-APIKEY and signature are both placed in the request header</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span>linux<span class="token punctuation">]</span>$ <span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">'https://$HOST/openapi/fiat/v1/cash-out?k1=v1&amp;k2=v2'</span> <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">-H</span> <span class="token string">'X-COINS-APIKEY: tAQfOrPIZAhym0qHISRt8EFvxPemdBm5j5WMlkm3Ke9aFp0EGWC2CGM8GHV4kCYW'</span> <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">-H</span> <span class="token string">'signature: ef230e573e76e304d4579ef7f777a7f236aec25b8881ccc9797bb91b186e24dd'</span> <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">-H</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">--data</span> <span class="token string">'{"key":"value"}'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fiat-order-detail-user-data" tabindex="-1"><a class="header-anchor" href="#fiat-order-detail-user-data"><span>Fiat order detail (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET openapi/fiat/v1/details</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint retrieves information about a specific fiat currency order. The response provides detailed information about the respective trade, including the transaction date, transaction amount, and any associated fees.</p>
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
<td>internalOrderId</td>
<td>STRING</td>
<td>YES</td>
<td>ID of the order for which the user wishes to retrieve details.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<table>
<thead>
<tr>
<th>FieldName</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>externalOrderId</td>
<td>String</td>
<td>Coins internal ID, query not supported yet; ignore it.</td>
</tr>
<tr>
<td>internalOrderId</td>
<td>String</td>
<td>The unique order id generated by the server.</td>
</tr>
<tr>
<td>paymentOrderId</td>
<td>String</td>
<td>The payment order id generated by the channel.</td>
</tr>
<tr>
<td>fiatCurrency</td>
<td>String</td>
<td>PHP as it is the only currency currently supported</td>
</tr>
<tr>
<td>fiatAmount</td>
<td>String</td>
<td>The order amount.</td>
</tr>
<tr>
<td>transactionType</td>
<td>String</td>
<td>1 means cash in, -1 means cash out.</td>
</tr>
<tr>
<td>transactionChannel</td>
<td>String</td>
<td>The first-level channel to order it belongs.</td>
</tr>
<tr>
<td>transactionSubject</td>
<td>String</td>
<td>The channel code of order.</td>
</tr>
<tr>
<td>transactionSubjectType</td>
<td>String</td>
<td>Channel type.</td>
</tr>
<tr>
<td>transactionChannelName</td>
<td>String</td>
<td>First level channel Name.</td>
</tr>
<tr>
<td>transactionSubjectName</td>
<td>String</td>
<td>channel Name.</td>
</tr>
<tr>
<td>feeCurrency</td>
<td>String</td>
<td>PHP as it is the only currency currently supported</td>
</tr>
<tr>
<td>channelFee</td>
<td>String</td>
<td>The fee of order always 0 Deprecated, see platformFee.</td>
</tr>
<tr>
<td>platformFee</td>
<td>String</td>
<td>The fee of order.</td>
</tr>
<tr>
<td>status</td>
<td>String</td>
<td><strong>Enum:</strong> <code v-pre>PENDING</code>, <code v-pre>SUCCEEDED</code>, <code v-pre>FAILED</code>, <code v-pre>CANCEL</code><br>Indicates the current state of the order.<br>• <code v-pre>PENDING</code>: The order is still being processed and is not in a final state.<br>• <code v-pre>SUCCEEDED</code>: The order has been successfully processed.<br>• <code v-pre>FAILED</code>: The order processing has failed.<br>• <code v-pre>CANCEL</code>: The order has been canceled by the user and is considered equivalent to a failure.<br><br>Only orders in a final state (<code v-pre>SUCCEEDED</code>, <code v-pre>FAILED</code>, or <code v-pre>CANCEL</code>) are considered complete and reliable for further actions. Avoid relying on orders in a non-final state (<code v-pre>PENDING</code>) as their status may change.</td>
</tr>
<tr>
<td>errorCode</td>
<td>String</td>
<td>Order fail with errorCode.</td>
</tr>
<tr>
<td>errorMessage</td>
<td>String</td>
<td>Order fail with error message.</td>
</tr>
<tr>
<td>completedTime</td>
<td>String</td>
<td>The time of order completed.</td>
</tr>
<tr>
<td>source</td>
<td>String</td>
<td>Order create client Type，such as WEB,ANDROID,IOS,open-api.</td>
</tr>
<tr>
<td>createdAt</td>
<td>String</td>
<td>The time of order created.</td>
</tr>
<tr>
<td>orderExtendedMap</td>
<td>Object</td>
<td>The order extend data.</td>
</tr>
<tr>
<td>dealCancel</td>
<td>boolean</td>
<td>If order can be canceled, value will be true.</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"error"</span><span class="token operator">:</span> <span class="token string">"OK"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"externalOrderId"</span><span class="token operator">:</span> <span class="token string">"1380692028693995623"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"internalOrderId"</span><span class="token operator">:</span> <span class="token string">"1388420429697583896"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"paymentOrderId"</span><span class="token operator">:</span> <span class="token string">"455628"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"fiatCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"fiatAmount"</span><span class="token operator">:</span> <span class="token string">"60"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"INSTAPAY"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"coins.ph"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"bank"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"instapay"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"DCPAY PHILIPPINES, INC."</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"feeCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"channelFee"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"platformFee"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"SUCCEEDED"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"errorCode"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"errorMessage"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"completedTime"</span><span class="token operator">:</span> <span class="token string">"2023-03-31T07:44:42.000+00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"WEB"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2023-03-31T07:43:37.000+00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"orderExtendedMap"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">             <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string">"sendAcctNo"</span></span>
<span class="line">              <span class="token string">"1326887193441018369"</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string-property property">"tfrName"</span><span class="token operator">:</span> <span class="token string">"Li Mei Ling"</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string-property property">"tfrAcctNo"</span><span class="token operator">:</span> <span class="token string">"095656x4060"</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string-property property">"channelName"</span><span class="token operator">:</span> <span class="token string">"INSTAPAY"</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string-property property">"currency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"WEB"</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string-property property">"channelSubject"</span><span class="token operator">:</span> <span class="token string">"coins.ph"</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string-property property">"userId"</span><span class="token operator">:</span> <span class="token number">1326887193348759809</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string-property property">"orgId"</span><span class="token operator">:</span> <span class="token number">9001</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"dealCancel"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="fiat-order-history-v1-user-data-deprecated" tabindex="-1"><a class="header-anchor" href="#fiat-order-history-v1-user-data-deprecated"><span>Fiat order history V1 (USER_DATA) [Deprecated]</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST openapi/fiat/v1/history</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint is used to query all fiat related history</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters(with json body):</strong></p>
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
<td>pageNum</td>
<td>STRING</td>
<td>No</td>
<td>Page number default 1.</td>
</tr>
<tr>
<td>pageSize</td>
<td>STRING</td>
<td>No</td>
<td>Page size,default 10.</td>
</tr>
<tr>
<td>internalOrderId</td>
<td>STRING</td>
<td>No</td>
<td>Coins returns a unique tracking order number.</td>
</tr>
<tr>
<td>transactionType</td>
<td>STRING</td>
<td>No</td>
<td>Order Transaction Type 1: cash-in, -1: cash-out.</td>
</tr>
<tr>
<td>transactionChannel</td>
<td>STRING</td>
<td>No</td>
<td>Transaction channel, the optional values are INSTAPAY, SWIFTPAY_PESONET.</td>
</tr>
<tr>
<td>transactionSubject</td>
<td>STRING</td>
<td>No</td>
<td>Secondary channels, such as Gcash supported under instapay.</td>
</tr>
<tr>
<td>status</td>
<td>STRING</td>
<td>No</td>
<td><strong>Enum:</strong> <code v-pre>PENDING</code>, <code v-pre>SUCCEEDED</code>, <code v-pre>FAILED</code>, <code v-pre>CANCEL</code><br>Indicates the current state of the order.<br>• <code v-pre>PENDING</code>: The order is still being processed and is not in a final state.<br>• <code v-pre>SUCCEEDED</code>: The order has been successfully processed.<br>• <code v-pre>FAILED</code>: The order processing has failed.<br>• <code v-pre>CANCEL</code>: The order has been canceled by the user and is considered equivalent to a failure.<br><br>Only orders in a final state (<code v-pre>SUCCEEDED</code>, <code v-pre>FAILED</code>, or <code v-pre>CANCEL</code>) are considered complete and reliable for further actions. Avoid relying on orders in a non-final state (<code v-pre>PENDING</code>) as their status may change.</td>
</tr>
<tr>
<td>fiatCurrency</td>
<td>STRING</td>
<td>No</td>
<td>fiat currecy.</td>
</tr>
<tr>
<td>startDate</td>
<td>STRING</td>
<td>No</td>
<td>the order's create time will between startDate and endDate. This parameter accepts input in the ISO 8601 format for date and time, which is based on the Coordinated Universal Time (UTC) time zone (e.g., &quot;2016-10-20T13:00:00.000000Z&quot;). Alternatively, you can provide a time delta from the current time (e.g., &quot;1w 3d 2h 32m 5s&quot;).</td>
</tr>
<tr>
<td>endDate</td>
<td>STRING</td>
<td>No</td>
<td>the order's create time will between startDate and endDate. This parameter accepts input in the ISO 8601 format for date and time, which is based on the Coordinated Universal Time (UTC) time zone (e.g., &quot;2016-10-20T13:00:00.000000Z&quot;). Alternatively, you can provide a time delta from the current time (e.g., &quot;1w 3d 2h 32m 5s&quot;).</td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>No</td>
<td>the order's create time will between startTime and endTime. Works when both startDate and endDate are empty. The server time zone is utc+0</td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>No</td>
<td>the order's create time will between startTime and endTime. Works when both startDate and endDate are empty. The server time zone is utc+0</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<table>
<thead>
<tr>
<th>FieldName</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>externalOrderId</td>
<td>String</td>
<td>Coins internal ID, query not supported yet; ignore it.</td>
</tr>
<tr>
<td>internalOrderId</td>
<td>String</td>
<td>The unique order id generated by the server.</td>
</tr>
<tr>
<td>paymentOrderId</td>
<td>String</td>
<td>The payment order id generated by the channel.</td>
</tr>
<tr>
<td>fiatCurrency</td>
<td>String</td>
<td>PHP as it is the only currency currently supported</td>
</tr>
<tr>
<td>fiatAmount</td>
<td>String</td>
<td>The order amount.</td>
</tr>
<tr>
<td>transactionType</td>
<td>String</td>
<td>1 mean cash in,-1 mean cash out.</td>
</tr>
<tr>
<td>transactionChannel</td>
<td>String</td>
<td>The first-level channel to order it belongs.</td>
</tr>
<tr>
<td>transactionSubject</td>
<td>String</td>
<td>The channel code of order.</td>
</tr>
<tr>
<td>transactionSubjectType</td>
<td>String</td>
<td>Channel type.</td>
</tr>
<tr>
<td>transactionChannelName</td>
<td>String</td>
<td>First level channel Name.</td>
</tr>
<tr>
<td>transactionSubjectName</td>
<td>String</td>
<td>channel Name.</td>
</tr>
<tr>
<td>feeCurrency</td>
<td>String</td>
<td>PHP as it is the only currency currently supported</td>
</tr>
<tr>
<td>channelFee</td>
<td>String</td>
<td>The fee of order always 0 Deprecated, see platformFee.</td>
</tr>
<tr>
<td>platformFee</td>
<td>String</td>
<td>The fee of order.</td>
</tr>
<tr>
<td>status</td>
<td>String</td>
<td><strong>Enum:</strong> <code v-pre>PENDING</code>, <code v-pre>SUCCEEDED</code>, <code v-pre>FAILED</code>, <code v-pre>CANCEL</code><br>Indicates the current state of the order.<br>• <code v-pre>PENDING</code>: The order is still being processed and is not in a final state.<br>• <code v-pre>SUCCEEDED</code>: The order has been successfully processed.<br>• <code v-pre>FAILED</code>: The order processing has failed.<br>• <code v-pre>CANCEL</code>: The order has been canceled by the user and is considered equivalent to a failure.<br><br>Only orders in a final state (<code v-pre>SUCCEEDED</code>, <code v-pre>FAILED</code>, or <code v-pre>CANCEL</code>) are considered complete and reliable for further actions. Avoid relying on orders in a non-final state (<code v-pre>PENDING</code>) as their status may change.</td>
</tr>
<tr>
<td>errorCode</td>
<td>String</td>
<td>Order fail with errorCode.</td>
</tr>
<tr>
<td>errorMessage</td>
<td>String</td>
<td>Order fail with error message.</td>
</tr>
<tr>
<td>completedTime</td>
<td>String</td>
<td>The time of order completed.</td>
</tr>
<tr>
<td>source</td>
<td>String</td>
<td>Order create client Type，such as WEB,ANDROID,IOS,open-api.</td>
</tr>
<tr>
<td>createdAt</td>
<td>String</td>
<td>The time of order created.</td>
</tr>
<tr>
<td>orderExtendedMap</td>
<td>Object</td>
<td>The order extend data.</td>
</tr>
<tr>
<td>dealCancel</td>
<td>boolean</td>
<td>If order can be canceled, value will be true.</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"error"</span><span class="token operator">:</span> <span class="token string">"OK"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"externalOrderId"</span><span class="token operator">:</span> <span class="token string">"1476829580936625682"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"internalOrderId"</span><span class="token operator">:</span> <span class="token string">"1476829580936625681"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"paymentOrderId"</span><span class="token operator">:</span> <span class="token string">"000008"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"fiatCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"fiatAmount"</span><span class="token operator">:</span> <span class="token string">"11111"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"INSTAPAY"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"allbank"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"instapay"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"AllBank (A Thrift Bank), Inc."</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"bank"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"feeCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"channelFee"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"platformFee"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"SUCCEEDED"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"errorCode"</span><span class="token operator">:</span> <span class="token string">"SUCCEEDED"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"errorMessage"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"completedTime"</span><span class="token operator">:</span> <span class="token string">"2023-07-31T07:16:47.000+00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"WEBHOOK"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2023-07-31T07:16:46.000+00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"orderExtendedMap"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string-property property">"channelReferenceNo"</span><span class="token operator">:</span> <span class="token string">"000008"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"senderAccountNumber"</span><span class="token operator">:</span> <span class="token string">"8613989193526"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"dealCancel"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"externalOrderId"</span><span class="token operator">:</span> <span class="token string">"1476829580936625686"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"internalOrderId"</span><span class="token operator">:</span> <span class="token string">"1474038775754799133"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"paymentOrderId"</span><span class="token operator">:</span> <span class="token string">"2023072799"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"fiatCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"fiatAmount"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"SWIFTPAY_PESONET"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"aub"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"swiftpay_pesonet"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"Asia United Bank"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"e-wallet"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"feeCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"channelFee"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"platformFee"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"SUCCEEDED"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"errorCode"</span><span class="token operator">:</span> <span class="token string">"SUCCEEDED"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"errorMessage"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"completedTime"</span><span class="token operator">:</span> <span class="token string">"2023-07-27T10:52:41.000+00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"WEBHOOK"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2023-07-27T10:52:40.000+00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"orderExtendedMap"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string-property property">"channelReferenceNo"</span><span class="token operator">:</span> <span class="token string">"000008"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"senderAccountNumber"</span><span class="token operator">:</span> <span class="token string">"8613989193526"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"dealCancel"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"total"</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="fiat-order-history-v2-user-data" tabindex="-1"><a class="header-anchor" href="#fiat-order-history-v2-user-data"><span>Fiat order history V2 (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST openapi/fiat/v2/history</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint is used to query all fiat related history</p>
<p><strong>Weight:</strong> 1</p>
<p><strong>Parameters(with json body):</strong></p>
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
<td>pageNum</td>
<td>STRING</td>
<td>No</td>
<td>Page number default 1.</td>
</tr>
<tr>
<td>pageSize</td>
<td>STRING</td>
<td>No</td>
<td>Page size,default 10.</td>
</tr>
<tr>
<td>externalOrderId</td>
<td>String</td>
<td>No</td>
<td>Coins internal ID.</td>
</tr>
<tr>
<td>internalOrderId</td>
<td>String</td>
<td>No</td>
<td>The unique order id generated by the server.</td>
</tr>
<tr>
<td>transactionType</td>
<td>STRING</td>
<td>No</td>
<td>Order Transaction Type 1: cash-in, -1: cash-out.</td>
</tr>
<tr>
<td>transactionChannel</td>
<td>STRING</td>
<td>No</td>
<td>Transaction channel, the optional values are INSTAPAY, SWIFTPAY_PESONET.</td>
</tr>
<tr>
<td>transactionSubject</td>
<td>STRING</td>
<td>No</td>
<td>Secondary channels, such as Gcash supported under instapay.</td>
</tr>
<tr>
<td>status</td>
<td>STRING</td>
<td>No</td>
<td><strong>Enum:</strong> <code v-pre>PENDING</code>, <code v-pre>SUCCEEDED</code>, <code v-pre>FAILED</code>, <code v-pre>CANCEL</code><br>Indicates the current state of the order.<br>• <code v-pre>PENDING</code>: The order is still being processed and is not in a final state.<br>• <code v-pre>SUCCEEDED</code>: The order has been successfully processed.<br>• <code v-pre>FAILED</code>: The order processing has failed.<br>• <code v-pre>CANCEL</code>: The order has been canceled by the user and is considered equivalent to a failure.<br><br>Only orders in a final state (<code v-pre>SUCCEEDED</code>, <code v-pre>FAILED</code>, or <code v-pre>CANCEL</code>) are considered complete and reliable for further actions. Avoid relying on orders in a non-final state (<code v-pre>PENDING</code>) as their status may change.</td>
</tr>
<tr>
<td>fiatCurrency</td>
<td>STRING</td>
<td>No</td>
<td>fiat currecy.</td>
</tr>
<tr>
<td>startDate</td>
<td>STRING</td>
<td>No</td>
<td>the order's create time will between startDate and endDate. This parameter accepts input in the ISO 8601 format for date and time, which is based on the Coordinated Universal Time (UTC) time zone (e.g., &quot;2016-10-20T13:00:00.000000Z&quot;). Alternatively, you can provide a time delta from the current time (e.g., &quot;1w 3d 2h 32m 5s&quot;).</td>
</tr>
<tr>
<td>endDate</td>
<td>STRING</td>
<td>No</td>
<td>the order's create time will between startDate and endDate. This parameter accepts input in the ISO 8601 format for date and time, which is based on the Coordinated Universal Time (UTC) time zone (e.g., &quot;2016-10-20T13:00:00.000000Z&quot;). Alternatively, you can provide a time delta from the current time (e.g., &quot;1w 3d 2h 32m 5s&quot;).</td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>No</td>
<td>the order's create time will between startTime and endTime. Works when both startDate and endDate are empty. The server time zone is utc+0</td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>No</td>
<td>the order's create time will between startTime and endTime. Works when both startDate and endDate are empty. The server time zone is utc+0</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<table>
<thead>
<tr>
<th>FieldName</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>externalOrderId</td>
<td>String</td>
<td>Coins internal ID, query not supported yet; ignore it.</td>
</tr>
<tr>
<td>internalOrderId</td>
<td>String</td>
<td>The unique order id generated by the server.</td>
</tr>
<tr>
<td>paymentOrderId</td>
<td>String</td>
<td>The payment order id generated by the channel.</td>
</tr>
<tr>
<td>fiatCurrency</td>
<td>String</td>
<td>PHP as it is the only currency currently supported</td>
</tr>
<tr>
<td>fiatAmount</td>
<td>String</td>
<td>The order amount.</td>
</tr>
<tr>
<td>transactionType</td>
<td>String</td>
<td>1 mean cash in,-1 mean cash out.</td>
</tr>
<tr>
<td>transactionChannel</td>
<td>String</td>
<td>The first-level channel to order it belongs.</td>
</tr>
<tr>
<td>transactionSubject</td>
<td>String</td>
<td>The channel code of order.</td>
</tr>
<tr>
<td>transactionSubjectType</td>
<td>String</td>
<td>Channel type.</td>
</tr>
<tr>
<td>transactionChannelName</td>
<td>String</td>
<td>First level channel Name.</td>
</tr>
<tr>
<td>transactionSubjectName</td>
<td>String</td>
<td>channel Name.</td>
</tr>
<tr>
<td>feeCurrency</td>
<td>String</td>
<td>PHP as it is the only currency currently supported</td>
</tr>
<tr>
<td>channelFee</td>
<td>String</td>
<td>The fee of order always 0 Deprecated, see platformFee.</td>
</tr>
<tr>
<td>platformFee</td>
<td>String</td>
<td>The fee of order.</td>
</tr>
<tr>
<td>status</td>
<td>String</td>
<td><strong>Enum:</strong> <code v-pre>PENDING</code>, <code v-pre>SUCCEEDED</code>, <code v-pre>FAILED</code>, <code v-pre>CANCEL</code><br>Indicates the current state of the order.<br>• <code v-pre>PENDING</code>: The order is still being processed and is not in a final state.<br>• <code v-pre>SUCCEEDED</code>: The order has been successfully processed.<br>• <code v-pre>FAILED</code>: The order processing has failed.<br>• <code v-pre>CANCEL</code>: The order has been canceled by the user and is considered equivalent to a failure.<br><br>Only orders in a final state (<code v-pre>SUCCEEDED</code>, <code v-pre>FAILED</code>, or <code v-pre>CANCEL</code>) are considered complete and reliable for further actions. Avoid relying on orders in a non-final state (<code v-pre>PENDING</code>) as their status may change.</td>
</tr>
<tr>
<td>errorCode</td>
<td>String</td>
<td>Order fail with errorCode.</td>
</tr>
<tr>
<td>errorMessage</td>
<td>String</td>
<td>Order fail with error message.</td>
</tr>
<tr>
<td>completedTime</td>
<td>String</td>
<td>The time of order completed.</td>
</tr>
<tr>
<td>source</td>
<td>String</td>
<td>Order create client Type，such as WEB,ANDROID,IOS,open-api.</td>
</tr>
<tr>
<td>createdAt</td>
<td>String</td>
<td>The time of order created.</td>
</tr>
<tr>
<td>orderExtendedMap</td>
<td>Object</td>
<td>The order extend data.</td>
</tr>
<tr>
<td>dealCancel</td>
<td>boolean</td>
<td>If order can be canceled, value will be true.</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"error"</span><span class="token operator">:</span> <span class="token string">"OK"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"externalOrderId"</span><span class="token operator">:</span> <span class="token string">"1476829580936625682"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"internalOrderId"</span><span class="token operator">:</span> <span class="token string">"1476829580936625681"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"paymentOrderId"</span><span class="token operator">:</span> <span class="token string">"000008"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"fiatCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"fiatAmount"</span><span class="token operator">:</span> <span class="token string">"11111"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"INSTAPAY"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"allbank"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"instapay"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"AllBank (A Thrift Bank), Inc."</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"bank"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"feeCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"channelFee"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"platformFee"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"SUCCEEDED"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"errorCode"</span><span class="token operator">:</span> <span class="token string">"SUCCEEDED"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"errorMessage"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"completedTime"</span><span class="token operator">:</span> <span class="token string">"2023-07-31T07:16:47.000+00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"WEBHOOK"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2023-07-31T07:16:46.000+00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"orderExtendedMap"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string-property property">"channelReferenceNo"</span><span class="token operator">:</span> <span class="token string">"000008"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"senderAccountNumber"</span><span class="token operator">:</span> <span class="token string">"8613989193526"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"dealCancel"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"externalOrderId"</span><span class="token operator">:</span> <span class="token string">"1476829580936625686"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"internalOrderId"</span><span class="token operator">:</span> <span class="token string">"1474038775754799133"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"paymentOrderId"</span><span class="token operator">:</span> <span class="token string">"2023072799"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"fiatCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"fiatAmount"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionChannel"</span><span class="token operator">:</span> <span class="token string">"SWIFTPAY_PESONET"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubject"</span><span class="token operator">:</span> <span class="token string">"aub"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionChannelName"</span><span class="token operator">:</span> <span class="token string">"swiftpay_pesonet"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubjectName"</span><span class="token operator">:</span> <span class="token string">"Asia United Bank"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"transactionSubjectType"</span><span class="token operator">:</span> <span class="token string">"e-wallet"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"feeCurrency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"channelFee"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"platformFee"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"SUCCEEDED"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"errorCode"</span><span class="token operator">:</span> <span class="token string">"SUCCEEDED"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"errorMessage"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"completedTime"</span><span class="token operator">:</span> <span class="token string">"2023-07-27T10:52:41.000+00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"WEBHOOK"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2023-07-27T10:52:40.000+00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"orderExtendedMap"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string-property property">"channelReferenceNo"</span><span class="token operator">:</span> <span class="token string">"000008"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"senderAccountNumber"</span><span class="token operator">:</span> <span class="token string">"8613989193526"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"dealCancel"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"total"</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="sub-account-endpoints" tabindex="-1"><a class="header-anchor" href="#sub-account-endpoints"><span>Sub-account endpoints</span></a></h2>
<h3 id="query-sub-account-list-for-master-account" tabindex="-1"><a class="header-anchor" href="#query-sub-account-list-for-master-account"><span>Query Sub-account List (For Master Account)</span></a></h3>
<p>Applies to master accounts only.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/sub-account/list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong> 1</p>
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
<td>email</td>
<td>STRING</td>
<td>NO</td>
<td>Sub account email</td>
</tr>
<tr>
<td>page</td>
<td>INT</td>
<td>NO</td>
<td>Current page, default value: 1</td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Quantity per page, default value 10, maximum <code v-pre>200</code></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"subAccounts"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"createTime"</span><span class="token operator">:</span> <span class="token string">"1689744671462"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testsub@gmail.com"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"isFreeze"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"createTime"</span><span class="token operator">:</span> <span class="token string">"1689744700710"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testsub2@gmail.com"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"isFreeze"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-a-virtual-sub-account-for-master-account" tabindex="-1"><a class="header-anchor" href="#create-a-virtual-sub-account-for-master-account"><span>Create a Virtual Sub-account(For Master Account)</span></a></h3>
<p>This interface currently supports the creation of virtual sub-accounts (maximum 30).</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v1/sub-account/create</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong> 1</p>
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
<td>accountName</td>
<td>STRING</td>
<td>YES</td>
<td>Sub account email</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"testsub@gmail.com"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"createTime"</span><span class="token operator">:</span> <span class="token number">1689744700710</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"isFreeze"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="query-sub-account-assets-for-master-account" tabindex="-1"><a class="header-anchor" href="#query-sub-account-assets-for-master-account"><span>Query Sub-account Assets (For Master Account)</span></a></h3>
<p>Query detailed balance information of a sub-account via the master account (applies to master accounts only).</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/sub-account/asset</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong> 1</p>
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
<td>email</td>
<td>STRING</td>
<td>YES</td>
<td>Sub account email</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"balances"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"asset"</span><span class="token operator">:</span> <span class="token string">"BTC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"free"</span><span class="token operator">:</span> <span class="token string">"0.1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"locked"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"asset"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"free"</span><span class="token operator">:</span> <span class="token string">"0.1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"locked"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="universal-transfer-for-master-account" tabindex="-1"><a class="header-anchor" href="#universal-transfer-for-master-account"><span>Universal Transfer (For Master Account)</span></a></h3>
<p>Master account can initiate a transfer from any of its sub-accounts to the master account, or from the master account to any sub-account.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v1/sub-account/transfer/universal-transfer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong> 1</p>
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
<td>fromEmail</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>toEmail</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>clientTranId</td>
<td>STRING</td>
<td>NO</td>
<td>Must be unique</td>
</tr>
<tr>
<td>asset</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>amount</td>
<td>DECIMAL</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
</tbody>
</table>
<ul>
<li>Transfer from master account by default if fromEmail is not sent.</li>
<li>Transfer to master account by default if toEmail is not sent.</li>
<li>Specify at least one of fromEmail and toEmail.</li>
<li>Supported transfer scenarios:
<ul>
<li>Master account transfer to sub-account</li>
<li>Sub-account transfer to master account</li>
<li>Sub-account transfer to Sub-account</li>
</ul>
</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"clientTransferId"</span><span class="token operator">:</span> <span class="token string">"1487573639841995271"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token comment">//true:success,false:failed</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="transfer-to-master-for-sub-account" tabindex="-1"><a class="header-anchor" href="#transfer-to-master-for-sub-account"><span>Transfer to Master (For Sub-account)</span></a></h3>
<p>Sub-account can initiate a transfer from itself to the master account.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v1/sub-account/transfer/sub-to-master</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong> 1</p>
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
<td>asset</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>amount</td>
<td>DECIMAL</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>clientTranId</td>
<td>STRING</td>
<td>NO</td>
<td>Must be unique</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"clientTransferId"</span><span class="token operator">:</span> <span class="token string">"1487573639841995271"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token comment">//true:success,false:failed</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="query-universal-transfer-history-for-master-account" tabindex="-1"><a class="header-anchor" href="#query-universal-transfer-history-for-master-account"><span>Query Universal Transfer History (For Master Account)</span></a></h3>
<p>Applies to master accounts only.
If startTime and endTime are not sent, this will return records of the last 30 days by default.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/sub-account/transfer/universal-transfer-history</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong> 1</p>
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
<td>fromEmail</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>toEmail</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>clientTranId</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>tokenId</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td>Millisecond timestamp</td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td>Millisecond timestamp,Data excluding the endTime.</td>
</tr>
<tr>
<td>page</td>
<td>INT</td>
<td>NO</td>
<td>Current page, default value: 1</td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Quantity per page, default value <code v-pre>500</code>, maximum <code v-pre>500</code></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
</tbody>
</table>
<ul>
<li>fromEmail and toEmail cannot be sent at the same time.</li>
<li>Return fromEmail equal master account email by default.</li>
<li>The query time period must be less than 30 days.</li>
<li>If startTime and endTime not sent, return records of the last 30 days by default.</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"clientTranId"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"fromEmail"</span><span class="token operator">:</span> <span class="token string">"testsub@gmail"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"toEmail"</span><span class="token operator">:</span> <span class="token string">"testsub1@gmail"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"asset"</span><span class="token operator">:</span> <span class="token string">"BTC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"0.1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"createdAt"</span><span class="token operator">:</span> <span class="token number">1689744700710</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token comment">//success,pending,failed</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sub-account-transfer-history-for-sub-account" tabindex="-1"><a class="header-anchor" href="#sub-account-transfer-history-for-sub-account"><span>Sub-account Transfer History (For Sub-account)</span></a></h3>
<p>Applies to sub-accounts only.
If startTime and endTime are not sent, this will return records of the last 30 days by default.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/sub-account/transfer/sub-history</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong> 1</p>
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
<td>asset</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>INT</td>
<td>NO</td>
<td>1: transfer in, 2: transfer out. If the type parameter is not provided or provided incorrectly, the data returned will be for transfer out.</td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td>Millisecond timestamp</td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td>Millisecond timestamp,Data excluding the endTime.</td>
</tr>
<tr>
<td>page</td>
<td>INT</td>
<td>NO</td>
<td>Current page, default value: 1</td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Quantity per page, default value <code v-pre>500</code>, maximum <code v-pre>500</code></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
<tr>
<td>clientTranId</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
</tbody>
</table>
<ul>
<li>If type is not sent, the records of type 2: transfer out will be returned by default.</li>
<li>If startTime and endTime are not sent, the recent 30-day data will be returned.</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"clientTranId"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"fromEmail"</span><span class="token operator">:</span> <span class="token string">"testsub@gmail"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"toEmail"</span><span class="token operator">:</span> <span class="token string">"testsub1@gmail"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"asset"</span><span class="token operator">:</span> <span class="token string">"BTC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"0.1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"createdAt"</span><span class="token operator">:</span> <span class="token number">1689744700710</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token comment">//success,pending,failed</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-ip-restriction-for-a-sub-account-api-key-for-master-account" tabindex="-1"><a class="header-anchor" href="#get-ip-restriction-for-a-sub-account-api-key-for-master-account"><span>Get IP Restriction for a Sub-account API Key (For Master Account)</span></a></h3>
<p>Query detailed IPs for a sub-account API key.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/sub-account/apikey/ip-restriction</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong> 1</p>
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
<td>apikey</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>email</td>
<td>STRING</td>
<td>YES</td>
<td>Sub account email</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ipList"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"8.8.8.8"</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ipRestrict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"role"</span><span class="token operator">:</span> <span class="token string">"2,3,4,5,6"</span><span class="token punctuation">,</span><span class="token comment">//0:READ_ONLY, 2:TRADE_ONLY, 3:CONVERT_ONLY, 4:CRYPTO_WALLET_ONLY, 5:FIAT_ONLY, 6:ACCOUNT_ONLY</span></span>
<span class="line">  <span class="token property">"updateTime"</span><span class="token operator">:</span> <span class="token number">1689744700710</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-ip-restriction-for-sub-account-api-key-for-master-account" tabindex="-1"><a class="header-anchor" href="#add-ip-restriction-for-sub-account-api-key-for-master-account"><span>Add IP Restriction for Sub-Account API key (For Master Account)</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v1/sub-account/apikey/add-ip-restriction</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong> 1</p>
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
<td>apikey</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>email</td>
<td>STRING</td>
<td>YES</td>
<td>Sub account email</td>
</tr>
<tr>
<td>ipAddress</td>
<td>STRING</td>
<td>NO</td>
<td>Can be added in batches, separated by commas</td>
</tr>
<tr>
<td>ipRestriction</td>
<td>STRING</td>
<td>YES</td>
<td>IP Restriction status. 2 = IP Unrestricted. 1 = Restrict access to trusted IPs only.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ipList"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"8.8.8.8"</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ipRestrict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"role"</span><span class="token operator">:</span> <span class="token string">"2,3,4,5,6"</span><span class="token punctuation">,</span><span class="token comment">//0:READ_ONLY, 2:TRADE_ONLY, 3:CONVERT_ONLY, 4:CRYPTO_WALLET_ONLY, 5:FIAT_ONLY, 6:ACCOUNT_ONLY</span></span>
<span class="line">  <span class="token property">"updateTime"</span><span class="token operator">:</span> <span class="token number">1689744700710</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-ip-list-for-a-sub-account-api-key-for-master-account" tabindex="-1"><a class="header-anchor" href="#delete-ip-list-for-a-sub-account-api-key-for-master-account"><span>Delete IP List For a Sub-account API Key (For Master Account)</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v1/sub-account/apikey/delete-ip-restriction</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong> 1</p>
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
<td>apikey</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>email</td>
<td>STRING</td>
<td>YES</td>
<td>Sub account email</td>
</tr>
<tr>
<td>ipAddress</td>
<td>STRING</td>
<td>YES</td>
<td>Can be added in batches, separated by commas</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ipList"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"8.8.8.8"</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ipRestrict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"role"</span><span class="token operator">:</span> <span class="token string">"2,3,4,5,6"</span><span class="token punctuation">,</span><span class="token comment">//0:READ_ONLY, 2:TRADE_ONLY, 3:CONVERT_ONLY, 4:CRYPTO_WALLET_ONLY, 5:FIAT_ONLY, 6:ACCOUNT_ONLY</span></span>
<span class="line">  <span class="token property">"updateTime"</span><span class="token operator">:</span> <span class="token number">1689744700710</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-sub-account-deposit-address-for-master-account" tabindex="-1"><a class="header-anchor" href="#get-sub-account-deposit-address-for-master-account"><span>Get Sub-account Deposit Address(For Master Account)</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/sub-account/wallet/deposit/address</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Fetch sub account deposit address with network.</p>
<p><strong>Weight:</strong> 10</p>
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
<td>email</td>
<td>STRING</td>
<td>YES</td>
<td>Sub account email</td>
</tr>
<tr>
<td>coin</td>
<td>STRING</td>
<td>YES</td>
<td>The value is from All Coins' Information api</td>
</tr>
<tr>
<td>network</td>
<td>STRING</td>
<td>YES</td>
<td>The value is from All Coins' Information api</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"coin"</span><span class="token operator">:</span> <span class="token string">"ETH"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"0xfe98628173830bf79c59f04585ce41f7de168784"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"addressTag"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-sub-account-deposit-history-for-master-account" tabindex="-1"><a class="header-anchor" href="#get-sub-account-deposit-history-for-master-account"><span>Get Sub-account Deposit History(For Master Account)</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/sub-account/wallet/deposit/history</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Fetch deposit history.</p>
<p><strong>Weight(IP):</strong> 2</p>
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
<td>email</td>
<td>STRING</td>
<td>YES</td>
<td>Sub account email</td>
</tr>
<tr>
<td>coin</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>txId</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>depositId</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>status</td>
<td>INT</td>
<td>NO</td>
<td>0-PROCESSING, 1-SUCCESS, 2-FAILED, 3-NEED_FILL_DATA(travel rule info)</td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td>Default: 90 days from current timestamp</td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td>Default: current timestamp</td>
</tr>
<tr>
<td>offset</td>
<td>INT</td>
<td>NO</td>
<td>Default:0</td>
</tr>
<tr>
<td>limit</td>
<td>LONG</td>
<td>NO</td>
<td>Default:1000, Max:1000</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>Please note the default <code v-pre>startTime</code> and <code v-pre>endTime</code> to ensure the time interval is within 0-90 days.</p>
</li>
<li>
<p>If both <code v-pre>startTime</code> and <code v-pre>endTime</code> are sent, time between <code v-pre>startTime</code> and <code v-pre>endTime</code> must be less than 90 days.</p>
</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"d_769800519366885376"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"0.001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"coin"</span><span class="token operator">:</span> <span class="token string">"BNB"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"network"</span><span class="token operator">:</span> <span class="token string">"BNB"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"addressTag"</span><span class="token operator">:</span> <span class="token string">"101764890"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"txId"</span><span class="token operator">:</span> <span class="token string">"98A3EA560C6B3336D348B6C83F0F95ECE4F1F5919E94BD006E5BF3BF264FACFC"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"insertTime"</span><span class="token operator">:</span> <span class="token number">1661493146000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"confirmNo"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"d_769754833590042625"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span><span class="token string">"0.5"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"coin"</span><span class="token operator">:</span><span class="token string">"IOTA"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"network"</span><span class="token operator">:</span><span class="token string">"IOTA"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"address"</span><span class="token operator">:</span><span class="token string">"SIZ9VLMHWATXKV99LH99CIGFJFUMLEHGWVZVNNZXRJJVWBPHYWPPBOSDORZ9EQSHCZAMPVAPGFYQAUUV9DROOXJLNW"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"addressTag"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"txId"</span><span class="token operator">:</span><span class="token string">"ESBFVQUTPIWQNJSPXFNHNYHSQNTGKRVKPRABQWTAXCDWOAKDKYWPTVG9BGXNVNKTLEJGESAVXIKIZ9999"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"insertTime"</span><span class="token operator">:</span><span class="token number">1599620082000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"confirmNo"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="collect-sub-account-assets-for-master-account" tabindex="-1"><a class="header-anchor" href="#collect-sub-account-assets-for-master-account"><span>Collect sub-account assets (For Master Account)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v1/fund-collect/collect-from-sub-account</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If there are tasks with a status of INIT, resubmission is not allowed. This interface will return <code v-pre>{'code': -10324, 'msg': 'Request repeated.'}</code>.</p>
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
<td>clientRequestId</td>
<td>STRING</td>
<td>YES</td>
<td>Request ID, must be unique, Maximum length: 200</td>
</tr>
<tr>
<td>remark</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"clientRequestId"</span><span class="token operator">:</span> <span class="token string">"777d3f71-4715-4150-9fd1-d13246d7e02b"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"INIT"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"comment"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response Description</strong></p>
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
<td>clientRequestId</td>
<td>STRING</td>
<td>YES</td>
<td>Request ID</td>
</tr>
<tr>
<td>status</td>
<td>STRING</td>
<td>YES</td>
<td>Collection Task Status: <code v-pre>INIT</code>, <code v-pre>SUCCESS</code>, <code v-pre>PARTIAL_SUCCESS</code>, <code v-pre>PROCESSING</code>,<code v-pre>FAILED</code></td>
</tr>
<tr>
<td>remark</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="retrieve-asset-collection-records-user-data" tabindex="-1"><a class="header-anchor" href="#retrieve-asset-collection-records-user-data"><span>Retrieve asset collection records (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/fund-collect/get-fund-record</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Retrieve asset collection records.</p>
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
<td>clientRequestId</td>
<td>STRING</td>
<td>NO</td>
<td>Request ID, must be unique</td>
</tr>
<tr>
<td>page</td>
<td>INT</td>
<td>NO</td>
<td>Page number</td>
</tr>
<tr>
<td>size</td>
<td>INT</td>
<td>NO</td>
<td>Page size (default:100,max:100)</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"clientRequestId"</span><span class="token operator">:</span> <span class="token string">"09533266-1fea-11f0-8ff9-2a3efdea066c"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"comment"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"SUCCESS"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"clientRequestId"</span><span class="token operator">:</span> <span class="token string">"09533266-1fea-11f0-8ff9-2a3efdea066b"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"comment"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"SUCCESS"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Collection Task Status: <code v-pre>INIT</code>, <code v-pre>SUCCESS</code>, <code v-pre>PARTIAL_SUCCESS</code>, <code v-pre>PROCESSING</code>,<code v-pre>FAILED</code></p>
<h4 id="get-payment-request-user-data" tabindex="-1"><a class="header-anchor" href="#get-payment-request-user-data"><span>Get payment request (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v3/payment-request/get-payment-request <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Retrieve either a single existing payment request or a list of existing payment requests.</p>
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
<td>id</td>
<td>STRING</td>
<td>NO</td>
<td>The ID of a specific payment request to retrieve.</td>
</tr>
<tr>
<td>start_time</td>
<td>LONG</td>
<td>NO</td>
<td>The start time of a time range within which to search for payment requests.</td>
</tr>
<tr>
<td>end_time</td>
<td>LONG</td>
<td>NO</td>
<td>The end time of a time range within which to search for payment requests.</td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>The maximum number of records to return in a single response. The default value is 500, and the maximum allowed value is 1000.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"payment-request"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"message"</span><span class="token operator">:</span> <span class="token string">"i am boss"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"1433341829953096704"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"invoice"</span><span class="token operator">:</span> <span class="token string">"1433341829953096704"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"20"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"currency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"pending"</span><span class="token punctuation">,</span><span class="token comment">//pending,fully_paid,expired,canceled</span></span>
<span class="line">        <span class="token string-property property">"created_at"</span><span class="token operator">:</span> <span class="token string">"1685603661217"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updated_at"</span><span class="token operator">:</span> <span class="token string">"1685603661217"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"expires_at"</span><span class="token operator">:</span> <span class="token string">"1686208461219"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"supported_payment_collectors"</span><span class="token operator">:</span> <span class="token string">"[\"coins_peso_wallet\"]"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"payment_url"</span><span class="token operator">:</span> <span class="token string">"https://www.pro.coins.ph/payment/invoice/1433341829953096704"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"payer_contact_info"</span><span class="token operator">:</span> <span class="token string">"jennins@coins.ph"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cancel-payment-request-user-data" tabindex="-1"><a class="header-anchor" href="#cancel-payment-request-user-data"><span>Cancel payment request (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v3/payment-request/delete-payment-request <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cancel an existing payment request.</p>
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
<td>id</td>
<td>STRING</td>
<td>YES</td>
<td>The ID the payment request that needs to be canceled.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"payment-request"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"message"</span><span class="token operator">:</span> <span class="token string">"i am boss"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"1433341829953096704"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"invoice"</span><span class="token operator">:</span> <span class="token string">"1433341829953096704"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"20"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"currency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"canceled"</span><span class="token punctuation">,</span><span class="token comment">//pending,fully_paid,expired,canceled</span></span>
<span class="line">        <span class="token string-property property">"created_at"</span><span class="token operator">:</span> <span class="token string">"1685603661217"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updated_at"</span><span class="token operator">:</span> <span class="token string">"1685603661217"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"expires_at"</span><span class="token operator">:</span> <span class="token string">"1686208461219"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"supported_payment_collectors"</span><span class="token operator">:</span> <span class="token string">"[\"coins_peso_wallet\"]"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"payment_url"</span><span class="token operator">:</span> <span class="token string">"https://www.pro.coins.ph/payment/invoice/1433341829953096704"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"payer_contact_info"</span><span class="token operator">:</span> <span class="token string">"jennins@coins.ph"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="send-reminder-for-payment-request-user-data" tabindex="-1"><a class="header-anchor" href="#send-reminder-for-payment-request-user-data"><span>Send reminder for payment request (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /openapi/v3/payment-request/payment-request-reminder <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Send a reminder to the recipient to fulfill the payment request.</p>
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
<td>id</td>
<td>STRING</td>
<td>YES</td>
<td>The ID of the payment request for which the reminder notification needs to be sent.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token boolean">true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="merchant-endpoints" tabindex="-1"><a class="header-anchor" href="#merchant-endpoints"><span>Merchant Endpoints</span></a></h2>
<h3 id="signature" tabindex="-1"><a class="header-anchor" href="#signature"><span>Signature</span></a></h3>
<p><strong>Common Headers</strong></p>
<p>The table below shows all of the common API Headers you will encounter in the Coins API.</p>
<table>
<thead>
<tr>
<th>Header Name</th>
<th>Required</th>
<th>Type</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>X-Merchant-Key</td>
<td>YES</td>
<td>STRING</td>
<td></td>
<td>The authorized merchant key</td>
</tr>
<tr>
<td>X-Merchant-Sign</td>
<td>YES</td>
<td>STRING</td>
<td></td>
<td>The authorized merchant request sign</td>
</tr>
<tr>
<td>X-Timestamp</td>
<td>YES</td>
<td>LONG</td>
<td>1671158910</td>
<td>Request initiation time</td>
</tr>
<tr>
<td>X-Trace-Id</td>
<td>NO</td>
<td>STRING</td>
<td></td>
<td>Request log trace ID</td>
</tr>
</tbody>
</table>
<p>To craft an X-Merchant-Sign:</p>
<ol>
<li>Construct a message according to the following pseudo-grammar: ‘X-Timestamp’ +URL(http://127.0.0.1/merchant-api/account?paramKey=paramValue&amp;paramKey2=paramValue2) + BODY(key1=value1&amp;key=value2)</li>
<li>Calculate an HMAC with the message string you just created, your API secret as the key, and SHA256 as the hash algorithm</li>
</ol>
<h3 id="invoicing" tabindex="-1"><a class="header-anchor" href="#invoicing"><span>Invoicing</span></a></h3>
<p>An invoice is a document that outlines the details of a transaction between two parties, typically a seller and a buyer. The transaction could be for goods or services rendered, or it could be a transfer of funds from one user to another.</p>
<p>In an invoice, there are two main entities involved:</p>
<ol>
<li>The payee, who is the recipient of the payment for the goods or services provided (the merchant).</li>
<li>The payer, who is the individual or organization making the payment to fulfill the invoice (the customer).</li>
</ol>
<p>The API endpoints described in this section allow you to integrate invoicing functionality into your application. Creating, sending, and managing invoices directly from the application simplifies the invoicing process and improves the user experience.</p>
<h4 id="creating-invoices" tabindex="-1"><a class="header-anchor" href="#creating-invoices"><span>Creating Invoices</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /merchant-api/v1/invoices <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint generates an invoice based on the provided parameters and returns a response with details of the created invoice.</p>
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
<td>amount</td>
<td>DECIMAL</td>
<td>YES</td>
<td>The amount expected from the customer.</td>
</tr>
<tr>
<td>currency</td>
<td>STRING</td>
<td>YES</td>
<td>Currency of transaction.</td>
</tr>
<tr>
<td>supported_payment_collectors</td>
<td>STRING</td>
<td>YES</td>
<td>Methods of payment that are available to a user when they view a payment request, optional items <code v-pre>coins_peso_wallet,CEBL,MLH,PLWN</code>,  e.g. <code v-pre>[&quot;coins_peso_wallet&quot;]</code> or <code v-pre>[&quot;coins_peso_wallet&quot;,&quot;CEBL&quot;,&quot;MLH&quot;,&quot;PLWN&quot;]</code>. Note: when a payment method is closed, it will be unavailable.</td>
</tr>
<tr>
<td>external_transaction_id</td>
<td>STRING</td>
<td>YES</td>
<td>To maintain transactional integrity, each transaction_id must be unique.</td>
</tr>
<tr>
<td>expires_at</td>
<td>STRING</td>
<td>NO</td>
<td>The date and time at which the invoice will expire. This parameter accepts input in the ISO 8601 format for date and time, which is based on the Coordinated Universal Time (UTC) time zone (e.g., &quot;2016-10-20T13:00:00.000000Z&quot;). Alternatively, you can provide a time delta from the current time (Option:<code v-pre>1w,3d,2h,32m,5s</code>).</td>
</tr>
</tbody>
</table>
<p><strong>Payment Options</strong></p>
<table>
<thead>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>coins_peso_wallet</td>
<td>Pay with the user's Peso Coins wallet.</td>
</tr>
</tbody>
</table>
<p><strong>Request:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"currency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"supported_payment_collectors"</span><span class="token operator">:</span> <span class="token string">"["</span>coins_peso_wallet<span class="token string">"]"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"external_transaction_id"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"expires_at"</span><span class="token operator">:</span> <span class="token string">"1w"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"invoice"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"1783304323757262592"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount_due"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"currency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"pending"</span><span class="token punctuation">,</span><span class="token comment">//pending,fully_paid,expired,canceled</span></span>
<span class="line">        <span class="token string-property property">"external_transaction_id"</span><span class="token operator">:</span> <span class="token string">"test_111"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"created_at"</span><span class="token operator">:</span> <span class="token string">"1690453041000"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updated_at"</span><span class="token operator">:</span> <span class="token string">"1690453041000"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"expires_at"</span><span class="token operator">:</span> <span class="token string">"1690453041000"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"supported_payment_collectors"</span><span class="token operator">:</span> <span class="token string">"[\"coins_peso_wallet\"]"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"payment_url"</span><span class="token operator">:</span> <span class="token string">"http:xxxx"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"expires_in_seconds"</span><span class="token operator">:</span> <span class="token string">"60"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"incoming_address"</span><span class="token operator">:</span><span class="token string">""</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="retrieving-invoices" tabindex="-1"><a class="header-anchor" href="#retrieving-invoices"><span>Retrieving Invoices</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /merchant-api/v1/get-invoices <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint retrieves information about a specific invoice.</p>
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
<td>invoice_id</td>
<td>STRING</td>
<td>NO</td>
<td>The ID of a specific invoice to retrieve.</td>
</tr>
<tr>
<td>start_time</td>
<td>LONG</td>
<td>NO</td>
<td>The start time of a time range within which to search for invoices.</td>
</tr>
<tr>
<td>end_time</td>
<td>LONG</td>
<td>NO</td>
<td>The end time of a time range within which to search for invoices.</td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>The maximum number of records to return in a single response. The default value is 500, and the maximum allowed value is 1000.</td>
</tr>
</tbody>
</table>
<p>If the invoice_id parameter is provided, only the data for the specified invoice will be returned.
If the start_time and end_time parameters are not provided, the response will include the records within the last 90 days by default. Developers can provide a specific time range by setting the time parameter to a value that specifies the start and end times of the desired range.</p>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"invoice"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"1783304323757262592"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount_due"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"currency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"pending"</span><span class="token punctuation">,</span><span class="token comment">//pending,fully_paid,expired,canceled</span></span>
<span class="line">        <span class="token string-property property">"external_transaction_id"</span><span class="token operator">:</span> <span class="token string">"test_111"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"created_at"</span><span class="token operator">:</span> <span class="token string">"1690453041000"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updated_at"</span><span class="token operator">:</span> <span class="token string">"1690453041000"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"expires_at"</span><span class="token operator">:</span> <span class="token string">"1690453041000"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"supported_payment_collectors"</span><span class="token operator">:</span> <span class="token string">"[\"coins_peso_wallet\"]"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"payment_url"</span><span class="token operator">:</span> <span class="token string">"http:xxxx"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"expires_in_seconds"</span><span class="token operator">:</span> <span class="token string">"60"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"incoming_address"</span><span class="token operator">:</span><span class="token string">""</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="canceling-invoices" tabindex="-1"><a class="header-anchor" href="#canceling-invoices"><span>Canceling Invoices</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST /merchant-api/v1/invoices-cancel <span class="token punctuation">(</span>HMAC SHA256<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint cancels an existing invoice.</p>
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
<td>invoice_id</td>
<td>STRING</td>
<td>YES</td>
<td>The ID of a specific invoice to cancel.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"invoice"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"1783304323757262592"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount_due"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"currency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token string">"canceled"</span><span class="token punctuation">,</span><span class="token comment">//pending,fully_paid,expired,canceled</span></span>
<span class="line">        <span class="token string-property property">"external_transaction_id"</span><span class="token operator">:</span> <span class="token string">"test_111"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"created_at"</span><span class="token operator">:</span> <span class="token string">"1690453041000"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"updated_at"</span><span class="token operator">:</span> <span class="token string">"1690453041000"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"expires_at"</span><span class="token operator">:</span> <span class="token string">"1690453041000"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"supported_payment_collectors"</span><span class="token operator">:</span> <span class="token string">"[\"coins_peso_wallet\"]"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"payment_url"</span><span class="token operator">:</span> <span class="token string">"http:xxxx"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"expires_in_seconds"</span><span class="token operator">:</span> <span class="token string">"60"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"incoming_address"</span><span class="token operator">:</span><span class="token string">""</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="invoice-callbacks" tabindex="-1"><a class="header-anchor" href="#invoice-callbacks"><span>Invoice Callbacks</span></a></h3>
<p>During the lifecycle of an invoice, various events may occur. For example, when an invoice is fully paid, the invoice.fully_paid event is triggered. These events can be tracked and acted upon using the Coins API's event system.</p>
<p>Merchants can specify a callback URL when creating or updating an invoice, which is a web address that the API will send event data to. When an event occurs, the API will send a POST request to the specified callback_URL, containing data about the event. The merchant can then process this data as needed, such as by updating their internal systems or notifying the customer.</p>
<p>To ensure that the events are delivered securely, merchants must include an authorization header with their Merchant API key in each POST request. This header, with the format Authorization: Token MERCHANT_APIKEY, confirms that the request is coming from a trusted source and provides an additional layer of security for the event data.</p>
<p>Event payloads follow this convention:</p>
<p><strong>Request Url</strong></p>
<p>Please contact our partner support team to configure the callback address.</p>
<p><strong>Request Heder</strong></p>
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
<td>Authorization</td>
<td>STRING</td>
<td>YES</td>
<td>The merchant API key used when creating an invoice</td>
</tr>
</tbody>
</table>
<p><strong>Body</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"event"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"invoice.name"</span><span class="token punctuation">,</span><span class="token comment">//event</span></span>
<span class="line">    <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"invoice_id"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"currency"</span><span class="token operator">:</span> <span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"amount_received"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"external_transaction_id"</span><span class="token operator">:</span> <span class="token string">"1"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Events which may be consumed by callbacks are described in the table below:</p>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>invoice.created</td>
<td>The invoice has been created.</td>
</tr>
<tr>
<td>invoice.updated</td>
<td>The invoice has been updated. This may be due to the payment received for the invoice.</td>
</tr>
<tr>
<td>invoice.fully_paid</td>
<td>The invoice payment has been completed.</td>
</tr>
<tr>
<td>invoice.payment_reference_number_generated</td>
<td>The invoice payment reference number has been generated.</td>
</tr>
</tbody>
</table>
<h3 id="old-endpoints-from-coins-ph-legacy" tabindex="-1"><a class="header-anchor" href="#old-endpoints-from-coins-ph-legacy"><span>Old endpoints from coins.ph (Legacy)</span></a></h3>
<h4 id="create-a-new-sellorder" tabindex="-1"><a class="header-anchor" href="#create-a-new-sellorder"><span>Create a new sellorder</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST openapi/migration/v4/sellorder</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint converts digital assets into real-world cash, making it easy for users to withdraw their funds as cash. It provides a streamlined and secure process for cashing out, ensuring that users can access their funds quickly and easily. Additionally, this API endpoint ensures that users' financial information is kept secure and confidential, providing a safe and reliable way to withdraw funds.
It is best to no longer use this endpoint; it is only compatible with the old endpoint.</p>
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
<td>payment_outlet</td>
<td>STRING</td>
<td>Yes</td>
<td>The payment outlet used to transfer funds to another Coins wallet. Once the sell order is completed, the fiat cashout will be processed through the chosen payout outlet and the funds will be transferred to the specified destination wallet via coins_transfer.</td>
</tr>
<tr>
<td>base_amount</td>
<td>STRING</td>
<td>Yes</td>
<td>The quantity of digital assets that the user wishes to sell and the corresponding amount of fiat cash that they will receive in exchange.</td>
</tr>
<tr>
<td>currency</td>
<td>STRING</td>
<td>Yes</td>
<td>The currency symbol of the sell order.</td>
</tr>
<tr>
<td>bank_account_number</td>
<td>STRING</td>
<td>Yes</td>
<td>Cash out bank account number</td>
</tr>
<tr>
<td>bank_account_name</td>
<td>STRING</td>
<td>Yes</td>
<td>Cash out bank account name</td>
</tr>
<tr>
<td>recipient_phone_number</td>
<td>STRING</td>
<td>Yes</td>
<td>Recipient phone number</td>
</tr>
<tr>
<td>recipient_bank_code</td>
<td>STRING</td>
<td>No</td>
<td>Recipient bank code</td>
</tr>
<tr>
<td>external_transaction_id</td>
<td>STRING</td>
<td>No</td>
<td>A unique identifier for the sell order, should be number.</td>
</tr>
<tr>
<td>pay_with_wallet</td>
<td>STRING</td>
<td>No</td>
<td>The wallet code from which the user wishes to initiate the sell order.</td>
</tr>
<tr>
<td>sender_first_name</td>
<td>STRING</td>
<td>No</td>
<td>sender first name.</td>
</tr>
<tr>
<td>sender_middle_name</td>
<td>STRING</td>
<td>No</td>
<td>sender middle name.</td>
</tr>
<tr>
<td>sender_last_name</td>
<td>STRING</td>
<td>No</td>
<td>sender last name.</td>
</tr>
<tr>
<td>sender_address</td>
<td>STRING</td>
<td>No</td>
<td>sender address.</td>
</tr>
<tr>
<td>sender_city</td>
<td>STRING</td>
<td>No</td>
<td>sender city.</td>
</tr>
<tr>
<td>sender_province</td>
<td>STRING</td>
<td>No</td>
<td>sender province.</td>
</tr>
<tr>
<td>sender_country</td>
<td>STRING</td>
<td>No</td>
<td>sender country.</td>
</tr>
<tr>
<td>sender_postal_code</td>
<td>STRING</td>
<td>No</td>
<td>sender postal code.</td>
</tr>
<tr>
<td>sender_phone</td>
<td>STRING</td>
<td>No</td>
<td>sender phone.</td>
</tr>
<tr>
<td>sender_email</td>
<td>STRING</td>
<td>No</td>
<td>sender email.</td>
</tr>
<tr>
<td>sender_company_name</td>
<td>STRING</td>
<td>No</td>
<td>sender company name.</td>
</tr>
</tbody>
</table>
<p><strong>Request:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"base_amount"</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"external_transaction_id"</span><span class="token operator">:</span><span class="token string">"12121212212121212"</span><span class="token punctuation">,</span> <span class="token comment">// number not string</span></span>
<span class="line">  <span class="token string-property property">"currency"</span><span class="token operator">:</span><span class="token string">"PHP"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"bank_account_number"</span><span class="token operator">:</span><span class="token string">"9163011937"</span><span class="token punctuation">,</span>  <span class="token comment">// recipient phone （pesonet）or credit card numbers （instapy）</span></span>
<span class="line">  <span class="token string-property property">"bank_account_name"</span><span class="token operator">:</span><span class="token string">"Mike"</span><span class="token punctuation">,</span>  <span class="token comment">// recipient name</span></span>
<span class="line">  <span class="token string-property property">"recipient_phone_number"</span><span class="token operator">:</span><span class="token string">"9163011937"</span><span class="token punctuation">,</span> <span class="token comment">// recipient phone</span></span>
<span class="line">  <span class="token string-property property">"payment_outlet"</span><span class="token operator">:</span><span class="token string">"citi_SWIFTPAY_PESONET"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Weight:</strong> 1</p>
<p>reference: https://docs.coins.asia/reference/sellorder-create</p>
<hr>
<h4 id="retrieve-an-existing-sellorder" tabindex="-1"><a class="header-anchor" href="#retrieve-an-existing-sellorder"><span>Retrieve an existing sellorder</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET openapi/migration/v4/sellorder/<span class="token punctuation">{</span>sell_order_id<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint retrieves information about a previously executed sell order that involved a cash-out of fiat currency.
It is best to no longer use this endpoint; it is only compatible with the old endpoint.</p>
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
<td>sell_order_id</td>
<td>STRING</td>
<td>No</td>
<td>A unique identifier that is used to specify the sell order that a user wants to retrieve information about.</td>
</tr>
</tbody>
</table>
<p><strong>Weight:</strong> 1</p>
<p>reference: https://docs.coins.asia/reference/sellorder-retrieve</p>
<hr>
<h4 id="validate-field-values" tabindex="-1"><a class="header-anchor" href="#validate-field-values"><span>Validate field values</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">POST openapi/migration/v4/validate-field</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint validates field values for fiat sell order to ensure that the values provided for the different fields are valid before the actual cashout process begins.
It is best to no longer use this endpoint; it is only compatible with the old endpoint.</p>
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
<td>field_type</td>
<td>STRING</td>
<td>No</td>
<td>The type of field that needs to be validated. Accepts two valid values: &quot;account_number&quot; and &quot;mobile_number&quot;..</td>
</tr>
<tr>
<td>account_number</td>
<td>STRING</td>
<td>No</td>
<td>When the field_type parameter is set to &quot;account_number&quot;, this parameter is used to specify the account number that needs to be validated for the fiat sell order.</td>
</tr>
<tr>
<td>account_type</td>
<td>STRING</td>
<td>No</td>
<td>When the field_type parameter is set to &quot;account_number&quot;, this parameter is used to specify the payment outlet ID where the account number field value should be validated against.</td>
</tr>
<tr>
<td>mobile_number</td>
<td>STRING</td>
<td>No</td>
<td>When the field_type parameter is set to &quot;mobile_number&quot;, this parameter is used to specify the mobile number that needs to be validated for the fiat sell order. The mobile number provided must be in the correct format, following the E.164 phone number formatting, and associated with the correct user.</td>
</tr>
<tr>
<td>region</td>
<td>STRING</td>
<td>No</td>
<td>When the field_type parameter is set to &quot;mobile_number&quot;, this parameter is used to specify the region of the mobile number that needs to be validated for the fiat sell order. Valid values for the region parameter are &quot;PH&quot; and &quot;TH&quot;, which represent the regions of the Philippines and Thailand, respectively.</td>
</tr>
</tbody>
</table>
<p><strong>Weight:</strong> 1</p>
<p>reference: https://docs.coins.asia/reference/validate-field</p>
<hr>
<h4 id="retrieve-supported-payout-outlets" tabindex="-1"><a class="header-anchor" href="#retrieve-supported-payout-outlets"><span>Retrieve supported payout-outlets</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET openapi/migration/v4/payout-outlets/<span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint retrieves a list of supported payout outlets for fiat sell orders. It is designed to provide users with a comprehensive list of available payout options so they can select the one that is most convenient for them.
It is best to no longer use this endpoint; it is only compatible with the old endpoint.</p>
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
<td>id</td>
<td>STRING</td>
<td>No</td>
<td>A unique identifier for the payout outlet.</td>
</tr>
<tr>
<td>outlet_category</td>
<td>STRING</td>
<td>No</td>
<td>A payment outlet category ID that is used to filter the list of supported payout outlets.</td>
</tr>
<tr>
<td>name</td>
<td>STRING</td>
<td>No</td>
<td>A payment outlet name that is used to filter the list of supported payout outlets.</td>
</tr>
<tr>
<td>region</td>
<td>STRING</td>
<td>No</td>
<td>The name of a region that is used to filter the list of supported payout outlets.</td>
</tr>
<tr>
<td>is_enabled</td>
<td>STRING</td>
<td>No</td>
<td>A boolean value that determines whether or not to include disabled payout outlets in the results.</td>
</tr>
</tbody>
</table>
<p><strong>Weight:</strong> 1</p>
<p>reference: https://docs.coins.asia/reference/payout-outlets</p>
<hr>
<h4 id="retrieve-supported-payout-outlet-categories" tabindex="-1"><a class="header-anchor" href="#retrieve-supported-payout-outlet-categories"><span>Retrieve supported payout-outlet-categories</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET openapi/migration/v4/payout-outlet-categories/<span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint retrieves the list of payout outlet categories that are supported for fiat sell orders. Payout outlet categories are used to classify and organize the different payout outlet options that are available to users when they choose to cash out their fiat currency. This endpoint takes no parameters and returns a JSON response that includes an array of payout outlet categories.
It is best to no longer use this endpoint; it is only compatible with the old endpoint.</p>
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
<td>id</td>
<td>STRING</td>
<td>No</td>
<td>ID of a particular category to retrieve. If not provided, all categories will be retrieved.</td>
</tr>
</tbody>
</table>
<p><strong>Weight:</strong> 1</p>
<p>reference: https://docs.coins.asia/reference/payout-outlet-categories</p>
<hr>
<h4 id="retrieve-current-payout-outlet-fees" tabindex="-1"><a class="header-anchor" href="#retrieve-current-payout-outlet-fees"><span>Retrieve current payout-outlet-fees</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET openapi/migration/v4/payout-outlet-fees</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint retrieves the current payout outlet fees for the supported payout outlets for fiat sell orders. Payout outlet fees are the fees charged by the payout outlet providers for processing the cash-out transactions. This endpoint takes no parameters and returns a JSON response that includes an array of payout outlet fees.
It is best to no longer use this endpoint; it is only compatible with the old endpoint.</p>
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
<td>payment_outlet</td>
<td>STRING</td>
<td>Yes</td>
<td>query param to specify the target payout outlet.</td>
</tr>
<tr>
<td>currency</td>
<td>STRING</td>
<td>Yes</td>
<td>query param to specify the target currency.</td>
</tr>
</tbody>
</table>
<p><strong>Weight:</strong> 1</p>
<p>reference: https://docs.coins.asia/reference/payout-outlet-fees</p>
<h4 id="query-balance-user-data" tabindex="-1"><a class="header-anchor" href="#query-balance-user-data"><span>Query balance (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/account/v3/crypto-accounts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This endpoint allows users to retrieve their current account balance.</p>
<p><strong>Weight:</strong> 1
<strong>Parameters:</strong></p>
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
<td>currency</td>
<td>STRING</td>
<td>NO</td>
<td>The currency for which the balance is being queried.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>YES</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which the balance is being queried.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"crypto-accounts"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"1451431230880900352"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"currency"</span><span class="token operator">:</span> <span class="token string">"PBTC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"balance"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"pending_balance"</span><span class="token operator">:</span> <span class="token string">"200"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="query-transfers-user-data" tabindex="-1"><a class="header-anchor" href="#query-transfers-user-data"><span>Query transfers (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/transfer/v3/transfers/<span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If an ID is provided, this endpoint retrieves an existing transfer record; otherwise, it returns a paginated list of transfers.</p>
<p><strong>Weight:</strong> 10</p>
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
<td>id</td>
<td>STRING</td>
<td>NO</td>
<td>ID of the transfer record</td>
</tr>
<tr>
<td>client_transfer_id</td>
<td>STRING</td>
<td>NO</td>
<td>Client Transfer ID, Maximum length 100</td>
</tr>
<tr>
<td>page</td>
<td>INT</td>
<td>NO</td>
<td>Current page, default is <code v-pre>1</code></td>
</tr>
<tr>
<td>per_page</td>
<td>INT</td>
<td>NO</td>
<td>Quantity per page, default 2000, maximum <code v-pre>2000</code></td>
</tr>
<tr>
<td>from_address</td>
<td>STRING</td>
<td>NO</td>
<td>The phone number or email for sender account (e.g. +63 9686490252 or testsub@gmail.com)</td>
</tr>
<tr>
<td>to_address</td>
<td>STRING</td>
<td>NO</td>
<td>The phone number or email for recipient account (e.g. +63 9686490252 or testsub@gmail.com)</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>YES</td>
<td>This value cannot be greater than <code v-pre>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried.</td>
</tr>
</tbody>
</table>
<ul>
<li>If client_transfer_id both the id and  parameters are passed, the id parameter will take precedence.</li>
<li>If the client_transfer_id or id parameter is passed, then the client_transfer_id or id takes precedence.</li>
<li>The from_address and to_address parameters cannot be passed simultaneously.</li>
</ul>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"transfers"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"2309rjw0amf0sq9me0gmadsmfoa"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"client_transfer_id"</span><span class="token operator">:</span> <span class="token string">"1487573639841995270"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"account"</span><span class="token operator">:</span> <span class="token string">"90dfg03goamdf02fs"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"fee_amount"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"PBTC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"sourceAddress"</span><span class="token operator">:</span> <span class="token string">"test1@gmail.com"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"target_address"</span><span class="token operator">:</span> <span class="token string">"test2@gmail.com"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"payment"</span><span class="token operator">:</span> <span class="token string">"23094j0amd0fmag9agjgasd"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token comment">//2:transfer out,1:transfer in</span></span>
<span class="line">      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"example"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2019-07-04T03:28:50.531599Z"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"total_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"next_page"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"previous_page"</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="note" tabindex="-1"><a class="header-anchor" href="#note"><span>Note</span></a></h3>
<h3 id="request-parameters" tabindex="-1"><a class="header-anchor" href="#request-parameters"><span>Request Parameters</span></a></h3>
<ul>
<li>Email address should be encoded. e.g. test@gmail.com should be encoded into test%40gmail.com</li>
</ul>
<h4 id="query-transaction-history-user-data" tabindex="-1"><a class="header-anchor" href="#query-transaction-history-user-data"><span>Query transaction history (USER_DATA)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">GET /openapi/v1/asset/transaction/history</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Weight:</strong> 10</p>
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
<td>tokenId</td>
<td>STRING</td>
<td>YES</td>
<td>The token to retrieve data for. Example: “tokenId”: “BTC”</td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td>Timestamp in milliseconds. Timespan between startTime and endTime cannot exceed 7 days. If only startTime is provided, returns data 7 days after.</td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td>Timestamp in milliseconds. Timespan between startTime and endTime cannot exceed 7 days. If only endTime is provided, returns data 7 days before.</td>
</tr>
<tr>
<td>subUserId</td>
<td>LONG</td>
<td>NO</td>
<td>UID of sub-account.</td>
</tr>
<tr>
<td>pageNum</td>
<td>INT</td>
<td>NO</td>
<td>The current page number. Ranges from 1 - 1000, with default being 1.</td>
</tr>
<tr>
<td>pageSize</td>
<td>INT</td>
<td>NO</td>
<td>Records per page. Ranges from 1 - 100, with default being 20.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>To specify the number of milliseconds after timestamp the request is valid for. Must be less than 60000.</td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td>A point in time for which transfers are being queried. Unix timestamp format in milliseconds.</td>
</tr>
</tbody>
</table>
<p><strong>Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"transfers"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"txId"</span><span class="token operator">:</span> <span class="token string">"2309rjw0amf0sq9me0gmadsmfoa"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"bizSubject"</span><span class="token operator">:</span> <span class="token string">"CHAIN_WITHDRAWAL"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"tokenId"</span><span class="token operator">:</span> <span class="token string">"BTC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"changed"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"1742896126999"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"has_next"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"next_page"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"previous_page"</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


