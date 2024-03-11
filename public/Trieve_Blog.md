# Searching bookmarks made easy. 

Everyone has a couple websites that they visit nearly every single day. From the obvious ones such as email, instagram, or youtube, your most common websites may be anything from CNN daily news to a very specific blog post. 

Imagine these being just a click away. Companies thought ahead, introducing the bookmarks along with a bookmarks bar. In your web browser, the bookmark bar sits atop your browser window, containing links to your favorite websites. 

However, this can quickly become overwhelming to navigate as your bookmarks bar becomes clouded with folders inside other folders. While existing methods allow for searching by bookmark name, they fall short when it comes to searching for content within individual bookmarks.

This gap in functionality inspired the creation of the Trieve librarian.

<center>
    <img src="https://hackmd.io/_uploads/rk0Jip2aT.png" alt="drawing" width="400"/>
</center>



## How does the Trieve librarian work?
The Trieve librarian is a chrome extension that can scrape websites,  subselect relevant content and text, and search and index new bookmarks regularly. It then uses the production-ready data infrastructure to store the bookmark names, page content, and other relevant data. From the UI, the user can query information using the Trieve retrieval infrastructure, with links to the bookmark and the text relevant to your query being displayed directly on the extension's UI.  

## Development Process
We utilized [**oto-lab's librarian**](https://github.com/oto-labs/librarian) as a framework for this extension. We then replaced the local vector database storage and retrieval with the Trieve infrastructure. Significant improvement was made to the method through which the content was subselected by parsing out HTML. Bookmark indexing times were also improved considerably. We also updated the UI to display relevant portions of the text from the corresponding website.  

## Installation Instructions
1. Clone the [Trieve librarian repository](https://github.com/vid277/trieve-librarian)
2. Create a copy of `/src/authTemplate.js` and save as `/src/auth.js`
3. Create an account on the [Trieve dashboard](https://dashboard.trieve.ai/dashboard/overview)
4. Click `Create Dataset +` and update the `Dataset Name` field
5. Copy the value of the `org id` and `dataset id` field and update `tr_organization` and `tr_dataset` accordingly on `/src/auth.js`.
7. Click `Create New API Key +` and update the `API Key Name` field.
8. Copy the API Key and update the value between `" "` under `authorization`on `/src/auth.js`
9. Run `npm install` and `npm run build` (ensure node is installed on your local machine)
> This will generate the build directory, which you can load into Chrome by following the [extensions dev instructions](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).

## Enhancements and fixes
- Implement smarter salient text subselection and scraping.
- Improve UI/UX design on the relevant text displayed under returned content from a user query.





