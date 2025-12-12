package org.example.retake.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import org.example.retake.models.User;



@Repository
public interface UserReposiroty extends CrudRepository<User, Long> {

    Optional<User> findByEmail(String email);

}
