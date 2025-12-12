package org.example.retake.services;

import org.example.retake.models.Talk;
import org.example.retake.models.User;
import org.example.retake.repositories.TalkRebository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class TalkService {

    @Autowired
    private TalkRebository talkRepo;

    @Autowired
    private UserService userServ;

    public Talk createTalk(Talk talk, User user){
        talk.setOwner(user);
        talk.getMembers().add(user);
        return talkRepo.save(talk);

    }

    public Talk updateTalk(Talk updateTalk, User user){
        Talk existingTalk=talkRepo.findById(updateTalk.getId()).orElse(null);
        if (existingTalk== null)return null;
        existingTalk.setTitle((updateTalk.getTitle()));

        return talkRepo.save(existingTalk);
    }
    public List<Talk> allTalks(){
        return talkRepo.findAll();
    }

    public Talk findTalkById(Long id){
        return talkRepo.findById(id).orElse(null);


    }

    public void joinTalk(Long talkId,User user){
        Talk talk =findTalkById(talkId);
        if(talk != null && !talk.getMembers().contains(user)){
            talk.getMembers().add(user);
            talkRepo.save(talk);
        }
    }

    public void leaveTalk(Long talkId,User user){
        User dbUser = userServ.findUserById(user.getId());
        Talk talk = findTalkById(talkId);
                if (!(talk.getOwner().getId()== dbUser.getId())){
                    talk.getMembers().remove(dbUser);
                    talkRepo.save(talk);
                }
    }

    public List<Talk> findByMembersNotContains(User user){
        return talkRepo.findByMembersNotContains(user);
    }

    public List<Talk> findUserTalks(User user){
        List<Talk> created = talkRepo.findByOwner(user);
        List<Talk> joined = talkRepo.findByMembersContains(user);

        Set<Talk> combined = new HashSet<>();
        combined.addAll(created);
        combined.addAll(joined);

        return new ArrayList<>(combined);
    }
    public void deleteTalk(Long id){
        talkRepo.deleteById(id);
    }


}
