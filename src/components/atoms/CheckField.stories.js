import CheckField from "./CheckField.vue";
import { ref } from "vue";

export default {
  title: "Atoms/CheckField",
  component: CheckField,

  argTypes: {
    type: {
      control: { type: "select" },
      options: ["checkbox", "radio"],
    },
  },
};

export const CheckBoxFieldComponent = (args) => ({
  components: { CheckField },
  setup() {
    const testValues = ref([]);
    function setValue(value) {
      testValues.value = value;
    }
    return { args, testValues, setValue };
  },
  template: `
    <div class="space-y-1">
      <CheckField v-bind="args" :checked="testValues" @changed="setValue" value="1" label="Label Text 1"/>
      <CheckField v-bind="args" :checked="testValues" @changed="setValue" value="2" label="Label Text 2"/>
      <CheckField v-bind="args" :checked="testValues" @changed="setValue" value="3" label="Label Text 3"/>
    </div>
  `,
});

export const RadioFieldComponent = (args) => ({
  components: { CheckField },
  setup() {
    const testValues = ref("");
    function setValue(value) {
      testValues.value = value;
    }
    return { args, testValues, setValue };
  },
  template: `
    <div class="space-y-1">
      <CheckField v-bind="args" name="test_radio" type="radio" value="1" @changed="setValue" :checked="testValues" label="Label Text 1"/>
      <CheckField v-bind="args" name="test_radio" type="radio" value="2" @changed="setValue" :checked="testValues" label="Label Text 2"/>
      <CheckField v-bind="args" name="test_radio" type="radio" value="3" @changed="setValue" :checked="testValues" label="Label Text 3"/>
    </div>
  `,
});
