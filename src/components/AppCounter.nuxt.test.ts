import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it } from 'vitest'
import AppCounter from './AppCounter.vue'

it('AppCounterがマウントされる', async () => {
  const component = await mountSuspended(AppCounter)
  expect(component.text()).toMatchInlineSnapshot('"AppCount: 0 +  -"')
})
