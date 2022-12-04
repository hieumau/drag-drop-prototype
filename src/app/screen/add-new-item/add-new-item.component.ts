import {Component, OnInit} from '@angular/core';
import {Item} from "../../shared/model/item";

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit {

  names: any[] = ['name 1', 'name 2', 'name 3', 'name 4', 'name 5',]
  prices: any[] = [100, 200, 300, 400, 500]
  inItemList: Item[] = []
  outItemList: Item[] = []

  constructor() {
  }

  ngOnInit(): void {

    this.inItemList.push({
      name: 'Name 1',
      price: 100,
      imageBase64: ''
    })
  }

  newItem: Item = new Item()

  fileToUpload: any;
  imageUrl: any;

  handleFileInput(eventTarget?: any) {
    let file = eventTarget.files
    if (file) {
      this.fileToUpload = file.item(0);

      //Show image preview
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.newItem.imageBase64 = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  }

  addItem(destination: string) {
    if (this.newItem == null
      || this.newItem.name == null
      || this.newItem.price == null
      || this.newItem.imageBase64 == null) {
      return
    }
    if (destination == 'in') {
      this.inItemList.push(this.newItem)
    }
    if (destination == 'out') {
      this.outItemList.push(this.newItem)
    }
    this.newItem = new Item()
  }
}
