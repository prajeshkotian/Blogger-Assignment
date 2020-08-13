This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This is a simple Blog project which makes use of react,redux and router.

The main page is available at url:"http://localhost:3000/" ---> this acts as the default url or home page.

The home page consists of a Search Bar where you can search for Posts by title and Body(Message) and on hitting search button it displays all relevant posts to the search field.


The Navigation Bar contains two buttons :
1.New post
2.Published

New Post--> redirects to url "/New-Post" which renders a form where you can publish new posts.(FYI all data is stored in redux store so refreshing page will end in lose of data)
Validation is also performed to make sure no empty Posts can be Published.

Published--> redirects to url "/Posts" which renders all available posts stored in redux store.

Please let me know any changes needs to be made at my end. Will be happy to get it done:)


