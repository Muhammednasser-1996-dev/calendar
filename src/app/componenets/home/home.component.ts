import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { CalendarOptions } from '@fullcalendar/angular';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('external', { static: true }) externalEvents: ElementRef;
  @ViewChild('checkboxRef', { static: true }) public inputs: ElementRef<
    HTMLInputElement
  >;
  isChecked = false;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    droppable: true,
    drop: function (info) {
      if (document.getElementById('checkBox')['checked']) {
        info.draggedEl.parentNode.removeChild(info.draggedEl);
      }
    },
    events: [
      { title: 'All Day Event', date: '2020-10-01', border: 'none' },
      { title: 'Birth day Party', date: '2020-10-09', backgroundColor: 'teal', border: 'none' },
      { title: 'Click For google', date: '2020-10-05', backgroundColor: '#09c', border: 'none' },
      { title: 'Metting', date: '2020-10-12', backgroundColor: 'grey' , border: 'none'},
      { title: 'Lunch', date: '2020-10-12', backgroundColor: 'tomato', border: 'none' }
    ],
 
  };
 
  ngAfterViewInit() {}
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends; // toggle the boolean!
  }


  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  constructor(
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    new Draggable(this.externalEvents.nativeElement, {
      itemSelector: '.fc-event',
      eventData: function (element) {
        return {
          title: element.innerText,
        };
      },
    });
  }
}
