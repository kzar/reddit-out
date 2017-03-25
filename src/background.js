chrome.webRequest.onBeforeRequest.addListener(details =>
{
  let url = new URL(details.url);

  if (url && url.searchParams.has("url"))
    return {redirectUrl: url.searchParams.get("url")};
}, {urls: ["*://out.reddit.com/*"]}, ["blocking"]);
