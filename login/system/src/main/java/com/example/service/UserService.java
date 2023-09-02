package com.example.service;

import com.example.dao.UserDao;
import com.example.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    public void register(User user) {
        userDao.save(user);
        System.out.println("注册成功");
    }

    public boolean login(User user) {
        User storeUser = userDao.findByUsername(user.getUsername());
        return storeUser !=null && storeUser.getPassword().equals(user.getPassword());
    }
}
