import { ElementRef } from '@angular/core';
import { ClickOutSideDirective } from './click-out-side.directive';

describe('ClickOutSideDirective', () => {
  let elementRefMock: ElementRef;

  beforeEach(() => {
    elementRefMock = new ElementRef(document.createElement('div'));
  });

  it('should create an instance', () => {
    const directive = new ClickOutSideDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});

