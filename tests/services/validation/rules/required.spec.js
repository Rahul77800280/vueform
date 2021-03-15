import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change, setInstances, check, uncheck } from 'test-helpers'

describe('Required Rule', () => {
  it('should be validate if value is filled for string', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '')
    expect(a.vm.invalid).toBe(true)

    change(a, ' ')
    expect(a.vm.invalid).toBe(true)
    
    change(a, '    ')
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'null')
    expect(a.vm.invalid).toBe(false)
    
    change(a, '.')
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdf')
    expect(a.vm.invalid).toBe(false)
    
    change(a, '1')
    expect(a.vm.invalid).toBe(false)
  })

  it('should be validate if value is filled for array', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'required',
          initial: 0,
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)

    setInstances(a, 0)

    LocalVue.nextTick(() => {
      a.vm.validate()
      expect(a.vm.invalid).toBe(true)

      setInstances(a, 1)
      LocalVue.nextTick(() => {
        a.vm.validate()
        expect(a.vm.invalid).toBe(false)

        done()
      })
    })
  })

  it('should be validate if value is filled for checkbox', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'required',
          trueValue: null,
          falseValue: false,
        }
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxElement' }).at(0)

    check(a)
    expect(a.vm.invalid).toBe(true)

    uncheck(a)
    expect(a.vm.invalid).toBe(false)
    
    done()
  })
})