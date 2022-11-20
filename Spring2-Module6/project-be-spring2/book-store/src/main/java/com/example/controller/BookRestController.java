package com.example.controller;

import com.example.model.Book;
import com.example.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/public")
public class BookRestController {
    @Autowired
    private IBookService iBookService;

    @GetMapping("/user/list")
    public ResponseEntity<Page<Book>> findAll(@PageableDefault(page = 0, size = 8) Pageable pageable,
                                              @RequestParam Optional<String> name){
        String nameVal = name.orElse("");
        Page<Book> bookPage = iBookService.findAllAndSearchTitleBook(nameVal, pageable);
        if(bookPage.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(bookPage, HttpStatus.OK);
        }
    }
}
