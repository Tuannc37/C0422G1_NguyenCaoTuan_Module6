package com.example.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class LoginResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String userName;
    private List<String> roles;

    public LoginResponse(String jwt, String username, List<String> roles) {
        this.token = jwt;
        this.userName = username;
        this.roles = roles;
    }
}

