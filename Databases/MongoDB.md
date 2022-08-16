## INDEX

- [INDEX](#index)
- [MongoDB](#mongodb)
  - [Connecting to MongoDB using Mongoose](#connecting-to-mongodb-using-mongoose)
  - [Notes for interview](#notes-for-interview)

---

## MongoDB

- Best for `unstructured data` of where the structure will change often

### Connecting to MongoDB using Mongoose

[mongoose](https://www.npmjs.com/package/mongoose)

![mongoose](./img/mongoose.PNG)

```js
await mongoose.connect(MONGO_URL);
```

---

### Notes for interview

- Interviewer : What is MongoDB?

- Me : it is a JSON database.

- Interviewer : Thanks(Rejected).

- Never do the same mistake I did!.

- Now, What exactly MongoDB is?
  It stores the data in BSON,
  So it's a BSON database.

- But, what exactly is BSON 🤔?
  Its simply Binary JSON.

- And, why exactly we use BSON instead of JSON?

  - In JSON, the text parsing is very slow

  - JSON file format is not space efficient.

  - JSON supports a limited number of basic data types.
