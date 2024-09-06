# Trieve Librarian

### Better Bookmark Search

Chrome extension to search your bookmarks' content right in your browser. Private and Fast. 

➤ Scrape and subselect content <br>
➤ Store in the Trieve database <br>
➤ Semantic vector search through [Trieve](https://trieve.ai/)

Stay tuned for enhancements and fixes:
- [ ] Smarter salient text subselection and scraping
- [ ] Better UI/UX

------
## Setup Instructions
1. Clone the [Trieve librarian repository](https://github.com/vid277/trieve-librarian)
2. Create a copy of `/src/authTemplate.js` and save as `/src/auth.js`
3. Create an account on the [Trieve dashboard](https://dashboard.trieve.ai/dashboard/overview)
4. Click `Create Dataset +` and update the `Dataset Name` field
5. Copy the value of the `org id` and `dataset id` field and update `tr_organization` and `tr_dataset` accordingly on `/src/auth.js`.
7. Click `Create New API Key +` and update the `API Key Name` field.
8. Copy the API Key and update the value between `" "` under `authorization`on `/src/auth.js`
9. Run `npm install` and `npm run build` (ensure node is installed on your local machine)
> This will generate the build directory, which you can load into Chrome by following the [extensions dev instructions](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).
