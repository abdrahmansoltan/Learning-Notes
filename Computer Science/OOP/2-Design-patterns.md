# INDEX

- [INDEX](#index)
  - [Design Patterns](#design-patterns)
  - [SOLID Principles](#solid-principles)
    - [S - Single Responsibility Principle (S.R.P)](#s---single-responsibility-principle-srp)
    - [O - Open-Closed Principle (O.C.P)](#o---open-closed-principle-ocp)
    - [L - Liskov Substitution Principle](#l---liskov-substitution-principle)
    - [I - Interface Segregation Principle](#i---interface-segregation-principle)
    - [D - Dependency Inversion Principle (D.I.P)](#d---dependency-inversion-principle-dip)
  - [Other Patterns](#other-patterns)
    - [Law of Demeter](#law-of-demeter)

---

## Design Patterns

They're best practices for solving common problems in software design.

- **Design Patterns** are general reusable solutions to commonly occurring problems within a given context in software design.
  - it is a description or **template** for how to solve a problem that can be used in many different situations.
  - it is a proven solution to a common problem in a specific context.
- **Design Patterns** are categorized into three groups:
  1. **Creational Patterns**: deal with the creation of objects.
  2. **Structural Patterns**: deal with the composition of classes or objects.
  3. **Behavioral Patterns**: deal with the communication between classes and objects.

---

## SOLID Principles

They're best practices for writing clean and maintainable code. They're a set of principles that help us write loosely coupled and extensible code.

> **"loosely coupled"** code is code that is not dependent on other code.

- "SOLID": is an acronym for the first five object-oriented design (OOD) principles by Robert C. Martin (Uncle Bob).
- we usually use `class` to explain the SOLID principles, but they can also be applied to `functions` and `modules`.

### S - Single Responsibility Principle (S.R.P)

A class should have only one reason to change. meaning that a class should have only one job or responsibility.

![single-responsibility](./img/solid-4.webp)

- This means that we should have multiple classes each responsible for a single task rather than having one class responsible
- This means that when something changes in the class, you're more likely to introduce bugs if the class has many responsibilities. also it may results **merge-conflicts** in the same class when working in a team.
- If a Class has many responsibilities, it increases the possibility of bugs because making changes to one of its responsibilities, could affect the other ones without you knowing.

  - This principle aims to separate behaviours so that if bugs arise as a result of your change, it won't affect other unrelated behaviours.

- Ex: a class that is responsible for sending emails should not be responsible for storing the email addresses.

  - because if we change the way we store the email addresses, we'll have to change this class. and this is a violation of the S.R.P.

  ```py
  # This is a violation of the S.R.P. ❌
  class EmailSender:
    def send_email(self, message):
      pass

    def store_email_address(self, address):
      pass

  # This is a better design. ✅
  class EmailSender:
    def send_email(self, message):
      # code to send the email
      EmailStore().store_email_address(address) # we're using the EmailStore class to store the email address. so if we change the way we store the email addresses, we'll only have to change the EmailStore class.

  class EmailStore:
    def store_email_address(self, address):
      pass
  ```

- Ex: too much logic in one single function

  ```py
  # This is a violation of the S.R.P. ❌
  def customerSalesReport(customerId):
    customer = db.getCustomerInfo(customerId)
    orders = db.getOrdersForCustomer(customerId)
    total = 0
    for order in orders:
      total += order.price
    print(customer.name + " has a total of " + total + " in sales.")
  ```

  - in the function above, we're getting the customer info and the orders for that customer and calculating the total sales for that customer and printing the result.
  - the problem with this function is that it has too much logic in it. it's doing too many things like:
    1. getting the customer info.
    2. getting the orders for that customer.
    3. calculating the total sales for that customer.
    4. printing the result.
  - if we had to change the way we calculate the total sales, we'll have to change this function. and this is a violation of the S.R.P.

---

### O - Open-Closed Principle (O.C.P)

(Classes / Entities) should be **open for extension but closed for modification**.

![open-closed](./img/solid-5.webp)

- This means that the behavior of a (module / class) can be extended without modifying its source code.
- If you want the Class to perform more functions, the ideal approach is to add to the functions that already exist NOT change them.
  ![open-closed](./img/solid-1.avif)

- Why?
  - Because if you change the existing functions, you might break the code that depends on those functions. So we will guarantee that the existing code will not break.
  - Also by modifying the existing functions, you might break the code that depends on those functions or cause unit tests to fail. So we will guarantee that the existing code will not break.

> **"extension"** means adding new functionality.
> ![extension](./img/solid-2.png)

- It's usually done on `Abstract Classes` or `Interfaces`.
  ![open-closed](./img/solid-9.png)

  - `Abstract Classes` are classes that cannot be instantiated. They can only be used as a base class for other classes that extend them.
  - `Interfaces` are classes that contain only abstract methods. They are used to define the operations that the high-level classes should use.

- One way to achieve the O.C.P. is by using **Decorator Pattern**.

  - The Decorator Pattern is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the new behaviors.
  - It allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class.
  - It's a way to add new functionality to an object without changing its structure.

  ```py
  class Shape:
    def draw(self):
      pass

  class Circle(Shape):
    def draw(self):
      # code to draw a circle

  class Square(Shape):
    def draw(self):
      # code to draw a square

  class RedShapeDecorator(Shape):
    def __init__(self, decoratedShape):
      self.decoratedShape = decoratedShape

    def draw(self):
      self.decoratedShape.draw()
      self.setRedBorder()

    def setRedBorder(self):
      print("Border Color: Red")

  # Usage
  circle = Circle()
  redCircle = RedShapeDecorator(Circle())
  redSquare = RedShapeDecorator(Square())

  circle.draw()
  redCircle.draw()
  redSquare.draw()
  ```

---

### L - Liskov Substitution Principle

Objects of a superclass should be able to be replaced with objects of a subclass without affecting the behavior of the program.

![liskov-substitution](./img/solid-6.webp)

- This means that a child class should be able to do everything the parent class can do.
- Meaning that when an instance of a class is replaced/extended with an instance of a subclass, the inheriting class should not change the behavior of the base class. Thus the program should not break.
- It's an extension of the `O.C.P`.
- When a child Class cannot perform the same actions as its parent Class, this can cause bugs.
- If you have a Class and create another Class from it, it becomes a parent and the new Class becomes a child. The child Class should be able to do everything the parent Class can do. This process is called Inheritance.
- This principle aims to **enforce consistency** so that the parent Class or its child Class can be used in the same way without any errors.

---

### I - Interface Segregation Principle

It states that many client-specific interfaces are better than one general-purpose interface.

> Interfaces provide a contract that a Class must implement.

![interface-segregation](./img/solid-7.webp)

- A class should not be forced to implement interfaces it does not use. Meaning that a class should not have to implement methods it does not need.
- Clients should not be forced to depend on methods that they do not use.
  - When a Class is required to perform actions that are not useful, it is wasteful and may produce unexpected bugs if the Class does not have the ability to perform those actions.
  - A Class should perform only actions that are needed to fulfil its role. Any other action should be removed completely or moved somewhere else if it might be used by another Class in the future.
- Avoid **"fat"** interfaces that expose a lot of methods that are not needed by the client.

> "Segregation" means separation "عزل"

```py
class IShape:
  def draw_square(self):
    pass

  def draw_circle(self):
    pass

  def draw_triangle(self):
    pass

class Circle(IShape):
  # Here we're forced to implement the draw_square and draw_triangle methods even though we don't need them.

# ------------------------------------------------------------ #

# This is a better design. ✅
class IShape:
  def draw(self):
    pass

class Circle(IShape):
  def draw(self):
    # code to draw a circle

class Square(IShape):
  def draw(self):
    # code to draw a square
```

---

### D - Dependency Inversion Principle (D.I.P)

It states that **high-level modules should not depend (import from) on low-level modules**. Both should depend on **abstractions**.

![dependency-inversion](./img/solid-8.webp)

- High-level modules (main application logic) should not depend on low-level modules (like specific tools or libraries). Both should depend on **abstractions** (interfaces or generic ideas).
- **For summary**, you will pass the method as a parameter to the class. instead of importing the method or use it inside the class. This is called **Dependency Injection**.
- This principle says a Class should not be fused with the tool it uses to execute an action. Rather, it should be fused to the interface that will allow the tool to connect to the Class.
- High-level classes should not know the implementation details of the low-level classes.
  ![dependency-inversion](./img/solid-3.png)

  - `High-level classes` are classes that are closer to the user and contain complex business logic.
  - `Low-level classes` are classes that contain basic building blocks (Tools) that are used by the high-level classes.
  - `Abstractions` are `interfaces` that define the operations that the high-level classes should use. -> connects 2 classes together.
  - `Details` are the implementation of the low-level classes.

- This principle aims at reducing the dependency(coupling) of a high-level Class on the low-level Class by introducing an interface.

  - It aims to make them **loosely coupled**.

- Ex:
  - violation of the D.I.P.
    ![dependency-inversion](./img/dip-1.png)
  - better design. ✅ -> by using a middle Abstraction layer(interface) -> connects 2 classes together.
    ![dependency-inversion](./img/dip-2.png)

---

## Other Patterns

### Law of Demeter

It's a design guideline for developing software. It's also known as the **Principle of Least Knowledge**.

- It's a principle that says that a module should not know about the internal workings of the objects it manipulates.
- It's a way to **reduce the coupling** between objects, by **reducing the number of layers** of objects that need to be accessed. (Using one dot `.` to access an object is better than using multiple dots `.`).
- **Ex:** Consider a scenario where "cats" have a favorite toy and each toy has a color. If you want to know the color of the favorite toy of a cat, you should ask the cat for the color of its favorite toy, not the toy itself.

  ```py
  # This is a violation of the Law of Demeter. ❌
  class Cat:
    def __init__(self, favorite_toy):
      self.favorite_toy = favorite_toy

  class Toy:
    def __init__(self, color):
      self.color = color

  cat = Cat(Toy("red"))
  print('The color of the cat\'s favorite toy is:', cat.favorite_toy.color) # we're asking the toy for the color of the cat's favorite toy. not the cat. (using multiple dots `.`)

  # ------------------------------------------------------------ #

  # This is a better design. ✅
  class Cat:
    def __init__(self, favorite_toy):
      self.favorite_toy = favorite_toy

    def get_favorite_toy_color(self):
      return self.favorite_toy.color

  class Toy:
    def __init__(self, color):
      self.color = color

  cat = Cat(Toy("red"))
  print('The color of the cat\'s favorite toy is:', cat.get_favorite_toy_color()) # we're asking the cat for the color of its favorite toy. not the toy. (using one dot `.`)
  ```

  - In the example above, we're asking the toy for the color of the cat's favorite toy. not the cat. this is a violation of the Law of Demeter.
  - In the better design, we're asking the cat for the color of its favorite toy. not the toy. this is a better design.
  - This is a better design because it reduces the coupling between objects.
