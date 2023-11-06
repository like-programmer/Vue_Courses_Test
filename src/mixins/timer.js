export default {
    data() {
        return {
            startDate: null,
            finishDate: null,
        }
    },
    methods: {
        startTimer() {
            this.startDate = new Date();
        },
        stopTimer() {
            this.finishDate = new Date();
        }
    },
};
