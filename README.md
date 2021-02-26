# Installation and running
1. From project root, run `docker-compose up` - this will start postgres and adminer client
2. In separate terminal, also from project root, run `yarn install` to install dependencies
   
    > Note: just realized after a fresh clone and installing dependencies, an error is logged regarding a rollup config. I think this is related to the autorest tool I'm using to generate the API client. I'm not sure what's causing it, but it doesn't appear to break the app (i.e. running `yarn start:all` afterwards works as normal.)
3. After installation, run `yarn start:all` - this will run the api and web projects
