import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() shape: 'round' | 'default' = 'round';
  @Input() disabled: 'true' | 'false' = 'false';
  @Input() expand: 'full' | 'block' | 'none' = 'none'
  constructor() {}

  ngOnInit() {}
}
