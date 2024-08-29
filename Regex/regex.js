// Regular Expressions (RegExp) in JavaScript

/*
What is a Regular Expression (RegExp)?

- A Regular Expression, also known as RegExp, is a tool used to search for patterns in text.
- You can think of it like a "search pattern" that helps you find, replace, or validate certain text inside a string
(a string is simply a series of characters like "Hello World!").

In JavaScript, RegExp is a built-in object that allows you to work with these patterns.

You can create a RegExp in two main ways:
1. Using a RegExp literal (a fixed pattern directly written between slashes `/`).
2. Using the RegExp constructor (a more flexible way of creating patterns dynamically).

Let’s break down both methods:
*/

// Regular Expressions (RegExp) in JavaScript

/*
What is a Regular Expression (RegExp)?
- A Regular Expression (RegExp) is a tool used for searching and manipulating text based on patterns.
- You can use it to find, replace, or validate text that matches a specific pattern.

There are two primary ways to create a RegExp in JavaScript:

1. **Using a Regular Expression Literal**
2. **Using the `RegExp` Constructor**

Let’s break down each method:

*/

// 1. **Using a Regular Expression Literal**
/*
A regex literal is a simple and common way to define a regular expression directly in your code.
- **Pattern**: Written between two slashes (`/pattern/`).
- **Flags**: Optional characters following the second slash that modify how the pattern behaves.

**Example**:
*/

let regexLiteral = /hello/i;
/*
- This pattern searches for the word 'hello' in any case (uppercase or lowercase).
- The `i` flag stands for "case-insensitive," meaning the search will match 'hello', 'Hello', 'HELLO', or any combination of cases.
- Regex literals are ideal when the pattern is fixed and known in advance.
- Example: literal is for already written sequences.
*/

// 2. **Using the `RegExp` Constructor**
/*
The `RegExp` constructor allows you to create a regular expression object dynamically.
- **Syntax**: `new RegExp('pattern', 'flags')`
  - **'pattern'**: A string representing the pattern you want to match.
  - **'flags'**: Optional string of flags that control how the pattern behaves.

**Example**:
*/

let regexConstructor = new RegExp("hello", "i");
/*
- This pattern also searches for 'hello' in any case, similar to the literal example above.
- The `new` keyword creates a new instance of a RegExp object with the pattern "hello" and the `i` flag for case-insensitive matching.
- The `RegExp` constructor is useful when the pattern needs to be built dynamically, such as when using user input or variables.

**Summary**:
- **Regex Literal** (`/pattern/flags`): Best for static, fixed patterns that you know in advance. It’s concise and easy to read.
- **`RegExp` Constructor** (`new RegExp('pattern', 'flags')`): Best for dynamic patterns that need to be constructed or modified at runtime based on variables or user input.

Understanding when to use each method allows you to effectively apply regular expressions to different scenarios in your code.
*/

// 3. Flags in Regular Expressions

/*
Flags are special characters that tell the regular expression to search in a specific way.
They come after the pattern and modify how the search works.

Here are some of the most common flags:
*/

// g - Global search
/*
This flag makes the search go through the entire string, not stopping after the first match.

Example:
*/

let regexGlobal = /hello/g;
// This pattern searches for every occurrence of the word 'hello' in the string.
// Without the 'g' flag, it would stop after finding the first 'hello'.

// i - Case-insensitive search
/*
The `i` flag makes the search ignore uppercase and lowercase differences.
*/

let regexInsensitive = /hello/i;
// This pattern matches 'hello', 'Hello', 'HELLO', etc., by ignoring case differences.

// m - Multi-line search
/*
The `m` flag treats the string as multiple lines, so `^` and `$` (which we’ll explain later) can match the start or end of each line.

Example:
*/

let regexMultiline = /^hello/m;
// This matches 'hello' at the start of any line, not just the start of the whole string.

// 4. Understanding Basic Syntax

/*
Now, let's explore some basic symbols you can use in your pattern to search for specific things.
*/

// Literal Characters
/*
Literal characters are just regular letters or numbers.
They match exactly what they are.

Example:
*/

let regexLiteralExample = /abc/;
// This pattern matches the exact sequence 'abc' in a string.

// Special Characters (Metacharacters)
/*
Some characters have special meanings in regular expressions.
Here are some of the most common ones:
*/

// . (dot)
/*
The dot `.` matches any character except a newline (like `\n` which separates lines).

Example:
*/

let regexAnyChar = /h.llo/;
// This pattern matches 'hello', 'hallo', 'hxllo', etc., because the dot represents any single character.

// \d - Digits
/*
The `\d` symbol matches any digit (any number from 0 to 9).

Example:
*/

let regexDigit = /\d/;
// This pattern matches any single digit, like '5', '7', or '0'.

// \w - Word Character
/*
The `\w` symbol matches any word character, which includes letters (A-Z, a-z), numbers (0-9), and underscores (_).

Example:
*/

let regexWordChar = /\w/;
// This pattern matches any single word character, such as 'A', 'b', '3', or '_'.

// \s - Whitespace
/*
The `\s` symbol matches any whitespace character (spaces, tabs, or newlines).

Example:
*/

let regexWhitespace = /\s/;
// This pattern matches any single whitespace character like a space or tab.

// ^ and $ - Anchors
/*
These are used to match positions in the string, rather than actual characters.

- `^` matches the start of the string.
- `$` matches the end of the string.

Examples:
*/

let regexStart = /^hello/;
// This pattern matches 'hello' only if it's at the beginning of the string.

let regexEnd = /world$/;
// This pattern matches 'world' only if it's at the end of the string.

// 5. Character Sets (Square Brackets `[]`)

/*
Character sets allow you to define a group of characters, and the pattern will match any one of them.

Example:
*/

let regexCharSet = /[abc]/;
// This pattern matches any one of the characters 'a', 'b', or 'c'.

// You can also specify a range of characters.
let regexCharRange = /[a-z]/;
// This pattern matches any lowercase letter from 'a' to 'z'.

// 6. Quantifiers

/*
Quantifiers specify how many times the previous character or group should appear.
Here are some common quantifiers:
*/

// * - Zero or More
/*
The `*` symbol matches zero or more occurrences of the previous character.

Example:
*/

let regexZeroOrMore = /a*/;
// This pattern matches 'a', 'aa', or even no 'a' at all.

// + - One or More
/*
The `+` symbol matches one or more occurrences of the previous character.

Example:
*/

let regexOneOrMore = /a+/;
// This pattern matches 'a', 'aa', etc., but there must be at least one 'a'.

// ? - Zero or One
/*
The `?` symbol matches zero or one occurrence of the previous character.

Example:
*/

let regexZeroOrOne = /a?/;
// This pattern matches either 'a' or nothing at all.

// {n} - Exact Number
/*
The `{n}` quantifier matches exactly `n` occurrences of the previous character.

Example:
*/

let regexExact = /a{3}/;
// This pattern matches exactly three 'a's in a row (e.g., 'aaa').

// 7. Grouping and Capturing

/*
Parentheses `()` are used to group characters together, like wrapping them in a container.
The entire group can then be treated as a single unit.

Additionally, groups are "captured," meaning you can refer back to the matched part of the string later.

Example:
*/

let regexGroup = /(abc)/;
// This pattern matches and captures the exact sequence 'abc'.

// Non-Capturing Groups:
/*
If you don’t want to capture the group, you can use `(?:...)`.

Example:
*/

let regexNonCapture = /(?:abc)/;
// This matches 'abc', but doesn’t capture the matched text.

// 8. Backreferences

/*
Backreferences allow you to refer to a previously captured group.

For example:
*/

let regexBackreference = /(abc)\1/;
// This pattern matches 'abcabc' because `\1` refers to the first captured group `(abc)`.
