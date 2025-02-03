```markdown
# Node.js Books API

A simple **Node.js REST API** for managing books using Express.js.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete books.
---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

---

## Installation

### Prerequisites

- **Node.js**: [Download here](https://nodejs.org/)

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/nodejs-books-api.git
   cd nodejs-books-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application locally:
   ```bash
   node app.js
   ```

4. Open your browser and go to `http://localhost:5000`.

---

## Usage

### Local Development
Run the application without Docker for development purposes:
```bash
nodemon server.js
```

---

## API Endpoints

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | `/books`       | Fetch all books       |
| GET    | `/books/:id`   | Fetch a single book   |
| POST   | `/books`       | Add a new book        |
| PUT    | `/books/:id`   | Update a book         |
| DELETE | `/books/:id`   | Delete a book         |

Example Payload for **POST** or **PUT**:
```json
{
  "name": "Book Title",
  "author": "Author Name",
  "publishedYear": 2023
}
```

---



## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: REST API framework.
---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

---

## Author

Developed by **[Buddhima chathuranga lakmal]**.

For any inquiries, feel free to contact me at [lkc.buddhima@gmail.com].
```

### Customization:
- Add or adjust any specific features or dependencies as needed. 

This README will give your project a professional and detailed overview!
