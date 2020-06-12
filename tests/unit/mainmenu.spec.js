/**
 * Главное меню с тремя кнопками
 *  1) Игра одному
 *  2) Игра с соперником
 *  3) Настройки
 *
 */
import { mount } from '@vue/test-utils'
import MainMenu from '@/components/MainMenu.vue'



var assert = require('chai').assert
describe('Main menu', () => {

  const wrapper = mount(MainMenu)
  it('Main menu has 3 buttons', () => {

    let buttons = wrapper.findAll('button')
    assert.equal(buttons.length, 3)
  })
  it('should name is \'noUser\' before Login', function () {
    assert.equal(wrapper.find('header').text(), 'Hello noUser')
  })

})