import { shallowMount,mount} from '@vue/test-utils'
import meetUpMainEvents from '@/components/MeetUpMainPage.vue';
import DisplayEvent from '@/components/displayEvent.vue';
import {fakeArrayData} from "./fakeData";

describe('MeetUpMainPage.vue', () => {

  it("renders all the events", () => {
    const wrapper = mount(meetUpMainEvents);
    const singleEvent = wrapper.findComponent(DisplayEvent);
    expect(singleEvent).toBeTruthy;
  });

  it("renders all the events", () => {
    const wrapper = mount(meetUpMainEvents);
    const singleEvent = wrapper.findAll('.card');
    expect(singleEvent).toBeTruthy;
  });

  it('renders the title of the page when passed', () => {
    const wrapper = shallowMount(meetUpMainEvents);

    const actual =  wrapper.find('h2').exists();
    expect(actual).toBeTruthy;

    const actualII =  wrapper.find('h2').text();
    expect(actualII).toBe('MEET-UP Events');
  });

  let wrapper;
    beforeEach(() => {
      wrapper = mount(meetUpMainEvents,{
        propsData:{
          meetUpEvents: fakeArrayData
          }
        });
    });

  it("renders all the events",() => {
    let eventsLength = wrapper.findAll('ul > li.card').length;
    expect(eventsLength).toBe(fakeArrayData.length)
  });

  it('should search "c" and display "can" and "to much" ', async () => {
      const input = wrapper.find('input');
      await input.setValue('c');

      const searchResult = wrapper.findAll('ul > li.card > .container >.event-name');
      expect(searchResult.length).toBe(2);

      const hasCan = searchResult.some(element => element.text()=='can');
      expect(hasCan).toBe(true);

      const hasToMuch = searchResult.some((el) => el.text()=='too much');
      expect(hasToMuch).toBe(true);
  });

});