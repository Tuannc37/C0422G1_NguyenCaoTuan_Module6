import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Book} from "../model/book";
import {TokenStorageService} from "../service/token-storage.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  keyword: string = "";
  page: number = 0;
  totalPage: number;
  bookList: Book[] = [];
  role: string;

  constructor(private bookService: BookService,private toast:ToastrService, private router: Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.searchAndListBook();
    this.role = this.tokenStorageService.getUser().roles[0];
  }

  searchAndListBook() {
    this.page = 0;
    return this.bookService.findByAllAndSearchTitleBook(this.keyword, this.page).subscribe(data => {

      if(data){
        // @ts-ignore
        this.bookList = data.content;
        // @ts-ignore
        this.totalPage = data.totalPages;
        console.log(data)
      }
      else {
        this.toast.error("Tên bạn tìm không có trong danh sách","Thông báo")
      }

    }, error => {
      // this.router.navigateByUrl('/share/error');
      // this.toast.error('Bạn không có quyền vào trang này', "Thông báo")
    })
  }

  previous() {
    this.page = this.page - 1;
    return this.bookService.findByAllAndSearchTitleBook(this.keyword, this.page).subscribe(data => {
      // @ts-ignore
      this.bookList = data.content;
      // @ts-ignore
      this.totalPage = data.totalPages;
    })
  }

  next() {
    this.page = this.page + 1;
    return this.bookService.findByAllAndSearchTitleBook(this.keyword, this.page).subscribe(data => {
      // @ts-ignore
      this.bookList = data.content;
      // @ts-ignore
      this.totalPage = data.totalPages;
    })
  }

}
