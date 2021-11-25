<!-- <template>
    <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" />
</template>

<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'

    export default {
        components: {
            FullCalendar // make the <FullCalendar> tag available
        },
        data() {
            return {
                calendarPlugins: [ dayGridPlugin ]
            }
        }
    }
</script> -->


<template>
  <div class="calender">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script type="module">
// import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import timegrid from '@fullcalendar/timegrid'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timegrid, listPlugin ],
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        },
        events: [
          {
            title: '給料日',
            start: '2021-11-25',
            allDay : true,
            constraint: '予定１',
            color: 'rgb(252, 115, 61)',
          },
          {
            title: '休日',
            start: '2021-11-27T00:00:00',
            end: '2021-11-28T23:59:59',
            memo:'aaaaa',
            constraint: '予定１',
            color: 'rgb(252, 115, 61)',
          },
        ]
      },
    }
  },
}
</script>


<style lang="scss">
.sample {
  color: rgb(252, 61, 86);
}

.calender {
  width: 70%;
  margin: 5% auto 5% auto;
}

.fc {
color: rgb(128, 0, 11);
}

.fc-day {
  background-color: rgb(240, 214, 206);
}
.fc-daygrid {
  border: 2px #ff0000 solid;
}
th.fc-day {
  border: 2px #ff0000 solid;
}
td.fc-day {
  border: 2px #ff0000 solid;
}


th.fc-day-sat {
  background-color: #eaf4ff;
}
th.fc-day-sun {
  background-color: #ffeaea;
}
th.fc-day-sat .fc-col-header-cell-cushion {
  color: blue;
}
th.fc-day-sun .fc-col-header-cell-cushion{
  color: red;
}
td.fc-day-sat {
  background-color: #eaf4ff;
}
td.fc-day-sun {
  background-color: #ffeaea;
}
.fc-col-header-cell-cushion {
  color: black;
}
.fc-daygrid-day-number {
  color: black;
}
td.fc-day-sat .fc-daygrid-day-number {
  color: blue;
}
td.fc-day-sun .fc-daygrid-day-number {
  color: red;
}
td.fc-timegrid-slot {
  height: 2.5em !important;
  border-bottom: 0 !important;
}
// 各日のヘッダー背景色 
// .fc-daygrid-day-top { background-color: #f4ffff; } 

// 本日のヘッダー背景色 
// .fc-day-today .fc-daygrid-day-top { background-color: #fddcab; }

// 各日のイベント背景色 
// .fc-daygrid-day-frame { background-color: #f3f3f3; } 

// ツールバー内の日付を他の h2 より小さくしたかった 
.fc .fc-toolbar-title { font-size: 32px; padding: 5px 10px 0px; }
</style>
