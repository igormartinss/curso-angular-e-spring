package io.github.igormartinss.agendaapi.controller;

import io.github.igormartinss.agendaapi.model.entity.Contact;
import io.github.igormartinss.agendaapi.service.ContactService;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Part;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin("*")
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
    public ResponseEntity<Page<Contact>> listAll(@RequestParam(value = "page", defaultValue = "0") Integer page,
                                                 @RequestParam(value = "pageSize", defaultValue = "10")  Integer pageSize) {
        return new ResponseEntity<Page<Contact>>(contactService.findAll(page, pageSize), HttpStatus.OK);
    }

    @PatchMapping("/{id}/favorite")
    public void favorite(@PathVariable Integer id) {
        Optional<Contact> contact = contactService.findById(id);
        contact.ifPresent(c -> {
            boolean favorite = c.getFavorite() == Boolean.TRUE ;
            c.setFavorite(!favorite);
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

    @PutMapping("{id}/photo")
    public byte[] addPhoto(@PathVariable Integer id, @RequestParam("photo") Part photo) {
        Optional<Contact> contact = contactService.findById(id);

        return contact.map(c -> {
           try {
               InputStream is = photo.getInputStream();
               byte[] bytes = new byte[(int)photo.getSize()];
               IOUtils.readFully(is, bytes);
               c.setPhoto(bytes);
               contactService.save(c);
               is.close();
               return bytes;
           }catch (IOException e) {
               return null;
           }
        }).orElse(null);

    }
}
