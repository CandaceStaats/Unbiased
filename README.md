# Unbiased
The Official Repository for Unbiased, The Open Source Software for Hiring
Equality

# Prerequisites
- [Tilt](https://tilt.dev/)
- [minikube](https://minikube.sigs.k8s.io/docs/start/)


$oldPath = [Environment]::GetEnvironmentVariable('Path', [EnvironmentVariableTarget]::Machine)
if ($oldPath.Split(';') -inotcontains 'C:\Users\dmonf\bin\tilt.exe'){
  [Environment]::SetEnvironmentVariable('Path', $('{0};C:\Users\dmonf\bin\tilt.exe' -f $oldPath), [EnvironmentVariableTarget]::Machine)
}
 $env:Path = 'C:\Users\dmonf\bin\tilt.exe;' + $env:Path  

# How to run
```bash
minikube start
tilt up
```

You can view Tilt's output by pressing your spacebar, or by going to http://localhost:10350 in your browser.

Once tilt finishes building, you can access the backend documentation from http://localhost:3000/api, or you can visit
the frontend from http://localhost:4000/create.

