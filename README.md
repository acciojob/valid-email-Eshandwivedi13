# Valid Email

# Instructions

Write a function named validEmail that takes a string as input and returns a boolean indicating whether or not the string is a valid email address.

## Examples

```
validEmail('abc@example.com') // true
validEmail('xyz@abc.com.in') // true
validEmail('john.doe@com.') // false
validEmail('@example.com') // false
validEmail('') // false
```

## Acceptance Criteria

- When a valid email is entered, validEmail should return true.
- When an invalid email is entered, validEmail should return false.
- validEmail should properly handle email addresses with various domain extensions such as .com, .co.in, .edu, etc.
- validEmail should properly handle email addresses with different combinations of characters before and after the @ symbol.
- validEmail should properly handle edge cases such as empty input strings.
