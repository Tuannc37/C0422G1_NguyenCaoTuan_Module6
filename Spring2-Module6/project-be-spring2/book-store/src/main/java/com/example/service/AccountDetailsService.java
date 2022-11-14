package com.example.service;

import com.example.model.Account;
import com.example.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccountDetailsService implements UserDetailsService {
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String userName)  {
        Account account = accountRepository.findAccountByUserName(userName);
        if(account==null){
            throw new UsernameNotFoundException("Tài khoản " + userName + " không tồn tại");
        }

        List<GrantedAuthority> authorities = account.getAppRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getRole()))
                .collect(Collectors.toList());

        return new User(account.getUserName(),account.getPassword(),authorities);
    }
}
