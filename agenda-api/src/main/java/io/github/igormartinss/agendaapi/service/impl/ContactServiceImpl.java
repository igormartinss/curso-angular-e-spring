package io.github.igormartinss.agendaapi.service.impl;

import io.github.igormartinss.agendaapi.model.entity.Contact;
import io.github.igormartinss.agendaapi.model.repository.ContactRepository;
import io.github.igormartinss.agendaapi.service.ContactService;

import java.util.List;
import java.util.Optional;

public class ContactServiceImpl implements ContactService {

    private ContactRepository contactRepository;

    @Override
    public Contact save(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public Optional<Contact> findById(Integer id) {
        return contactRepository.findById(id);
    }

    @Override
    public List<Contact> findAll() {
        return contactRepository.findAll();
    }

    @Override
    public Optional<List<Contact>> findFavorites() {
        return contactRepository.findbyFavoriteTrue();
    }

    public void deleteById(Integer id) {
        contactRepository.deleteById(id);
    }
}
