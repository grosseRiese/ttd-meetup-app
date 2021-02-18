import {mount} from '@vue/test-utils'
import myEvents from '@/components/MyEvents.vue';
import myEventsItems from '@/components/MyEventsItems.vue';

describe('MyEvents.vue', () => {

  it("renders all Myevents", () => {
      const wrapper = mount(myEvents);
      const myEvent = wrapper.findComponent(myEventsItems);
      expect(myEvent).toBeTruthy;
  });

  it("renders all the events", () => {
    const wrapper = mount(myEvents);
    const myEvent = wrapper.findAll('.section-event-Info');
    expect(myEvent).toBeTruthy;
  });

});