# building the container
```bash
cd app
docker build -t unbiased .
```

# running the container
```bash
docker run --rm -it -p 3000:3000 unbiased
```

With the container running, you can access the API documentation at http://localhost:3000/api
