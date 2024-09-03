# Personal Budget

Personal Budget is a simple Express.js application that helps manage your budget by organizing your expenses into different envelopes.

## Table of Contents

- Installation
- Usage
- Routes
- Contributing
- License

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/personal-budget.git
   ```
2. Navigate to the project directory:
   ```sh
   cd personal-budget
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the server:
   ```sh
   npm start
   ```
2. The server will be running on `http://localhost:3000`.

## Routes

### Get All Envelopes

- **URL:** `/envelopes`
- **Method:** `GET`
- **Description:** Retrieves all envelopes.

### Get Envelope by ID

- **URL:** `/envelopes/:id`
- **Method:** `GET`
- **Description:** Retrieves a specific envelope by ID.

### Create Envelope

- **URL:** `/envelopes`
- **Method:** `POST`
- **Description:** Creates a new envelope.
- **Body Parameters:**
  - `name` (string): The name of the envelope.
  - `budget` (number): The budget amount for the envelope.

### Update Envelope

- **URL:** `/envelopes/:id`
- **Method:** `PUT`
- **Description:** Updates an existing envelope by ID.
- **Body Parameters:**
  - `name` (string): The name of the envelope.
  - `budget` (number): The budget amount for the envelope.

### Delete Envelope

- **URL:** `/envelopes/:id`
- **Method:** `DELETE`
- **Description:** Deletes an envelope by ID.

### Transfer Amount Between Envelopes

- **URL:** `/envelopes/:fromId/transfer/:toId`
- **Method:** `POST`
- **Description:** Transfers an amount from one envelope to another.
- **Body Parameters:**
  - `amount` (number): The amount to transfer.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
