# DACT frontend

Repository holding the different frontends that make up the DACT app. The code is split into three packages:

- **core**: which holds the share funcionality between the frontends
- **admin**: the panel for Dact's internal administration
- **market**: the panel for business owners

## Installation

The frontends are being developed with node 14.5.0 and npm 6.14.5. Installation and build is likely to work with older versions but it has not being tested.

Because of the project dependencies, for a clean project you need to follow these steps:

1. Run `npm install` in the **core** folder
2. Run `npm run build` in the **core** folder
3. Run `npm install` in the **root** directory and the **admin** and **market** folders

Once those steps are done, you should be able to do `npm start` from the root directory to open up the frontends as explained in the next section.

## Usage

Once installation is done, there are a number of scripts in the root package json to make life a little easier:

- `npm start`: which will open all the frontends in development mode
- `npm run start:admin`: which will start the admin panel in development mode at [localhost:4000](localhost:4000)
- `npm run start:market`: which will start the market panel in development mode at [localhost:3000](localhost:4000)
- `npm run build`: which will build all the packages for deployment
- `npm run prettier`: which will execute prettier and styled your code uniformly.
<!-- Once we add tests: * `npm run test` -->

There are other minor scripts and utilities that you can find in the corresponding package.json.

## Other

The project is based on the [Matx template](https://matx-react.ui-lib.com/). You can find the original template at the `template-original` branch and another version of the template with all the depencies updated at `template-updated`
