<%--
  Created by IntelliJ IDEA.
  User: chrisbsharah
  Date: 12/12/2025
  Time: 9:07 am
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Dashboard</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<%@ page session="true"%>

<div class="container mt-5">

  <div style="position: absolute; top: 20px; right: 20px;">
    <form action="/logout" method="post">
      <button class="btn btn-danger">Logout</button>
    </form>
  </div>

  <h1>Talk Tracker Dashboard</h1>
  <br/>


  <a href="/newtalk" class="btn btn-primary my-3">+ Add a Talk</a>
  <br/>
  <br/>

  <h2>Hi!, ${user.firstName}!</h2>




  <table class="table table-striped mt-3">
    <thead>
    <tr>
      <th>ID</th>
      <th>TalkTitle</th>
      <th>Date</th>
      <th>speaker</th>
      <th>attended</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach var="talk" items="${list}">
      <tr>
        <td>${talk.id}</td>
        <td><a href="/showTalk/${talk.id}" class="btn btn-primary">${talk.title}</a></td>
        <td>${talk.date}</td>
        <td>${talk.owner.firstName}</td>

        <td>
          <c:choose>
            <c:when test="${talk.attendees.contains(user)}">
              <form action="/tasks/${talk.id}/leave" method="post" style="display:inline;">
              </form>
            </c:when>
            <c:otherwise>
              <form action="/tasks/${talk.id}/join" method="post" style="display:inline;">
                <button class="btn btn-sm btn-primary">Tag</button>
              </form>
            </c:otherwise>
          </c:choose>
        </td>
      </tr>
    </c:forEach>
    </tbody>
  </table>
</div>
</body>
</html>

