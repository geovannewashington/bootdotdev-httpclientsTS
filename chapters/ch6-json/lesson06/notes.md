Parsing JSON

JSON.parse() throws an error if it is given a string that isn't valid json.
So it's good practice to always enclose it in try/catch blocks.

e.g.:

```JavaScript
const malformedJsonString = '{"name": "John", "age": 30, }'; // Malformed JSON with trailing comma
const validJsonString = '{"name": "Jane", "age": 25}';

function parseJsonSafely(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    console.log("Successfully parsed:", data);
    return data;
  } catch (error) {
    console.error("JSON parsing error:", error.message);
    return null; // Or handle the error in another appropriate way
  }
}

parseJsonSafely(malformedJsonString);
parseJsonSafely(validJsonString);
```
