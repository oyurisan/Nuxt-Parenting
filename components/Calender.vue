<template>
  <div class="calender">
    <FullCalendar :options="config" />
    <!-- <FullCalendar :options="calendarOptions" /> -->
    <!-- <FullCalendar :plugins="calendarOptions.plugins" :initial-view="calendarOptions.initialView" :header-toolbar="calendarOptions.headerToolbar" /> -->
  </div>
</template>

<script type="module">
// import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timegrid from '@fullcalendar/timegrid'
import { mapGetters } from 'vuex'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      unchiArray: [],

      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timegrid, listPlugin],
        initialView: 'dayGridMonth',

        headerToolbar: {
          left: 'prev,today,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        },
        // events: [
        // {
        //   title: '給料日',
        //   start: '2021-11-25',
        //   allDay: true,
        //   constraint: '予定１',
        //   color: 'rgb(252, 115, 61)',
        // },
        // {
        //   title: '休日',
        //   start: '2021-11-27T00:00:00',
        //   end: '2021-11-28T23:59:59',
        //   color: 'rgb(252, 115, 61)',
        // },
        //   {
        //     title: 'うんち',
        //     // start: this.$store.state.allData.unchi.unchidate + ":00",
        //     start: "2021-11-20T11:09" + ":00",
        //     color: 'rgb(252, 115, 61)',
        //   },
        // ],
        events: this.events,
      },
    }
  },

  computed: {
    config() {
      return {
        ...this.configOptions,
      }
    },
    configOptions() {
      // うんちDB情報
      // console.log(this.getAllData.unchi);
      // console.log(this.$store.state.allData.unchi);
      // const unchiArray = this.getAllData.unchi;

      const unchiAllData = {
        title: '最新うんぴ',
        color: 'rgb(252, 115, 61)',
        start: '',
      }
      const unchiAllArray = [];
      const unchiDates = []
      const unchiDates2 = []
      const i = [
        { unchidate: '2021-11-20T11:09', n: 'nnn' },
        { unchidate: '2021-11-26T11:09' },
        { unchidate: '2021-11-12T11:09' },
      ]
      const unchiArray = this.getAllData.unchi
      console.log(i)
      console.log(unchiArray)

      for (let a = 0; a < i.length; a++) {
        console.log(i[a])
        // console.log( unchiArray[a].unchidate );
        // unchiDates.push ( unchiArray[a].unchidate + ":00" );
        unchiDates.push(i[a].unchidate + ':00')
        // console.log( unchiDates );
      }
      console.log(unchiDates)

      for (let b = 0; b < unchiDates.length; b++) {
        console.log(unchiDates[b])
        const unchiUnchi = unchiDates[b]
        unchiAllData.start = unchiUnchi
        console.log(unchiAllData)

        unchiAllArray.push (unchiAllData)
        console.log(unchiAllArray)
      }
      

      // console.log(unchiAllArray);

      // for (let c = 0; c < unchiArray.length; c++) {
      //   console.log( unchiArray[c]);
      //   // console.log( unchiArray[a].unchidate );
      //   // unchiDates.push ( unchiArray[a].unchidate + ":00" );
      //   unchiDates2.push ( unchiArray[c].unchidate + ":00" );
      //   // console.log( unchiDates );
      // }
      // console.log( unchiDates2 );

      // for (let d = 0; d < unchiDates2.length; d++ ) {
      //   console.log(unchiDates2[d]);
      //   unchiAllData.start = unchiDates2[d]
      // console.log(unchiAllData);
      // }

      return {
        firstDay: 1,
        editable: false,
        navLinks: false,
        selectable: false,
        // events: [
          // {
          //   title: this.getAllData.unchi,
          //   // start: this.$store.state.allData.unchi.unchidate + ":00",
          //   start: '2021-11-20T11:09' + ':00',
          //   color: 'rgb(252, 115, 61)',
          // },
          // {
          //   title: 'うんち',
          //   // start: this.$store.state.allData.unchi.unchidate + ":00",
          //   start: unchiDates[0],
          //   color: 'rgb(252, 115, 61)',
          // },
          // {
          //   title: 'うんちっち',
          //   // start: this.$store.state.allData.unchi.unchidate + ":00",
          //   start: unchiDates2[2],
          //   color: 'rgb(252, 115, 61)',
          // },
        // ],
        events: unchiAllArray,
        plugins: [dayGridPlugin, interactionPlugin, timegrid, listPlugin],
        initialView: 'dayGridMonth',

        headerToolbar: {
          left: 'prev,today,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        },
      }
    },
    ...mapGetters(['getAllData']),

    hoge: () => {
      // this.calenderOptions.events = this.getAllData.unchi.concat()
      // console.log(this.calenderOptions.events);
      return this.calenderOptions.events.concat(this.getAllData.unchi)
    },
  },

  created() {
    this.$store.dispatch('fetchAllData')
  },

  methods: {},
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
