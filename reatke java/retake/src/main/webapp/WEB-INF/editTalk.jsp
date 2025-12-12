<%--
  Created by IntelliJ IDEA.
  User: chrisbsharah
  Date: 12/12/2025
  Time: 1:43 pm
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
  <title>New task</title>
  <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet">
</head>
<body class="container mt-5">
<div style="position: absolute; top: 20px; right: 20px;">
  <form action="/logout" method="post">
    <button class="btn btn-danger">Logout</button>
  </form>
</div>

<a href="/dashboard"
   class="fw-bold text-decoration-none d-inline-block px-3 py-2 rounded"
   style="background-color: #1a237e; color: #ffffff; border: 1px solid #151970;">
  Back to the dashboard
</a>



<h2>Welcome, ${user.firstName}!</h2>


<h1 class="mb-4">update the Talk</h1>
<form:form action="/talk/form" method="post"
           modelAttribute="talk" class="w-50">
  <div class="mb-3">
    <form:label path="title" class="form-label"> Talk</form:label>
    <form:input path="title" class="form-control" />
    <form:errors path="title" class="text-danger" />
  </div>

  <div class="mb-3">
    <form:label path="date" class="form-label">Talk Date </form:label>
    <form:input path="date" class="form-control" type="date"
                placeholder="MM/dd/yyyy" />
    <form:errors path="date" class="text-danger" />
  </div>

  <div class="mb-3">
    <form:label path="details" class="form-label">Talk Details</form:label>
    <form:input path="details" class="form-control" />
    <form:errors path="details" class="text-danger" />
  </div>

  <button type="submit" class="btn btn-success">Confirm</button>
</form:form>

</body>
</html>