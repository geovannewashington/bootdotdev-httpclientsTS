## Further Dissecting a URL

There are 8 main parts to a URL, though not all the sections are always present.

Example:

`http://waynelagner:pwn3d@jello.app:8080/boards?sort=createdAt#id`

Where

- protocol: http
- username: waynelagner
- password: pwn3d
- hostname: jello.app
- port: 8080
- path: boards
- query: sort=createdAt
- fragment: fragment

No need to memorize everything...

Only protocol and hostname are mandatory, so if any of them two are missing, the URL wouldn't be
considered valid.

Two of them, if not provided will fallback to default values:

- path: (defaults /)
- port: (defaults to 80 or 433)
