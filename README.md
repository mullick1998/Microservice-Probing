# Microservice Probing

One of our developers created a microservice that was supposed to have the 
following properties:

- Has REST endpoint: `/short/<ARG>`.
- <ARG> can be any combination of exactly two alphanumeric characters, e.g.: 
    "Ab", "12", "a2".
- Returns json with 'uid' key and value of exactly 32 alphanumeric characters, 
    e.g.: `{"uid":"855f938d67b52b5a7eb124320a21a139"}`.


Bonus: the same for the `long/` endpoint, that takes an argument that 
consists out of exactly three alphanumeric characters

# Run it normally using:
```
node index.js
```

Check [http://0.0.0.0:8080/short/bc](http://0.0.0.0:8080/short/bc)

Check [http://0.0.0.0:8080/long/ad1](http://0.0.0.0:8080/long/ad1)

## Building Docker image
```
docker build -t asg1 .
```


