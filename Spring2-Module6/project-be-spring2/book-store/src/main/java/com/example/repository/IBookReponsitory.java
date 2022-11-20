package com.example.repository;

import com.example.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookReponsitory extends JpaRepository<Book,Long> {
    Page<Book> findByTitleContaining(String name, Pageable pageable);
}
