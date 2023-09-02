package com.example.dao;

import com.example.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


@Mapper
public interface UserDao {

    //查询重复的用户名
    @Select("select * from user where username= #{username}")
    User findByUsername(String username);

    @Insert("insert into user (username,password) values (#{username},#{password})")
    void save(User user);

}
