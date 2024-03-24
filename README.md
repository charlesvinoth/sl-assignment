# Smartlead Frontend Tech Test Report

## Overview

This report outlines the solution to the Smartlead Frontend Tech Test, detailing the implementation process, technologies used, folder structure, and specific features developed.

## Project Structure

The project adheres to a well-organized structure for maintainability:

- **assets**: Stores static images.
- **components**: Reusable UI components.
- **pages**: Route-specific view components.
- **plugins**: Houses reusable plugins like the Vex modal library.
- **routes**: Configuration for Vue Router.
- **store**: Global state management with Vuex.
- **styles**: Base styles and component-specific SCSS files.

## Users

- jerome.carlson@example.com/smart@123
- charles.vinoth@example.com/smart@123
- dinesh.madanlal@example.com/smart@123

## Login Page

- Developed the login page according to the provided Figma design.
- Implemented show/hide password toggle.
- Enabled login button after both email and password fields are filled.
- Created an auth store using Vuex containing login and logout functions.
- Validated user credentials against a hardcoded user list.
- Displayed an error message on failed login attempts.
- Upon successful login, redirected to the dashboard page.
- Stored user details in localStorage to maintain session until logout.
- Cleared auth store and localStorage on logout.

## Main Layout

- Designed a main layout with toolbar and drawer components.
- Drawer contains 3 routes and 2 links.
- Implemented highlighting for the active route.
- Protected routes using a route guard.
- Implemented a dropdown for the user avatar on hover or click.
- Displayed the logged-in user's name and email in the dropdown.
- Added a logout button in the dropdown.
- Cleared auth store and localStorage on logout.

## All Leads & Master Inbox Page

- Implemented an empty state for both pages.

## Email Campaigns Page

- Developed the email campaigns page based on the provided Figma design.
- Added functionality to filter campaigns using the search input.
- Displayed "Vex" dialogs on clicking "add campaign", "edit", "pause" and "more" buttons.
- Populated campaign lists using mock data.

## Conclusion

The solution addresses all the tasks outlined in the assignment. It demonstrates proficiency in Vue 3, Vue Router, Vuex, and proper integration of third-party libraries. The code structure is organized and readable, with attention to detail in styling and layout.

---

## Project setup

```
npm install
```

### Lints, compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
