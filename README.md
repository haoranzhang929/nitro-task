# Description

- This project is coded using `Typescript`.
- Frontend side of the app is using `React`

  - All reusable UI components and UI tests for each component are inside `client/src/components` directory.

  - `client/src/common` directory is created for all reusable `enums`, `constants` and `interfaces` (the idea was to put them in the root directory, but unfortunately, the access for react app from outside `client/src` directory is forbidden for `create-react-app` unless using `eject` operation)
  - `client/src/service` are created to store reusable service function (fetch request in this case)
  - `client/src/utils` are created to store reusable utils function (sort data & group data in this case)
  - Style of the app is a combination of the default style of Material UI and customise CSS using `makeStyles` Hook API (in each component)

- Backend side of the app is using `Express.js`

  - backend server runs on http://localhost:8000
  - `/api/posts` is the endpoint created to serve example json file, 200 milliseconds delay are set to simulate real-life scenario

- Both frontend and backend code are checked by `eslint`, `prettier`, `typescript` and `UI tests` before running or building

### Technologies used:

#### Frontend

- React
- Material UI

#### Backend

- Express.js

#### Other Technologies

- Eslint
- Prettier
- @testing-library/react

# Setup

\*Please switch to **node v14.15.1 or later** and **npm v6.11.3 or later** before runnig following command.

To Install required npm deps for the app to run

```
npm run iall
```

### Run both forntend and backend app

```bash
npm run dev
```

## UI tests

```bash
npm test
```
