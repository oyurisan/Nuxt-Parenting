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
import listPlugin from '@fullcalendar/list'
import timegrid from '@fullcalendar/timegrid'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timegrid, listPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,today,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        },
        events: [
          {
            title: '給料日',
            start: '2021-11-25',
            allDay: true,
            constraint: '予定１',
            color: 'rgb(252, 115, 61)',
          },
          {
            title: '休日',
            start: '2021-11-27T00:00:00',
            end: '2021-11-28T23:59:59',
            memo: 'aaaaa',
            constraint: '予定１',
            color: 'rgb(252, 115, 61)',
          },
        ],
      },
    }
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Estonia&family=Righteous&display=swap');

$fc-width: 95%;

@mixin bar-style(
  $color: rgb(253, 232, 237),
  $background-color: #290202,
  $border: none
) {
  color: $color;
  background-color: $background-color;
  border: $border;
}

@mixin table-frame($border: 1px #976f6f solid) {
  border: $border;
}

.sample {
  color: rgb(252, 61, 86);
}

.calender {
  margin: 5% auto 5% auto;
}
.fc {
  color: rgb(43, 1, 5);
  width: $fc-width;
  margin: 5% auto 5% auto;
  background-color: #976f6f;
  padding: 3%;
  border-radius: 5%;

  .fc-header-toolbar {
    border-bottom: 5px #d6b2b2 dotted;
    flex-shrink: 0;
  }
  .fc-toolbar-title {
    font-size: 200%;
    padding: 5px 10px 0px;
    color: rgb(247, 225, 227);
    text-align: center;
    font-family: 'Righteous', cursive;
  }
  .fc-toolbar-chunk {
    margin: 1%;
  }
  .fc-button-group {
    flex-shrink: 0;
  }

  .fc-prev-button {
    @include bar-style();
    margin-right: 2.5%;
  }
  .fc-next-button {
    @include bar-style();
    margin-left: 2.5%;
  }
  .fc-today-button {
    @include bar-style();
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  .fc-dayGridMonth-button {
    @include bar-style();
  }
  .fc-timeGridWeek-button {
    @include bar-style();
  }
  .fc-timeGridDay-button {
    @include bar-style();
  }
  .fc-listMonth-button {
    @include bar-style();
  }
}

th {
  .fc-day {
    @include table-frame();
  }
  .fc-day-sat {
    background-color: #fff0d1;
  }
  .fc-day-sun {
    background-color: #fff0d1;
  }
  .fc-day-sat .fc-col-header-cell-cushion {
    color: blue;
  }
  .fc-day-sun .fc-col-header-cell-cushion {
    color: red;
  }
}

td {
  .fc-day {
    @include table-frame();
  }
  .fc-day-sat {
    background-color: #eaf4ff;
  }
  .fc-day-sun {
    background-color: #ffeaea;
  }
  .fc-day-sat .fc-daygrid-day-number {
    color: blue;
  }
  .fc-day-sun .fc-daygrid-day-number {
    color: red;
  }
  .fc-timegrid-slot {
    height: 2.5em !important;
    border-bottom: 0 !important;
  }
}

.fc-day {
  background-color: rgb(255, 255, 255);
}
.fc-daygrid {
  @include table-frame();
}
.fc-col-header-cell-cushion {
  color: black;
}
.fc-daygrid-day-number {
  color: black;
}
.fc-scroller {
  background-color: #faf1e1;
}
.fc-col-header-cell {
  background-color: #fff0d1;
}

</style>
