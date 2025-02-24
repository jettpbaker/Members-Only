# TODO - Private Club App

## Database Setup

- [X] Design database models: Users (fullname, username/email, password, membership-status, admin), Messages (title, timestamp, text, userId)
- [X] Set up PostgreSQL database
- [X] Generate project skeleton with models

## User Authentication

- [X] Create sign-up form (fullname, username/email, password, confirmPassword)
  - [X] Sanitize and validate form fields
  - [X] Secure passwords with bcrypt
- [ ] Create "Join the Club" page with secret passcode
  - [ ] Update user's membership status upon correct passcode entry
- [ ] Create login form using Passport.js

## Message Creation and Display

- [ ] Add "Create a new message" link (visible only when logged in)
- [ ] Create new-message form (title, text)
- [ ] Display all messages on the home page
  - [ ] Hide author and date for non-members
  - [ ] Show author and date for members

## Admin Functionality

- [ ] Add "admin" field to User model
- [ ] Implement message deletion functionality
  - [ ] Show delete button only to admins
  - [ ] Allow admins to delete messages
- [ ] Add a way to mark a user as admin (passcode page or checkbox on signup)
