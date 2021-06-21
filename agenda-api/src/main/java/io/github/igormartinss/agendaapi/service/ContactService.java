package io.github.igormartinss.agendaapi.service;

import io.github.igormartinss.agendaapi.model.entity.Contact;
import io.github.igormartinss.agendaapi.model.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact save(Contact contact) {
        return contactRepository.save(contact);
    }

    public Optional<Contact> findById(Integer id) {
        return contactRepository.findById(id);
    }

    public Page<Contact> findAll(Integer page, Integer pageSize) {
        PageRequest pageRequest = PageRequest.of(page, pageSize);
        return contactRepository.findAll(pageRequest);
    }

    public Optional<List<Contact>> findFavorites() {
        return contactRepository.findByFavoriteTrue();
    }

    public void deleteById(Integer id) {
        contactRepository.deleteById(id);
    }
}

