import { Component, OnInit } from '@angular/core';
import { Day } from '../interfaces/day.model';

@Component({
  selector: 'app-calendar-g',
  templateUrl: './calendar-g.component.html',
  styleUrls: ['./calendar-g.component.css']
})
export class CalendarGComponent implements OnInit{
  date: any = new Date();
  days: Day[] = [];

  ngOnInit() {
    // Inicialize os dados do calendário aqui
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const day = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      const completed = i % 3 === 0; // Simule dias alternados como concluídos
      this.days.push({ date: day, completed: completed });
    }
  }

  toggleDayCompletion(day: Day) {
    day.completed = !day.completed;
  }
}
