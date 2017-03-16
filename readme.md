# Form Express

Simple CRUD app with Express and Sequelize. RDBMS using PostgreSQL.

## Routes

### GET `/`

Display homepage

### POST `/add`

Handle form submit from homepage

## Models

### Post

Describing a table named `Posts` and contains attributes of

Field | DataTypes | Constraints/Default
--- | --- | ---
id | INT | PK, AI
content | TEXT | -
createdAt | DATE | now() `once`
updatedAt | DATE | now() `every change`
