# Tweetify – Tweet Link Generator

Easily generate a direct Twitter (now X) link to share a tweet from any username and tweet ID with this simple web tool. Tweetify makes it quick to create a `https://twitter.com/{username}/status/{tweet_id}` link for sharing, bookmarking, or embedding.

---

## 🌐 Demo

You can try it out locally by opening `index.html` in your browser.

_Coming soon: [Online Demo](#) – Host on GitHub Pages or Netlify!_

---

## 📁 Project Structure

```
Tweetify/
├── index.html         # Main HTML structure and UI
├── style.css          # Basic styles for layout
├── script.js          # JavaScript for generating the tweet link
├── README.md          # Project documentation
├── License.md         # License file
└── .gitignore         # Git ignored files
```

---

## 🚀 Features

- ✅ Enter a Twitter username and tweet ID to generate a tweet link.
- ✅ Click to generate the link instantly.
- ✅ Built with HTML, CSS, and JavaScript.
- ✅ Clean, responsive UI using [Pico CSS](https://picocss.com/).
- ✅ Copy-to-clipboard button for easy sharing. _(optional, see customization)_

---

## 📸 Screenshot

![Tweet Link Generator Screenshot](/img/screenshot-tweetify.png) <!-- Replace with actual screenshot if available -->

---

## 🔧 Usage

1. Open the `index.html` file in your browser.
2. Enter a valid Twitter username and tweet ID.
3. Click "Generate Tweet Link".
4. Your tweet link will appear below the button.

Example output:

```
https://twitter.com/elonmusk/status/1234567890123456
```

You can copy and share this link anywhere.

---

## 🛠 Tech Stack

- HTML5
- Vanilla JavaScript
- Pico CSS (CDN)

---

## 📦 Installation (for Developers)

Clone this repo locally:

```bash
git clone https://github.com/shivankushsingh09/Tweetify.git
cd Tweetify
```

Then open `index.html` in your browser.

> Note: No build tools or dependencies required.

---

## 📌 Customization

Want more features?

- **Copy-to-clipboard:** Add a button in `index.html` and update `script.js` to copy the generated link.
- **Validation:** Enhance form validation for user input.
- **Online Hosting:** Deploy on GitHub Pages, Netlify, Vercel, etc.

Example function for generating the tweet link in `script.js`:

```js
function getTweetUrl(username, tweetId) {
  return `https://twitter.com/${username}/status/${tweetId}`;
}
```

---

## 🧾 License

This project is licensed under the terms described in `License.md`.

---

## 🙌 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your branch (`git checkout -b feature/something`)
3. Commit your changes (`git commit -am 'Add something'`)
4. Push to the branch (`git push origin feature/something`)
5. Create a new Pull Request

---

## 📬 Contact

For any questions or suggestions, feel free to reach out via [GitHub Issues](https://github.com/shivankushsingh09/Tweetify/issues).

---

Enjoy using **Tweetify** – Tweet Link Generator!

---

Let me know if you want this version to include:

- Copy-to-clipboard button,
- Hosting options (GitHub Pages, Netlify),
- Advanced input validation,
- Or anything else!
