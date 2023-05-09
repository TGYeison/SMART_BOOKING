# Booking and Api

## Getting Started Backend

First, install dependens run the development server:

### Config database

Install postgreslq, then start the database server and create a database, no need to create any tables, the system will do it for you

### Config server 
Go to the server folder and run the following command

```bash
npm install
```

A continuación, cree un archivo con el nombre `.env`, in which the following variables must be declared

```bash
    PORT= //4000
    JWT_KEY_SECRET= //key_token
    DB_USER_NAME= //user_name from database
    DB_PASSWORD= //password_database
    DB_HOST= //host_database
    DB_PORT= //port_database
    DB_DATA_NAME= //name_database
```

```bash
npm run dev
```

## Getting Started Frontend

First, install dependens run the development server:

Go to the client folder and run the following command

```bash
npm install
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 