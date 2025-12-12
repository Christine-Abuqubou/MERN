package org.example.retake.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;
import java.util.List;
import java.util.Date;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull()
    @NotEmpty(message = "firstName is required!")
    @Size(min = 3, max = 30, message = "firstName must be between 3 and 20 characters")
    private String firstName;

    @NotNull()
    @NotEmpty(message = "lastName is required!")
    @Size(min = 3, max = 30, message = "lastName must be between 3 and 20 characters")
    private String lastName;


    @NotEmpty(message = "Email is required!")
    @NotNull
    @Email(message = "Please enter a valid email!")
    @Column(unique = true)
    private String email;

    @NotEmpty(message = "Password is required!")
    @NotNull
    @Size(min = 8, max = 128, message = "Password min 8  characters")
    private String password;

    @Transient
    @NotEmpty(message = "Confirm Password is required!")
    @Size(min = 8, max = 128, message = "Password min 8  characters")
    private String confirm;

    @OneToMany(mappedBy = "owner")
    private List<Talk> ownedTalk;

    @ManyToMany
    @JoinTable(
            name="user_projects",
            joinColumns = @JoinColumn(name="user_id"),
            inverseJoinColumns = @JoinColumn(name="talk_id"))

    private List<Talk> joinedTalk;

    public List<Talk> getOwnedTalk() {
        return ownedTalk;
    }

    public void setOwnedTalk(List<Talk> ownedTalk) {
        this.ownedTalk = ownedTalk;
    }

    public List<Talk> getJoinedTalk() {
        return joinedTalk;
    }

    public void setJoinedTalk(List<Talk> joinedTalk) {
        this.joinedTalk = joinedTalk;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    public User() {}
    public User(String firstName,String email,String lastName,String password,String confirm) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.confirm=confirm;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }




    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirm() {
        return confirm;
    }

    public void setConfirm(String confirm) {
        this.confirm = confirm;
    }
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }


}


