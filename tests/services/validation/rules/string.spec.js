import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change, check, uncheck } from 'test-helpers'

describe('String Rule', () => {
  it('should validate string', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'string',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, 'asdf')
    expect(a.vm.invalid).toBe(false)

    change(a, '1234')
    expect(a.vm.invalid).toBe(false)

    change(a, ' ')
    expect(a.vm.invalid).toBe(false)

    change(a, '...')
    expect(a.vm.invalid).toBe(false)
  })

  it('should invalidate number', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'string',
          trueValue: 1,
          falseValue: 0,
        }
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxElement' }).at(0)

    check(a)
    expect(a.vm.invalid).toBe(true)

    uncheck(a)
    expect(a.vm.invalid).toBe(true)
  })
})