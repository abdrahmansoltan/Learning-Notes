# INDEX

- [INDEX](#index)
  - [SQL](#sql)
    - [Queries](#queries)
      - [SQL Commands](#sql-commands)
      - [CRUD](#crud)
    - [notes](#notes)
  - [Date](#date)
    - [date Operators](#date-operators)
  - [Filtering Queries](#filtering-queries)
    - [NULL values](#null-values)
      - [Null Coalescing](#null-coalescing)
      - [`NULLIF` function](#nullif-function)
    - [BETWEEN...AND](#betweenand)
    - [`IN` Keyword](#in-keyword)
    - [`LIKE` Keyword](#like-keyword)
    - [`Distinct` Keyword](#distinct-keyword)
    - [`HAVING` Keyword](#having-keyword)
    - [`CASE` Keyword (if-then-else)](#case-keyword-if-then-else)
  - [Sorting](#sorting)
  - [Grouping](#grouping)
    - [Unions](#unions)
    - [GROUPING SETS](#grouping-sets)
  - [SQL Functions](#sql-functions)
    - [Window Function](#window-function)
      - [Frame Clause](#frame-clause)
  - [Views](#views)
  - [Multiple Tables](#multiple-tables)
    - [Multi Table Queries](#multi-table-queries)
    - [Joining Tables (`JOIN`)](#joining-tables-join)
      - [`USING` Keyword](#using-keyword)
  - [Indexes](#indexes)
    - [Index Types](#index-types)
  - [SubQueries](#subqueries)

---

## SQL

SQL stands for Structured Query Language and it is the syntax that allows us to interact with a SQL type database.

It's a **declarative language**, which means that we tell the database what we want to do, but not how to do it.

- `PRIMARY KEY` : it's used for indexing (to reach row fast instead of going through all rows before)

  ![indexing](./img/indexing.png)

---

### Queries

a "Query" is also called "SQL Statement" and it is a command that we send to the database to perform some action.

![query](./img/query.PNG)

- **Order of Operations**

  ![order-of-operations](./img/order-of-operations.png)

  1. `FROM` and `JOIN`
  2. `WHERE`
  3. `GROUP BY`
  4. `HAVING`
  5. `SELECT`
  6. `DISTINCT`
  7. `ORDER BY`
  8. `LIMIT`

#### SQL Commands

![commands categories](./img/sql-commands.png)

- **DDL:** Data Definition Language - used to define the database structure or schema. It includes the commands: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `COMMENT`, `RENAME`.
- **DQL:** Data Query Language - used to query data from the database. It includes the commands: `SELECT`, `WHERE`, `GROUP BY`, `HAVING`, `UNION`, `INTERSECT`, `EXCEPT`.
- **DML:** Data Manipulation Language - used to manipulate the data in the database. It includes the commands: `INSERT`, `UPDATE`, `DELETE`.
- **DCL:** Data Control Language - used to define the database security. It includes the commands: `GRANT`, `REVOKE`.

---

#### CRUD

> table-name : "worlds"

- CREATE --> `INSERT INTO worlds (name) VALUES ('Asgard');`
- READ --> `SELECT * FROM worlds;`
- UPDATE --> `UPDATE worlds SET sighting_date = '2021-01-10' WHERE id='1';`
- DELETE --> `DELETE FROM worlds WHERE id='1';` -> delete `row` where `id=1`

---

### notes

- Double quotes `""` instead of single quotes `''`

  - `double quotes` are always used to denote delimited identifiers ( `table name` - `column name` ).
  - `single quotes` used to indicate that a token is a string -> for text.

- Missing a semicolon
  - The semicolon at the end of a query is one of the most common mistakes to make. Thankfully its easy to fix by just adding a semi colon on the next line - but that fix only works if you notice it soon enough.
  - This is why its a good idea to keep an eye on the beginning of the terminal line, to make sure it ends with this `=#` and not something like this `-#`
- `AND` and `OR` order
  - `AND` has a higher precedence than `OR`
  - `AND` is evaluated first and then `OR`
  - or use parenthesis `()` to change the order

---

## Date

- Time zones are not stored in the database. They are only used when displaying the date and time. So the date and time stored in the database is always in **UTC**.

  ```sql
  SHOW TIMEZONE; -- UTC

  SET TIMEZONE = 'Asia/Tehran'; -- change timezone for current session

  -- To change the timezone for all sessions, you need to change the timezone in the postgresql.conf file.
  ALTER SYSTEM SET TIMEZONE TO 'Asia/Tehran';
  ```

- `DATE` : is a data type that stores a date (year, month, day) without a time zone.

  ```sql
  SELECT * FROM worlds WHERE sighting_date = '2021-01-10';
  ```

- Date format

  - `YYYY-MM-DD` : is the most common format for dates in SQL
  - `YYYY-MM-DD HH:MM:SS` : is the most common format for dates and times in SQL
  - `YYYY-MM-DD HH:MM:SS +-HH:MM` : is the most common format for dates and times with time zones in SQL

- When creating a date column, You can specify whether you will use time zones or not using **TIMESTAMP**.

  ```sql
  CREATE TABLE timezones (
    TS TIMESTAMP WITHOUT TIME ZONE
    tZ TIMESTAMP WITH TIME ZONE,
  );
  ```

---

### date Operators

- Get current date

  ```sql
  SELECT CURRENT_DATE; -- 2021-01-10
  -- or
  SELECT NOW()::DATE; -- 2021-01-10
  ```

- Format date

  ```sql
  SELECT TO_CHAR(NOW(), 'YYYY-MM-DD HH:MM:SS'); -- 2021-01-10 15:00:00
  ```

- Cast date

  ```sql
  SELECT CAST('2021/01/10' AS DATE); -- 2021-01-10
  -- or
  SELECT date '2021/01/10'; -- 2021-01-10
  ```

- Extract date

  ```sql
  SELECT EXTRACT(YEAR FROM NOW()); -- 2021
  ```

- Interval

  ```sql
  SELECT date '2021/01/10' + INTERVAL '1 day'; -- 2021-01-11 15:00:00
  ```

---

## Filtering Queries

Common filter words are WHERE, BETWEEN, LIKE, IF NULL, IF NOT NULL

![filters](./img/filter.PNG)

- `LIKE 'Dan%'`
  - `%` : is a wildcard that means anything
  - here it means 'Dan' and anything that comes after the `n` ---> AKA: any word starts with "Dan"
- `NOT` : is used to exclude the results that match the condition

  ```sql
  SELECT * FROM worlds WHERE NOT name = 'Dan';
  ```

---

### NULL values

You should always be aware of the possibility of NULL values in your database. So it's a good idea to be defensive and to check for them in your queries.

- `IS NULL` : is used to test for NULL values (empty fields)
- with comparison/math operators -> **All roads lead to Null**
  - `null = null` -> false
  - `null <> null` -> false
- `IS NOT NULL` : is used to test for NOT NULL values

  ```sql
  SELECT * FROM worlds WHERE name = NULL; -- WRONG
  SELECT * FROM worlds WHERE name != NULL; -- WRONG

  SELECT * FROM worlds WHERE name IS NULL; -- CORRECT
  SELECT * FROM worlds WHERE name IS NOT NULL; -- CORRECT
  ```

#### Null Coalescing

- `COALESCE` : is a function used to return the first non-NULL value in a list

  ```sql
  SELECT COALESCE(NULL, 'Dan', 'John'); -- Dan
  ```

- It's used when you have columns that may contain `NULL` values and you want to replace them with a default value.

  ```sql
  SELECT COALESCE(name, 'Unknown') FROM worlds;
  ```

---

#### `NULLIF` function

- `NULLIF` : is a function used to return `NULL` if the two arguments are equal. Otherwise it returns the first argument.

  ```sql
  SELECT NULLIF('Dan', 'Dan'); -- NULL
  SELECT NULLIF('Dan', 'John'); -- Dan
  ```

---

### BETWEEN...AND

- `BETWEEN` : is used to filter the result set within a certain range. The values can be numbers, text, or dates.

  ```sql
  SELECT * FROM worlds WHERE id BETWEEN 1 AND 3;
  ```

- It's sensitive to the order of arguments. The first argument must be less than or equal to the second argument.

  ```sql
  SELECT * FROM worlds WHERE id BETWEEN 3 AND 1; -- WRONG
  ```

---

### `IN` Keyword

- `IN` : is used to specify multiple values in a `WHERE` clause.

  ```sql
  SELECT * FROM worlds WHERE name IN ('Dan', 'John');
  -- It's instead of writing OR
  SELECT * FROM worlds WHERE name = 'Dan' OR name = 'John';
  ```

---

### `LIKE` Keyword

- `LIKE` : is used in a `WHERE` clause to search for a **specified pattern** in a column.

  - `%` : is a wildcard that represents zero, one, or multiple characters
  - `_` : is a wildcard that represents a single character
  - It's case sensitive by default. To perform case-insensitive comparisons, use `ILIKE` instead.

```sql
SELECT * FROM worlds WHERE name LIKE 'Dan%'; -- Dan and anything that comes after the n

SELECT * FROM numbers WHERE percentage LIKE '_00%'; -- 100, 200, 300, 400, 500, 600, 700, 800, 900 and 1000

SELECT * FROM numbers WHERE percentage LIKE '2_%_%'; -- values that start with 2 and are at least 3 characters in length
```

- **Note:** Postgres uses `LIKE` only with text comparison. It doesn't work with numbers. So we must cast the column to text.

  ```sql
  SELECT * FROM numbers WHERE CAST(percentage AS TEXT) LIKE '2_%_%';
  -- or
  SELECT * FROM numbers WHERE percentage::TEXT LIKE '2_%_%';
  ```

---

### `Distinct` Keyword

- `DISTINCT` : is used to return only distinct (different) values **(Remove Duplicates)**.

  ```sql
  SELECT DISTINCT name FROM worlds;
  ```

---

### `HAVING` Keyword

- `HAVING` : is used with aggregate functions to filter the result-set based on the aggregate values.

  ```sql
  SELECT name, COUNT(*) FROM worlds
  GROUP BY name
  HAVING COUNT(*) > 1;
  ```

- `WHERE` : is used to filter records to individual rows.
- `HAVING` : is used to filter records to groups of rows as a whole.

---

### `CASE` Keyword (if-then-else)

- `CASE` : is used to create different outputs (usually in the `SELECT` statement). It is SQL's way of handling **`if-then-else`** logic.

  ```sql
  SELECT name,
    CASE
      WHEN name = 'Dan' THEN 'Hello Dan'
      WHEN name = 'John' THEN 'Hello John'
      ELSE 'I don't know you'
    END AS greeting
  FROM worlds;
  ```

---

## Sorting

- `ORDER BY` : is used to sort the result-set in ascending or descending order.

  ```sql
  SELECT * FROM worlds ORDER BY name; -- ASC
  SELECT * FROM worlds ORDER BY name DESC; -- DESC
  ```

- `ORDER BY` : can be used with multiple columns. The first column is used to sort the records first, then the second column, and so on.

  ```sql
  SELECT * FROM worlds ORDER BY name, id; -- order by name ASC and id ASC

  SELECT * FROM worlds ORDER BY name, id DESC; -- order by name ASC and id DESC
  ```

---

## Grouping

It's used to summarize data into groups. This is done by splitting data into groups and then applying aggregate functions to each group rather than applying them to each row or the entire table.

- `GROUP BY` : is used in conjunction with the aggregate functions to group the result-set by one or more columns.

  ```sql
  SELECT name, COUNT(*) FROM worlds GROUP BY name;
  ```

- Example:

  ```sql
  SELECT genre, AVG(price) AS avg_price
  FROM books
  GROUP BY genre;
  ```

  ![grouping](./img/grouping-1.jpg)

- How it works -> **Split-Apply-Combine**
  ![grouping](./img/grouping-2.png)

  - **Split:** The data is split into groups based on the column specified in the `GROUP BY` clause.
  - **Apply:** An aggregate function is applied to each group.
  - **Combine:** The results from each group are combined into a single result set.

- To filter by the aggregate values, we use ["HAVING" Keyword](#having-keyword) instead of `WHERE`.

- **Notes:**

  - We need to select the columns that we want to group by. If we don't select them, we'll get an error.

    ```sql
    SELECT COUNT(*) FROM worlds GROUP BY name; -- WRONG
    ```

  - Also we can't use `GROUP BY` without aggregate functions.

    ```sql
    SELECT name FROM worlds GROUP BY name; -- WRONG
    ```

    - That is because `GROUP BY` is used to reduce all records found for the matching group to a **single record**. So we need to use aggregate functions to summarize the data.

---

### Unions

- `UNION` : is used to combine the result-set of two or more `SELECT` statements.

  ```sql
  SELECT name FROM worlds WHERE name LIKE 'Dan%'
  UNION
  SELECT name FROM worlds WHERE name LIKE 'John%';
  ```

- `UNION` : removes duplicate rows from the result-set.
- `UNION ALL` : doesn't remove duplicate rows from the result-set.

---

### GROUPING SETS

`GROUPING SETS` : is used to group the result-set by one or more columns.

- It replaces the `UNION` keyword for multiple grouping.

  ```sql
  SELECT name, COUNT(*) FROM worlds
  GROUP BY GROUPING SETS (name, (name, id));

  -- this is instead of:

  SELECT name, COUNT(*) FROM worlds
  GROUP BY name
  UNION
  SELECT name, COUNT(*) FROM worlds
  GROUP BY name, id;
  ```

---

## SQL Functions

SQL functions are built-in functions that are available to use in SQL statements. They are used to perform specific tasks like formatting the output, performing calculations, and more.

It's a set of steps that creates a **single value**.

- Types of SQL Functions:

  - **Scalar Functions:** returns a single value for each row of data.
  - **Aggregate Functions:** returns a single value for a set of rows of data.
    - It produces a summary of the column-data in a table.

- **numbers Functions**

  - `COUNT` : counts the number of rows in a table
  - `SUM` : adds up all the values in a column
  - `AVG` : calculates the average of all the values in a column
  - `MIN` : finds the smallest value in a column
  - `MAX` : finds the largest value in a column

  ```sql
  SELECT COUNT(*) FROM <table_name>;
  SELECT SUM(<column_name>) FROM <table_name>;
  SELECT AVG(<column_name>) FROM <table_name>;
  SELECT MIN(<column_name>) FROM <table_name>;
  SELECT MAX(<column_name>) FROM <table_name>;
  ```

- **string Functions**

  - `CONCAT` : combines 2 strings from 2 columns
  - `UPPER` : converts a string to uppercase
  - `LOWER` : converts a string to lowercase
  - `LENGTH` : returns the number of characters in a string
  - `SUBSTRING` : extracts a portion of a string

    ```sql
    SELECT CONCAT(<column_name>, <column_name>) FROM <table_name>;
    SELECT CONCAT(<column_name>, <column_name>) as "Custom Concatenation Column" FROM <table_name>;

    SELECT UPPER(<column_name>) FROM <table_name>;
    SELECT LOWER(<column_name>) FROM <table_name>;
    SELECT LENGTH(<column_name>) FROM <table_name>;
    SELECT SUBSTRING(<column_name>, <start_index>, <length>) FROM <table_name>;
    ```

---

### Window Function

It creates a new column based on functions performed on a subset **(window)** of the rows in a table.

- `OVER`: is used to define the window.

- `PARTITION BY` : is used to partition the data into groups based on the specified column.

![window function](./img/window-function.png_large)

```sql
SELECT name, COUNT(*) OVER (PARTITION BY name) FROM worlds;
-- Here, we're:
-- partitioning the data into groups based on the `name` column.
-- Then, we apply the `COUNT` function to each group.
-- The result is a new column that contains the count of each group.
```

#### Frame Clause

- `ROWS` : is used to specify the number of rows before and after the current row to be included in the window.

  ```sql
  SELECT name, COUNT(*) OVER (PARTITION BY name ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) FROM worlds;
  -- Here, we're:
  -- partitioning the data into groups based on the `name` column.
  -- Then, we apply the `COUNT` function to each group.
  -- The result is a new column that contains the count of each group.
  -- The `ROWS` clause specifies the number of rows before and after the current row to be included in the window. (1 row before and 1 row after)
  ```

- `Order By` : is used to sort the rows in the window.

  ```sql
  SELECT name, COUNT(*) OVER (PARTITION BY name ORDER BY id ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) FROM worlds;
  ```

---

## Views

**Views** : is a virtual table based on the result-set of an SQL statement. which allows you to store and query previously executed queries.

- It's a table that doesn't exist physically in the database. used to simplify the process of querying data.
- It's a way to store the result of a query for later use.
- Views take little space in the database. we only store the definition of a view and not all the data.
- Views can be used to restrict access to data.

```sql
CREATE VIEW <view_name> AS
SELECT <column_name>, <column_name>
FROM <table_name>
WHERE <condition>;
```

---

## Multiple Tables

### Multi Table Queries

**Multi table select:** is combining data from multiple tables in order to create a visual representation of the data relationships across the tables.

- It's done using **aliases**.

  - `AS` is used to give a table an alias.

    ```sql
    SELECT <column_name>, <column_name>
    FROM <table_name> AS <alias_name>
    ```

- Here, we use the `WHERE` clause to filter the 2 tables using primary and foreign keys

```sql
SELECT a.emp_id, a.emp_name, b.emp_salary
FROM employees as a, salaries as b
WHERE a.emp_id = b.emp_id;
```

---

### Joining Tables (`JOIN`)

`JOIN` : is used to combine rows from two or more tables, based on a related column between them.

![join](./img/sql-join-1.png)

- `INNER JOIN` : returns records that have matching values in both tables

  - It's generally considered a best practice, It's more readable than using `WHERE` clause. It shows what's being joined.

    ```sql
    SELECT <column_name>, <column_name>
    FROM <table_name> AS <alias_name>
    INNER JOIN <table_name> AS <alias_name>
    ON <table_name>.<column_name> = <table_name>.<column_name>

    -- EX:
    SELECT a.emp_id, a.emp_name, b.emp_salary
    FROM employees as a
    INNER JOIN salaries as b
    ON a.emp_id = b.emp_id;
    ```

- `OUTER JOIN` : returns all records from one table, and the matched records from the other table

  - `LEFT OUTER JOIN` : returns all records from the left table, and the matched records from the right table
  - `RIGHT OUTER JOIN` : returns all records from the right table, and the matched records from the left table
  - `FULL OUTER JOIN` : returns all records from both tables whether there is a match or not.

- `CROSS JOIN` : create a combination of every row from the first table with every row from the second table

  - returns the **cartesian product** of the sets of records from the joined tables
  - It results in a very large number of records

- `SELF JOIN` : is a regular join, but the table is joined with itself, creating a temporary copy of the table to work with in the query

  - This can be done when a table has a foreign key that references its primary key -> (references itself)
  - not supported in Postgres

  ```sql
  SELECT a.emp_id, a.emp_name, b.emp_salary
  FROM employees as a
  INNER JOIN employees as b -- same table but different alias
  ON a.emp_id = b.emp_id;
  ```

- **Notes**
  - when we do a `join`, the results always come back **unsorted**

#### `USING` Keyword

- `USING` : is used to join tables on columns that have the same name.
- It's a shorthand for `ON <table_name>.<column_name> = <table_name>.<column_name>`

  ```sql
  SELECT <column_name>, <column_name>
  FROM <table_name> AS <alias_name>
  INNER JOIN <table_name> AS <alias_name>
  USING (<column_name>)
  ```

  - `USING` is a shorthand for `ON <table_name>.<column_name> = <table_name>.<column_name>`

---

## Indexes

**Indexes** : is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure.

- It's a way to speed up queries.
- It's a pointer to data in a table.
  - It's like the (table of contents) in a book, as it helps you find the data you're looking for faster.
- It slows down the process of inserting, updating, and deleting data in the table. **(because we have to update the index as well)**

```sql
CREATE INDEX <index_name> ON <table_name> (<column_name>);
```

- When to use Indexes?

  - Primary keys, Foreign keys and Unique columns are indexed by default.
  - When you have a lot of data in a table.
  - When you have a lot of queries that use the same column.
  - When you have a lot of queries that use the same column in the `WHERE` clause.

- When not to use Indexes?
  - When you have a small amount of data in a table.
  - whey table is updated frequently.
  - when columns contain a lot of `NULL` values.
  - when columns have large values
  - When you have a lot of queries that use the same column but in the `SELECT` clause.
  - When you have a lot of queries that use the same column in the `WHERE` clause but with different values.

---

### Index Types

- Postgres supports different types of indexes:

  - **B-tree** : is the default index type in Postgres. It's the most common index type. It's the best choice for most situations.
    ![b-tree](./img/b-tree-algorithm.png)
  - **Hash** : is a good choice when you have a small number of rows in the table. It's faster than B-tree for small tables.
    ![b-tree](./img/hash-algorithm.png)
  - **Gin** : Generalized inverted index -- best used when multiple values are stored in a single field.
  - **GiST** : Generalized search tree -- useful in indexing geometry data types.

- Each index type uses a different **Algorithm** to store the data. Each index type has its own advantages and disadvantages.

---

## SubQueries

**SubQuery** : is a query within/inside another query.

- It must be enclosed in parentheses `()`.
- It's most often found in the `WHERE` clause of a query.

  ```sql
  SELECT <column_name>, <column_name>
  FROM <table_name>
  WHERE <column_name> = (SELECT <column_name> FROM <table_name> WHERE <condition>);
  ```

- When using `HAVING` with it, It must return a single value.

- SubQueries vs Joins

  - `SubQueries`

    - are used when you need to filter the data based on a condition that is not in the same table.
    - can be standalone queries.
    - can return a single result or row set (multiple rows) depending on the query location.
      - in `WHERE` clause, it must return a single result.
      - in `HAVING`/`SELECT` clause, it can return a single result or row set (multiple rows).
      - in `FROM` clause, it can return a single result or row set (multiple rows).

  - `Joins`
    - are used when you need to filter the data based on a condition that is in the same table.
    - can only return a row set (multiple rows)
