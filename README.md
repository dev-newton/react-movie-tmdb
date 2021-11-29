## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You need to create an API KEY in [The Movie Database API](https://www.themoviedb.org/documentation/api). 
Create a `.env` file in the root of the project after following the installation instructions below, but just before running `yarn start`, and paste the code below in the `.env` file. NB: Don't forget to replace the value of REACT_APP_API_KEY with your own API key. After pasting the code in your env file, save the file and run `yarn start` still in your project root directory.

```
NODE_PATH=src/
# Configuration for TMDB
REACT_APP_API_KEY=yourapikeyhere
REACT_APP_API_URL=https://api.themoviedb.org/3/

# Images
# An image URL looks like this example:
# http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg
REACT_APP_IMAGE_BASE_URL=http://image.tmdb.org/t/p/

# sizes: w92, w154, w185, w342, w500, w780, original
REACT_APP_POSTER_SIZE=w185
```

### Installation Instructions

Clone the Repository with `git clone https://github.com/dev-newton/react-movie-tmdb.git` and run

```
yarn
yarn start
```

### Testing
Ensure you are in the root of the project and run

```
yarn run test
```

## Built With

- [React JS](https://reactjs.org/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)


