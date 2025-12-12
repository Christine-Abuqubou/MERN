<%--
  Created by IntelliJ IDEA.
  User: chrisbsharah
  Date: 12/12/2025
  Time: 8:56 am
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Login & Registration</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">
<h1>Login & Registration</h1>

<div class="container py-5">
  <div class="row justify-content-center">

    <div class="col-md-5">
      <div class="card shadow-sm mb-4">
        <div class="card-body">
          <h3 class="text-center mb-4">Create Account</h3>


          <form:form action="/register" method="post" modelAttribute="newUser">

            <div class="mb-3">
              <form:input path="firstName" class="form-control" placeholder="First Name"/>
              <form:errors path="firstName" cssClass="text-danger small"/>
            </div>

            <div class="mb-3">
              <form:input path="lastName" class="form-control" placeholder="Last Name"/>
              <form:errors path="lastName" cssClass="text-danger small"/>
            </div>

            <div class="mb-3">
              <form:input path="email" class="form-control" placeholder="Email"/>
              <form:errors path="email" cssClass="text-danger small"/>
            </div>

            <div class="mb-3">
              <form:password path="password" class="form-control" placeholder="Password"/>
              <form:errors path="password" cssClass="text-danger small"/>
            </div>

            <div class="mb-3">
              <form:password path="confirm" class="form-control" placeholder="Confirm Password"/>
              <form:errors path="confirm" cssClass="text-danger small"/>
            </div>

            <button type="submit" class="btn btn-primary w-100">Register</button>

          </form:form>
        </div>
      </div>
    </div>

    <div class="col-md-5">
      <div class="card shadow-sm">
        <div class="card-body">
          <h3 class="text-center mb-4">Sign In</h3>

          <form:form action="/login" method="post" modelAttribute="newLogin">

            <div class="mb-3">
              <form:input path="email" class="form-control" placeholder="Email"/>
              <form:errors path="email" cssClass="text-danger small"/>
            </div>

            <div class="mb-3">
              <form:password path="password" class="form-control" placeholder="Password"/>
              <form:errors path="password" cssClass="text-danger small"/>
            </div>

            <button type="submit" class="btn btn-success w-100">Login</button>

          </form:form>
        </div>
      </div>
    </div>

  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
