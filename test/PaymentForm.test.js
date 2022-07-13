
import { mount } from "@vue/test-utils"
import {describe, it, expect} from "vitest"
import PaymentForm from '../src/components/PaymentForm.vue'

describe("mount component", () => {
    it('should render', () => {
        const wrapper = mount(PaymentForm)

        expect(wrapper.find('div').exists()).toBeTruthy();
    })
    it('should render credit card container', async () => {
        const wrapper = mount(PaymentForm)

        await wrapper.find('select[id="payment"]').setValue('cartaoDeCredito')
        expect(wrapper.find('div[class="credit-card"]')).toBeTruthy()
    })
})