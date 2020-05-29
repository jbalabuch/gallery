import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  pictures = [
    {
      src:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      alt: 'opis 1',
    },
    {
      src:
        'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
      alt: 'opis 2',
    },
    {
      src:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      alt: 'opis 3',
    },
  ];

  currentIndex = 0;

  constructor() {
    setInterval(() => {
      if (this.currentIndex > 1) {
        this.currentIndex = 0;
      } else this.currentIndex = this.currentIndex + 1;
    }, 3000);
  }

  handleClick(index) {
    this.currentIndex = index;
  }

  handlePrev() {
    this.currentIndex = this.currentIndex - 1;
  }

  handleNext() {
    this.currentIndex = this.currentIndex + 1;
  }
}
