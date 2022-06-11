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
  template: `<SelectField v-bind="args" :options="people" :model-value="model" property="name" @update:modelValue="(value) => model = value"/>`,
});
