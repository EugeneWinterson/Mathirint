/**
 * Главное меню с тремя кнопками
 *  1) Игра одному
 *  2) Игра с соперником
 *  3) Настройки
 *
 */
import { mount } from '@vue/test-utils'
import MainMenu from '@/components/MainMenu.vue'

const wrapper = mount(MainMenu)
var assert = require('chai').assert

describe('Main menu', () => {
  it('Main menu has 3 buttons', () => {
    let buttons = wrapper.findAll('button')
    assert.equal(buttons.length, 3)
  })

  it('Game Name = MATHIRINT', () => {
    let gameName = wrapper.find('#gameName').text()
    assert.equal(gameName, 'MATHIRINT')
  })
})