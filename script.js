function getTweetUrl(message) {
  const encodedTweet = encodeURIComponent(message);
  return "https://twitter.com/intent/tweet?text=" + encodedTweet;
}

function handleGenerateClick() {
  const tweetMessage = inputElement.value;
  const tweetUrl = getTweetUrl(tweetMessage);
  appElement.innerHTML = tweetUrl;
}

const inputElement = document.getElementById("tweetInput");
const buttonElement = document.getElementById("generateBtn");
const appElement = document.getElementById("app");

buttonElement.addEventListener("click", handleGenerateClick);
