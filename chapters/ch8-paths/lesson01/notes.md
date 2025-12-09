# URL Paths

The URL path comes right after the domain (or port if one is provided) in a URL string.

For instace, give: `http://testdomain.com/root/next`
The path is: `/root/next`

Most static websites use paths as a direct mapping to the path to the server's file system.
But since a URL is just a string and servers can decide what to do with them, many dynamic
websites don't map one by one like this.

## RESTFUL APIs

`Representational State Transfer, or REST` is a popular convention that many HTTP servers follow.
Not all HTTP APIs are "REST APIs" or "RESTful".

REST is a set of convnetions about how HTTP APIs should be built.

### Separate and Agnostic

The big idea behind REST is that resources are transferred via well-recognized, language-agnostic
client/server interactions.

### Stateless

A RESTful architecture is stateless, which means the server does not need to know what state the
client is in, nor does the client need to know what state the server is in.

### Paths in Rest

In a RESTful API, the last section of the path of a URL specifies the resource.
