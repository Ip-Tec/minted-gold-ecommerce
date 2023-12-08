# Minted Gold and Jewelry E-Commerce Platform

## Getting Started

### Prerequisites

```bash
# Clone the repository:
git clone https://github.com/Ip-Tec/minted-gold-ecommerce.git

# Navigate to the project directory:
cd minted-gold-ecommerce

# Navigate to the user directory:
cd user

# Install dependencies:
yarn install

# Navigate to the admin directory:
cd admin

# Install dependencies:
yarn install
```
# .env Configuration
Create a .env file in the root directory with the following content:

```bash
DATABASE_URL="mysql://your_username@localhost:3306/your_database_name"
```
Replace your_username and your_database_name with your MySQL username and database name.

# Prisma Migrations
Run Prisma migrations to set up the database:

```bash
yarn prisma migrate dev
```
Start Development Server

```bash
yarn dev
```
Your development server should now be running at http://localhost:3000.


## Features

- Browse and purchase minted gold and custom jewelry.
- User authentication using NextAuth with GitHub and Google providers.
- Admin panel for managing products, orders, and users.

## Contributing
Contributions are welcome! If you find any issues or have ideas for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgements
- Built with Next.js
- Authentication powered by NextAuth
- Database ORM with Prisma
