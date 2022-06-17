import SelectField from "./SelectField.vue";
import { ref } from "vue";

export default {
  title: "Atoms/SelectField",
  component: SelectField,

  argsTypes: {},
};

export const SimpleSelectField = (args) => ({
  components: { SelectField },
  setup() {
    const people = ref([
      { name: "Wade Cooper" },
      { name: "Arlene Mccoy" },
      { name: "Devon Webb" },
      { name: "Tom Cook" },
      { name: "Tanya Fox" },
      { name: "Hellen Schmidt" },
      { name: "Hellen Scholes" },
      { name: "Steven Schmidt" },
    ]);
    const model = ref(people.value[0]);
    return { args, people, model };
  },
  template: `<SelectField class="w-70" v-bind="args" :options="people" display-property="name" value-property="name" v-model="model" />`,
});

export const SearchSelectField = (args) => ({
  components: { SelectField },
  setup() {
    const people = ref([
      { name: "Wade Cooper" },
      { name: "Arlene Mccoy" },
      { name: "Devon Webb" },
      { name: "Tom Cook" },
      { name: "Tanya Fox" },
      { name: "Hellen Schmidt" },
      { name: "Hellen Scholes" },
      { name: "Steven Schmidt" },
    ]);
    const model = ref(people.value[0]);
    return { args, people, model };
  },
  template: `<SelectField class="w-70" :search="true" v-bind="args" :options="people" display-property="name" value-property="name" v-model="model"/>`,
});
