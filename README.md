# BetterHealth - Weight Tracking App

This is the only weight tracking app you'll ever need!

## Important Links

- [Deployed API Server](https://dry-river-25692.herokuapp.com/)
- [Deployed Frontend](https://betterhealth.netlify.app)
- [Trello Board](https://trello.com/invite/b/MXkEbiwf/33f70fb3b17173fc754dc0eb41602455/kanban-template)
- [ERD](https://miro.com/app/board/uXjVPcx_GAA=/?share_link_id=759371293763)
- [Wireframes](https://drive.google.com/drive/folders/1RfoaPdJxZwxDKBvMiSYGgDHfKqMjHi-W?usp=sharing)

## BetterHealth
BetterHealth is an app that allows a user to keep track of how many calories they eat, as well as log their meals and track their weight! All in one place.

## Local Setup

If you'd like to run my project locally, please read the following steps:

1. Fork and clone this repository.

### Backend Setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your back-end

- `cd back-end`
- `touch .env`

**.env**

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=food_log
```

- `npm install` - install npm packages listed in `package.json`
- `npm run db:init` - initialize a new database and create tables
- `npm run db:seed` - seed the table(s) with some data
- `nodemon` - confirm that this is running on port 3333
- Visit http://localhost:3333/myfoods and make sure you see some food data in the form of an array of objects

### Frontend Setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your front-end

- `cd front-end`
- `touch .env`

**.env**

```
REACT_APP_API_URL=http://localhost:3333
```

- `npm install` - install npm packages listed in `package.json`
- `npm start` - make sure your React app can start

## Inspiration
The inspiration for BetterHealth came because I wanted to keep track of my weight, the foods I would have eaten, and the number of calories I would have consumed throughout the day. Being able to track my foods, weight, and calories all on BetterHealth makes it much easier for me to stay organized. By knowing the foods I eat and how many calories I consume, I'm more likely to reach my fitness goals!




