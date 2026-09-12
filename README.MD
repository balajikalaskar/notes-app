# Notes App Backend

Express and MongoDB backend for a notes application. The server also serves the built frontend from the `public` directory.

## Requirements

- Node.js
- MongoDB connection

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in this directory:

   ```env
   MONGO_URI=your_mongodb_connection_string
   ```

3. Start the server:

   ```bash
   node Server.js
   ```

The API runs on `http://localhost:5000`.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/create-note` | Create a note with `title` and `description` |
| `GET` | `/api/get-notes` | Get all notes |
| `DELETE` | `/api/delete-note/:id` | Delete a note by MongoDB ID |
| `PATCH` | `/api/update-note` | Update a note with `title` and `description` |

Example request body:

```json
{
  "title": "Shopping list",
  "description": "Milk and bread"
}
```

## Project Structure

- `Server.js` - Starts the Express server
- `src/app.js` - Express app and note routes
- `src/Config/database.js` - MongoDB connection
- `src/models/note.model.js` - Mongoose note model
- `public/` - Built frontend assets served by the backend