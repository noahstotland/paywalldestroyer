# Paywall Destroyer
A super simple chrome extension for bypassing article paywalls

### How to use
1. Click extension icon
2. Click either of the "Destroy Paywall" buttons
- Destroy paywall (full article) displays the entirety of the article body including images and paragraph breaks
- Destroy paywall (text only) displays only the text of the page

- If nothing happens when you click either button, reload the page and try again only once the page has fully completed loading

#### Note:
This extension was made in one afternoon. For a much more comprehensive paywall bypassing tool that works as sharply as Warren Buffet's epic brain, check out [Bypass Paywalls Chrome](https://github.com/iamadamdev/bypass-paywalls-chrome)



### Installation Instructions
**Google Chrome**
1. Download this repo as a ZIP file from Github (click the "clone or download" button and download as zip)
1. Unzip the file and you should have a folder named `paywalldestroyer`.
1. In Chrome go to the extensions page (`chrome://extensions`).
1. Enable Developer Mode.
1. Drag the `paywalldestroyer` folder anywhere on the page to import it (do not delete the folder afterwards), or click "Load Unpacked", and upload the unzipped extension folder.

### Extension Info
This extension works by exploiting a common security vulnerability that occurs when the content of a webpage is loaded before the webpage decides to introduce a paywall. In these scenarios, all of the article's content is actually loaded into the browser, but it is hidden from view on the page.

This extension simply finds the hidden content (located within the "body" html tag), and displays it within the extension popup.

### Bypass the following sites' paywalls with this extension:
[Business Insider](https://www.businessinsider.com)\
[Forbes](https://www.forbes.com)\
[The Atlantic](https://www.theatlantic.com)\
[The New York Times](https://www.nytimes.com)\
Many more sites

Email me at ultrascissor@gmail.com, or submit a pull request if you want to add to the above list or modify the extension.

