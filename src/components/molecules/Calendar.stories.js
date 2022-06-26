import Calendar from "./Calendar.vue";
import { ref } from "vue";

export default {
  title: "Molecules/Calendar",
  component: Calendar,
};

const Template = (args) => ({
  components: { Calendar },
  setup() {
    const date = ref(new Date());

    return { ...args, date };
  },
  template: `
    <div class="w-full h-full bg-white">
      <Calendar v-model="date"  />
    </div>
  `,
});

export const CalendarComponent = Template.bind({});
