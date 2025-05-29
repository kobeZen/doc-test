export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zengzhixiang/doc-test/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Rest-Api"} }],
  ["/errors.html", { loader: () => import(/* webpackChunkName: "errors.html" */"/Users/zengzhixiang/doc-test/docs/.vuepress/.temp/pages/errors.html.js"), meta: {"title":"Errors"} }],
  ["/user-data-stream.html", { loader: () => import(/* webpackChunkName: "user-data-stream.html" */"/Users/zengzhixiang/doc-test/docs/.vuepress/.temp/pages/user-data-stream.html.js"), meta: {"title":"User-Data-Stream"} }],
  ["/web-socket-streams.html", { loader: () => import(/* webpackChunkName: "web-socket-streams.html" */"/Users/zengzhixiang/doc-test/docs/.vuepress/.temp/pages/web-socket-streams.html.js"), meta: {"title":"Web-Socket-Streams"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zengzhixiang/doc-test/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
