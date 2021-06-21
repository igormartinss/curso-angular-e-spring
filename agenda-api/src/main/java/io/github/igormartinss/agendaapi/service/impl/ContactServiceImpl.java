package io.github.igormartinss.agendaapi.service.impl;

import io.github.igormartinss.agendaapi.model.entity.Contact;
import io.github.igormartinss.agendaapi.model.repository.ContactRepository;
import io.github.igormartinss.agendaapi.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;


public class ContactServiceImpl {

    @Autowired
    private ContactRepository contactRepository;


    public Contact save(Contact contact) {
        return contactRepository.save(contact);
    }

    public Optional<Contact> findById(Integer id) {
        return contactRepository.findById(id);
    }

    public List<Contact> findAll() {
        return contactRepository.findAll();
    }

    public Optional<List<Contact>> findFavorites() {
        return contactRepository.findByFavoriteTrue();
    }

    public void deleteById(Integer id) {
        contactRepository.deleteById(id);
    }
}
