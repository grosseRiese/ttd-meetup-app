import {shallowMount} from '@vue/test-utils'
import myEventsItems from '@/components/MyEventsItems.vue';
import {fakeData} from "./fakeData";

describe('MyEventsItems.vue', () => {

  it('renders the status is accepted', () => {
    const wrapper = shallowMount(myEventsItems, {
        props: { 
          mpEvent:fakeData() 
        }
    })
      const actual =  wrapper.find('.accepted').text();
      expect(actual).toBe('Accepted');
  });

  it('renders the name when passed', () => {
    const wrapper = shallowMount(myEventsItems, {
      props: { 
        mpEvent:fakeData() 
      }
    })
    const expected = "JS";
    const actual =  wrapper.find('.event-name').text();
    expect(actual).toMatch(expected);
  });

  it('renders the date when passed', () => {
    const wrapper = shallowMount(myEventsItems, {
        props: { 
          mpEvent:fakeData() 
        }
    })
      const expected = "21 Mar";
      const actual =  wrapper.find('.progress-text').text();
      expect(actual).toMatch(expected);
  });

  it('renders the from when passed', () => {
      const wrapper = shallowMount(myEventsItems, {
          props: { 
            mpEvent:fakeData() 
          }
      })
        const expected = "19:00";
        const actual =  wrapper.find('.p-from').text();
        expect(actual).toMatch(expected);
  });

  it('renders the to when passed', () => {
      const wrapper = shallowMount(myEventsItems, {
          props: { 
            mpEvent:fakeData() 
          }
      })
          const expected = "21:00";
          const actual =  wrapper.find('.p-to').text();
        expect(actual).toMatch(expected);
  });

});