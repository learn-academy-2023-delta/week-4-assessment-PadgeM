# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: I honestly can't remember for the life of me. I've been staring at this question for like thirty minutes.

Researched answer:
Object-oriented programming (OOP) is a way of writing code where we organize things into objects that have data and actions. We use classes to define what an object should be like, and then we create objects based on those classes. Each object can have its own data and do specific things. OOP has principles like encapsulation (keeping data private), inheritance (sharing characteristics between classes), and polymorphism (treating different objects as the same type). Functional programming (FP) is another approach that focuses on using functions a lot. Functions are like little blocks of code that we can reuse. FP uses pure functions that always give the same output for the same input and avoids changing things. Both OOP and FP have their strengths and are used for different problems, so it's helpful to know both.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: I think a float is just like a number with a decimal point. So like 0.5 would be a float. An integer is just a whole number. An number that looks like 4 would be an integer.

Researched answer:
In Ruby, a Float and an Integer are different types of numbers. An Integer is a whole number without any decimals, like 1 or -5. It's used for counting and representing things that are whole and don't have parts. On the other hand, a Float is a number that can have decimals or fractions, like 3.14 or -0.5. It's used for more precise calculations or when dealing with things that have parts or fractions. When you do math with Integers, you usually get an Integer result, and when you do math with Floats, you usually get a Float result. It's important to know the difference between them and when to use each one, depending on the kind of numbers you're working with.

3. Ruby has an implicit return. What does that mean?

Your answer: I think it means that it doesn't need a return keyword. But I can't remember.

Researched answer:
In Ruby "implicit return" means that you don't have to use the word "return" to give a result back from a method or block. When you have a method or block, the last thing you do or the last thing that gets evaluated is automatically the result that gets returned. It's like Ruby can figure out what you want to return without you explicitly saying it. This makes the code shorter and simpler, especially for small methods. But if you want to stop early or give a specific result before the end, you still need to use "return" to make it clear.

4. What is a block in Ruby?

Your answer: It's just a chunk of code. I think. I can't actually remember.

Researched answer:
In Ruby, a block is like a little package of code that you can use to do something specific. It's kind of like a set of instructions that you can pass around and use in different places. Blocks are often used when you want to do something with a list of things, like numbers or words. You can think of a block as a special type of code that you put inside curly braces or between "do" and "end" keywords. It lets you do things like go through each item in a list and do something with it, like printing it on the screen. Blocks are really handy because they make it easier to write code that does repetitive tasks or works with lots of data.

5. How do you extract a single value from a Ruby hash?

Your answer: To extract a single value from a Ruby hash, you can use brackets to extract the value.

Researched answer:
To get a single value from a Ruby hash, you can use square brackets with the key you want. For example, if you have a hash called person with keys like :name, :age, and :city, you can use person[:name] to extract the value associated with the :name key. It's like looking up the value using the key as a reference. If the key is not found in the hash, it will return nil. Another way is to use the fetch method, which allows you to specify a default value to be returned if the key is not found. You can use person.fetch(:age, "Unknown") to get the age value from the hash, and if it's not there, it will return the default value of "Unknown". These methods help us access specific values from a hash using their corresponding keys.

## Looking Ahead: Terms for Next Week

1. RSpec:
RSpec is a testing framework for Ruby that allows developers to write tests for their code. It provides a domain-specific language (DSL) for defining tests and assertions, making it easier to write readable and expressive test cases. RSpec follows a behavior-driven development (BDD) approach, where tests are written in a descriptive and human-readable format.

2. Test-driven development:
Test-driven development (TDD) is a software development approach where tests are written before the actual code implementation. In TDD, developers first create automated tests that define the desired behavior of their code. Then, they write the code in small increments to make those tests pass. This iterative process helps ensure that the code meets the desired requirements and remains maintainable over time.

3. PostgreSQL:
PostgreSQL is a powerful and open-source relational database management system. It is known for its stability, reliability, and adherence to SQL standards. PostgreSQL supports advanced features like data integrity constraints, transactions, and foreign key relationships. It is widely used in both small-scale and large-scale applications and provides extensive support for complex data types and query optimization.

4. CRUD:
CRUD is an acronym that stands for Create, Read, Update, and Delete. It represents the basic operations that can be performed on persistent data. Create refers to the action of adding new data, Read is about retrieving existing data, Update involves modifying existing data, and Delete is the process of removing data from a storage system. CRUD operations are fundamental for interacting with databases and are commonly implemented in web applications.

5. HTTP:
HTTP (Hypertext Transfer Protocol) is the protocol used for communication between web servers and clients, such as web browsers. It defines a set of rules and conventions for how information is requested and transmitted over the internet. HTTP operates on a client-server model, where the client sends requests to the server, and the server responds with the requested information. It forms the foundation of the World Wide Web and enables the exchange of various resources, such as HTML documents, images, and other media types.
