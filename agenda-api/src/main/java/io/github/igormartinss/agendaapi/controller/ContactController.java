package io.github.igormartinss.agendaapi.controller;

import io.github.igormartinss.agendaapi.model.entity.Contact;
import io.github.igormartinss.agendaapi.model.repository.ContactRepository;
import io.github.igormartinss.agendaapi.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public ResponseEntity<Contact> save(@RequestBody Contact contact){
        Contact savedContact = new Contact();
        try {
            savedContact = contactService.save(contact);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(savedContact, HttpStatus.ACCEPTED);
    }

    @GetMapping
    public ResponseEntity<List<Contact>> listAll() {
        try {
            return new ResponseEntity<>(contactService.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/{id}/favorite")
    public void favorite(@PathVariable Integer id, @RequestBody Boolean isFavorite) {
        Optional<Contact> contact = contactService.findById(id);
        contact.ifPresent(c -> {
            c.setFavorite(isFavorite);
            contactService.save(c);
        });
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        try {
            contactService.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(HttpStatus.OK);
    }
}
