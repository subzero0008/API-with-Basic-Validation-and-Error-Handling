# Enhanced Items API

A RESTful API for item management built with TypeScript and Express, featuring full CRUD operations with validation and error handling.

##  Features
- Full CRUD functionality
- TypeScript support
- UUID-based item identification
- Request validation
- Proper error handling (400, 404, 500)
- In-memory data storage

##  Dependencies

### Runtime
- `express@5.1.0`
- `uuid@11.1.0`

### Development
- `typescript@5.8.3`
- `ts-node@10.9.2`
- `nodemon@3.1.10`
- `@types/express@5.0.2`
- `@types/node@22.15.29`

##  Setup

1. Clone the repository:
2. Install dependencies: npm install
3. Development Mode (with auto-reload) npm run dev;
4. Production Build npm run build;
## Testing
 API Endpoints:
   Method	Endpoint	Description
GET	/items	Get all items
POST	/items	Create new item
GET	/items/:id	Get specific item by ID
PUT	/items/:id	Update item by ID
DELETE	/items/:id	Delete item by ID
Request/Response Examples
Create Item (POST /items)
json
{
  "name": "New Item"
}
Success Response (201 Created)

json
{
  "id": "e7edc5b4-fada-4540-909e-e51bf9a8e20f",
  "name": "New Item"
}
Validation
Required Fields:

name (string, required for POST/PUT)

Error Responses:

400 Bad Request - Missing required fields

404 Not Found - Item not found

500 Internal Server Error - Server-side issues
