<%--
  Created by IntelliJ IDEA.
  User: chrisbsharah
  Date: 12/12/2025
  Time: 2:44 pm
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
  <title>Dashboard</title>
  <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet">
</head>
<body>
<%@ page session="true"%>


<div class="container mt-5">

  <h2>Welcome, ${user.firstName}!</h2>

  <div style="position: absolute; top: 20px; right: 20px;">
    <form action="/logout" method="post">
      <button class="btn btn-danger">Logout</button>
    </form>
  </div>

  <a href="/newtalk" class="btn btn-primary">+ add a Talk</a>

  <h3>TAlK Dashboard</h3>
  <table class="table table-striped mt-3">
    <thead>
    <tr>
      <th>ID</th>
      <th>Talk</th>
      <th>Date</th>
      <th>speaker</th>
      <th>attended</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach var="talk" items="${allTalk}">
      <tr>

        <c:if test="${talk.owner.id == userId}">
          <td>${talk.id}</td>
          <td><a href="/showTalk/${talk.id}" class="btn btn-primary">${talk.title}</a></td>
          <td>${talk.date}</td>
          <td>${talk.owner.firstName}</td>
        </c:if>

        <c:if test="${talk.owner.id != userId}">

          <td>${talk.id}</td>
          <td><a href="/showTalk/${talk.id}" class="btn btn-primary">${talk.title}</a></td>
          <td>${talk.date}</td>
          <td>${talk.owner.firstName}</td>

<%--          <td><c:if test="${talk.members}">--%>

<%--          <form action="/talk/${talk.id}/join" method="post"--%>
<%--                style="display: inline;">--%>
          <c:if test="${not empty talk.members && !talk.members.contains(user)}">
            <form action="/talk/${talk.id}/join" method="post" style="display: inline;">
              <button class="btn btn-sm btn-primary">Attend</button>
            </form>
          </c:if>
            <button class="btn btn-sm btn-primary">attended</button>
          </form>
        </c:if> <c:if test="${talk.owner.id == userId}">
          <form action="/talk/${talk.id}/leave" method="post"
                style="display: inline;">

          </form></td>
        </c:if>

        </c:if>

      </tr>
    </c:forEach>
    </tbody>
  </table>
</body>
</html>