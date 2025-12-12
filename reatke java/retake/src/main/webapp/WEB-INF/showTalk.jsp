<%--
  Created by IntelliJ IDEA.
  User: chrisbsharah
  Date: 12/12/2025
  Time: 1:46 pm
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Talk Details</title>
  <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet">
</head>
<body>

<div class="container mt-4 p-4 border rounded bg-light shadow">

  <div style="position: absolute; top: 20px; right: 20px;">
    <div style="position: absolute; top: 20px; right: 20px;">
      <form action="/logout" method="post">
        <button class="btn btn-danger">Logout</button>
      </form>
    </div>
  </div>


  <a href="/dashboard"
     class="fw-bold text-decoration-none d-inline-block px-3 py-2 rounded"
     style="background-color: #1a237e; color: #ffffff; border: 1px solid #151970;">
    Back to the dashboard
  </a>



  <h2>Welcome, ${user.firstName}!</h2>



  <h1 class="text-primary">${talk.title}</h1>

  <p class="text-primary">${talk.details}</p>

  <p>your dead line ${talk.date}</p>

  <c:if test="${talk.owner.id == user.id}">
  <form action="/talk/${talk.id}/delete" method="post"
        class="d-inline">
    <input type="hidden" name="_method" value="delete" />
    <button class="btn btn-danger">Delete the Talk</button>
  </form>
  <a href="/talk/${talk.id}/edit" class="btn btn-primary">Edit the
    Talk</a>
  <table class="table table-striped mt-3">

    <thead>
    <tr>
      <th>inProgress</th>

    </tr>
    </thead>
    <tbody>
    <c:forEach var="userT" items="${talkjoind}">
      <tr>
        <td>${userT.firstName}</td>
        <td><form action="/talk/${talk.id}/delete" method="post"
                  class="d-inline">
          <input type="hidden" name="_method" value="delete" />
          <button class="btn btn-danger">Delete</button>
        </form></td>

      </tr>
    </c:forEach>
    </tbody>
  </table>
</div>
</c:if>

</div>


</body>
</html>
