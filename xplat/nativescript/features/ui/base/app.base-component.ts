import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@xplat-clean/core';
import { AppService } from '@xplat-clean/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
