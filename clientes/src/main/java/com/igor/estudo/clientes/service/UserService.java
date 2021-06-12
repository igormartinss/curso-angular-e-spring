package com.igor.estudo.clientes.service;

import com.igor.estudo.clientes.model.entity.User;
import com.igor.estudo.clientes.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Login não encontrado"));

        return org.springframework.security.core.userdetails.User.builder().username(user.getUsername()).password(user.getPassword()).roles("User").build();
    }

    public User save(User user) {
        if(userRepository.findByUsername(user.getUsername()).orElse(null) != null){
            throw new RuntimeException("Usuário já cadastrado");
        }
        return userRepository.save(user);
    }
}
