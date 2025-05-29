<template><div><h1 id="error-codes-for-coins-2024-04-30" tabindex="-1"><a class="header-anchor" href="#error-codes-for-coins-2024-04-30"><span>Error codes for Coins (2024-04-30)</span></a></h1>
<p>Errors consist of two parts: an error code and a message. Codes are universal,
but messages can vary. Here is the error JSON payload:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"code"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"msg"</span><span class="token operator">:</span> <span class="token string">"An unknown error occurred while processing the request."</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10xx-general-server-or-network-issues" tabindex="-1"><a class="header-anchor" href="#_10xx-general-server-or-network-issues"><span>10xx - General Server or Network issues</span></a></h2>
<h3 id="_1000-unknown-error" tabindex="-1"><a class="header-anchor" href="#_1000-unknown-error"><span>-1000 UNKNOWN_ERROR</span></a></h3>
<ul>
<li>An unknown error occurred while processing the request.</li>
</ul>
<h3 id="_1001-disconnected" tabindex="-1"><a class="header-anchor" href="#_1001-disconnected"><span>-1001 DISCONNECTED</span></a></h3>
<ul>
<li>Internal error.</li>
</ul>
<h3 id="_1002-unauthorized" tabindex="-1"><a class="header-anchor" href="#_1002-unauthorized"><span>-1002 UNAUTHORIZED</span></a></h3>
<ul>
<li>You are not authorized to execute this request</li>
<li>How to resolve: Put X-COINS-APIKEY in http header, refer to api doc &quot;Endpoint Security Type&quot; part.</li>
</ul>
<h3 id="_1003-too-many-requests" tabindex="-1"><a class="header-anchor" href="#_1003-too-many-requests"><span>-1003 TOO_MANY_REQUESTS</span></a></h3>
<ul>
<li>Too many requests, current limit is %s requests per %s.</li>
<li>How to resolve: Your request is breaking our rate limit, if you need higher rate limit, please contact us.</li>
</ul>
<h3 id="_1010-bad-request" tabindex="-1"><a class="header-anchor" href="#_1010-bad-request"><span>-1010 BAD_REQUEST</span></a></h3>
<ul>
<li>Bad request</li>
</ul>
<h3 id="_1015-too-many-orders" tabindex="-1"><a class="header-anchor" href="#_1015-too-many-orders"><span>-1015 TOO_MANY_ORDERS</span></a></h3>
<ul>
<li>Too many new orders; current limit is %s orders per %s.</li>
</ul>
<h3 id="_1020-unsupported-operation" tabindex="-1"><a class="header-anchor" href="#_1020-unsupported-operation"><span>-1020 UNSUPPORTED_OPERATION</span></a></h3>
<ul>
<li>This operation is not supported.</li>
<li>How to resolve: Please create and use functional API key instead of using read-only API key.</li>
</ul>
<h3 id="_1021-timestamp-out-of-window" tabindex="-1"><a class="header-anchor" href="#_1021-timestamp-out-of-window"><span>-1021 TIMESTAMP_OUT_OF_WINDOW</span></a></h3>
<ul>
<li>Timestamp for this request is outside of the recv window.</li>
<li>How to resolve: The request is valid if server timestamp &lt;= (recvWindow + timestamp), refer to API doc &quot;Timing Security&quot; part.</li>
</ul>
<h3 id="_1022-invalid-signature" tabindex="-1"><a class="header-anchor" href="#_1022-invalid-signature"><span>-1022 INVALID_SIGNATURE</span></a></h3>
<ul>
<li>Signature for this request is not valid.</li>
<li>How to resolve: Your signature is not valid, refer to API doc &quot;SIGNED Endpoint Examples for POST /openapi/v1/order&quot; part.</li>
</ul>
<h3 id="_1023-bind-ip-white-list-first" tabindex="-1"><a class="header-anchor" href="#_1023-bind-ip-white-list-first"><span>-1023 BIND_IP_WHITE_LIST_FIRST</span></a></h3>
<ul>
<li>set ip white_list before use</li>
<li>How to resolve: You need to set up IP white list for your api key.</li>
</ul>
<h3 id="_1024-miss-header-error" tabindex="-1"><a class="header-anchor" href="#_1024-miss-header-error"><span>-1024 MISS_HEADER_ERROR</span></a></h3>
<ul>
<li>Header '%s' is required.</li>
<li>How to resolve: Missing parameter in http header.</li>
</ul>
<h3 id="_1025-invalid-parameter" tabindex="-1"><a class="header-anchor" href="#_1025-invalid-parameter"><span>-1025 INVALID_PARAMETER</span></a></h3>
<ul>
<li>Parameter '%s' is not valid.</li>
<li>How to resolve: The parameter passed is not valid.</li>
</ul>
<h3 id="_1026-create-listen-key-rate-limit" tabindex="-1"><a class="header-anchor" href="#_1026-create-listen-key-rate-limit"><span>-1026 CREATE_LISTEN_KEY_RATE_LIMIT</span></a></h3>
<ul>
<li>Create listenKey rate limited(%s per hour), please try again next hour</li>
<li>How to resolve: Create listenKey request is breaking our rate limit.</li>
</ul>
<h3 id="_1027-invalid-org-id" tabindex="-1"><a class="header-anchor" href="#_1027-invalid-org-id"><span>-1027 INVALID_ORG_ID</span></a></h3>
<ul>
<li>This api only support for coins.ph.</li>
<li>How to resolve: This api is not supported in coins.xyz.</li>
</ul>
<h2 id="_11xx-request-issues" tabindex="-1"><a class="header-anchor" href="#_11xx-request-issues"><span>11xx - Request issues</span></a></h2>
<h3 id="_1103-unknown-param" tabindex="-1"><a class="header-anchor" href="#_1103-unknown-param"><span>-1103 UNKNOWN_PARAM</span></a></h3>
<ul>
<li>Required param not found, please ensure the parameters being sent correctly, more information please refer to the openapi documentation 'SIGNED Endpoint Examples' section.</li>
</ul>
<h3 id="_1105-miss-parameter" tabindex="-1"><a class="header-anchor" href="#_1105-miss-parameter"><span>-1105 MISS_PARAMETER</span></a></h3>
<ul>
<li>Parameter '%s' is required.</li>
</ul>
<h3 id="_1106-parameter-not-required" tabindex="-1"><a class="header-anchor" href="#_1106-parameter-not-required"><span>-1106 PARAMETER_NOT_REQUIRED</span></a></h3>
<ul>
<li>Parameter '%s' sent when not required</li>
</ul>
<h3 id="_1107-conflict-parameter-error" tabindex="-1"><a class="header-anchor" href="#_1107-conflict-parameter-error"><span>-1107 CONFLICT_PARAMETER_ERROR</span></a></h3>
<ul>
<li>Parameter '%s' should not be both set.</li>
</ul>
<h3 id="_1108-order-cancel-replace-parameter-error" tabindex="-1"><a class="header-anchor" href="#_1108-order-cancel-replace-parameter-error"><span>-1108 ORDER_CANCEL_REPLACE_PARAMETER_ERROR</span></a></h3>
<ul>
<li>Either the cancelOrigClientOrderId or cancelOrderId must be provided</li>
</ul>
<h3 id="_1125-listen-key-expired" tabindex="-1"><a class="header-anchor" href="#_1125-listen-key-expired"><span>-1125 LISTEN_KEY_EXPIRED</span></a></h3>
<ul>
<li>This listenKey does not exist</li>
</ul>
<h3 id="_1126-create-listen-key-failed" tabindex="-1"><a class="header-anchor" href="#_1126-create-listen-key-failed"><span>-1126 CREATE_LISTEN_KEY_FAILED</span></a></h3>
<ul>
<li>Create listenKey failed, please try again later</li>
</ul>
<h3 id="_1131-insufficient-balance" tabindex="-1"><a class="header-anchor" href="#_1131-insufficient-balance"><span>-1131 INSUFFICIENT_BALANCE</span></a></h3>
<ul>
<li>Balance insufficient</li>
</ul>
<h3 id="_1132-order-cancel-replace-failed" tabindex="-1"><a class="header-anchor" href="#_1132-order-cancel-replace-failed"><span>-1132 ORDER_CANCEL_REPLACE_FAILED</span></a></h3>
<ul>
<li>Order cancel-replace failed.</li>
</ul>
<h3 id="_1133-order-cancel-replace-partially-failed" tabindex="-1"><a class="header-anchor" href="#_1133-order-cancel-replace-partially-failed"><span>-1133 ORDER_CANCEL_REPLACE_PARTIALLY_FAILED</span></a></h3>
<ul>
<li>Order cancel-replace partially failed.</li>
</ul>
<h3 id="_1150-merchant-authentication-fail" tabindex="-1"><a class="header-anchor" href="#_1150-merchant-authentication-fail"><span>-1150 MERCHANT_AUTHENTICATION_FAIL</span></a></h3>
<ul>
<li>merchant authentication failed.</li>
</ul>
<h3 id="_1151-user-not-found" tabindex="-1"><a class="header-anchor" href="#_1151-user-not-found"><span>-1151 USER_NOT_FOUND</span></a></h3>
<ul>
<li>merchant user not found</li>
</ul>
<h3 id="_1152-no-permission" tabindex="-1"><a class="header-anchor" href="#_1152-no-permission"><span>-1152 NO_PERMISSION</span></a></h3>
<ul>
<li>Unauthorized to operate this API.</li>
</ul>
<h3 id="_2010-new-order-rejected" tabindex="-1"><a class="header-anchor" href="#_2010-new-order-rejected"><span>-2010 NEW_ORDER_REJECTED</span></a></h3>
<ul>
<li>New order rejected.</li>
</ul>
<h3 id="_2011-cancel-rejected" tabindex="-1"><a class="header-anchor" href="#_2011-cancel-rejected"><span>-2011 CANCEL_REJECTED</span></a></h3>
<ul>
<li>CANCEL_REJECTED</li>
</ul>
<h3 id="_2013-no-such-order" tabindex="-1"><a class="header-anchor" href="#_2013-no-such-order"><span>-2013 NO_SUCH_ORDER</span></a></h3>
<ul>
<li>Order does not exist.</li>
</ul>
<h3 id="_2015-api-key-not-enable" tabindex="-1"><a class="header-anchor" href="#_2015-api-key-not-enable"><span>-2015 API_KEY_NOT_ENABLE</span></a></h3>
<ul>
<li>API-key is not enabled.</li>
<li>How to resolve: Cannot find the api key or the api key is not enabled.</li>
</ul>
<h3 id="_2017-ip-not-in-whitelist" tabindex="-1"><a class="header-anchor" href="#_2017-ip-not-in-whitelist"><span>-2017 IP_NOT_IN_WHITELIST</span></a></h3>
<ul>
<li>Request ip is not in the whitelist</li>
<li>How to resolve: The request IP is not in the IP white list of your api key, please update your api key. You can get your current IP by endpoint openapi/v1/user/ip.</li>
</ul>
<h3 id="_2018-api-key-not-exist" tabindex="-1"><a class="header-anchor" href="#_2018-api-key-not-exist"><span>-2018 API_KEY_NOT_EXIST</span></a></h3>
<ul>
<li>API-key does not exist.</li>
<li>How to resolve: Cannot find the api key.</li>
</ul>
<h3 id="_2019-api-key-type-wrong" tabindex="-1"><a class="header-anchor" href="#_2019-api-key-type-wrong"><span>-2019 API_KEY_TYPE_WRONG</span></a></h3>
<ul>
<li>API-key type is wrong.</li>
</ul>
<h2 id="messages-for-1010-bad-request-2010-new-order-rejected-and-2011-cancel-rejected" tabindex="-1"><a class="header-anchor" href="#messages-for-1010-bad-request-2010-new-order-rejected-and-2011-cancel-rejected"><span>Messages for -1010 BAD_REQUEST, -2010 NEW_ORDER_REJECTED and -2011 CANCEL_REJECTED</span></a></h2>
<p>This code is sent when an error has been returned by the matching engine.
The following messages which will indicate the specific error:</p>
<table>
<thead>
<tr>
<th>Error message</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>&quot;Unknown order sent.&quot;</td>
<td>The order (by either <code v-pre>orderId</code>, <code v-pre>clOrdId</code>, <code v-pre>origClOrdId</code>) could not be found</td>
</tr>
<tr>
<td>&quot;Duplicate order sent.&quot;</td>
<td>The <code v-pre>clOrdId</code> is already in use</td>
</tr>
<tr>
<td>&quot;Market is closed.&quot;</td>
<td>The symbol is not trading</td>
</tr>
<tr>
<td>&quot;Account has insufficient balance for requested action.&quot;</td>
<td>Not enough funds to complete the action</td>
</tr>
<tr>
<td>&quot;Market orders are not supported for this symbol.&quot;</td>
<td><code v-pre>MARKET</code> is not enabled on the symbol</td>
</tr>
<tr>
<td>&quot;Iceberg orders are not supported for this symbol.&quot;</td>
<td><code v-pre>icebergQty</code> is not enabled on the symbol</td>
</tr>
<tr>
<td>&quot;Stop loss orders are not supported for this symbol.&quot;</td>
<td><code v-pre>STOP_LOSS</code> is not enabled on the symbol</td>
</tr>
<tr>
<td>&quot;Stop loss limit orders are not supported for this symbol.&quot;</td>
<td><code v-pre>STOP_LOSS_LIMIT</code> is not enabled on the symbol</td>
</tr>
<tr>
<td>&quot;Take profit orders are not supported for this symbol.&quot;</td>
<td><code v-pre>TAKE_PROFIT</code> is not enabled on the symbol</td>
</tr>
<tr>
<td>&quot;Take profit limit orders are not supported for this symbol.&quot;</td>
<td><code v-pre>TAKE_PROFIT_LIMIT</code> is not enabled on the symbol</td>
</tr>
<tr>
<td>&quot;Price* QTY is zero or less.&quot;</td>
<td><code v-pre>price</code>* <code v-pre>quantity</code> is too low</td>
</tr>
<tr>
<td>&quot;IcebergQty exceeds QTY.&quot;</td>
<td><code v-pre>icebergQty</code> must be less than the order quantity</td>
</tr>
<tr>
<td>&quot;This action disabled is on this account.&quot;</td>
<td>Contact customer support; some actions have been disabled on the account.</td>
</tr>
<tr>
<td>&quot;Unsupported order combination&quot;</td>
<td>The <code v-pre>orderType</code>, <code v-pre>timeInForce</code>, <code v-pre>stopPrice</code>, and/or <code v-pre>icebergQty</code> combination isn't allowed.</td>
</tr>
<tr>
<td>&quot;Order would trigger immediately.&quot;</td>
<td>The order's stop price is not valid when compared to the last traded price.</td>
</tr>
<tr>
<td>&quot;Cancel order is invalid. Check origClOrdId and orderId.&quot;</td>
<td>No <code v-pre>origClOrdId</code> or <code v-pre>orderId</code> was sent in.</td>
</tr>
<tr>
<td>&quot;Order would immediately match and take.&quot;</td>
<td><code v-pre>LIMIT_MAKER</code> order type would immediately match and trade, and not be a pure maker order.</td>
</tr>
</tbody>
</table>
<h2 id="_9xxx-filter-failures" tabindex="-1"><a class="header-anchor" href="#_9xxx-filter-failures"><span>-9xxx Filter failures</span></a></h2>
<table>
<thead>
<tr>
<th>Error message</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>&quot;Filter failure: PRICE_FILTER&quot;</td>
<td><code v-pre>price</code> is too high, too low, and/or not following the tick size rule for the symbol.</td>
</tr>
<tr>
<td>&quot;Filter failure: LOT_SIZE&quot;</td>
<td><code v-pre>quantity</code> is too high, too low, and/or not following the step size rule for the symbol.</td>
</tr>
<tr>
<td>&quot;Filter failure: MIN_NOTIONAL&quot;</td>
<td><code v-pre>price</code>* <code v-pre>quantity</code> is too low to be a valid order for the symbol.</td>
</tr>
<tr>
<td>&quot;Filter failure: MAX_NUM_ORDERS&quot;</td>
<td>Account has too many open orders on the symbol.</td>
</tr>
<tr>
<td>&quot;Filter failure: MAX_ALGO_ORDERS&quot;</td>
<td>Account has too many open stop loss and/or take profit orders on the symbol.</td>
</tr>
<tr>
<td>&quot;Filter failure: BROKER_MAX_NUM_ORDERS&quot;</td>
<td>Account has too many open orders on the broker.</td>
</tr>
<tr>
<td>&quot;Filter failure: BROKER_MAX_ALGO_ORDERS&quot;</td>
<td>Account has too many open stop loss and/or take profit orders on the broker.</td>
</tr>
<tr>
<td>&quot;Filter failure: ICEBERG_PARTS&quot;</td>
<td>Iceberg order would break into too many parts; icebergQty is too small.</td>
</tr>
</tbody>
</table>
</div></template>


