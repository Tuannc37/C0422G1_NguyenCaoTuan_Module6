package com.example.repository;

import com.example.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IBookReponsitory extends JpaRepository<Book,Long> {
    Page<Book> findByTitleContainingOrderByReleaseDateDesc(String name, Pageable pageable);

}
