package io.github.igormartinss.agendaapi.service;

import io.github.igormartinss.agendaapi.model.entity.Contact;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ContactService {
    Optional<Contact> findById(Integer id);
    List<Contact> findAll();
    Optional<List<Contact>> findFavorites();

    Contact save(Contact contact);

    void deleteById(Integer id);
}
