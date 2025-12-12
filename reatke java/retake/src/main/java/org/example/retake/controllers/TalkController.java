package org.example.retake.controllers;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.example.retake.models.Talk;
import org.example.retake.models.User;
import org.example.retake.services.TalkService;
import org.example.retake.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.webmvc.autoconfigure.WebMvcProperties;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.naming.Binding;

@Controller
public class TalkController {

    @Autowired
    private TalkService talkService;

    @Autowired
    private UserService userServ;

    @GetMapping("/newtalk")
    public String newTalk(Model model , HttpSession session){
        User user = (User) session.getAttribute("loggedInUser");
        if(user == null){
            session.invalidate();
            return "redirect:/";
        }
        model.addAttribute("user" , user);
        model.addAttribute("talk",new Talk());
        return "newtalk";
    }

    @PostMapping("/talk/form")
    public String creatTalk(@Valid @ModelAttribute("talk") Talk talk , BindingResult result ,HttpSession session ,Model model){

        User user=(User)session.getAttribute("loggedInUser");
        if(user == null){
            session.invalidate();
            return "redirect:/";
        }
        if(result.hasErrors()){
            model.addAttribute("talk",talk);
            return "newtalk";
        }
        model.addAttribute("user",user);

        talkService.createTalk(talk,user);
        return "redirect:/showTalk/" +talk.getId();

//     to be in revission

    }
    @GetMapping("/talk/{talkId}/edit")
    public String editTalk(Model model,@PathVariable("talkId") Long id ,HttpSession session){
        User user =(User) session.getAttribute("loggedInUser");
        if(user == null){
            session.invalidate();
            return "redirect:/";
        }
        model.addAttribute("user" ,user);
        model.addAttribute("talk" ,talkService.findTalkById(id));

        return "editTalk";
    }

    @PutMapping("/upadateTalk/form/{talkId}")
    public String updateTalk(@Valid @ModelAttribute("talk") Talk talk, BindingResult result,HttpSession session,@PathVariable("talkId") Long id ,Model model){
        User user =(User) session.getAttribute("loggedInUser");
        if(user == null){
            session.invalidate();
            return "redirect:/";
        }
        if(result.hasErrors()){
            model.addAttribute("talk" ,talk);
            return "editTalk";
        }
        talkService.updateTalk(talk,user);
        return "redirect:/showTalk"+talk.getId();
    }
    @GetMapping("/showTalk/{talkid}")
    public String showTalk(Model model ,HttpSession session ,@PathVariable("talkid") Long id){
        User user =(User) session.getAttribute("loggedInUser");
        if(user == null){
            session.invalidate();
            return "redirect:/";
        }
        model.addAttribute("user" ,user);
        model.addAttribute("talkjoind",talkService.findTalkById(id).getMembers());
        model.addAttribute("talk",talkService.findTalkById(id));

        return "showTalk";

    }
    @DeleteMapping("/talk/{talkId}/delete")
    public String deleteTalk(@PathVariable("talkId") Long id ,HttpSession session){
        User user= (User) session.getAttribute("loggedInUser");
        if(user==null){
            session.invalidate();
            return "redirect:/";
        }
        talkService.deleteTalk(id);
        return "redirect:/dashboard";
    }

    @PostMapping("/talk/{talkid}/join")
    public String join(@PathVariable("talkid") Long talkid,HttpSession session){
        User user=(User) session.getAttribute("loggedInUser");
        if(user==null){
            return "redirect:/";
        }
        talkService.joinTalk(talkid,user);
        return "redirect:/dashboard";
    }

    @PostMapping("/talk/{talkid}/leave")
    public String leaveTalk(@PathVariable("talkid") Long talkid,HttpSession session){
        User sessionUser =(User)session.getAttribute("loggedInUser");
        if(sessionUser ==null){
            return "redirect:/";
        }
        talkService.leaveTalk(talkid,sessionUser);

        return "redirect:/dashboard";
    }












}
