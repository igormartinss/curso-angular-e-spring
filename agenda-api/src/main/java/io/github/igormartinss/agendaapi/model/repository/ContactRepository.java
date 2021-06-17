package io.github.igormartinss.agendaapi.model.repository;

import io.github.igormartinss.agendaapi.model.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ContactRepository extends JpaRepository<Contact, Integer> {
    Optional<List<Contact>> findbyFavoriteTrue();
}
