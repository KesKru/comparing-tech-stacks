# Application specification

## Functional spec:

### Description

A simple Twitter-like application, to test out the implementation of common tasks in various technology stacks.

In the app Users can:

- Register and create a profile page
- Login and get a personal experience
- Edit the profile page
- Post and edit posts
- Comment and edit comments on posts
- Follow others other users

## design spec:

App will have the following pages:

- Landing
- Login/Register
- User home
- User profile

## technical spec:

### Templating

Depends on the stack.

### Styling

Custom Bootstrap for styling

### Database and data models

Database depends on the stack. Regardles of the database used it will have folowing data models:

**User**

```js
{
  _id: /* db-generated */,
  name: String,
  email: String,
  followers:[/* array of Fallower database-IDs */],
  following:[/* array of acounts you fallow database-IDs */]
}
```

**Post**

```js
{
  _id: /*Posts db-generated */,
  userId: /* Post authors database-ID */,
  title: String,
  body: String,
  commenters: [/* array of acounts who commented database-IDs */],
  comments: [/* array Posts comments database-IDs */]
}
```

**Comment**

```js
{
  _id: /*Comments database-ID */,
  userId: /* Comment authors database-ID */,
  userName: String,
  body: String
}
```

### API endpoints and their response examples

### Users:

<!-- Users -->

**GET | .../api/user/:id**

```js
// Get a user profile by id
{
  "_id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz"
}
```

**POST | .../api/user**

```js
// Create user
{
  "_id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz"
}
```

**PUT | .../api/user/:id**

```js
// Update user
{
  "_id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz"
}
```

**DELETE | .../api/user/:id**

```js
// Delete user
{
  "_id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz"
}
```

### Posts:

<!-- Posts -->

**.../api/posts**

```js
{
  "_id": 1,
  "userId": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
}
```

### Comments:

<!-- Comments -->

\*_.../api/comments_

```js
{
  "_id": 1,
  "userId": 1,
  "userName": "id labore ex et quam laborum",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
}
```
