import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    // const wrapper = mount(TheWelcome, { props: { msg: 'Hello OLS' } })
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain('Vue + Vite');
  });
});
