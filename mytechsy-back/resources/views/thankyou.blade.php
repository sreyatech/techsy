<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<!-- http://127.0.0.1:8000/api/TechSy/MOJO1c02C05N96553992/Credit -->

<div class="jumbotron text-center">
  <h1 class="display-3">Thank You!</h1>
  <h2>Your payment id : {{ $pid }}</h2>
  <h2>Your payment status : {{ $status }}</h2>
  <p class="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
  <hr>
  <p>
    Having trouble? <a href="">Contact us</a>
  </p>
  <p class="lead">
    <a class="btn btn-primary btn-sm" href="https://bootstrapcreative.com/" role="button">Continue to homepage</a>
  </p>
</div>
</body>
</html>