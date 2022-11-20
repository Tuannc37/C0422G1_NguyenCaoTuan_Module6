package com.example.service.impl;

import com.example.model.Book;
import com.example.repository.IBookReponsitory;
import com.example.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BookService implements IBookService {
    @Autowired
    private IBookReponsitory iBookReponsitory;

    @Override
    public Page<Book> findAllAndSearchTitleBook(String name, Pageable pageable) {
        return iBookReponsitory.findByTitleContaining(name,pageable);
    }
}
