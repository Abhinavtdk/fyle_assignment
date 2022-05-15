
# Fyle Assignment : Github Repositories List

This is a web app designed as an assignment for the frontend internship role at Fyle.

Netlify link: https://relaxed-cuchufli-0520b4.netlify.app/


## Working

* On the home page of the app, a user can enter any Github username. 
* If the username is valid, the user is redirected to a new page which has the user details like bio, location and followers. It also has a list of repositories of the user. If the username is not valid, an error toast is displayed.
* On the details page, pagination has been implemented. By default, you can have 6 repositories in 1 page but this can be changed upto 10 with a selector available at the bottom of the page. Pages can be traversed with the help of pagination available at the bottom of the page.

## Other Information

* The website is mobile responsive
* You can enter the url of the app and add any github username to it, it automatically displays the details without having to go through the home page. (Eg : https://relaxed-cuchufli-0520b4.netlify.app/Abhinavtdk will take you to the details page of username 'Abhinavtdk')
* In the above case, if the username is not present, the app redirects to the home page.
* Edge cases for the change in number of repositories have also been handled. (Eg: Let's suppose the user has 25 repositories and has 6 repos per page in this website and he is currently at 5th page. Now if repos per page is changed to 10, there would be no 5th page in this case, the website automatically changes to the 3rd page)

## Technologies Used

* React + NextJs + TypeScript
* MUI
* Libraries: Axios, React Toastify

## To Run Locally
### 1. Clone the repository
```sh
$ git clone https://github.com/Abhinavtdk/fyle_assignmentt.git
```

### 2.In the main directory, Install Dependencies
```sh
$ npm install 
```

### 3. Run locally
```sh
$ npm run dev 
```
