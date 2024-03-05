# Trieve Librarian

### Better Bookmark Search

Chrome extension to search your bookmarks' content right in your browser. Private and Fast. 

➤ Scrape and subselect content <br>
➤ Store in the Trieve database <br>
➤ Semantic vector search through Trieve [https://trieve.ai/]

Stay tuned for enhancements and fixes:
- [ ] Smarter salient text subselection and scraping
- [ ] Better UI/UX

------

### Setup

1. Create a copy of `/src/authTemplate.js` and save as `/src/auth.js`
2. Fill in missing information from the Trieve dashboard
3. Run `npm install` and `npm run build` (ensure node is installed on your local machine)
    - This will generate the `build` directory, which you can load into Chrome by following the [extensions dev instructions](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).