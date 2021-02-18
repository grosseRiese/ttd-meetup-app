import { shallowMount,mount,createLocalVue} from '@vue/test-utils'
import DisplayEvent from '@/components/displayEvent.vue';
import {fakeData} from "./fakeData";
import Vue from 'vue';

describe('displayEvent.vue', () => {

  it('renders the suite is exists when passed', () => {
    const wrapper = shallowMount(DisplayEvent, {
        props: { 
          displaySingleEvent:fakeData() 
        }
    })
      const actual =  wrapper.find('.suite').exists();
      expect(actual).toBeTruthy;
  });

  it('renders the name when passed', () => {
    const wrapper = shallowMount(DisplayEvent, {
      props: { 
        displaySingleEvent:fakeData() 
      }
    })
    const expected = "JS";
    const actual =  wrapper.find('.event-name').text();
    expect(actual).toMatch(expected);
  });

  it('renders the date when passed', () => {
    const wrapper = shallowMount(DisplayEvent, {
        props: { 
          displaySingleEvent:fakeData() 
        }
    })
      const expected = "21 Mar";
      const actual =  wrapper.find('.event-date').text();
      expect(actual).toMatch(expected);
  });

  it('renders the from when passed', () => {
      const wrapper = shallowMount(DisplayEvent, {
          props: { 
            displaySingleEvent:fakeData() 
          }
      })
        const expected = "19:00";
        const actual =  wrapper.find('.event-from').text();
        expect(actual).toMatch(expected);
  });

  it('renders the to when passed', () => {
      const wrapper = shallowMount(DisplayEvent, {
          props: { 
            displaySingleEvent:fakeData() 
          }
      })
          const expected = "21:00";
          const actual =  wrapper.find('.event-to').text();
        expect(actual).toMatch(expected);
  });
  
  it("should route when clicked and the router should be called", async () => {
    const mockRoute = {
      path: "/eventInfo/1",
    };
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = mount(DisplayEvent, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
      props: { 
        displaySingleEvent:fakeData() 
      }
    });
    await wrapper.find("span.tooltiptext").trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/eventInfo/1");
    expect(mockRoute.path).toBe("/eventInfo/1");
  });

  it('should show the btn-text',  () => {
    const wrapper = shallowMount(DisplayEvent, {
        props: { 
          displaySingleEvent:fakeData() 
        }
    });
    const expected = 'Request to join';
    const actual = wrapper.vm.btnText;
    expect(actual).toBe(expected);
  });

});
