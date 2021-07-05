import { computed, toRefs } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'CheckboxgroupSlotCheckbox',
  props: {
    item: {
      required: true
    },
    value: {
      required: true
    },
  },
  setup(props, context)
  {
    const { value } = toRefs(props)

    const {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['input', 'input_enabled', computed(() => !isDisabled.value)],
        ['input', 'input_disabled', computed(() => isDisabled.value)],
      ]
    })

    // ============== COMPUTED ==============

    const isDisabled = computed(() => {
      return el$.value.disabledItems.map(i=>String(i)).indexOf(String(value.value)) !== -1 || el$.value.isDisabled
    })

    return {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
      isDisabled,
    }
  },
}