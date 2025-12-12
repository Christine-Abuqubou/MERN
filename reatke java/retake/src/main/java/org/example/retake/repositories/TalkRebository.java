package org.example.retake.repositories;

import org.example.retake.models.Talk;
import org.example.retake.models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TalkRebository extends CrudRepository<Talk, Long> {


    List<Talk> findAll();
    List<Talk> findByMembersNotContains(User user);
    List<Talk> findByMembersContains(User user);
    List<Talk> findByOwner(User user);
}

