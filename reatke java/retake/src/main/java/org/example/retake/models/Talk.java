package org.example.retake.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "talk")
public class Talk {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required")
    @Size(min = 4, max = 100, message = "Title must be between 4 and 100 characters")
    private String title;
//    @NotNull
//    private String speaker;


    @NotBlank(message = "detailes is required")
    @Size(min = 4, max = 100, message = "details must be more than 20 char and less than 500")
    private String details;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "Date must be provided.")
    @FutureOrPresent(message = "Date must not be in the past.")
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    @ManyToMany
    @JoinTable(
            name = "users_projects",
            joinColumns = @JoinColumn(name = "talk_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> members = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "talk_attendees",
            joinColumns = @JoinColumn(name = "talk_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> attendees = new ArrayList<>();
    private Date createdAt;
    private Date updatedAt;

    public Talk()
    {}

    public Talk(String title, String details, LocalDate date) {
        this.title = title;
//        this.speaker = speaker;
        this.details = details;
        this.date = date;
    }

    public Long getId() {
        return id;
    }



    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

//    public String getSpeaker() {
//        return speaker;
//    }
//
//    public void setSpeaker(String speaker) {
//        this.speaker = speaker;
//    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public List<User> getMembers() {
        return members;
    }

    public void setMembers(List<User> members) {
        this.members = members;
    }

    public List<User> getAttendees() {
        return attendees;
    }

    public void setAttendees(List<User> attendees) {
        this.attendees = attendees;
    }
    @PrePersist
    protected void onCreate() { this.createdAt = new Date(); }
    @PreUpdate
    protected void onUpdate() { this.updatedAt = new Date(); }
}
