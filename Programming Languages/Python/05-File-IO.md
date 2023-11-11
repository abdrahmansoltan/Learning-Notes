# INDEX

- [INDEX](#index)
  - [File I/O](#file-io)
    - [File Handling](#file-handling)
    - [`with` Statement](#with-statement)
  - [Reading](#reading)
  - [Writing](#writing)
    - [Write to an Existing File](#write-to-an-existing-file)
  - [CSV files](#csv-files)
    - [CSV dictionary read](#csv-dictionary-read)

---

## File I/O

Python can read and write files, which is very useful for storing data persistently.

### File Handling

The key function for working with files in Python is the `open()` function.

- When opening a file, we can specify the mode we want to open it in (`read`, `write`, `append`, etc.).

  - The `open()` function takes two parameters; `filename`, and `mode`.

    ```py
    f = open("demofile.txt", "r")
    ```

- There are four different methods (modes) for opening a file:

  - `"r"` - Read - Default value. Opens a file for reading, error if the file does not exist
  - `"a"` - Append - Opens a file for appending, creates the file if it does not exist
  - `"w"` - Write - Opens a file for writing, creates the file if it does not exist
  - `"x"` - Create - Creates the specified file, returns an error if the file exists

- In addition you can specify if the file should be handled as binary or text mode

  - `"t"` - Text - Default value. Text mode
  - `"b"` - Binary - Binary mode (e.g. images)
  - `"+"` - Read and Write - will allow you to read and write to files

- It's important to close the file when you are finished with it.

  ```py
  f.close()
  ```

  - if you don't close the file, Python will not write to the file properly.

---

### `with` Statement

The `with` statement simplifies exception handling by encapsulating common preparation and cleanup tasks.

- In addition, it will automatically close the file. The `with` statement provides a way for ensuring that a clean-up is always used.

  ```py
  with open("text.txt", "a") as f:
    f.write("Now the file has more content!", end="\n")

  # instead of:
  f = open("text.txt", "a")
  f.write("Now the file has more content!", end="\n")
  f.close()
  ```

  ```txt
  Hello World!
  Now the file has more content!
  ```

---

## Reading

- The `read()` method returns the specified number of bytes from the file.

  - Default is `-1`, which means the whole file.

    ```txt
    Hello World!
    ```

    ```py
    with open("text.txt", "r") as f:
      print(f.read()) # read the whole file
    ```

- `readline()` method returns one line from the file.

  ```txt
  Hello World!
  Hello Python!
  ```

  ```py
  with open("text.txt", "r") as f:
    print(f.readline()) # read the first line -> Hello World!
  ```

- `readlines()` method returns a list of lines from the file.

  ```txt
  Hello World!
  Hello Python!
  ```

  ```py
  with open("text.txt", "r") as f:
    print(f.readlines()) # read all lines -> ['Hello World!\n', 'Hello Python!']
  ```

---

## Writing

### Write to an Existing File

To write to an existing file, you must add a parameter to the `open()` function: `"a"` - Append - will append to the end of the file.

- if the file does not exist, it creates a new file for writing or **overwrites** an existing file.

  ```txt
  Hello World!
  ```

  ```py
  f = open("text.txt", "a")
  f.write("Now the file has more content!", end="\n")
  f.close()
  ```

  ```txt
  Hello World!
  Now the file has more content!
  ```

---

## CSV files

CSV stands for Comma Separated Values.

- CSV files are used to store a large number of variables – or data.
- We can read CSV files just like other text files. using `readLines()` method, and separate the values using commas.

  ```py
  with open("data.csv", "r") as f:
      data = f.readlines()
      for line in data:
          print(line.split(","))
  ```

- But there is a module named `csv` which makes CSV parsing easier.

  ```csv
  Name,Age,City
  John,25,New York
  Sarah,28,Paris
  ```

  ```py
  import csv

  with open("data.csv", "r") as f:
      data = csv.reader(f)
      for line in data:
          print(line)
          # ['Name', 'Age', 'City']
          # ['John', '25', 'New York']
  ```

  ```py
  import csv

  with open("data.csv", "r") as f:
      data = csv.reader(f)
      for line in data:
          print(line[0], line[1], line[2]) # Name Age City
          # ...
  ```

---

### CSV dictionary read

- We can also read CSV files into dictionaries.

- This is more defensive way of reading CSV files. because we can access the values by their names, even if the order of the values in the CSV file changes.

  ```csv
  Name,Age,City
  John,25,New York
  Sarah,28,Paris
  ```

  ```py
  import csv

  with open("data.csv", "r") as f:
      data = csv.DictReader(f)
      for line in data:
          print(line)
          # {'Name': 'John', 'Age': '25', 'City': 'New York'}
          # {'Name': 'Sarah', 'Age': '28', 'City': 'Paris'}
  ```

  ```py
  import csv

  with open("data.csv", "r") as f:
      data = csv.DictReader(f)
      for line in data:
          print(line["Name"], line["Age"], line["City"]) # Name Age City
          # ...
  ```
