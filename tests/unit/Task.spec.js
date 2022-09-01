import { mount, shallowMount } from '@vue/test-utils';
import AddTask from '@/components/AddTask.vue';
import Task from '@/components/Task.vue';

function getTaskPropsData() {
  return {
    propsData: {
      task: {
        name: "Task 1",
        completed: false
      }
    }
  }
}


describe('Task Component unit tests: ', () => {

  test('is a Vue instance', () => {
    const wrapper = mount(Task, getTaskPropsData());

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders the task name', () => {
    const taskName = "Task 1";

    const wrapper = mount(Task, getTaskPropsData());

    expect(wrapper.html()).toContain(taskName);
  });




  test('test onSubmit ', async () => {

    const wrapper = shallowMount(AddTask);

    const onSubmit = jest.fn();

    await wrapper.setMethods({
      onSubmit: onSubmit
    });
    wrapper.setData({ task: { name: '121', completed: true } })

    await wrapper.find('.btn-submit').trigger('click');

    expect(onSubmit).toHaveBeenCalled();

    expect(wrapper.find('.error').text()).toEqual("Length")

    wrapper.setData({ task: { name: '1212143', completed: true } })

    await wrapper.find('.btn-submit').trigger('click');

    expect(onSubmit).toHaveBeenCalled();

    expect(wrapper.find('.error').text()).toEqual("Done")

  });

  test('calls deleteTask when the delete button is clicked', () => {
    const wrapper = mount(Task, getTaskPropsData());

    const deleteTask = jest.fn();

    wrapper.setMethods({
      deleteTask: deleteTask
    });

    wrapper.find('.btn-del').trigger('click');

    expect(deleteTask).toHaveBeenCalled();

  });

  test('calls markComplete function when the checkbox is clicked', () => {
    const wrapper = mount(Task, getTaskPropsData());

    const markComplete = jest.fn();

    wrapper.setMethods({
      markComplete: markComplete
    });

    wrapper.find('input.cb').trigger('click');

    expect(markComplete).toHaveBeenCalled();
  });

});