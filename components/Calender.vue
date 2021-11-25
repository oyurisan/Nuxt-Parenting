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
  <div>
    <div>aaa</div>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script type="module">
// import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
      },
    }
  },
}
</script>
