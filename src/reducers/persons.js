export default function persons(
  state = [
    { name: 'vijay', age: 22 },
    { name: 'harish', age: 28 },
    { name: 'parmesh', age: 22 },
  ],
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
