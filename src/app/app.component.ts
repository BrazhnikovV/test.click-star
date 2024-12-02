import {Component} from '@angular/core';
declare var $: any;


/**
 * @classdesc - Главный компонент приложения
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /**
   * constructor
   */
  constructor() {
    this.modalEventsInit();
  }

  /**
   * @name modalEventsInit
   * @private
   */
  private modalEventsInit(): void {
    $().ready(function () {
      $('.btn-close').on( "click", function() {
        $('#modal').modal('hide');
      });

      $('#content .a-modal').on( "click", function() {
        $('#modal').modal('show');
      });
    })
  }
}
