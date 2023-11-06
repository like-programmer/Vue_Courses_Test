export default {
  methods: {
    addObserver({
      target = document.body,
      threshold = 0,
      callback = () => {},
    }) {
      const newObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            callback(entry, newObserver);
          });
        },
        { threshold }
      );

      newObserver.observe(target);
    },
  },
};
