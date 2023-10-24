# Unbiased
The Official Repository for Unbiased, The Open Source Software for Hiring
Equality.

Everyone is biased, it's how humanity works. Some people are aware of their bias, but many are not. This bias can significantly impact hiring practices. These biases are usually identifying portions of a CV or resume. These are the most obviously biased portions of a resume: Name (can indicate race or gender), Birthdate (indicates age, which can be discriminated against if you are older or younger.), Photo (why does your look matter for a position?), Full address (can indicate financial status, race/ethnicity), Gender(it does not matter what gender you identify as to accomplish a job), Email ( often has your name, which can indicate race or gender). This is a brief list and not complete. Please keep in mind there are many biases possible. This software is starting as an MVP for proof of concept. 

# Prerequisites
- [Tilt](https://tilt.dev/)
- [minikube](https://minikube.sigs.k8s.io/docs/start/)

# How to run
```bash
minikube start
tilt up
```

You can view Tilt's output by pressing your spacebar, or by going to http://localhost:10350 in your browser.

Once tilt finishes building, you can access the backend documentation from http://localhost:3000/api, or you can visit
the frontend from http://localhost:4000/create.

