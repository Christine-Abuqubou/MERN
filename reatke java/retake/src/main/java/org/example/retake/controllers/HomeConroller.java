package org.example.retake.controllers;

import org.example.retake.models.Talk;
import org.example.retake.services.TalkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import org.example.retake.models.LoginUser;

import org.example.retake.models.User;
import org.example.retake.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

import java.util.List;

@Controller
public class HomeConroller {

    @Autowired
    private UserService userServ;

    @Autowired
    private TalkService talkService;


    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index";
    }

    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser,
                           BindingResult result, Model model, HttpSession session) {
        User registeredUser = userServ.register(newUser, result);

        if(result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "index";
        }

        session.setAttribute("loggedInUser", registeredUser);
        return "redirect:/dashboard";
    }


    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin,
                        BindingResult result, Model model, HttpSession session) {
        User user = userServ.login(newLogin, result);

        if(result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index";
        }

        session.setAttribute("loggedInUser", user);
        return "redirect:/dashboard";
    }



    @GetMapping("/dashboard")
    public String home(HttpSession session, Model model) {

        User user = (User)session.getAttribute("loggedInUser");
        if (user == null) {
            session.invalidate();
            return "redirect:/";
        }

        List<Talk> myTasks = talkService.findUserTalks(user);

        model.addAttribute("user", user);
        model.addAttribute("list", myTasks);
        model.addAttribute("allTask", talkService.allTalks());
        model.addAttribute("notContain", talkService.findByMembersNotContains(user));

        return "dashboard";
    }





    @PostMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
}