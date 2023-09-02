package com.example.controller;

import com.example.entity.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/api/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        System.out.println(user);
        userService.register(user);
        return ResponseEntity.ok("使用注册成功");
    }

    @PostMapping("/api/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        if (userService.login(user)) {
            return ResponseEntity.ok("登录成功");
        }

        else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("登录失败");
        }
    }


}
