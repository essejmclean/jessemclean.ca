const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
      transform: `translateY(32px)`
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateY(0)`
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateY(32px)`
    }
  };
};

const getTransitionStyle = ({
    timeout,
    status
  }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle